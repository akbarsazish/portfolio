import React, { useEffect, useRef, useState } from "react";
import "./SkillBars.css";
import { SectionWrapper } from "../../hoc";

const SkillBar = ({ skill, percentage }) => {
  const barRef = useRef(null);

  // setting animation to skill bars conditionally
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // checking if the element is fully visible
    const handleScroll = () => {
      if (barRef.current) {
        const { top, bottom } = barRef.current.getBoundingClientRect();
        const isFullyVisible = top >= 0 && bottom <= window.innerHeight;
        if (isFullyVisible) {
          setIsAnimated(true);
        } else {
          setIsAnimated(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="skill-bar" ref={barRef}>
      <div className="skill-name">
        <span>{skill}</span>
        <div className={`percentage ${isAnimated ? "animate" : ""}`}>
          <div className="skill-percentage">{percentage}%</div>
        </div>
      </div>

      <div className={`bar-container ${isAnimated ? "animate" : ""}`}>
        <div className="fill" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default SkillBar
