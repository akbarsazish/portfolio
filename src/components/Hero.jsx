import React, { useState} from "react";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FaHandPointDown} from 'react-icons/fa';
import { MdOutgoingMail } from "react-icons/md";
import { styles } from "../styles";

const Hero = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyGmailId = () => {
    const hiddenText = document.getElementById('myGmail');
    const textarea = document.createElement('textarea');
    textarea.value = hiddenText.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[100px] mx-w-7xl 
        mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col items-center justify-center mt-5">
           <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
           <div className="w-1 sm:h-90 h-80 violet-gradient" />
        </div>

        {isCopied && 
        <span className="text-white-100 w-full max-w-80 rounded flex place-self-center justify-center items-center p-3 fixed top-22 z-10 bg-gradient-to-r from-indigo-300">Email has been copied! </span>}
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}> Front End <span className="text-[#915eff]"> Developer </span> </h1>
            <p className={`${styles.heroSubText} mt-1 text-white-100`}>
            Check out my portfolio and previous projects to understand the depth of my skills and experience. If you have a project that requires coding expertise, I'm ready to help you turn your ideas into reality.
             Please feel free to reach out to me. <FaHandPointDown className="inline text-[32px] text-[#915eff]" />
             </p>
            
                <span className="inline flex flex-row gap-2 mt-7">
                      <a className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer inline hover:text-teal-900" target="_blank" href="https://www.linkedin.com/in/ali-akbar-sazish/"> <FaLinkedinIn /> </a>
                      <a className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer inline hover:text-teal-900" target="_blank" href="https://github.com/akbarsazish"> <FaGithub /> </a>
                      <a className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer inline hover:text-teal-900" target="_blank" href="https://twitter.com/AliAkbarSazish1"> <FaTwitter /> </a>
                      <a className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer inline hover:text-teal-900" target="_blank" href="https://www.facebook.com/profile.php?id=100008137806708"> <FaFacebook /> </a>
                      <a className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer inline hover:text-teal-900" target="_blank" href="https://www.instagram.com/ali_sazish/"> <FaInstagram /> </a>
                      <span onClick={copyGmailId} className="black-gradient  w-10 h-10 rounded-full flex justify-center items-center cursor-pointer inline hover:text-teal-900">
                        <span id="myGmail" className="hidden"> sazishaliakbar@gmail.com </span>
                        <MdOutgoingMail />
                      </span>
                  </span>
            
                <p className={`${styles.heroSubText} mt-6 text-white-100`}> Email:  <span className="text-[#915eff]"> sazishaliakbar@gmail.com </span> </p>
                <p className={`${styles.heroSubText} text-white-100`}> Phone:  <span className="text-[#915eff]"> +9100473242 <span className="text-white"> | </span> +9045028064 </span> </p>
          
                <fieldset>
                  <legend><span> My Hobbies </span></legend>
                      <button class="pulse-button"> Reading  </button>
                      <button class="pulse-button"> Sport  </button>
                      <button class="pulse-button"> Music  </button>
                      <button class="pulse-button"> Traveling  </button>
              </fieldset>
        </div>
      </div>
    </section>
  )
}

export default Hero