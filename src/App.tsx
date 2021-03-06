import React from 'react';
import style from './assets/styles/styles.module.scss'
import {AllPersonsStarWars} from "./components/allPersonsStarWars/allPersons";
import {CurrentPersonsStarWars} from "./components/currentPerson/currentPerson";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Header} from "./components/header/header";


export const PATH = {
  startPage: '/StarWars',
  currentPerson: '/person'
}

function App() {
  return (
    <div className={style.body}>

        <Header/>
        <Router>
        <Routes>
          <Route path={PATH.startPage} element={ <AllPersonsStarWars />} />
          <Route path={PATH.currentPerson} element={<CurrentPersonsStarWars/>}/>
        </Routes>
        </Router>


    </div>
  );
}

export default App;
