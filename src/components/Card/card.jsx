import React from 'react'

import { CardStyle } from './style';

export const Card = ({ image, name, status }) => {
  console.log(image, name, status);
  return (
    <CardStyle>
       <img src={image} alt="imagen"/>
        <div>
            <h1>{name}</h1>
            <p>Status</p>
            <span>| {status}</span>
        </div>
        <div>
          <button onClick={Event}>
              More info
          </button>
        </div>
    </CardStyle>
  )
};


