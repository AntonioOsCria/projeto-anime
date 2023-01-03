import React from 'react'

import { CardStyle } from './style';

export const Card = ({ title, information }) => {
  return (
    <CardStyle>
       <img src="https://picsum.photos/200/300" alt="imagen"/>
        <div>
            <h1>{title}</h1>
            <p>Information</p>
            <span>{information}|</span>
        </div>
    </CardStyle>
  )
};


