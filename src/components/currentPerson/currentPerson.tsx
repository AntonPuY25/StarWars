import React, {useEffect} from 'react';
import style from './styles.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectStarWarsPerson} from "../../store/selectors";
import {getStarWarsPerson} from "../../store/reducer/actions";
import {Link, useParams} from "react-router-dom";
import {PATH} from "../../App";

export function CurrentPersonsStarWars() {

    const dispatch = useDispatch()
    const person = useSelector(selectStarWarsPerson)
    const {id} = useParams<{ id: string }>()


    console.log(person,'persons')

    useEffect(()=>{
     if(id){
         dispatch(getStarWarsPerson({id}))
     }
    },[])

    return (
        <div className={style.container}>
            {person?.name}
            <Link to={PATH.startPage}>Home</Link>
        </div>
    );
}


