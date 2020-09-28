import React, {useState} from 'react'
import {Wrapped, StyledA, StyledH1} from './style';
import Link from 'next/link';

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