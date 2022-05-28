import styled from "styled-components";

export const StyledButton = styled.button`
background-color: ${(props)=>props.variantt==='border'?'#fff':'green'};
border: 2px solid black;
color: ${(props)=>props.variantt==='border'?'green':'#fff'};
height: 60px;
width: 200px;
cursor:pointer;
transition: 0.5s all ease-in;
font-size:18px;
`;