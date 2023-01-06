import React from 'react'

import { CardStyle } from './style';
import { useNavigate } from "react-router-dom";


export const Card = ({ id, image, name, status }) => {
  console.log(image, name, status);
  const Navigate = useNavigate();
  return (
    <CardStyle>
       <img src={image} alt="imagen"/>
        <div>
            <h1>{name}</h1>
            <p>Status</p>
            <span>| {status}</span>
        </div>
        <div>
          <button onClick={onRedirect}>
              More info
          </button>
        </div>
    </CardStyle>
  )

  function onRedirect() {
    
    Navigate(`info/${id}`);
  }
 

};


