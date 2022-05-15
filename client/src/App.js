import './App.css';
import React from 'react';
import { Route } from 'react-router';
import Home from './components/Home/Home.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import DetailsPokemon from './components/DetailsPokemon/DetailsPokemon.jsx';
import CreatePokemon from './components/CreatePokemon/CreatePokemon.jsx';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001';

function App() {
  return (
    <div className="App">
      {/* <h1>Henry Pokemon</h1> */}
      <Route path="/" exact component={LandingPage} />
      <Route path="/home" component={Home} />
      <Route path="/pokemon/create" component={CreatePokemon} />
      <Route path="/pokemon/detail/:id" component={DetailsPokemon} />
    </div>
  );
}

export default App;
