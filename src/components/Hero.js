import React from "react";
import bloomLogo from "../assets/bloom-logo-official.png";
import bloomReception from "../assets/bloom-reception.png";
import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_E164, INSTAGRAM_URL } from "../constants";

const createWhatsAppLink = (details = {}) => {
  const lines = [
    `Hello Bloom Salon, I would like to book an appointment.`,
    details.name ? `Name: ${details.name}` : null,
    details.phone ? `Phone: ${details.phone}` : null,
    details.service ? `Service: ${details.service}` : null,
    details.date ? `Preferred date: ${details.date}` : null,
    details.notes ? `Notes: ${details.notes}` : null
  ].filter(Boolean);

  return `https://wa.me/${BUSINESS_PHONE_E164}?text=${encodeURIComponent(lines.join("\n"))}`;
};

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Bloom Salon</p>

        <h1>Beauty, hair, and grooming in a calm salon setting.</h1>

        <div className="hero-actions">
          <a
            className="button button-primary"
            href={createWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
          >
            Book on WhatsApp
          </a>
          <a
            className="button button-secondary"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
          >
            Instagram Page
          </a>
        </div>

        <dl className="hero-details">
          <div>
            <dt>Location</dt>
            <dd>Bagalgunte, Bengaluru</dd>
          </div>
          <div>
            
            <dt>Services</dt>
            <dd>Hair, skin care, beauty, and grooming</dd>
          </div>
          <div>
            <dt>Contact</dt>
            <dd>{BUSINESS_PHONE_DISPLAY}</dd>
          </div>
        </dl>

        <div className="social-panel">
          <a
            className="social-panel-card"
            href={createWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
          >
            <strong>WhatsApp</strong>
            <span>Tap to open a direct booking chat with Bloom Salon.</span>
          </a>
          <a
            className="social-panel-card"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
          >
            <strong>Instagram</strong>
            <span>View salon posts, beauty updates, and styling moments.</span>
          </a>
          <a className="social-panel-card" href={`tel:${BUSINESS_PHONE_E164}`}>
            <strong>Call</strong>
            <span>{BUSINESS_PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <img className="hero-image" src={bloomReception} alt="Bloom Salon" />
      </div>
    </section>
  );
};

export default Hero;
