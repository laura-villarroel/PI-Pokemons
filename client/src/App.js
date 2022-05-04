import './App.css';
import React from "react";
import { Route } from "react-router";
import Home from './components/Home/Home.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import DetailPokemon from './components/DetailPokemon/DetailPokemon.jsx'
import CreatePokemon from './components/CreatePokemon/CreatePokemon.jsx'

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
