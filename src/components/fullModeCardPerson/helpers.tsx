import style from "./styles.module.scss";
import React, {ChangeEvent, useState} from "react";
import {EditOutlined} from "@ant-design/icons";
import {Input} from "antd";

export interface GetInfoForCurrentPersonProps {
    title: string
    dataPerson: string
}

export const GetInfoForCurrentPerson = ({title,dataPerson}:GetInfoForCurrentPersonProps) =>


{
    const [currentFieldValue, setCurrentFieldValue] = useState('')
    const [editMode,setEditMode] = useState(false)

    const setValue = (e:ChangeEvent<HTMLInputElement>) =>{
        setCurrentFieldValue(e.target.value)
    }

    return  <div className={style.personCard}>
        {title}: {editMode ?

        <Input onBlur={()=>setEditMode(!editMode)} autoFocus={true} defaultValue={dataPerson}
               onChange={setValue}/>
        :currentFieldValue || dataPerson}

        <span className={style.edit}>

        <EditOutlined  onClick={()=>!editMode && setEditMode(true)}/>

        </span>
    </div>
}
