import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

function Contact() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        form,
      );

      toast.success("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setLoading(false);
    } catch (error) {
      toast.error("Failed to send message!");
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-aos="fade-up"
      className="bg-slate-900 text-white py-20"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-purple-500">
          Contact Me
        </h2>

        <p className="text-center text-gray-400 mt-3">
          Feel free to contact me for internships, jobs, or project
          collaborations.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 rounded-2xl p-8 mt-12 space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-slate-700 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-slate-700 outline-none"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-slate-700 outline-none"
            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Write your message..."
            value={form.message}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-slate-700 outline-none"
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-lg transition ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
