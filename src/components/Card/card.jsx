import React from 'react'

import { CardStyle } from './style';

export const Card = () => {
  return (
    <CardStyle>
       <img src="https://picsum.photos/200/300" alt="imagen"/>
        <div>
            <p>Informações</p>
            <span>|</span>
        </div>
    </CardStyle>
  )
};


