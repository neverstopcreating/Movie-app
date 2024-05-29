import {Pagination} from "@mantine/core";

type MoviePaginationProps = {
    total: number;
    currentPage: number;
    onPageChange: (page: number) => void;
};


export function MoviePagination({ total, currentPage, onPageChange }: MoviePaginationProps) {

    return (
        <Pagination
            total={total}
            page={currentPage}
            onChange={onPageChange}
            color="gray"
            size="sm"
            radius="xs"
            style={{ display: "flex", justifyContent: "center", marginTop: "20px"}}
        />
    );
}
