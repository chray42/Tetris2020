import React, {useState} from 'react'
import {Wrapped, StyledA} from './style';
import Link from 'next/link';

const Menu = () => {
  return (
    <Wrapped>
      <Link passHref href="/" >
          <StyledA>retour</StyledA>
        </Link>
    </Wrapped>
  )
}

export default Menu;