
import React, { useRef, useState, useEffect } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Footer from "../Footer/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  // Manage form data state
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    email: "",
    phone: "",
    grade: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollY = window.scrollY; // Get scroll position
      const imageContainer = document.querySelector(".contact-image-container");

      // Calculate opacity based on scroll position
      const opacity = 1 - scrollY / 500; // Adjust 500 to control how fast it disappears
      if (opacity >= 0) {
        imageContainer.style.opacity = opacity; // Set opacity dynamically
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // EmailJS sendEmail function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_chhlto9", // Replace with your EmailJS Service ID
        "template_hvlf9ye", // Replace with your EmailJS Template ID
        form.current,
        "6G3bip3AbmyowHBk9" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          toast.success("Email sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setFormData({
            parentName: "",
            studentName: "",
            email: "",
            phone: "",
            grade: "",
            message: "",
          }); // Reset form data after successful submission
        },
        (error) => {
          console.error("FAILED...", error.text);
          toast.error("Failed to send email. Please try again.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <>
      <div className="contact-wrapper">
        <div className="contact-image-container"></div>
        {/* Header Section */}
        <header className="contact-header">
          <h1>Drona Learning Academy Welcomes You</h1>
          <h1>Feel free to Contact Us</h1>
          <p>
            Enter your contact details and queries, and we will get in touch
            with you within 24 - 48 hours.
          </p>
        </header>

        {/* Main Content */}
        <div className="contact-info">
          <div className="text-left">
            <h2>Contact Information</h2>
            <ul>
              <li>
                <strong>Address:</strong> 1234 React Lane, JavaScript City,
                CodeState, 56789
              </li>
              <li>
                <strong>Email:</strong> contactus@dronalearning.com
              </li>
              <li>
                <strong>Phone:</strong> +91 7019835235
              </li>
            </ul>
          </div>
          <div className="image-right">
            <img
              src="https://dhruv-kundu14.github.io/drona_learning/Icons/Background/communicate.png"
              alt="Career visual"
              className="section-image"
            />
          </div>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form">
            <h2>Get in Touch</h2>
            <form ref={form} onSubmit={sendEmail}>
            

              <div className="form-group">
                <label htmlFor="studentName">Name</label>
                <input
                  type="text"
                  name="studentName"
                  id="studentName"
                  placeholder="Enter Student's Name"
                  value={formData.studentName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Your Contact Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>

          {/* Optional Map */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7777.228571838643!2d77.59456203530168!3d12.971598464474444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c13b920f%3A0x3a3c7cd66b5e1d08!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map showing Bengaluru location"
            ></iframe>
          </div>
        </div>
      </div>

      <ToastContainer />
      <Footer />
    </>
  );
};

export default Contact;
