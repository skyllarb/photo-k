import React from 'react';
import coverImage from "../../assets/coverpic-min.jpg";

function About() {
  return (
    <section className="my-1">
      <h1 id="about">Skyllar Byron</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default About;