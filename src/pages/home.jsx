import * as React from "react";

export default function Home() {
  return (
    <>
      <title>Home</title>
      <div className="hero-image home-hero">
        <div className="hero-text">
          <h1 className="heroTitle">Granby GRUNTS</h1>
          <p id="hero-paragraph">FIRST Robotics Competition Team 3146</p>
          <button id="hero-button">
            <span className="hero-paragraph">Read more</span>
          </button>
        </div>
      </div>
      <div className="main">
        <div className="aboutframe">
          <h1>About</h1>
          <p>The Granby GRUNTS seek to enrich STEM and FIRST opportunities throughout Southern New England through extensive outreach, full team participation, and measures to establish themselves as an enduring hub of collaboration, education and advancement.</p>
        </div>
      </div>
    </>
  );
}
