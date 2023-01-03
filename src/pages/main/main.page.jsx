import React, { useState } from 'react';

import axios from 'axios';
import { Container } from "../../styles/global";
import { Card } from '../../components/Card/card';


export const MainPage = () => {
  const [data, setData] = useState();
  axios.get("https://rickandmortyapi.com/api/character"
)
.then(function (response) {
 
  console.log(response.data);
})
.catch(function (error) {
  
  console.log(error);
})
;
  
  return (
    <Container>
      <Card 
            image= "https://rickandmortyapi.com/api/character/avatar/1.jpeg" 
            name="Title ind Card" 
            status={"Test"}/>
    </Container>
   
);
}