import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const formRef = useRef();

    const PUBLIC_KEY = "l8Yu9oJfqY8mDK7QX";
    const SERVICE_ID = "service_djdt48v";
    const TEMPLATE_ID = "template_c7b8o1j"; // Replace with your actual template ID

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => alert("Oops! Something went wrong. Please try again."));
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div>
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>
                    <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                        {/* Name Input */}
                        <div>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full bg-white/5 border border-white/10 rounded px-6 py-4 text-lg text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Your Name"
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full bg-white/5 border border-white/10 rounded px-6 py-4 text-lg text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Your Email"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                rows={6} // Increased from 5 to 6
                                className="w-full bg-white/5 border border-white/10 rounded px-6 py-4 text-lg text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Your Message.."
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>
                        {/* Submit Button */}
                        <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(59,130,246,0.4)]">
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};
