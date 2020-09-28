import React, {useState} from 'react'
import {Wrapped, StyledA, StyledH1, StyledImg} from '../components/global/style';
import Link from 'next/link';
import socketIOClient from "socket.io-client";


const ENDPOINT = "http://127.0.0.1:4000";
const socket = socketIOClient(ENDPOINT);

const App = () => {
  return (
    <Wrapped>
      <StyledH1>TETRIS 2020</StyledH1>
      <Link passHref href="/menu" >
        <StyledA>menu</StyledA>
      </Link>
    </Wrapped>
  )
}

export default App;