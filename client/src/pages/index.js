import React, {useState} from 'react'
import {Wrapped, StyledA, StyledH1, StyledImg} from '../components/global/style';
import Link from 'next/link';
const App = () => {
  return (
    <Wrapped>
      {/* <StyledImg src="/space.jpg" /> */}
      <StyledH1>TETRIS 2020</StyledH1>
      <Link passHref href="/menu" >
        <StyledA>menu</StyledA> 
      </Link>
    </Wrapped>
  )
}

export default App;