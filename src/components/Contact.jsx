import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setErrorMsg("");

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setLoading(false);
      setErrorMsg("Email service is not configured properly.");
      return;
    }

    emailjs
      .send(serviceId, templateId, form, publicKey)
      .then(() => {
        setLoading(false);
        setSent(true);
        setForm({ name: "", email: "", message: "" });

        setTimeout(() => setSent(false), 5000);
      })
      .catch((error) => {
        setLoading(false);
        console.error("EmailJS Error:", error);
        setErrorMsg(
          "Message failed to send. Please click 'Connect with Me' to email directly."
        );
      });
  };

  const handleDirectMail = () => {
    window.location.href =
      "mailto:abhayyadav96312@gmail.com?subject=Contacting You From Portfolio";
  };

  return (
    <div className="max-w-2xl w-260 mx-auto">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none"
              required
            />
          </label>

          {/* Buttons Row */}
          <div className="flex gap-4 items-center">
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : sent ? "Sent ✅" : "Send"}
            </button>

            {/* Connect Button with Animated Hand */}
            <motion.button
              type="button"
              onClick={handleDirectMail}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary py-3 px-8 rounded-xl text-white font-bold shadow-md flex items-center gap-2"
            >
              Connect with Me
              <motion.span
                animate={{ rotate: [0, 20, -10, 20, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                style={{ display: "inline-block" }}
              >
                👋
              </motion.span>
            </motion.button>
          </div>

          {/* Error Notification */}
          {errorMsg && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 mt-4 font-medium"
            >
              {errorMsg}
            </motion.p>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
