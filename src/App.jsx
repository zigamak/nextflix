import React from 'react';
import "./app.scss"
import { GlobalStyle } from './GlobalStyle';
import Home from "./pages/Home"
import Login from './pages/Login';
import Register from "./pages/Register"

const App = () => (
  <div>
    <Login/>
    <GlobalStyle />
  </div>
);

export default App;
