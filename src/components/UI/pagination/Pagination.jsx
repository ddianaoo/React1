import React from 'react';
import {getPagesArray} from '../../../utils/pages';
import  classes from "./Pagination.module.css";


const Pagination = ({totalPages, page, changePage}) => {

    let PagesArray = getPagesArray(totalPages);

    return (
        <div className={classes.page__wrapper}>
          {PagesArray.map(p =>
            <span 
            onClick={() => changePage(p)}
            key={p} 
            className={page === p ? [classes.page, classes.page__current].join(' ') : classes.page}
            >
              {p}
            </span>
            )}          
        </div> 
    );
};

export default Pagination;
