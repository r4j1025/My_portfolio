import "./about.scss"

const About = () => {
    const email ="pushparajln1025@gmail.com";
  return (
    <div className='about'>
        <div className='div1'>
            <h2>"I started self-education in Web technology and Cyber security post-school and learning MERN stack website development, website testing and cyber security through the Internet and online courses. My commitment to continuous learning ensures my skills remain up to date, as I aspire to secure and create robust web applications."</h2>
            <p><span>Education</span> : B. TECH in CSE (IoT and Cyber security including Blockchain technology)</p>
        </div>
        <div className='div2'>
            <button onClick={() => {
         navigator.clipboard.writeText(email);}}>Copy my email!</button>
        </div>
    </div>
  )
}

export default About