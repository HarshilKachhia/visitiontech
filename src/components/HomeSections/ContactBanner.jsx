import React from "react";

const ContactSection = () => {
  return (
    <div className="min-h-[65vh] flex items-center justify-center bg-with-100 constactSection">
      <div className="bg-white  overflow-hidden  w-full flex sm:flex-nowrap flex-wrap  gap-4 sm:gap-10 py-3">
        {/* Left Section */}
        <div className="left section w-[100%] sm:w-[40%] bg-[#666666] text-white p-8">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6">
            We want to hear from you. Let us know your requirements so we can
            help you with the best solution that suits your interest.
          </p>
          <div className="flex flex-wrap gap-10">
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook-f">F</i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter">T</i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-linkedin-in">L</i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram">I</i>
            </a>
          </div>
          <button className="bg-[#282626] px-4 py-2 text-white font-semibold hover:bg-gray-700">
            Contact Us
          </button>
          </div>
        </div>

        {/* Right Section */}
        <div className=" right-section w-[100%] sm:w-[70%] p-8">
          <form>
            <div className="flex space-x-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email *"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
