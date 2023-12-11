import React from "react";
import "./index.css";
import { Facebook, GitHub, Instagram, Twitter, Youtube } from "react-feather";
const Footer = () => {
  return (
    <footer className="homepage-footer">
      <section className="homepage-footer-item">
        <h4>Contact Us</h4>
        <p>
          <strong>call us: </strong>9922445566
        </p>
        <p>
          <strong>email us: </strong>bloomhouse@gmail.com
        </p>
      </section>
      <section className="homepage-footer-item">
        <h4>Follow Us</h4>
        <div className="footer-social-media">
          <Facebook size={16} />
          <Twitter size={16} />
          <Instagram size={16} />
          <Youtube size={16} />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
