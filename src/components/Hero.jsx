import {motion} from "framer-motion";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[100px] mx-w-7xl 
        mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col items-center justify-center mt-5">
           <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
           <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}> Hi I'am <span className="text-[#915eff]"> Ali Akbar Sazish </span> </h1>
            <p className={`${styles.heroSubText} mt-1 text-white-100`}>
              Take a glance at my skills and experience. If you have a project in mind, please feel free to reach out to me. 
          
              <span className="inline flex flex-row gap-2 mt-2">
                  <a className="black-gradient z-50 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer inline" target="_blank" href="https://www.linkedin.com/in/ali-akbar-sazish/"> <FaLinkedinIn /> </a>
                  <a className="black-gradient z-50 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer inline" target="_blank" href="https://github.com/akbarsazish"> <FaGithub /> </a>
                  <a className="black-gradient z-50 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer inline" target="_blank" href="https://twitter.com/AliAkbarSazish1"> <FaTwitter /> </a>
                  <a className="black-gradient z-50 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer inline" target="_blank" href="https://www.facebook.com/profile.php?id=100008137806708"> <FaFacebook /> </a>
                  <a className="black-gradient z-50 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer inline" target="_blank" href="https://www.instagram.com/ali_sazish/"> <FaInstagram /> </a>
                </span>
            </p>
        </div>
      </div>
      <ComputersCanvas />
      {/* <div className="absolute xs:bottom-8 bottom-31 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div animate={{ y:[0, 24, 0]}} transition={{duration:1.5, repeat:Infinity, repeatType:'loop'}} 
            className="w-3 h-3 rounded-full bg-secondary mb-1"/>
          </div>
        </a>
      </div> */}
    </section>
  )
}

export default Hero