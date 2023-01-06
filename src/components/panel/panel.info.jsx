import React from 'react'

import { PanelStyle, Paragraf, Picture, Title, Span, Wrapper } from './panel.style'


export const PanelInfo = () => {
  return (
    <PanelStyle>
     <Wrapper>
         <Title>Rick Sanchez </Title>
         <Picture src='https://rickandmortyapi.com/api/character/avatar/1.jpeg'/>
         <Paragraf>Status</Paragraf>
         <Span>| Alive</Span>
    </Wrapper>
     
    </PanelStyle>
  )
};


