import { motion } from "framer-motion";

const variants={
  open:{
    transition:{
      staggerChildren:0.1, //for one by one transition effect
    }
  },
  closed:{
    transition:{
      staggerChildren:0.05,
      staggerDirection:-1, //for closing in opposite direction

    }
  }
}
const itemVariants={
  open:{
    y:0,
    opacity:1
  },
  closed:{
    y:20,
    opacity:0
  }
}

const Links = () => {

const items=[
  "Homepage",
  "Services",
  "Portfolio",
  "Contact",
  "About",
];

  return (
    <motion.div className='links' variants={variants}>{items.map(item=>(
      <motion.a whileHover={{scale:1.1}} whileTap={{scale:0.95}} href={`#${item}`} variants={itemVariants} key={item}>{item}</motion.a>
    ))}</motion.div>
  )
}

export default Links