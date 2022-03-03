import React from 'react';
import style from './styles.module.scss';
import {TypeResponseData} from "../../store/interface/interface";

export interface cardPersonProps {
    currentPerson: TypeResponseData;
}

export function CardPerson({currentPerson}:cardPersonProps) {

    console.log(currentPerson,'item')



    return (
        <div className={style.container}>
           <div className={style.card}>
                   {currentPerson?.name}
           </div>

        </div>
    );
}


