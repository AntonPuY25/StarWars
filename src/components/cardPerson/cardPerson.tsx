import React from 'react';
import style from './styles.module.scss';
import {TypeResponseData} from "../../store/interface/interface";
import {PATH} from "../../App";

export interface cardPersonProps {
    currentPerson: TypeResponseData;
    index: number
}

export function CardPerson({currentPerson,index}:cardPersonProps) {

    console.log(currentPerson,'item')



    return (
        <div className={style.container}>
           <div className={style.card}
                onClick={()=>window.location.pathname = `${PATH.currentPerson}/${index}`}>
                   {currentPerson?.name}
           </div>

        </div>
    );
}


