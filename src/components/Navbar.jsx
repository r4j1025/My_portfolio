import "./Navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "./Sidebar"

const Navbar = () => {
  return (
    <div className="navbar">

      <Sidebar/>

      <div className="wrapper">
        <motion.span
        initial={{opacity:0,scale:0.5}}
        animate={{opacity:1,scale:1}}
        transition={{duration:0.5}}
        >Portfolio</motion.span>
        <div className="social">
          <a target="_blank" href="https://www.linkedin.com/in/pushparajln/"><img className="linkedin" src="/linkedin2.png"/></a>
          <a target="_blank" href="https://www.instagram.com/rxj.ln/"><img src="/instagram.png"/></a>
          <a target="_blank" href="https://github.com/r4j1025"><img src="/github.png"/></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar