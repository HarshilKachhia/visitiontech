const Location = () => {
  return (
    // Location Section
    <div className="w-full mt-8">
      {/* Full width Google Map iframe */}
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.2901991603985!2d72.82706057556226!3d21.18062778050703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0028c445c5%3A0xcd3555b95968bc0b!2sVision%20Tech%20Barcode%20Solution!5e0!3m2!1sen!2sin!4v1769415937426!5m2!1sen!2sin" 
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