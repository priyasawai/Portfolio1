import React from 'react'
import { Sdata } from '../Sdata'
import Card from './Card'
import styled from 'styled-components'
const Services = () => {
  console.log(Sdata)
  return (
    <Wrapper>
    <h1>Our Services</h1>
    <div className='container grid grid-three-column'>
      {
        Sdata.map((item,index)=>{
          return<Card  key={index} img={item.image} para={item.para} title={item.title}/>
        })
      }
    </div>
    </Wrapper>
    )
}

const Wrapper=styled.section`
h1{
  text-align:center;
  margin-top:20px;
  font-size:4rem;
  color:red;
}
@media(max-width:${({theme})=>theme.media.mobile}{
  .grid-three-column{
    margin-right:20px;
  }
}
`;
export default Services
