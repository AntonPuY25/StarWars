import React from 'react';
import style from './styles.module.scss';
import {TypeResponseData} from "../../store/interface/interface";
import {PATH} from "../../App";
import cardImg from '../../assets/img/pictureTest.webp';
import {getStarWarsPerson, searchStarWarsPersonsSuccess} from "../../store/reducer/actions";
import { useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
export interface cardPersonProps {
    currentPerson: TypeResponseData;
}

export function CardPerson({currentPerson}:cardPersonProps) {

    const dispatch = useDispatch();

    return (
      <Link to={PATH.currentPerson}>
          <div className={style.container}
               onClick={()=>dispatch(getStarWarsPerson({title:currentPerson.name}))}>
              <div className={style.cardImg}>
                  <img src={cardImg} alt="image"/>
              </div>
              <div className={style.cardInfo}>
                  <h1 className={style.cardName}>
                      {currentPerson?.name}
                  </h1>
                  <p className={style.cardYear}>
                      {currentPerson?.birth_year}
                  </p>
              </div>
          </div>
      </Link>
    );
}


