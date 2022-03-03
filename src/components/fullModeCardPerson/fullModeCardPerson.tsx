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

    const [editMode,setEditMode] = useState(false)

    return (
        <div className={style.person}>
             <Card
                 hoverable
                 style={{ width: 540, height: 550, cursor: 'default'}}
                 cover={<img alt="Photo" src={StarWars} />}

             >
                 <GetInfoForCurrentPerson dataPerson={currentPerson.name} title='Name'/>
                 <GetInfoForCurrentPerson dataPerson={currentPerson.birth_year} title='Birthday'/>
                 <GetInfoForCurrentPerson dataPerson={currentPerson.skin_color} title='Color'/>
                 <GetInfoForCurrentPerson dataPerson={currentPerson.eye_color} title='Eyes'/>
                 <GetInfoForCurrentPerson dataPerson={currentPerson.hair_color} title='Hair'/>
                 <GetInfoForCurrentPerson dataPerson={currentPerson.gender} title='Gender'/>

                 <div className={style.rollBack}>
                     <Link to={PATH.startPage}>
                     <RollbackOutlined  />
                     </Link>
                 </div>

             </Card>

        </div>
    );
}


