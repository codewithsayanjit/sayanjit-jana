// Importing React's useState hook for managing component state
import { useState } from "react";

// Importing motion component from Framer Motion for animations
import { motion } from "framer-motion";

// Importing EmailJS SDK
import emailjs from "@emailjs/browser";

// Importing Particles Background
import ParticlesBackground from "../components/ParticlesBackground.jsx";

// Importing the contact image asset
import Astra from "../assets/Astra.png";

// Reading EmailJS credentials from environment variables (Vite)
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    idea: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const requiredFields = ["name", "email", "service", "idea"];
    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = "Fill this field";
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...formData,
          from_name: formData.name,
          reply_to: formData.email,
        },
        PUBLIC_KEY
      );

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        service: "",
        idea: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen relative bg-black overflow-hidden text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
    >
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Contact Section Content */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-10">

        {/* Left Animated Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <motion.img
            src={Astra}
            alt="Contact"
            className="w-72 md:w-140 rounded-2xl shadow-lg object-cover"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Right Side Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10"
        >
          <h2 className="text-3xl font-bold mb-6">
            Let’s Work Together
          </h2>

          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Name field */}
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="mb-1"
              >
                Name <span className="text-red-500">*</span>
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`p-3 rounded-md bg-white/10 border ${
                  errors.name
                    ? "border-red-500"
                    : "border-gray-500"
                } text-white focus:outline-none focus:border-blue-500`}
              />

              {errors.name && (
                <p
                  id="name-error"
                  className="text-red-500 text-xs mt-1"
                  role="alert"
                >
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email field */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-1"
              >
                Email <span className="text-red-500">*</span>
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={
                  errors.email ? "email-error" : undefined
                }
                className={`p-3 rounded-md bg-white/10 border ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-500"
                } text-white focus:outline-none focus:border-blue-500`}
              />

              {errors.email && (
                <p
                  id="email-error"
                  className="text-red-500 text-xs mt-1"
                  role="alert"
                >
                  {errors.email}
                </p>
              )}
            </div>

            {/* Service dropdown */}
            <div className="flex flex-col">
              <label
                htmlFor="service"
                className="mb-1"
              >
                Service Needed <span className="text-red-500">*</span>
              </label>

              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                aria-invalid={errors.service ? "true" : "false"}
                aria-describedby={
                  errors.service ? "service-error" : undefined
                }
                className={`p-3 rounded-md bg-white/10 border ${
                  errors.service
                    ? "border-red-500"
                    : "border-gray-500"
                } focus:outline-none focus:border-blue-500`}
              >
                <option value="" disabled>
                  Something in mind?
                </option>

                <option
                  value="UI/UX Design"
                  className="text-black"
                >
                  UI/UX Design
                </option>
                <option
                  value="AI & ML"
                  className="text-black"
                >
                  AI & ML
                </option>
                <option
                  value="Web Development"
                  className="text-black"
                >
                  Web Development
                </option>

                <option
                  value="Mobile Application"
                  className="text-black"
                >
                  Mobile Application
                </option>

                <option
                  value="Others"
                  className="text-black"
                >
                  Others
                </option>
              </select>

              {errors.service && (
                <p
                  id="service-error"
                  className="text-red-500 text-xs mt-1"
                  role="alert"
                >
                  {errors.service}
                </p>
              )}
            </div>

            {/* Idea textarea */}
            <div className="flex flex-col">
              <label
                htmlFor="idea"
                className="mb-1"
              >
                Idea <span className="text-red-500">*</span>
              </label>

              <textarea
                id="idea"
                name="idea"
                rows={5}
                placeholder="Enter your idea"
                value={formData.idea}
                onChange={handleChange}
                required
                aria-invalid={errors.idea ? "true" : "false"}
                aria-describedby={
                  errors.idea ? "idea-error" : undefined
                }
                className={`p-3 rounded-md bg-white/10 border ${
                  errors.idea
                    ? "border-red-500"
                    : "border-gray-500"
                } text-white focus:outline-none focus:border-blue-500`}
              />

              {errors.idea && (
                <p
                  id="idea-error"
                  className="text-red-500 text-xs mt-1"
                  role="alert"
                >
                  {errors.idea}
                </p>
              )}
            </div>

            {/* Status message */}
            {status && (
              <p
                className={`text-sm ${
                  status === "success"
                    ? "text-green-400"
                    : status === "error"
                    ? "text-red-400"
                    : "text-yellow-400"
                }`}
                role="status"
                aria-live="polite"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                  ? "Message sent successfully ✅"
                  : "Something went wrong ❌"}
              </p>
            )}

            {/* Submit button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={status === "sending"}
              type="submit"
              className="
                bg-blue-600
                hover:bg-blue-700
                disabled:opacity-60
                text-white
                py-3
                rounded-md
                font-semibold
                transition
              "
            >
              {status === "sending"
                ? "Sending..."
                : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
