import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Container } from "../../styles/global";
import { Card } from '../../components/Card/card';


export const MainPage = () => {
  const [data, setData] = useState([]);
  useEffect(()  => {
    GetRick();
  }, []); 
  
  
  const GetRick = () => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setData(res.data.results))
      .catch((err) => {console.log(err);});
}
  return (
    <Container>
      {data.map((character) => (
        <Card
            image={character.image}  
            name={character.name} 
            status={character.status}/>
      ))}
        
    </Container>
   
);
}