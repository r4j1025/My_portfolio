import "./portfolio.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items=[
    {
        id:1,
        title:"Raj Estate",
        img:"/p2.png",
        url:"https://mern-estate-x2b8.onrender.com/",
        desc:"a full-stack real estate website incorporating state management with Redux Toolkit, user authentication utilizing JWT, Firebase, cloud database integration, and user data management through MongoDB."
    },
    {
        id:2,
        title:"Ragul Constructions",
        img:"/p1.png",
        url:"https://ragulconstructions.netlify.app/",
        desc:"a Reactjs based commercial website with modern UI and 3D elements."
    },
];

const Single = ({ item }) => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  
    return (
      <section >
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button><a target="_blank" href={item.url}>Goto site</a></button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

const Portfolio = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"],
    });
  
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
    });
  
    return (
      <div className="portfolio" ref={ref}>
        <div className="progress">
          <h1>Featured Projects</h1>
          <motion.div style={{ scaleX:scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    );
  };

export default Portfolio