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

    console.log(currentPerson,'item')



    return (
        <div className={style.person}>
             <Card
                 hoverable
                 style={{ width: 540, height: 520, cursor: 'default'}}
                 cover={<img alt="Photo" src={StarWars} />}
             >
                 <div>
                     Name: {currentPerson.name}
                 </div>
                 <div>
                     Birthday: {currentPerson.birth_year}
                 </div>
                 <div>
                     Color: {currentPerson.skin_color}
                 </div>
                 <div>
                     Eyes: {currentPerson.eye_color}
                 </div>
                 <div>
                     Hair: {currentPerson.hair_color}
                 </div>
                 <div>
                     Gender: {currentPerson.gender}
                 </div>
                 <div className={style.rollBack}>
                     <RollbackOutlined onClick={()=>window.location.pathname = PATH.startPage} />
                 </div>
             </Card>
        </div>
    );
}


