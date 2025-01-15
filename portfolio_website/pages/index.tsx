import React from "react";
import Home from "./Home";
import Abouts from "./Abouts";
import Projects from "./Projects";
import Contact from "./Contact";

const Portfolio: React.FC = () => {
  return (
    <div className="main">

      <div className="main_content">

        <section id="home">
          <Home />
        </section>

        <section id="abouts">
          <Abouts />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
