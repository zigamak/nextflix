import React from 'react';
import "./app.scss"
import { GlobalStyle } from './GlobalStyle';
import Home from "./pages/Home"

const App = () => (
  <div>
    <Home/>
    <GlobalStyle />
  </div>
);

export default App;
