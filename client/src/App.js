import './App.css';
import React from "react";
import { Route } from "react-router";
import Home from './components/Home/Home.js'
import LandingPage from './components/LandingPage/LandingPage.js'
import DetailPokemon from './components/DetailPokemon/DetailPokemon.js'
import CreatePokemon from './components/CreatePokemon/CreatePokemon.js'

function App() {
  return (
    <div className="App">
      {/* <h1>Henry Pokemon</h1> */}
      <Route path='/' exact component={LandingPage}/>
      <Route path='/home'  component={Home}/>
      <Route path='/pokemon/create'  component={CreatePokemon}/>
      <Route path='/pokemon/detail/:id'component={DetailPokemon}/>
   
    </div>
  );
}

export default App;
