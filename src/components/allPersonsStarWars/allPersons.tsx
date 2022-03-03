import React, {useEffect, useMemo} from 'react';
import style from './styles.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectIsLoading, selectStarWarsCountPersons, selectStarWarsPersons} from "../../store/selectors";
import {getStarWarsPersons} from "../../store/reducer/actions";
import {PaginationComponent} from "../pagination/pagination";
import {CardPerson} from "../cardPerson/cardPerson";
import {Empty, Spin} from "antd";

export function AllPersonsStarWars() {

    const dispatch = useDispatch()
    const persons = useSelector(selectStarWarsPersons)
    const countPersons = useSelector(selectStarWarsCountPersons)
    const isLoading = useSelector(selectIsLoading)

    useEffect(()=>{
        dispatch(getStarWarsPersons({
            page: '1'
        }))
    },[])

    const currentPersonCard = useMemo(()=>{
        if(persons?.length){
            return persons?.map((person,index)=><CardPerson key={index} currentPerson={person} index={++index}/>)
        }else{
        return <div className={style.empty}>
            <Empty description="Список Пуст" className={style.description}/>
            </div>
        }
    },[persons])


    return (

                <div className={style.container}>
                    {isLoading ?<div  className={style.loading}> <Spin  size="large"/></div> :
                        <div>
                            <div className={style.number}>
                                {countPersons && <PaginationComponent countPage={countPersons}/>}
                            </div>
                            <div className={style.containerCard}>
                                {currentPersonCard}
                            </div>
                        </div>}
                </div>
    );
}


