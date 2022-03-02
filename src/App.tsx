import React from 'react';
import style from './assets/styles/styles.module.scss'
import {AllPersonsStarWars} from "./components/allPersonsStarWars/allPersons";
import {CurrentPersonsStarWars} from "./components/currentPerson/currentPerson";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom';


export const PATH = {
  startPage: '/',
  currentPerson: '/person'
}

function App() {
  return (
    <div className={style.container}>

        <Router>
        <Routes>
          <Route path={PATH.startPage} element={ <AllPersonsStarWars />} />
          <Route path={PATH.currentPerson + '/:id'} element={<CurrentPersonsStarWars/>}/>
        </Routes>

            <Link to={PATH.startPage}>Home</Link>
            <Link to={`${PATH.currentPerson}/2`}>Current Person</Link>
        </Router>


    </div>
  );
}

export default App;
