import React from 'react';
import style from './styles.module.scss';
import {useSelector} from "react-redux";
import {selectIsLoading, selectStarWarsPerson} from "../../store/selectors";
import {FullModeCardPerson} from "../fullModeCardPerson/fullModeCardPerson";
import {Spin} from "antd";

export function CurrentPersonsStarWars() {

    const person = useSelector(selectStarWarsPerson)
    const isLoading = useSelector(selectIsLoading)

    return (
        <div className={style.currentPersonContainer}>
            {isLoading? <div  className={style.loading}> <Spin  size="large"/></div> :
                (person?.name && <FullModeCardPerson currentPerson={person}/>)}
        </div>
    );
}


