import React from "react";
import "./ContactUs.css";
import Phone from "../../icons/VectorPhone.svg";
import Address from "../../icons/Vector (2).svg";
import Mail from "../../icons/Vector (3).svg";
import ContactUsIcon from "../../icons/Group 5063ContactUs.svg";
import { getTranslation } from "../../Utils/getLanguage";
import ContactUsForm from "../ContactUsForm/ContactUsForm";

function ContactUs(props) {
  return (
    <div className="ContactUs">
      <div className="ContactUsContainer">
        <span className="ContactUsHeader">{getTranslation("Contact Us")}</span>
        <span className="ContactUsText">
          {getTranslation(
            "Please complete the contact form so that we can answer your questions, requests, feedback and suggestions."
          )}
        </span>
        <div>
          <ContactUsForm />
          <div className="ContactUsInfo">
            <img src={ContactUsIcon} alt="" />
            <div className="RowText">
              <img src={Phone} alt="" />
              <div>
                <span>{getTranslation("Hotline (Mo. -Sa. 8 -20 Hrs.) ")}</span>
                <span style={{ whiteSpace: "nowrap" }}>
                  {getTranslation("+49 - 8161 - 5193561")}
                </span>
              </div>
            </div>
            <div>
              <img src={Address} alt="" />
              <span>
                {getTranslation("Ganzenmüllerstraße 27 85354 Freising Germany")}
              </span>
            </div>
            <div>
              <img src={Mail} alt="" />
              <span>support@gohalalshop.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
