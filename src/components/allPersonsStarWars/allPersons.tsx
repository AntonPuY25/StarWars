import React, {useEffect} from 'react';
import style from 'src/components/all-persons-star-wars/styles.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectStarWarsPersons} from "../../store/selectors";
import {getStarWarsPersons} from "../../store/reducer/actions";

export function AllPersonsStarWars() {

    const dispatch = useDispatch()
    const persons = useSelector(selectStarWarsPersons)

    console.log(persons,'persons')

    useEffect(()=>{

        dispatch(getStarWarsPersons(''))
    },[])
    return (
        <div className={style.container}>
            All Persons
        </div>
    );
}


