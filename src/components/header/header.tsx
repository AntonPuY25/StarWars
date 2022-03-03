import React from 'react';
import style from './styles.module.scss';
import logo from '../../assets/img/sw-logo.png';


export function Header() {


    return (
        <div className={style.headerContainer}>
                <div>
                    <img src={logo} alt="logo"/>
                </div>
                <div className={style.searchContainer}>
                   <form className={style.searchText} action="search" method="get">
                       <input className={style.search} type="text" name="search" placeholder="Search Star Wars"/>
                       <button className={style.searchButton}></button>
                   </form>

                </div>
        </div>
    );
}


