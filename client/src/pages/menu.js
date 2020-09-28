import React, {useState} from 'react'
import {Wrapped, StyledA, StyledH1} from '../components/global/style';
import Screen from '../components/global/StyleMenu/'
import Link from 'next/link';

const Menu = () => {
  return (
    <Wrapped>
        <StyledH1>TETRIS 2020</StyledH1>
        <Screen />
      <Link passHref href="/" >
          <StyledA>retour</StyledA>
        </Link>
    </Wrapped>
  )
}

export default Menu;