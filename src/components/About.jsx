import { useState } from "react";
import "./about.scss"

const About = () => {
    const email ="pushparajln1025@gmail.com";
  return (
    <div className='about'>
        <div className='div1'>
            <h2>"Hi, I’m Pushparaj L, a passionate software developer with a strong foundation in software development and problem-solving, I am constantly enhancing my skills by building innovative projects and solving complex problems on platforms like LeetCode.
I specialize in full-stack web development using the MERN stack and have experience developing microservices with Spring Boot. During my academics, I’ve worked as a freelance web developer, delivering scalable and user-friendly solutions to clients."</h2>
            <p><span>Education</span> : B. TECH in CSE (IoT and Cyber security including Blockchain technology)</p>
        </div>
        <div className='div2'>
            <button><a href="#Contact">Contact me</a></button><br/>
        </div>
    </div>
  )
}

export default About