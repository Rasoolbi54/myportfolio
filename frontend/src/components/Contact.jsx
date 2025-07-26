import React, { useState } from "react";
import axios from "axios";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(" https://backend-portfolio-1-etqm.onrender.com/api/contact", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error sending message:", err);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <section className="bg-black text-white min-h-screen py-20 px-6 md:px-24 font-sans" id="contact">
      <h2 className="text-4xl font-bold mb-12 border-b pb-4 border-white w-fit">Get In Touch</h2>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Socials & Resume */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-lg text-gray-300">
            Feel free to connect with me through the platforms below or send me a message through the form.
          </p>

          <div className="space-y-4 text-sm">
            <a href="mailto:smbrasoolbi138@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Mail size={18} />
              <span>Email: smbrasoolbi138@gmail.com</span>
            </a>

            <a href="https://github.com/Rasoolbi54/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github size={18} />
              <span>GitHub Profile</span>
            </a>

            <a href="https://www.linkedin.com/in/shaik-rasool-bi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Linkedin size={18} />
              <span>LinkedIn Profile</span>
            </a>
          </div>

          {/* Download Resume Button */}
          <a
            href="/Rasoolbi_fullstack.pdf"
            download="Rasoolbi_Shaik_Resume.pdf"
            className="inline-block mt-6 text-sm rounded-full bg-white text-black px-10 py-3 hover:bg-gray-200 transition"
          >
            Download Resume ↓
          </a>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2">
          <div className="bg-white/10 backdrop-blur-md backdrop-saturate-150 text-white rounded-2xl p-8 shadow-xl border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-2 text-sm placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-2 text-sm placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-2 text-sm placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
