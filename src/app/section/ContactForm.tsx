"use client";
import { useState, FormEvent } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form flex flex-col justify-center items-center w-full p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-xl p-2 md:p-4 lg:p-8 text-white bg-gray-600 rounded-2xl gap-[clamp(0.5rem,2vw,1rem)]"
      >
        <label className="text-[clamp(0.875rem,3vw,1rem)]">Your Name</label>
        <input
          className="input-field border-1 w-full rounded-xl bg-gray-700 border-gray-500 p-[clamp(0.75rem,3vw,1rem)] placeholder:text-gray-400"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />

        <label className="text-[clamp(0.875rem,3vw,1rem)]">Your Email</label>
        <input
          className="input-field border-1 w-full rounded-xl bg-gray-700 border-gray-500 p-[clamp(0.75rem,3vw,1rem)] placeholder:text-gray-400"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />

        <label className="text-[clamp(0.875rem,3vw,1rem)]">Your Message</label>
        <textarea
          className="input-field border-1 w-full rounded-xl bg-gray-700 border-gray-500 p-[clamp(0.75rem,3vw,1rem)] placeholder:text-gray-400"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="What's up?"
          rows={5}
          required
        />

        <button
          type="submit"
          className="form-button rounded-2xl mt-4 border-2 border-white/50 hover:bg-white/10 transition-colors p-[clamp(0.75rem,3vw,1.25rem)] text-[clamp(1rem,4vw,1.25rem)]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
