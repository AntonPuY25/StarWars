import React, {useEffect, useMemo} from 'react';
import style from './styles.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectStarWarsPersons} from "../../store/selectors";
import {getStarWarsPersons} from "../../store/reducer/actions";
import {PaginationComponent} from "../pagination/pagination";
import {Card, DatePicker} from "antd";
import {CardPerson} from "../cardPerson/cardPerson";
import {TypeResponseData} from "../../store/interface/interface";

export function AllPersonsStarWars() {

    const dispatch = useDispatch()
    const persons = useSelector(selectStarWarsPersons)

    console.log(persons,'persons')

    useEffect(()=>{

        dispatch(getStarWarsPersons(''))
    },[])

    const currentPersonCard = useMemo(()=>{
        if(persons?.length){
            return persons?.map(person=><CardPerson currentPerson={person}/>)
        }
    },[persons])


    return (
        <div className={style.container}>
            <PaginationComponent/>
           <div className={style.containerCard}>
               {currentPersonCard}
           </div>

        </div>
    );
}


