import React from 'react'
import axios from 'axios';


import { PanelInfo } from '../../components/panel/panel.info';
import { Container } from '../../styles/global'
export const InfoPage = () => {
  const params = new URLSearchParams(window.location.pathname);
  const id = params.get("id");
  console.log(params);

  const GetCharacter = () => {
 
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => console.log(res.data.results))
      .catch((err) => {console.log(err);});
}

  return (
    <Container>
        <PanelInfo />
    </Container>
  
);
}