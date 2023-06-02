import styled from "styled-components";
export const Button=styled.button`
text-decoration:none;
max-width:auto;
background-color:rgb(98,84,243);
color:white;
padding:1.4rem 2.4rem;
border:none;
text-transform:uppercase;
text-align:center;
cursor:pointer; 
transition:all 0.3s ease;
-webkit-transition:all 0.3s ease 0s;
-moz-transition:all 0.3s ease 0s;s
-o-transition:all 0.3s ease 0s;

&:hover,
&:active{
  box-shadow:${({theme})=>theme.colors.shadowSupport};
  transform:scale(0.95)
}
a{
    text-decoration:none;
    font-size:1.8rem;
}
`;