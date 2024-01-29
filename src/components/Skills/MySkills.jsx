import React from "react";
import { motion } from 'framer-motion';
import { textVariant } from '../../utils/motion';
import SkillBar from "./SkillBars";
import "./MySkills.css";
import { frontEndSkills, backEndSkills, toolsAndMethods, softSkills } from '../../constants';
import {styles} from "../../styles";

export default function MySkills() {

  return (
    <section id="skills" className={`${styles.paddingX} max-w-7xl mx-auto relative z-0`}>
       <motion.div variants={textVariant()} className="mt-5">
        <p className={styles.sectionSubText}> Technologies && Skills </p>
        <h2 className={styles.sectionHeadText}> Skills. </h2>
      </motion.div>
      <div className="skills">
        <div className="technical-skills">
          <h3 className="font-bold text-[24px] sm:mt-5"> Front-End </h3>
          {frontEndSkills.map((frontSkill, index) => (
            <SkillBar
              key={index}
              skill={frontSkill.front}
              percentage={frontSkill.percentage}
            />
          ))}
        </div>
        <div className="technical-skills">
        <h3 className="font-bold text-[24px] sm:mt-5"> Back-End </h3>
          {backEndSkills.map((backSkill, index) => (
            <SkillBar
              key={index}
              skill={backSkill.backEnd}
              percentage={backSkill.percentage}
            />
          ))}
        </div>

        <div className=" personal-skills">
          <h3 className="font-bold text-[24px] sm:mt-5"> Tools & Methods</h3>
          {toolsAndMethods.map((toolsAndMethod, index) => (
            <SkillBar
              key={index}
              skill={toolsAndMethod.tools}
              percentage={toolsAndMethod.percentage}
            />
          ))}
        </div>
        <div className=" personal-skills">
          <h3 className="font-bold text-[24px] sm:mt-5"> Professional </h3>
          {softSkills.map((softSkill, index) => (
            <SkillBar
              key={index}
              skill={softSkill.soft}
              percentage={softSkill.percentage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
