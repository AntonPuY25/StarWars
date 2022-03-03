import {Pagination} from "antd";
import {getStarWarsPersons, setCurrentPageSuccess} from "../../store/reducer/actions";
import {useDispatch, useSelector} from "react-redux";
import styles from './styles.module.scss'
import {selectCurrentPage, selectStarWarsSearchFilter} from "../../store/selectors";
import {useEffect, useState} from "react";

export interface paginationProps {
    countPage: number;
}

export const PaginationComponent = ({countPage}:paginationProps) =>{

    const dispatch = useDispatch()

    const searchFilter = useSelector(selectStarWarsSearchFilter)
    const currentPageSelector = useSelector(selectCurrentPage)


    const onChange = (page:number) =>{
        dispatch(setCurrentPageSuccess(page))
        dispatch(getStarWarsPersons({
            page: page.toString(),
            title: searchFilter,
        }))
    }

    return(
        <div className={styles.pagination}>
            <Pagination size="default"
                        simple={false}
                        onChange={onChange}
                        current={currentPageSelector}
                        total={countPage} />
        </div>
    )

}
