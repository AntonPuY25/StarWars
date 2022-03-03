import React, {useEffect, useMemo} from 'react';
import style from './styles.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectStarWarsCountPersons, selectStarWarsPersons} from "../../store/selectors";
import {getStarWarsPersons} from "../../store/reducer/actions";
import {PaginationComponent} from "../pagination/pagination";
import {CardPerson} from "../cardPerson/cardPerson";

export function AllPersonsStarWars() {

    const dispatch = useDispatch()
    const persons = useSelector(selectStarWarsPersons)
    const countPersons = useSelector(selectStarWarsCountPersons)

    console.log(persons,'persons')

    useEffect(()=>{
        dispatch(getStarWarsPersons({
            page: '1'
        }))
    },[])

    const currentPersonCard = useMemo(()=>{
        if(persons?.length){
            return persons?.map((person,index)=><CardPerson currentPerson={person} index={++index}/>)
        }
    },[persons])


    return (
        <div className={style.container}>
            <PaginationComponent countPage={countPersons}/>
           <div className={style.containerCard}>
               {currentPersonCard}
           </div>

        </div>
    );
}


