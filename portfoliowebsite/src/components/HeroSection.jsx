import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../Styles/Button'
//import { AppContext } from '../Context'
import { useGlobalContext } from '../Context'
const HeroSection = () => {
    const {name,image}=useGlobalContext();
   // console.log(firstname)
  return (
    <Wrapper>
    <div className='container grid grid-two-column'>
      <div className='section-hero-data'>
        <p className='hero-top-data'>THIS IS ME</p>
        <h1 className='hero-heading'>{name}</h1>
        <p className='hero-para'>
            I'm {name} 27 years old. A Full Stack Devaloper, Youtuber and 
            freelancer. 
        </p>
        <Button className='btn hireme-btn'>
         <NavLink to='/contact'>Hire Me</NavLink>
        </Button>
      </div>
      <div className='section-hero-image'>
        <picture>
        <img src={image}/>
        </picture>
      
      </div>
    </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
 padding:9rem 0;
 .section-hero-data{
    display:flex;
    flex-direction:column;
    justify-content:center;
 }
 .btn{
    max-width:16rem;
 }

 .hero-top-data{
    text-transform:uppercase;
    font-weight:bold;
    font-size:1.5rem;
    color:${({theme})=>theme.colors.helper}

 }
 .hero-heading{
    text-transform:uppercase;
    font-size:6.4rem;
 }
 .hero-para{
    margin-top:1.5rem;
    margin-bottom:3.4rem;
    max-width:60rem;
 }
 .section-hero-image{
    display:flex;
    justify-content:center;
    align-items:center;
 }
 
`;
export default HeroSection