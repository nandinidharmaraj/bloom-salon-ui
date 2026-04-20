import React, { useState } from "react";
import { BUSINESS_NAME, BUSINESS_PHONE_E164, services } from "../constants";

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

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: services[0],
    date: "",
    notes: ""
  });

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormData((current) => ({
      ...current,
      [name]: value
    }));
  };

  const handleWhatsAppBooking = () => {
    window.open(createWhatsAppLink(formData), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="booking" id="booking">
      <div className="section-heading booking-copy">
        <p className="eyebrow">Book Appointment</p>
        <h2>Book in one step, then continue in WhatsApp</h2>

        <div className="booking-side-card">
          <span>Fastest Way To Book</span>
          <strong>Fill the form, then jump into WhatsApp with your details prefilled.</strong>
        </div>
      </div>

      <form className="booking-form">
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Phone
          <input
            type="tel"
            name="phone"
            placeholder="Your contact number"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Service
          <select name="service" value={formData.service} onChange={handleInputChange}>
            {services.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </label>
        <label>
          Preferred Date
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </label>
        <label className="full-width">
          Notes
          <textarea
            name="notes"
            rows="4"
            placeholder="Tell us your preferred time or service details"
            value={formData.notes}
            onChange={handleInputChange}
          />
        </label>
        <button
          className="button button-primary full-width"
          type="button"
          onClick={handleWhatsAppBooking}
        >
          Continue on WhatsApp
        </button>
      </form>
    </section>
  );
};

export default BookingSection;