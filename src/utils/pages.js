export const getPageCount = (limit, totalCount) => {
    return Math.ceil(totalCount/limit)
}

export const getPagesArray = (totalPages) => {
    let PagesArray = [];
    for (let i = 0; i<totalPages; i++){
        PagesArray.push(i+1);
      }
    return PagesArray;
} 