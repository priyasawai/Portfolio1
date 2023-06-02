import React, { useContext, useEffect } from 'react'
import HeroSection from './HeroSection'
import styled from 'styled-components'
import { useGlobalContext } from '../Context'
const About = () => {
  const {AboutUpdate}=useGlobalContext();
  console.log(AboutUpdate)
   useEffect(()=>{
     AboutUpdate();
   },[])
   return (
    <>
      <HeroSection />
    </>
  )
}

const Wrapper=styled.section`

`;
export default About
