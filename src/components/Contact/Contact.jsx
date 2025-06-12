import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false); // Changed to isSending for better UX
  const [isSent, setIsSent] = useState(false); // To indicate if it was successfully sent

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true); // Disable button while sending

    emailjs
      .sendForm(
        "service_if2xaxb", // Replace with your EmailJS Service ID (consider environment variables)
        "template_4xnrqxg", // Replace with your EmailJS Template ID (consider environment variables)
        form.current,
        "eTEkGoy1drzOV2Es3" // Replace with your EmailJS Public Key (consider environment variables)
      )
      .then(
        () => {
          setIsSent(true); // Mark as sent
          setIsSending(false); // Enable button again
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
          // Optional: After a short delay, you might reset isSent if you want to allow re-sending
          setTimeout(() => setIsSent(false), 5000);
        },
        (error) => {
          console.error("Error sending message:", error);
          setIsSending(false); // Enable button again
          setIsSent(false); // Ensure it's not marked as sent
          toast.error("Failed to send message. Please try again. ❌", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact" // Ensure this ID matches your navbar link
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-900">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email" // Ensure this matches your EmailJS template variable
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="user_name" // Ensure this matches your EmailJS template variable
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject" // Ensure this matches your EmailJS template variable
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message" // Ensure this matches your EmailJS template variable
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSending} // Disable button while sending
          >
            {isSending ? "Sending..." : isSent ? "Sent!" : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;