import {useState} from "react";
import {Pagination} from "antd";

export const PaginationComponent = () =>{

    const [currentPage, setCurrentPage] = useState(1)

    const onChange = (page:number) =>{
        setCurrentPage(page)
    }

    return(
        <div>
            <Pagination size="small" current={currentPage} onChange={onChange} total={50} />
        </div>
    )

}
