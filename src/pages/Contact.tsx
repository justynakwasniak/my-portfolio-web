import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type FieldKey = "user_name" | "user_email" | "message";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<"idle" | "success" | "error">("idle");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldKey, string>>>({});

  const clearFieldError = (key: FieldKey) => {
    setFieldErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const validateForm = (formEl: HTMLFormElement): boolean => {
    const data = new FormData(formEl);
    const name = (data.get("user_name") as string)?.trim() ?? "";
    const email = (data.get("user_email") as string)?.trim() ?? "";
    const message = (data.get("message") as string)?.trim() ?? "";

    const errors: Partial<Record<FieldKey, string>> = {};

    if (!name) errors.user_name = "Please enter your name.";
    if (!email) errors.user_email = "Please enter your email.";
    else if (!emailPattern.test(email))
      errors.user_email = "Please enter a valid email address.";
    if (!message) errors.message = "Please enter your message.";

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      setSendStatus("error");
      return;
    }

    setSendStatus("idle");

    if (!validateForm(form.current)) {
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        "service_8ks0mn6",
        "template_34rzkff",
        form.current,
        "-IUGxxQ6NYAB_Ezme"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.status, result.text);
          setSendStatus("success");
          setFieldErrors({});
          form.current?.reset();
          setIsSending(false);
        },
        (error) => {
          console.error("FAILED...", error);
          setSendStatus("error");
          setIsSending(false);
        }
      );
  };

  return (
    <div className="container" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      <div className="row">
        <div className="col-md-6 mt-5">
          <h1 className="text-left section-title">
            I look forward to hearing from you!
          </h1>
          <p className="text-left contact-intro">
            I’d love to hear from you! Whether you have questions about my work,
            want to discuss a project, or just want to connect, feel free to
            drop me a message. I’m always open to new opportunities and
            collaborations.
          </p>
          <div className="contact-item">
            <strong>E-mail:</strong>
            <a href="mailto:jkwasniak193@gmail.com" className="email-link">
              <MdEmail className="contact-icon" />
              jkwasniak193@gmail.com
            </a>
          </div>
          <div className="mt-3">
            <strong>On the Internet:</strong>
          </div>
          <div className="d-flex flex-column gap-2 mt-2">
            <a 
              href="https://github.com/justynakwasniak" 
              className="email-link contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="contact-icon" />
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/justynakwasniak193/"
              className="email-link contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="contact-icon" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="col-md-6 mt-5">
          <form ref={form} onSubmit={sendEmail} className="contact-form" noValidate>
            <div className="mb-4">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className={`form-control${fieldErrors.user_name ? " is-invalid" : ""}`}
                id="name"
                name="user_name"
                placeholder="Your Name"
                autoComplete="name"
                aria-invalid={fieldErrors.user_name ? true : undefined}
                aria-describedby={fieldErrors.user_name ? "name-error" : undefined}
                onInput={() => clearFieldError("user_name")}
              />
              {fieldErrors.user_name && (
                <div id="name-error" className="invalid-feedback d-block" role="alert">
                  {fieldErrors.user_name}
                </div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className={`form-control${fieldErrors.user_email ? " is-invalid" : ""}`}
                id="email"
                name="user_email"
                placeholder="Your Email"
                autoComplete="email"
                aria-invalid={fieldErrors.user_email ? true : undefined}
                aria-describedby={fieldErrors.user_email ? "email-error" : undefined}
                onInput={() => clearFieldError("user_email")}
              />
              {fieldErrors.user_email && (
                <div id="email-error" className="invalid-feedback d-block" role="alert">
                  {fieldErrors.user_email}
                </div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className={`form-control${fieldErrors.message ? " is-invalid" : ""}`}
                id="message"
                name="message"
                rows={4}
                placeholder="Your Message"
                aria-invalid={fieldErrors.message ? true : undefined}
                aria-describedby={fieldErrors.message ? "message-error" : undefined}
                onInput={() => clearFieldError("message")}
              ></textarea>
              {fieldErrors.message && (
                <div id="message-error" className="invalid-feedback d-block" role="alert">
                  {fieldErrors.message}
                </div>
              )}
            </div>
            <button 
              type="submit" 
              className="btn-custom mt-1"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send"}
            </button>
            {sendStatus === "success" && (
              <p className="text-success mt-3">Message sent successfully!</p>
            )}
            {sendStatus === "error" && (
              <p className="text-danger mt-3">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
