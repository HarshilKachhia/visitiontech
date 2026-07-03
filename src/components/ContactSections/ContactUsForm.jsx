const ContactUsForm = () => {

    return (

        <div className="min-h-[66vh] flex items-center justify-center bg-with-100 constactSection">
        <div className="bg-white rounded-lg overflow-hidden  w-full flex sm:flex-nowrap flex-wrap  gap-4 sm:gap-10 py-3">
          {/* Left Section */}
          <div className="left section w-[100%] sm:w-[40%] bg-[#116089] text-white p-8">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <div className="space-y-4">
        {/* Contact Names */}
        <div className="flex items-start space-x-3">
          <span className="text-lg">👤</span>
          <p className="text-sm">
            Mr. Pramod Dongre (Director) | Mr. Umesh Dongre (Director)
          </p>
        </div>

        {/* Address */}
        <div className="flex items-start space-x-3">
          <span className="text-lg">📍</span>
          <p className="text-sm">
            Sr. No. 35/1, Kolewadi Road, <br />
            Jambhulwadi, Pune - 411046, Maharashtra, India
          </p>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-3">
          <span className="text-lg">📧</span>
          <p className="text-sm">
            <a
              href="mailto:umesh.dongre@shreemultigroup.com"
              className="text-blue-200 hover:underline"
            >
              umesh.dongre@shreemultigroup.com
            </a>
          </p>
        </div>

        {/* Phone Numbers */}
        <div className="flex items-start space-x-3">
          <span className="text-lg">📞</span>
          <p className="text-sm">
            +91 9890273970 / 9822468634
          </p>
        </div>
        </div>
          </div>
  
          {/* Right Section */}
          <div className=" right-section w-[100%] sm:w-[70%] p-8 hidden">
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
                className="w-full bg-[#116089] text-white p-2 rounded hover:bg-teal-600 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

    );

}

export default ContactUsForm;