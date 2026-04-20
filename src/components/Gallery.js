import React from "react";
import bloomSalon from "../assets/bloom-salon.jpg";
import bloomInterior from "../assets/bloom-interiror.jpg";
import bloomBeauty from "../assets/bloom-beauty.jpg";

const galleryData = [
  {
    title: "Warm Interior",
    description: "Soft lighting, mirrors, premium chairs, and a relaxed neighbourhood salon mood.",
    variant: "interior",
    image: bloomInterior
  },
  {
    title: "Style Station",
    description: "A refined styling corner for cuts, color, finishing, and consultation moments.",
    variant: "station",
    image: bloomSalon
  },
  {
    title: "Beauty Rituals",
    description: "Beauty essentials and self-care sessions presented with a premium visual tone.",
    variant: "ritual",
    image: bloomBeauty
  }
];

const Gallery = () => {
  return (
    <>
      <section className="section-heading" id="photos">
        <p className="eyebrow">Photos</p>
        <h2>A salon gallery layout ready for real Bloom photos</h2>
      </section>

      <section className="gallery">
        {galleryData.map((item) => (
          <article className="gallery-card" key={item.title}>
            <div className={`gallery-visual gallery-${item.variant} ${item.image ? "gallery-has-image" : ""}`}>
              {item.image && (
                <img className="gallery-photo" src={item.image} alt={item.title} />
              )}
              <div className="gallery-overlay" />
              <span>{item.title}</span>
            </div>
            <div className="gallery-copy">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default Gallery;
