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
          <motion.h1 variants={textVariants}>Software Developer and Web Technology enthusiast</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button  variants={textVariants}><motion.a href="#Projects">See my works</motion.a></motion.button>
            <motion.button  variants={textVariants}><motion.a href="https://drive.google.com/drive/folders/1D2y-pE0BV3ABJxzO4qqoppN_Iq82Ydis?usp=sharing">Check my resume!</motion.a></motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div variants={sliderVariants} initial="initial" animate="animate" className="slidingTextContainer">
        Patience and Perseverance
      </motion.div>
      <div className="imageContainer">
        <img className="img1" src="/bg.png" alt="" />
        <img className="img2" src="/b5.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
