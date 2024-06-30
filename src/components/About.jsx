import { useState } from "react";
import "./about.scss"

const About = () => {
    const email ="pushparajln1025@gmail.com";
  return (
    <div className='about'>
        <div className='div1'>
            <h2>"I started self-education in Web technology and Cyber security post-school and learning MERN stack website development, website testing and cyber security through the Internet and online courses. I did Web development freelancing during my pre-final year. My commitment to continuous learning ensures my skills remain up to date, as I aspire to secure and create robust web applications."</h2>
            <p><span>Education</span> : B. TECH in CSE (IoT and Cyber security including Blockchain technology)</p>
        </div>
        <div className='div2'>
            <button><a target="_blank" href="https://drive.google.com/drive/folders/1D2y-pE0BV3ABJxzO4qqoppN_Iq82Ydis?usp=sharing">Check my resume!</a></button><br/>
        </div>
    </div>
  )
}

export default About