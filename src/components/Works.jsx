import { Tilt } from "react-tilt";
import {motion} from "framer-motion";
import { styles } from "../styles";
import { projects} from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({index, name, tags, description, image, source_code_link, see_live_link}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.70)}>
       <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary p-4 rounded-2xl sm:w-[360px] w-full">
        
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name}  className="w-full h-full object-cover rounded-2xl"/>
        </div>
        <div className="mt-5">
          <div className="text-white font-bold text-[24px]"> {name}  
            <a className="py-2 px-2 mx-1 text-[12px] font-400 bg-black text-[#915eff] hover:text-white rounded float-right" href={source_code_link} target="_blank" rel="noreferrer"> See Source </a>
            <a className="py-2 px-2 mx-1 text-[12px] font-400 bg-black text-[#915eff] hover:text-white rounded float-right" href={see_live_link} target="_blank" rel="noreferrer"> See Live </a>
          </div>
          <p className="mt-2 text-secondary text-[14px]"> {description} </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag)=>(
              <p className={`text-[14px] ${tag.color}`} key={tag.name}> #{tag.name} </p>
          ))}
        </div>
        
        </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <div className={`${styles.paddingX} max-w-7xl mx-auto relative z-0 mt-10`}>
      <motion.div variants={textVariant()} >
          <p className={styles.sectionSubText}> My Projects </p>
          <h2 className={styles.sectionHeadText}> Projects. </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 1.1, 1)} className="mt-3 text-secondary text-[17px] mx-w-3xl leading-[30px]">
           The following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described, with links to code repositories and live demos included.
           They reflect my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-8">
          {projects.map((project, index)=>(
              <ProjectCard  key={`project-${index}`} index={index} {...project} />
          ))}
      </div>
    </div>
  )
}

export default Works