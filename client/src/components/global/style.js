import styled from 'styled-components';

export const Wrapped = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url('/space.jpg');
    background-size: cover;
`;

export const StyledImg = styled.img`
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
`

export const StyledH1 = styled.h1`
color: #ffd166;
font-family: Pixel, Arial, Helvetica, sans-serif;
position: absolute;
top: 30px;
font-size: 60px;
`;

export const StyledA = styled.a`
box-sizing: border-box;
width: 150px;
text-align: center;
align-self: center;
margin: 0 0 20px 0;
padding: 20px;
min-height: 30px;
justify-content: center;
border-radius: 20px;
border: none;
color: black;
background: #ffd166;
font-family: Pixel, Arial, Helvetica, sans-serif;
font-size: 1rem;
outline: none;
cursor: pointer;
transition: 0.3s ease;
&:hover{
    transform: scale(1.5);
}
`;