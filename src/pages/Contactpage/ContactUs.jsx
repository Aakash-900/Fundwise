import React from "react";
import ContactForm from "../../components/Contactus_components/ContactForm/ContactForm";
import ContactImage from "../../components/Contactus_components/ContactImage/ContactImage";
import ContactInfo from "../../components/Contactus_components/Contactinfo/ContactInfo";

import "./ContactUs.css";

const ContactUs = () => {
    return (
      <div className="contact-us">
        <div className="info-and-image">
          <ContactInfo />
          <ContactImage />
        </div>
        <ContactForm />
      </div>
    );
  }

export default ContactUs;
