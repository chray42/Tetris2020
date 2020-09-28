import React, {useState} from 'react'
import {Menu, Parties, Players, Text, Line, Column} from './style';
import Link from 'next/link';

const Elem = ({str}) => {
    return (
        <Line>
            <Text>{str}</Text>
        </Line>
    )
}

const Screen = () => {
    const tab = ["salut", "lolo", "psdd", "sdfsf", "sgsrgsrg"]
  return (
    <Menu>
       <Players> 
            <Column>
                {
                    tab.map((s, i) =>
                        <Elem str={s} /> 
                    )
                }
            </Column>
       </Players> 
       <Parties>
            <Column>
                {
                    tab.map((s, i) =>
                        <Elem str={s} /> 
                    )
                }
            </Column>
       </Parties>
    </Menu>
  )
}

export default Screen;