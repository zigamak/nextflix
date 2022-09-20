import React from 'react';
import "./app.scss"
import { GlobalStyle } from './GlobalStyle';
import Home from "./pages/Home"
import Watch from "./pages/Watch"

const App = () => (
  <div>
    <Watch/>
    <GlobalStyle />
  </div>
);

export default App;
