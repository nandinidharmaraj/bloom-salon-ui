import React from "react";

const FloatingActions = () => {
  const { BUSINESS_PHONE_E164, INSTAGRAM_URL } = require("../constants");

  const createWhatsAppLink = () => {
    return `https://wa.me/${BUSINESS_PHONE_E164}?text=${encodeURIComponent("Hello Bloom Salon, I would like to book an appointment.")}`;
  };

  return (
    <div className="floating-actions" aria-label="Quick actions">
      <a
        className="floating-action floating-action-whatsapp"
        href={createWhatsAppLink()}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
      <a
        className="floating-action floating-action-instagram"
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noreferrer"
      >
        Instagram
      </a>
    </div>
  );
};

export default FloatingActions;
