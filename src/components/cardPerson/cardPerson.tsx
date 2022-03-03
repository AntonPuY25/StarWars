import React from 'react';
import style from './styles.module.scss';
import {TypeResponseData} from "../../store/interface/interface";
import cardImg from '../../assets/img/pictureTest.webp';
export interface cardPersonProps {
    currentPerson: TypeResponseData;
}

export function CardPerson({currentPerson}:cardPersonProps) {

    console.log(currentPerson,'item')



    return (
        <div className={style.container}>
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


