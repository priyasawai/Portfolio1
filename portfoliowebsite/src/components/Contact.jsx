import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wrapper>
      <h2>Feel Free to Contact us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.098320626032!2d79.1508820744368!3d21.108645985031547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b88442cf41fd%3A0xc58aaf8765563c0f!2sBahadura%20Rd%2C%20Dighori%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1685430197695!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     <div className="container">
      <div className='contact-form'>
        <form action="https://formspree.io/f/mpzeeeqw" method="POST" className='contact-inputs'>
          <input type='text' name='username' placeholder='Usename'autoComplete='off' required/>
          <input type="email" name="Email" placeholder='Email' autoComplete='off' required/>
          <textarea name="message" col="30" rows="6" autoComplete='off' required></textarea>
          <input type="submit" value="send"/>
        </form>
      </div>
     </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
 h2{
  margin:30px;
  font-size:3.5rem;
  font-weight:bold;
 }
 .container{
  margin-top:6rem;
  text-align:center;
 }
 .contact-form{
  max-width:50rem;
  margin:auto;
 }
  .contact-inputs{
   display:flex;
   flex-direction:column;
   gap:3rem;
  }
  input[type="submit"]{
    width:70px;
    background-color:rgb(27, 137, 247);
    cursor:pointer;
    transition:all 0.2s;
    color:#fff;
    margin-bottom:20px;
  }
`;
export default Contact
