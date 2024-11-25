import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.scss";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Remplacez par votre Service ID EmailJS
        "YOUR_TEMPLATE_ID", // Remplacez par votre Template ID
        form,
        "YOUR_USER_ID" // Remplacez par votre User ID EmailJS
      )
      .then(
        () => {
          alert("Message envoyé !");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          alert("Une erreur s'est produite, veuillez réessayer.");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;
