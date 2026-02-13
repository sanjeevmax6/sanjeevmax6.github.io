import React from "react";
import Typewriter from "typewriter-effect";

function HeroTypewriter() {
  return (
    <div className="type2-stack">
      <div className="hero2-title-zone">
        <h1 className="headline2">
          <span className="headline2-type">
            <Typewriter
              component="span"
              options={{
                strings: ["Software Engineer", "AI Engineer"],
                autoStart: true,
                loop: true,
                deleteSpeed: 75,
                delay: 70,
                pauseFor: 2200
              }}
            />
          </span>
        </h1>
      </div>
    </div>
  );
}

export default HeroTypewriter;
