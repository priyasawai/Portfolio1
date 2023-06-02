import { Button } from '../Styles/Button'
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { FaInstagram,FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <div className='contact-short'>
        <div className='grid grid-two-column'>
        <div>
        <h3>Ready to started</h3>
        <h3>Talk to us</h3>
          <NavLink><Button>Get Started</Button></NavLink>
        </div>
        </div>
       </div>
       <footer>
        <div className='container grid grid-four-column'>
          <div className='footer-about'>
            <h3>Sawai Technical</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo et dignissimos omnis facilis repellendus consequuntur?</p>
          </div>
          <div className='footer-subscribe'>
            <h3>Subscribe to get important updates</h3>
            <form action="#" >
              <input type='email' 
               required
               autoComplete='off'
               placeholder='Email'
               />
               <input type='submit' value="Subscribe" className='input12'/>
              </form>        
          </div>
          <div className='footer-social'>
            <h3>Follows Us</h3>
            <div className='footer-social-icons'>
          <NavLink to="https://www.linkedin.com/in/priyanka-sawai-833418222/"><div><FaLinkedinIn className="icons"/></div></NavLink>
        <NavLink to='https://www.instagram.com/priyasawai/'><div><FaInstagram className="icons"/></div></NavLink>
       <NavLink to="https://www.youtube.com/playlist?list=PLYQ2VbKNw3au1rT0co3S1uN6TvRusNZVZ" target="_blank"><div><FaYoutube className="icons"/></div></NavLink> 
        </div>
        </div>
        <div className='footer-contact'>
          <h3>Call Us</h3>
          <h3>91 9370408641</h3>
        </div>
          <div className='footer-bottom-section'>
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} ThapaTechnical. All Rights Reserved.
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
          </div>
        </div>
       </footer>
    </Wrapper>
  )
}
const Wrapper=styled.section`
.contact-short{
max-width:60vw;
margin:auto;
padding:5rem 10rem;
background-color:${({theme})=>theme.colors.bg};
border-radius:1rem;
box-shadow:${({theme})=>theme.colors.shadowSupport};
.grid div:last-child{
  justify-self:end;
  align-item:center;
}
}

footer{
  padding:14rem 0 9 rem 0;
  background-color:${({theme})=>theme.colors.footer_bg};

  h3{
    margin-top:25px;
     color:${({theme})=>theme.colors.hr};
     margin-buttom:2.4rem;
  }
  p{
    color:${({theme})=>theme.colors.white};
  }
 .input12{
  margin-left:20px;
  margin-top:20px;
 }
 .icons{
  width:50px;
  height:50px;
  color:white;
  padding:1rem;
  border:2px solid ${({theme})=>theme.colors.white};
  border-radius:50%;
 }
 .footer-social-icons{
  display:flex;
  gap:4px;
  cursor:pointer;
 }
 
 .footer-bottom-section {
  padding-top: 9rem;

  hr {
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.hr};
    height: 0.1px;
  }
}
}

@media(max-width:${({theme})=>theme.media.mobile}){
  .contact-short{
    max-width:95vw;
    padding:2rem;
    display:flex;
    justify-content:center;
    align-items:center;
  }
}


`;
export default Footer
