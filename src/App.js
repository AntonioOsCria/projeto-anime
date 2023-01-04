import React from 'react';

import { Header } from './components/Header/header.component';
import { MyAppRoutes } from './MyAppRouter';
import { GlobalStyle, Container } from './styles/global';

export function App() {
  return (
      <Container>
        <>
          <GlobalStyle />
          <Header />
          <MyAppRoutes />
        </>
      </Container>
   
  );
}

 
