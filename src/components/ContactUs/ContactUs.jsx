import React from "react";
import "./ContactUs.css";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const ContactUs = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "92930473-e1ff-4c05-ae79-27d1b2d0c6a4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact-us">
      <div className="contact-left">
        <div className="call-us contact-feild">
          <h3>
            <FiPhoneCall size={20} style={{ marginRight: "10px" }} />
            Call Us
          </h3>
          <p>+91 9071122230</p>
        </div>
        <div className="email contact-feild">
          <h3>
            <MdOutlineEmail size={20} style={{ marginRight: "10px" }} />
            E-Mail
          </h3>
          <p>devadigatanvi30@gmail.com</p>
        </div>
        <div className="address contact-feild">
          <h3>
            <SlLocationPin size={20} style={{ marginRight: "10px" }} />
            Location
          </h3>
          <p>
            #24, 14th Main Road, 24, 4th Sector, <br /> opp. BDA Complex, Sector
            7, HSR Layout, <br /> Bengaluru, Karnataka 560102
          </p>
        </div>
      </div>
      <div className="contact-right">
        <h2>Contact Us</h2>
        <form action="" onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
          <input
            type="number"
            name="phone"
            placeholder="Enter Your Phone Number"
          />
          <textarea
            name="message"
            id=""
            placeholder="Enter Your Message Here"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default ContactUs;
