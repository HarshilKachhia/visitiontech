import { CONTACT_INFO } from "../../services/contactService";

const Location = () => {
  return (
    // Location Section
    <div className="w-full mt-8">
      {/* Full width Google Map iframe */}
      <iframe 
        src={CONTACT_INFO.maps.embedUrl} 
        width="100%" 
        height="450" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map"
        className="w-full h-[450px]"
      ></iframe>
    </div>
  );
};

export default Location;