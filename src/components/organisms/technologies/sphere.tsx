import React, { useEffect } from "react";
import "../styles/TextShpere.css";
import TagCloud, { TagCloudOptions } from "TagCloud";

const TextShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    const container = document.querySelector(".tagcloud");

    if (container) {
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "Vue",
        "Nuxt",
        "NodeJS",
        "Babel",
        "Jquery",
        "ES6",
        "GIT",
        "GITHUB",
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal" as const,
        initSpeed: "normal" as const,
        keep: true,
      };

      TagCloud([container], texts, options as TagCloudOptions);

      return () => {};
    }
  }, []);

  return (
    <div className="text-shpere">
      <span className="tagcloud"></span>
    </div>
  );
};

export default TextShpere;
