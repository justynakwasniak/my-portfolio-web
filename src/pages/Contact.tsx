import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      setSendStatus("error");
      alert("Form not found!");
      return;
    }

    setIsSending(true);
    setSendStatus("idle");

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
          alert("Message sent successfully!");
          form.current?.reset();
          setIsSending(false);
        },
        (error) => {
          console.error("FAILED...", error);
          setSendStatus("error");
          alert(`Failed to send the message. Error: ${error.text || "Unknown error"}`);
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
          <p className="text-center mb-5">
            I’d love to hear from you! Whether you have questions about my work,
            want to discuss a project, or just want to connect, feel free to
            drop me a message. I’m always open to new opportunities and
            collaborations.
          </p>
          <div className="contact-item">
            <strong>E-mail:&nbsp;&nbsp;</strong>
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
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="user_name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows={4}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="btn-custom"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send"}
            </button>
            {sendStatus === "success" && (
              <p className="text-success mt-2">Message sent successfully!</p>
            )}
            {sendStatus === "error" && (
              <p className="text-danger mt-2">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
