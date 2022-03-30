import styled from "styled-components";

const Button=styled.button`

border-style:${(props)=>props.border || "solid"} ;
background:${(props)=>props.primary?"dodgerblue":"transparent"};
color:${(props)=>props.color || "black"};
padding: 8px;
margin-top: 3%;
margin-left: 10px;
width: 160px;
font-size:16px;
font-weight:0;

&:hover{
   cursor:pointer; 
   border: 2px solid black;
}
`

export{Button}