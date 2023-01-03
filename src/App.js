import React from 'react';
import MyAppRoutes from "./MyAppRoutes";

import { Header } from '../src/components/Header/header.component';

export default function App() {
  return (
    <>
      <Header />
      <MyAppRoutes />
    </>
  );
}