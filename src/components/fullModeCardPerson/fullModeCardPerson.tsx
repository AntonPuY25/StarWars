import React from 'react';
import style from './styles.module.scss';
import {TypeResponseData} from "../../store/interface/interface";
import {Card} from "antd";
import StarWars from '../../assets/img/backgroundCard.webp';
import {RollbackOutlined} from "@ant-design/icons";
import {PATH} from "../../App";


export interface cardPersonProps {
    currentPerson: TypeResponseData;
}

export function FullModeCardPerson({currentPerson}:cardPersonProps) {



    return (
        <div className={style.person}>
             <Card
                 hoverable
                 style={{ width: 540, height: 550, cursor: 'default'}}
                 cover={<img alt="Photo" src={StarWars} />}
             >
                 <div className={style.personCard}>
                     Name: {currentPerson.name}
                 </div>
                 <div className={style.personCard}>
                     Birthday: {currentPerson.birth_year}
                 </div>
                 <div className={style.personCard}>
                     Color: {currentPerson.skin_color}
                 </div>
                 <div className={style.personCard}>
                     Eyes: {currentPerson.eye_color}
                 </div>
                 <div className={style.personCard}>
                     Hair: {currentPerson.hair_color}
                 </div>
                 <div className={style.personCard}>
                     Gender: {currentPerson.gender}
                 </div>
                 <div className={style.rollBack}>
                     <RollbackOutlined onClick={()=>window.location.pathname = PATH.startPage} />
                 </div>
             </Card>
        </div>
    );
}


