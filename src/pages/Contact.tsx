import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8ks0mn6", // Podaj swoje Service ID
        "template_34rzkff", // Podaj swoje Template ID
        form.current,
        "-IUGxxQ6NYAB_Ezme" // Podaj swój User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5">
          <h1 className="text-center">
            <em>I look forward to hearing from you!</em>
          </h1>
          <p className="text-center mb-5">
            I’d love to hear from you! Whether you have questions about my work,
            want to discuss a project, or just want to connect, feel free to
            drop me a message. I’m always open to new opportunities and
            collaborations.
          </p>
          <p>
            {" "}
            <strong> E-mail:&nbsp;&nbsp;</strong>
            <a href="mailto:jkwasniak193@gmail.com" className="email-link">
              jkwasniak193@gmail.com
            </a>
          </p>
          <p>
            <strong>On the Internet:</strong>
          </p>
          <a href="https://github.com/justynakwasniak" className="email-link">
            Github
          </a>{" "}
          <br />
          <a
            href="https://www.linkedin.com/in/justyna-kwa%C5%9Bniak193/"
            className="email-link"
          >
            LinkedIn
          </a>
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
            <button type="submit" className="btn-custom">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
