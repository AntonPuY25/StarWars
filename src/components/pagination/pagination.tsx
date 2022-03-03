import {useState} from "react";
import {Pagination} from "antd";
import {getStarWarsPersons} from "../../store/reducer/actions";
import {useDispatch} from "react-redux";
import {Nullable} from "../../store/interface/interface";
import styles from './styles.module.scss'

export interface paginationProps {
    countPage: Nullable<number>;
}

export const PaginationComponent = ({countPage}:paginationProps) =>{

    const dispatch = useDispatch()

    const onChange = (page:number) =>{
        dispatch(getStarWarsPersons({
            page: page.toString()
        }))
    }

    return(
        <div className={styles.pagination}>
            <Pagination size="default" simple={false} onChange={onChange} total={countPage || 50} />
        </div>
    )

}
