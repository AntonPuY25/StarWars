import React, {ChangeEvent, useState} from 'react';
import style from './styles.module.scss';
import logo from '../../assets/img/sw-logo.png';
import { useDispatch } from 'react-redux';
import {getStarWarsPersons, searchStarWarsPersonsSuccess, setCurrentPageSuccess} from "../../store/reducer/actions";


export function Header() {

    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState('')

    const searchPerson = () =>{
        dispatch(searchStarWarsPersonsSuccess(searchValue))
        dispatch(setCurrentPageSuccess(1))
        dispatch(getStarWarsPersons({page:'1',title: searchValue}))
    }


    return (
        <div className={style.headerContainer}>
                <div className={style.headerLogo}>
                    <img src={logo} alt="logo"/>
                </div>
                <div className={style.searchContainer}>
                   <div className={style.searchText} >
                       <input className={style.search}
                              onChange={(e)=>setSearchValue(e.target.value)}
                              placeholder="Search Star Wars"/>
                       <button className={style.searchButton} onClick={searchPerson}/>
                   </div>

                </div>
        </div>
    );
}


