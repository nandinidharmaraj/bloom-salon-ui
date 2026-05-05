import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2>Designed for a trusted neighborhood salon brand</h2>
      </div>

      <div className="about-grid">
        <article>
          <h3>Premium Hair Care</h3>
          <p>
            At Bloom Salon, we specialize in precision cuts, color treatments, and styling services. Our expert stylists are trained in the latest techniques to give you the look you deserve with personalized attention.
          </p>
        </article>
        <article>
          <h3>Beauty & Wellness</h3>
          <p>
            From skin care to makeup services, we offer comprehensive beauty solutions in a relaxing spa-like atmosphere. Experience our holistic approach to beauty and self-care with premium products and professional expertise.
          </p>
        </article>
        <article>
          <h3>Unisex Grooming</h3>
          <p>
            Whether you're looking for a fresh haircut, beard grooming, or styling advice, our welcoming salon serves everyone. We believe great grooming is for all, and we're dedicated to making you feel confident and refreshed.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
