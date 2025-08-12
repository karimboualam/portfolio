import React, { useState } from "react";
import "./Contact.scss";
import { contacts, socialIcons, SosLinks } from "../../Data/Data";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "", email: "", message: "",
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.message) {
      setStatus("ko"); return;
    }
    try {
      setSending(true); setStatus(null);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("ok");
        setForm({ firstName: "", lastName: "", phone: "", email: "", message: "" });
      } else { setStatus("ko"); }
    } catch (err) {
      console.error(err); setStatus("ko");
    } finally { setSending(false); }
  };

  return (
    <div className="container" id="contact">
      <motion.div initial={{ opacity: 0 }} whileInView={{ y: [-50, 0], opacity: 1 }} className="title">
        <span>get in touch</span><h1>Contact Me</h1>
      </motion.div>

      <div className="contact_form">
        <motion.div initial={{ x: 0, opacity: 0 }} whileInView={{ x: [-150, 0], opacity: 1 }} transition={{ duration: 1 }} className="contact_left_container">
          <h3>Just Say Hi</h3>
          <p className="contact_text">Envie de discuter ? …</p>
          {contacts.map((c) => (
            <div className="contact_left" key={c.id}>
              <div className="icon">{c.icon}</div><p>{c.infoText}</p>
            </div>
          ))}
          <div className="social_icons">
            {socialIcons.map((socialIcon, i) => (
              <div key={i}><a href={SosLinks[i]} style={{ textDecoration:"none", color:"inherit" }}>{socialIcon}</a></div>
            ))}
          </div>
        </motion.div>

        <motion.form onSubmit={handleSubmit} initial={{ x: 0, opacity: 0 }} whileInView={{ x: [150, 0], opacity: 1 }} transition={{ duration: 1 }} className="contact_right">
          <h3>Get In Touch</h3>

          <div className="row">
            <input name="firstName" value={form.firstName} onChange={handleChange} type="text" placeholder="First Name *" required />
            <input name="lastName"  value={form.lastName}  onChange={handleChange} type="text" placeholder="Last name" />
          </div>
          <div className="row">
            <input name="phone" value={form.phone} onChange={handleChange} type="text" placeholder="Phone" />
            <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email *" required />
          </div>
          <div className="row">
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message *" required />
          </div>

          <motion.button type="submit" whileHover={{ scale: sending ? 1 : 1.06 }} transition={{ duration: 0.25 }} className="btn" disabled={sending}>
            {sending ? "Sending..." : "Send"}
          </motion.button>

          {status === "ok" && <p style={{ marginTop: 8, color: "green" }}>Message envoyé, merci !</p>}
          {status === "ko" && <p style={{ marginTop: 8, color: "tomato" }}>Échec de l’envoi. Vérifie les champs / réessaie.</p>}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
