import ContactUsForm from "../components/ContactSections/ContactUsForm";
import Location from "../components/ContactSections/Location";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Vision Tech Barcode Solution</title>
        <link rel="icon" href="/imgs/favicon2.ico" type="image/png" />
      </Helmet>
      <div
        className="relative w-full h-72 bg-cover bg-center"
        style={{ backgroundImage: "url('imgs/contactUs/hero.avif')" }}
      >
        <div className="absolute inset-0  flex items-center justify-end">
          <h1 className="text-white text-4xl md:text-6xl font-bold uppercase pr-[100px]">
            Contact Us
          </h1>
        </div>
      </div>
      <ContactUsForm />
      <Location />
    </>
  );
};

export default ContactUs;
