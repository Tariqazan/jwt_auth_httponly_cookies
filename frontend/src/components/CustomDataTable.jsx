import { TextField, MenuItem, Button } from '@mui/material';
import React, { useState, useMemo, useCallback } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch } from 'react-redux';


const CustomDataTable = ({ title, columns, data, appendDispatch, appendData }) => {
    const dispatch = useDispatch();
    const [filterText, setFilterText] = useState('');
    const [selectedColumn, setSelectedColumn] = useState(columns[0].name);
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const [selectedRows, setSelectedRows] = React.useState([]);
    const [toggleCleared, setToggleCleared] = React.useState(false);

    const filteredItems = useMemo(() => {
        if (filterText === '') {
            return data
        } else {
            return data.filter((item) =>
                item[selectedColumn].toString() && item[selectedColumn].toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    }, [data, filterText, selectedColumn]);

    const FilterComponent = ({ filterText, onFilter }) => (
        <>
            <TextField
                type="text"
                placeholder={`Filter`}
                value={filterText}
                onChange={onFilter}
            />
            <TextField
                select
                defaultValue={selectedColumn}
                onChange={(e) => {
                    setSelectedColumn(e.target.value);
                    setFilterText('');
                }}
            >
                {columns.map((column) => (
                    <MenuItem key={column.name} value={column.name}>
                        {column.name}
                    </MenuItem>
                ))}
            </TextField>
        </>
    );

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent
                onFilter={(e) => setFilterText(e.target.value)}
                onClear={handleClear}
                filterText={filterText}
                onColumnSelect={(e) => setSelectedColumn(e.target.value)}
            />
        );
    }, [filterText, resetPaginationToggle]);

    const handleRowSelected = useCallback(state => {
        setSelectedRows(state.selectedRows)
    }, [setSelectedRows])

    const contextActions = useMemo(() => {
        if (appendData === true) {
            const handleAppendData = () => {
                setToggleCleared(!toggleCleared);
                dispatch(appendDispatch(selectedRows));
            }
            return (
                <Button key={'delete'} onClick={handleAppendData}>Add to user nutritions</Button>
            );
        }
    }, [dispatch, setToggleCleared, appendData, appendDispatch, selectedRows, toggleCleared])

    return (
        <DataTable
            title={title}
            columns={columns}
            data={filteredItems}
            selectableRows
            pagination
            onSelectedRowsChange={handleRowSelected}
            contextActions={contextActions}
            paginationResetDefaultPage={resetPaginationToggle}
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            persistTableHead
        />
    );
};

export default CustomDataTable;
