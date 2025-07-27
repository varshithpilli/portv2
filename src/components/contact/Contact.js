import { useRef, useState } from "react";
import classes from "./Contact.module.css";

function Contact() {
  const formRef = useRef();
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const checkForm = () => {
    const form = formRef.current;
    const isFilled =
      form["name"].value.trim() &&
      form["email"].value.trim() &&
      form["message"].value.trim();

    form["submit"].disabled = !isFilled;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setResult("Sending...");
    setError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "4f119c75-5ae7-4d2d-a934-b862617da6d7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        form.reset();
      } else {
        setResult(data.message);
        setError(true);
      }
    } catch (err) {
      setResult("Something went wrong. Try again later.");
      setError(true);
    }

    setSubmitting(false);
  };

  return (
    <section id="contact" className={classes.contact}>
      <h2 className={classes.heading}>Send a message..</h2>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        onChange={checkForm}
        className={classes.form}
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          required
          className={classes.input}
          />

          <label>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email"
          required
          className={classes.input}
          />

          <label>Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Your message"
          rows="6"
          required
          className={classes.area}
        ></textarea>

        <button
          type="submit"
          name="submit"
          className={classes.send}
          disabled={submitting}
        >
          Send
        </button>

        <p className={`${classes.status} ${error ? classes.error : classes.succ}`}>
          {result}
        </p>
      </form>
    </section>
  );
}

export default Contact;
