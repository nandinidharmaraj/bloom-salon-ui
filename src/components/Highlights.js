import React from "react";
import { highlights } from "../constants";

const Highlights = () => {
  return (
    <section className="highlights">
      {highlights.map((item) => (
        <article key={item.number}>
          <p>{item.number}</p>
          <h2>{item.title}</h2>
          <span>{item.description}</span>
        </article>
      ))}
    </section>
  );
};

export default Highlights;
