import React from "react";
import bloomLogo from "../assets/bloom-logo-official.png";
import { BUSINESS_NAME, BUSINESS_PHONE_E164, INSTAGRAM_URL } from "../constants";

const createWhatsAppLink = (details = {}) => {
  const lines = [
    `Hello ${BUSINESS_NAME}, I would like to book an appointment.`,
    details.name ? `Name: ${details.name}` : null,
    details.phone ? `Phone: ${details.phone}` : null,
    details.service ? `Service: ${details.service}` : null,
    details.date ? `Preferred date: ${details.date}` : null,
    details.notes ? `Notes: ${details.notes}` : null
  ].filter(Boolean);

  return `https://wa.me/${BUSINESS_PHONE_E164}?text=${encodeURIComponent(lines.join("\n"))}`;
};

const Header = () => {
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="site-header">
      <a className="brand" href="#top" onClick={handleLogoClick} aria-label="Bloom Salon homepage">
        <img className="brand-mark" src={bloomLogo} alt="Bloom Salon logo" />
        <span className="brand-copy">
          <strong>Bloom Salon</strong>
          <small>Unisex Salon</small>
        </span>
      </a>

      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#photos">Photos</a>
        <a href="#booking">Book Appointment</a>
        <a href="#about">About</a>
        <a href="#footer">Contact</a>
      </nav>

      <a
        className="header-cta"
        href={createWhatsAppLink()}
        target="_blank"
        rel="noreferrer"
      >
        Book on WhatsApp
      </a>
    </header>
  );
};

export default Header;
