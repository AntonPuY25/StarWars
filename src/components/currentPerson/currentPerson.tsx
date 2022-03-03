import React, {useEffect} from 'react';
import style from './styles.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectStarWarsPerson} from "../../store/selectors";
import {getStarWarsPerson} from "../../store/reducer/actions";
import {useParams} from "react-router-dom";
import {FullModeCardPerson} from "../fullModeCardPerson/fullModeCardPerson";

export function CurrentPersonsStarWars() {

    const dispatch = useDispatch()
    const person = useSelector(selectStarWarsPerson)
    const {id} = useParams<{ id: string }>()

    useEffect(()=>{
     if(id){
         dispatch(getStarWarsPerson({id}))
     }
    },[])

    return (
        <div className={style.currentPersonContainer}>
            {person && <FullModeCardPerson currentPerson={person}/>}
        </div>
    );
}


