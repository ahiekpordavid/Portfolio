import React, { useState } from "react";
import "./Contact.css";
import { SiMinutemailer, SiInstagram, SiTwitter } from "react-icons/si";
import { PiPhoneCallFill } from "react-icons/pi";
import { FormattedMessage, useIntl } from "react-intl";
import CV from "../../media/David Kwashie Ahiekpor.pdf";

const Contact = () => {
  const intl = useIntl();
  const scriptURL = 'https://script.google.com/macros/s/AKfycbypcM5RDwMDyczm-KPQIbq8GuVpcPDgFQ059x0eVfbYNabRN-IvCxsYfzrWPZA9bWwbxw/exec';
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); 
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    fetch(scriptURL, { method: 'POST', body: form })
      .then((response) => {
        if (response.ok) {
          console.log('Success!', response);
          setFormData({
            Name: "",
            Email: "",
            Message: "",
          });
        } else {
          console.error('Error!', response);
        }
      })
      .catch((error) => {
        console.error('Error!', error.message);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="contacts">
      <div className="contact">
        <h1>
          <FormattedMessage id="contact.title" />
        </h1>
        <div className="contactTrad">
          <SiMinutemailer className="socials" />
          <p>
            <FormattedMessage id="contact.email" />
          </p>
        </div>
        <div className="contactTrad">
          <PiPhoneCallFill className="socials" />
          <p>
            <FormattedMessage id="contact.phone" />
          </p>
        </div>
        <div className="contactSocials">
          <SiInstagram className="socials" />
          <SiTwitter className="socials" />
        </div>
        <a href={CV} download>
          <FormattedMessage id="contact.cv" />
        </a>
      </div>
      <div className="contactMessage">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleInputChange}
            placeholder={intl.formatMessage({ id: "contact.placeholder.name" })}
          />
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleInputChange}    
            placeholder={intl.formatMessage({
              id: "contact.placeholder.email",
            })}
          />
          <textarea
            name="Message"
            id=""
            cols="30"
            rows="10"
            value={formData.Message}
            onChange={handleInputChange}    
            placeholder={intl.formatMessage({
              id: "contact.placeholder.message",
            })}
          ></textarea>
          <button type="submit">
          {isSubmitting ? 'Submitting...' : <FormattedMessage id="contact.button.submit" />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
