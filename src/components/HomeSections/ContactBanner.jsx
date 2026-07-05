import React, { useState } from "react";

// Google Apps Script Web App URL. Replace with your deployed Web App URL.
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzqoKNLfGtwAuONrK2e3NZnFQkbFANuoPYT80B7NPhabeeKDySROyJwPbKigGQP0K4/exec";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear validation error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (formData.phone && !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Bypasses CORS redirect checks for Apps Script Web App
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(formData),
      });

      // In no-cors mode, the response is opaque. If fetch does not throw, the submission has succeeded.
      setSubmitStatus("success");
      setSubmitMessage("Thank you! Your message has been sent successfully.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setSubmitMessage("An error occurred while sending your message. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[65vh] flex items-center justify-center bg-with-100 constactSection">
      <div className="bg-white rounded-lg overflow-hidden w-full flex sm:flex-nowrap flex-wrap gap-4 sm:gap-10 py-3">
        {/* Left Section */}
        <div className="left section w-[100%] sm:w-[40%] bg-brandSecondary text-white p-8">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            {/* Contact Names */}
            <div className="flex items-start space-x-3">
              <span className="text-lg">👤</span>
              <p className="text-sm">
                Mr. Vishal Bhadresada (Director)
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-3">
              <span className="text-lg">📍</span>
              <p className="text-sm">
                B-15, Jeevandeep Complex, Opp. J.K Tower, <br />
                Ring Road, Surat - 395002, Gujarat, India
              </p>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-3">
              <span className="text-lg">📧</span>
              <p className="text-sm">
                <a
                  href="mailto:info@visiontechbarcode.com"
                  className="text-blue-200 hover:underline"
                >
                  info@visiontechbarcode.com
                </a>
              </p>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start space-x-3">
              <span className="text-lg">📞</span>
              <p className="text-sm">
                +91 99252 09252 / 79429 63928
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className=" right-section w-[100%] sm:w-[70%] p-8">
          <form onSubmit={handleSubmit} noValidate>
            {submitStatus === "success" && (
              <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm font-semibold transition-all">
                ✓ {submitMessage}
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-lg text-sm font-semibold transition-all">
                ⚠ {submitMessage}
              </div>
            )}

            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.firstName ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                )}
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Message *"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.message ? "border-red-500" : "border-gray-300"
                  }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brandPrimary text-white p-2 rounded hover:bg-brandPrimaryHover transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center font-semibold"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
