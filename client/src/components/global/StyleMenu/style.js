import styled from 'styled-components';

export const Menu = styled.section`
    border: 1px solid pink;
    height: 50%;
    width: 90%;
    display: flex;
    flex-direction: row;
`
export const Players = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    border: 3px solid black;
    background: yellow;
    flex-direction: column;
`
export const Parties = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    border: 3px solid white;
    background: red;
    flex-direction: column;
`

export const Column = styled.ul`
    display: flex;
    flex-direction: column;
`;
export const Line = styled.li`
    display: flex;
    width: 100%;
`;
export const Text = styled.p`
    border: 1px solid;
`;