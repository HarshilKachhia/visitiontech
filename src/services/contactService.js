export const CONTACT_INFO = {
  directorName: "Mr. Vishal Bhadresada",
  directorTitle: "Director",
  companyName: "Vision Tech Barcode Solution",
  address: {
    line1: "B-15, Jeevandeep Complex",
    line2: "Opp. J.K Tower, Ring Road",
    city: "Surat",
    state: "Gujarat",
    country: "India",
    zipCode: "395002",
    fullAddress: "B-15, Jeevandeep Complex, Opp. J.K Tower, Ring Road, Surat - 395002, Gujarat, India."
  },
  phones: {
    primary: "+91 90813 69081",
    primaryRaw: "919081369081",
    secondary: "+91 95613 66671",
    secondaryRaw: "919561366671"
  },
  emails: {
    primary: "info@visiontechbarcode.com"
  },
  whatsapp: {
    number: "919081369081",
    defaultMessage: "Hi, I want to get more info about Visiontech Barcode solution company.",
    getLink: (productName = "") => {
      const msg = productName
        ? `Hi, I want to get more info about ${productName}`
        : "Hi, I want to get more info about Visiontech Barcode solution company.";
      return `https://wa.me/919081369081?text=${encodeURIComponent(msg)}`;
    }
  },
  maps: {
    searchUrl: "https://www.google.com/maps/search/?api=1&query=Vision+Tech+Barcode+Solution+Jeevandeep+Complex+Surat",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.2901991603985!2d72.82706057556226!3d21.18062778050703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0028c445c5%3A0xcd3555b95968bc0b!2sVision%20Tech%20Barcode%20Solution!5e0!3m2!1sen!2sin!4v1769415937426!5m2!1sen!2sin"
  }
};
