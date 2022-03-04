import React, {useState} from 'react';
import style from './styles.module.scss';
import {TypeResponseData} from "../../store/interface/interface";
import {Card} from "antd";
import StarWars from '../../assets/img/backgroundCard.webp';
import {RollbackOutlined} from "@ant-design/icons";
import {PATH} from "../../App";
import {Link} from "react-router-dom";
import {GetInfoForCurrentPerson} from "./helpers";


export interface cardPersonProps {
    currentPerson: TypeResponseData;
}

export function FullModeCardPerson({currentPerson}:cardPersonProps) {

    const arrDataPersonFields = [
        {
            field: 'Name',
            data: currentPerson.name,
        },
        {
            field: 'Birthday',
            data: currentPerson.birth_year,
        },
        {
            field: 'Color',
            data: currentPerson.skin_color,
        },
        {
            field: 'Eyes',
            data: currentPerson.eye_color,
        },
        {
            field: 'Hair',
            data: currentPerson.hair_color,
        },
        {
            field: 'Gender',
            data: currentPerson.gender,
        }
    ]

    return (
        <div className={style.person}>
             <Card
                 hoverable
                 style={{ width: 540, height: 550, cursor: 'default'}}
                 cover={<img alt="Photo" src={StarWars} />}

             >
                 {arrDataPersonFields.map((currentPerson)=> <GetInfoForCurrentPerson dataPerson={currentPerson.data} title={currentPerson.field}/>
                 )}


                 <div className={style.rollBack}>

                     <Link to={PATH.startPage}>
                     <RollbackOutlined  />
                     </Link>

                 </div>

             </Card>

        </div>
    );
}


