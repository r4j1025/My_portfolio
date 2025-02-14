import "./skills.scss";

import React from 'react'
import styled from 'styled-components'
import { skills } from './Data.jsx'
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
  }}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;



const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }


`

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
`

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`


const Skills = () => {
  return (
    <div className="skills">
    <Container id="skills">
      <Wrapper>
        <motion.div className="t" initial={{opacity:0}} transition={{duration:1}} whileInView={{opacity:1}} variants ={textVariants}>Skills Summary</motion.div>
        <SkillsContainer className="skillc">
          {skills.map((skill) => (
            <motion.div className="s" initial={{opacity:0}} transition={{duration:1}} whileInView={{opacity:1}} variants ={textVariants}>
              <SkillTitle className="skillt">{skill.title}</SkillTitle>
              <SkillList className="skilll">
                {skill.skills.map((item) => (
                  <SkillItem key={item.name}>
                    <SkillImage key={item.image} src={item.image}/>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </motion.div>
          ))}

        </SkillsContainer>
      </Wrapper>
    </Container>
    </div>
  )
}

export default Skills