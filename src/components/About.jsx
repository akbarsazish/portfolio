import React from 'react'
import  {Tilt}  from 'react-tilt'
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const SeviceCard = ({ index, title, icon, date}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} 
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div option={{max:45, scale:1, speed:450}} 
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white font-bold text-center text[20px]">{title}</h3>
          <p className="text-white text-center text[14px]">{date}</p>
  
        </div>
      </motion.div>
    </Tilt>
    
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText } lg:mt-20`}> Introduction </p>
      <h2 className={styles.sectionHeadText}> Overview. </h2>
    </motion.div>
    <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] mx-w-3xl leading-[30px]">
    As a full-stack developer, I excel in front-end development using JavaScript, TypeScript, and React. I approach every project with a strong sense of ownership, effective communication, and teamwork. My passion lies in continuous learning and embracing new technologies.
    </motion.p>
    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <SeviceCard index={index} key={service.title} {...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")