
import {useState, useRef} from 'react';
import { motion } from 'framer-motion';
import emailjs  from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas, StarsCanvas } from './canvas'; 
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name:'', email:'', message:''})
  const [loading, setLoading]= useState(false)

  const handleChange = (e)=> {
    const {name, value} = e.target
    setForm({...form , [name]: value})
  }

  const handleSumbit = (e)=> {
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_myecvbh', 'template_scugigi',
      {
        from_name: form.name,
        to_name: 'Ali Akbar Sazish',
        from_email:form.email,
        to_email:'sazishaliakbar@gmail.com',
        message: form.message
      },
      'FdmjrX6OKj2YgQN-c'
    ).then(()=> {
      setLoading(false);
      alert('Thank you. I get back to you as soom as possible!');
      setForm({  name:'', email:'', message:''})
    }, (error)=>{
      setLoading(false);
      console.log(error);
      alert("Something went to wrong!")
    })
  }
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div variants={slideIn("left", "tween", 0.2, 1)}  className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
          <p className={`${styles.sectionSubText}`}> Get in touch </p>
          <h3 className={`${styles.sectionHeadText} inline`}> Contact. </h3>
          <form ref={formRef} onSubmit={handleSumbit} className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="text-white font-meduim mb-3"> Your Name </span>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What is your name ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-meduim" />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-meduim mb-3"> Your Email </span>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder='What is your eamil ?'
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-meduim" />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-meduim mb-3"> Your Message </span>
              <textarea rows={6} name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-meduim" />
            </label>
            <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bolde shadow-md shadow-primary rounded-xl"> {loading ? "Sending..." : "Send"} </button>
          </form>
        </motion.div>
        <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl-h-auto md-h-[600px] h-[500px]">
          <EarthCanvas />
        </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")