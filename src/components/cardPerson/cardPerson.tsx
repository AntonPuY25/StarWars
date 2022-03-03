import React from 'react';
import style from './styles.module.scss';
import {TypeResponseData} from "../../store/interface/interface";
import {PATH} from "../../App";
import cardImg from '../../assets/img/pictureTest.webp';
export interface cardPersonProps {
    currentPerson: TypeResponseData;
    index: number
}

export function CardPerson({currentPerson,index}:cardPersonProps) {

    return (
        <div className={style.container}
             onClick={()=>window.location.pathname = `${PATH.currentPerson}/${index}`}>
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
    );
}


