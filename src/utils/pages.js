export const getPageCount = (limit, totalCount) => {
    return Math.ceil(totalCount/limit)
}