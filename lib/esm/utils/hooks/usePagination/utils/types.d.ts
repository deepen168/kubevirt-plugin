export declare type PaginationState = {
    endIndex: number;
    page: number;
    perPage: number;
    startIndex: number;
};
export declare type UsePaginationValues = {
    onPaginationChange: (newPagination: PaginationState) => void;
    pagination: PaginationState;
};
export declare type UsePagination = () => UsePaginationValues;
