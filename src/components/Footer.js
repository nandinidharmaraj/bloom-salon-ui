import React from "react";
import bloomLogo from "../assets/bloom-logo-official.png";
import { BUSINESS_NAME, BUSINESS_ADDRESS, BUSINESS_PHONE_E164, BUSINESS_PHONE_DISPLAY, INSTAGRAM_URL } from "../constants";

const createWhatsAppLink = (details = {}) => {
  const lines = [
    `Hello ${BUSINESS_NAME}, I would like to book an appointment.`
  ];

  return `https://wa.me/${BUSINESS_PHONE_E164}?text=${encodeURIComponent(lines.join("\n"))}`;
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="footer">
      <div className="footer-brand">
        <img className="footer-logo" src={bloomLogo} alt="Bloom Salon logo" />
        <div>
          <strong>{BUSINESS_NAME}</strong>
          <p>{BUSINESS_ADDRESS}</p>
        </div>
      </div>

      <div className="footer-contact">
        <a href={createWhatsAppLink()} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
        <a href={`tel:${BUSINESS_PHONE_E164}`}>{BUSINESS_PHONE_DISPLAY}</a>
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>

      <div className="footer-meta">
        <p>Unisex Salon</p>
        <p>Hair care, beauty services, grooming, and styling</p>
      </div>

      <div className="footer-copy">
        <p>Preview site | {year}</p>
        <p>First homepage concept for Bloom Salon</p>
      </div>
    </footer>
  );
};

export default Footer;
