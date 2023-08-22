import logo from './logo.svg';
import React from 'react';

import './App.css';
import Banner from './components/banner/Banner';
import Home from './components/home/Home';
import GridSeries from './components/home/GridSeries';
import Seasons from './components/home/Seasons';
import Movies from './components/home/Movies';
import { Routes, Route, Link } from "react-router-dom";
import HomeScreen from './components/home/HomeScreen';
import Player from './components/Player';
import Episodes from './components/listepisodes/Episodes'
import Subir from './components/Subir';
class App extends React.Component {
  render() {
    return (
      <Routes>
        
        <Route path='/' element ={<HomeScreen/>}/>
        <Route path='/episode/:id' element ={<Player/>} />
        <Route path='/series/:id' element ={<Episodes/>} />
        <Route path='/subir' element ={<Subir/>} />
      </Routes>

    );
  }
}

export default App;