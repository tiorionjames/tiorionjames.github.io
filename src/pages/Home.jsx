// src/pages/Home.jsx
import React from 'react';
import Starfield from '../components/Starfield.jsx';
import Nebula from '../components/Nebula.jsx';

export default function Home() {
  return (
    <main className="main-content cosmic-background no-scroll">
      <canvas id="nebula"></canvas>
      <canvas id="starfield"></canvas>

      <div className="hero">
        <img src="/src/assets/orion_logo.png" alt="Orion Rising Logo" className="logo" />
        <img src="/src/assets/Tiberius_James.jpg" alt="Tiberius James" className="logo" />

        <div className="fade"></div>

        <section className="star-wars">
          <div className="crawl-wrapper">
            <div className="crawl">
              <p>My name is Tiberius James and I am a software engineer based out of West Des Moines, Iowa. I love creating and learning new things!  I am currently open to exploring new oppertunities.</p>

              <p>Everything shown here on this site was developed and coded by me, with some assistance from a group of developers that I worked with while attending the Hack Reactor Bootcamp.  Their contributions are noted in the projects area.</p>

              <p>I have over 630 hours completed in Advanced Software Engineering from Hack Reactor Bootcamp. I am proficient in Python, PostgreSQL, HTML/CSS, JavaScript, React, FastAPI, Agile Development, Object Oriented Programming, Git, and DOM Manipulation.</p>

              <p>See my Contact Me page for more information!</p>
            </div>
          </div>
        </section>

        <p><br /><br /></p>
        <a href="/projects" className="btn-glow">See My Projects →</a>
      </div>
    </main>
  );
}
