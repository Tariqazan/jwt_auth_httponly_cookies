import { FirstPageTwoTone, KeyboardArrowLeft, KeyboardArrowRight, LastPageTwoTone } from "@mui/icons-material";
import { IconButton, TablePagination } from "@mui/material";

function getNumberOfPages(count, rowsPerPage) {
    return Math.ceil(count / rowsPerPage);
}

function onChangePage(page) { }

function TablePaginationActions({ count, page, rowsPerPage, onChangePage }) {
    const handleFirstPageButtonClick = () => {
        onChangePage(1)
    }

    const handleBackButtonClick = () => {
        onChangePage(page);
    };

    const handleNextButtonClick = () => {
        onChangePage(page + 2);
    };

    const handleLastPageButtonClick = () => {
        onChangePage(getNumberOfPages(count, rowsPerPage));
    };
    return (
        <>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first-page">
                <FirstPageTwoTone></FirstPageTwoTone>
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page">
                <KeyboardArrowLeft />
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= getNumberOfPages(count, rowsPerPage) - 1}
                aria-label="next page"
            >
                <KeyboardArrowRight />
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= getNumberOfPages(count, rowsPerPage) - 1}
                aria-label="last page"
            >
                <LastPageTwoTone></LastPageTwoTone>
            </IconButton>
        </>
    );
}

const CustomMaterialPagination = ({ rowsPerPage, rowCount, onChangePage, onChangeRowsPerPage, currentPage }) => (
    <TablePagination
        component="nav"
        count={rowCount}
        rowsPerPage={rowsPerPage}
        page={currentPage - 1}
        onChangePage={onChangePage}
        onChangeRowsPerPage={({ target }) => onChangeRowsPerPage(Number(target.value))}
        ActionsComponent={TablePaginationActions}
    />
);

export default CustomMaterialPagination;