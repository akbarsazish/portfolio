import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {FaCloudDownloadAlt } from 'react-icons/fa';

import { styles } from '../styles';
import { logo, menu, close, cv} from '../assets';
import { navLinks } from '../constants/index';


const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center mx-w-7xl mx-auto">
        <Link className="flex items-center gap-2" to="/" onClick={()=>{setActive(""); window.scrollTo(0,0)} }>
          <img className="w-9 h-9 object-contain" src={logo} alt="logo" />
           <p className="text-white font-bold cursor-pointer text[16px] flex"> Ali Akbar Sazish </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {
            navLinks.map((link)=>(
              <li key={link.id} className={`${active===link.title? "text-white" : "text-secondary"}
                   hover:text-white font-meduim cursor-pointer text[20px] `}
                   onClick={()=>{setActive(link.title);}}>
                <a href={`#${link.id}`}> {link.title} </a>
              </li>
            ))
          }
          <li className="text-whitehover:text-white font-meduim cursor-pointer text[18px]">
          <a href={cv} download="Ali Akbar Sazish CV.pdf" target='_blank'>
             Reusme <FaCloudDownloadAlt className="inline" />
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 items-center justify-end">
          <img className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={()=>{setToggle(!toggle)}} src={toggle ? close : menu} alt="menu" />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-12 right-0 mx-4 my-2 min-width-[144px] z-10 rounded-xl`}> 
              <ul className="list-none flex justify-end items-start flex-col gap-4">
              { navLinks.map((link)=>(
                  <li key={link.id} className={`${active===link.title? "text-white" : "text-secondary"}
                      font-poppins font-medium cursor-pointer text[16px] `}
                      onClick={()=>{setActive(link.title); setToggle(!toggle)}}>
                    <a href={`#${link.id}`}> {link.title} </a>
                  </li>
              )) }
               <li className="text-whitehover:text-white font-meduim cursor-pointer text[18px]">
               <a href={cv} download="Ali Akbar Sazish CV.pdf" target='_blank'>
                     Reusme <FaCloudDownloadAlt className="inline" /> </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar