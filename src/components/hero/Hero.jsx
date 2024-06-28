import "./hero.scss";
import { motion } from "framer-motion";


const textVariants={
  initial:{
    x:-500,
    opacity:0,
    
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
      
    }
  },
  scrollButton:{
    opacity:0,
    y:25,
    transition:{
      duration:2.5,
      repeat:Infinity,
    }
  }
}

const sliderVariants = {
  initial:{
    x:0,
  },
  animate:{
    x:"-300%",
    transition:{
      duration:20,
      repeat:Infinity,
      repeatType:"mirror",
    }
  }
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div variants={textVariants} initial="initial" animate="animate" className="textContainer">
          <motion.h2 variants={textVariants}>PUSHPARAJ L</motion.h2>
          <motion.h1 variants={textVariants}>Web developer and Cybersecurity enthusiast</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>See my works</motion.button>
            <motion.button variants={textVariants}>Contact me</motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div variants={sliderVariants} initial="initial" animate="animate" className="slidingTextContainer">
        patience and perseverance
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
