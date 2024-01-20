import React, { useState } from "react";
import "./Contact.css";
import { SiMinutemailer, SiInstagram, SiTwitter } from "react-icons/si";
import { PiPhoneCallFill } from "react-icons/pi";
import { FormattedMessage, useIntl } from "react-intl";
import CV from "../../media/David Kwashie Ahiekpor.pdf";

const Contact = () => {
  const intl = useIntl();
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbypcM5RDwMDyczm-KPQIbq8GuVpcPDgFQ059x0eVfbYNabRN-IvCxsYfzrWPZA9bWwbxw/exec";
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

    fetch(scriptURL, { method: "POST", body: form })
      .then((response) => {
        if (response.ok) {
          console.log("Success!", response);
          setFormData({
            Name: "",
            Email: "",
            Message: "",
          });
        } else {
          console.error("Error!", response);
        }
      })
      .catch((error) => {
        console.error("Error!", error.message);
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
    <div className="flex flex-row p-[140px] blur-0 z-10 justify-center">
      <div className="flex flex-col mr-10">
        <div>
          <h1 className="font-bold flex flex-col items-center mb-7">
            <FormattedMessage id="contact.title" />
            <div className="w-[30px] h-[2px] bg-white"></div>
          </h1>
          <div className="flex flex-row gap-5 items-center mb-2 text-lg">
            <SiMinutemailer className="text-xl" />
            <p>
              <FormattedMessage id="contact.email" />
            </p>
          </div>
          <div className="flex flex-row gap-5 items-center mb-5 text-lg">
            <PiPhoneCallFill className="text-xl" />
            <p>
              <FormattedMessage id="contact.phone" />
            </p>
          </div>
          <div className="flex flex-row gap-5 mb-5">
            <SiInstagram className="text-xl" />
            <SiTwitter className="text-xl" />
          </div>
          <div className="flex flex-col items-center font-semibold text-lg">
            <a href={CV} download>
              <FormattedMessage id="contact.cv" />
            </a>
            <div className="w-[20px] h-[5px] bg-white rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 w-[700px]"
        >
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleInputChange}
            placeholder={intl.formatMessage({ id: "contact.placeholder.name" })}
            className="p-3 rounded-md bg-slate-200"
            style={{ background: "#ffffff50" }}
          />
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleInputChange}
            placeholder={intl.formatMessage({
              id: "contact.placeholder.email",
            })}
            className="p-3 rounded-md bg-slate-200"
            style={{ background: "#ffffff50" }}
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
            className="p-3 rounded-md bg-slate-200"
            style={{ background: "#ffffff50" }}
          ></textarea>
          <button type="submit" className="font-semibold text-lg border rounded-xl hover:text-slate-500 hover:border-slate-400">
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <FormattedMessage id="contact.button.submit" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
