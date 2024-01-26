import React from "react";
import SkillBar from "./SkillBars";
import "./MySkills.css";
import { technicalSkills } from '../../constants';
import { softSkills } from '../../constants';
import styles from "../../styles";

export default function MySkills() {

  return (
    <section id="skills" className={`${styles.paddingX} max-w-7xl mx-auto relative z-0`}>
      <div className="skills">
        <div className="technical-skills">
    
          {/* dynamic rendering technical skills */}
          {technicalSkills.map((skill, index) => (
            <SkillBar
              key={index}
              skill={skill.skill}
              percentage={skill.percentage}
            />
          ))}
        </div>

        <div className=" personal-skills">
          {/* dynamic rendering personal skills */}
          {softSkills.map((skill, index) => (
            <SkillBar
              key={index}
              skill={skill.skill}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
