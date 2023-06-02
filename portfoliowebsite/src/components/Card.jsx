import React from 'react'
import styled from 'styled-components';
import {NavLink }from 'react-router-dom'
const Card = (props) => {
  return (
    <Wrapper>
    <div className="container1 grid grid-three-column"> 
    <div className="card ">
           <img src={props.img} class="card-img-top" alt="..."/> 
          <div className="card-body">
         <h5 className="card-title font-weigth-bold">{props.title}</h5>
    <p className="card-text">{props.para}</p>
    <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
    </div>
    </div>
    </div>
    </Wrapper>
    )
}

const Wrapper =styled.section`
.container1{
    width:120px;
    padding:40px;
.card{
    width:270px;
    height:320px;
    display:flex;
    justify-content:center;
    border-radius:10px 10px;
}
}
.cardImage{
    width:200px;
    height:200px;
}
&::after{
  content:"";
  position:absolute;
  top:0;
  left:0,
  width:0%,nh
  height:100%;
  cursor:pointer;
}
&:hover::after{
    width:100%;
}
&:hover img{
    transform:scale(1.2);
}
`;
export default Card
