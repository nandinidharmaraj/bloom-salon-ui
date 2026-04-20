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
          <h3>Polished Branding</h3>
          <p>
            The design direction uses cream, botanical green, and soft gold
            for a premium but approachable salon identity.
          </p>
        </article>
        <article>
          <h3>Clear Navigation</h3>
          <p>
            Visitors can immediately find the photo section, booking area,
            about section, and contact details from the header.
          </p>
        </article>
        <article>
          <h3>Ready For Next Steps</h3>
          <p>
            The structure is ready for real service pricing, exact salon
            images, reviews, and the final Instagram profile link.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
