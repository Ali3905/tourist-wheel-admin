// CustomTable.js
import React, { useState } from 'react';
import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow as MuiTableRow,
    TableRow,
    TableCell,
    TableBody
} from '@mui/material';
import styled from 'styled-components';
import HoverPopover from './hoverPopover';
import ClickPopover from './clickPopover';
import Status from './statusButtons';
import { useSelector } from 'react-redux';
import TableMenu from './tableMenu';
import Highlate from './highlate'
import { useNavigate } from 'react-router-dom';
import CommonButton from './commonButton';
import ConfirmationModal from './ConfirmationModal';
const CustomTable = ({ columns, data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedTechnicianId, setSelectedTechnicianId] = useState(null)
    const navigate = useNavigate()
    const selectedItem = useSelector((state) => state.sidebar.selectedParentIndex);
    // console.log(selectedItem, "tableindexCheck")
    // const orderTable = selectedItem === 3
    const statusData = useSelector((state) => state.status);
    // console.log(statusData, 'statusData')

    const StyledViewButton = styled.button`
    background-color: #ffffff;
    color: #000000; 
    border: 1px solid #FC7E06;
    border-radius: 5px; 
    padding: 4px 18px; 
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: #ffdcba;
    }
`;

    const handleViewClick = (col, row) => {
        console.log('View clicked for :', col.label);
    };
    const handleUpdateClick = (id) => {
        navigate(`/technician/${id}`)
    }

    const handleDeleteClick = (id) => {
        setSelectedTechnicianId(id)
        setIsModalOpen(true)
    }
    const HoverableTableRow = styled(MuiTableRow)`
    &:hover {
        background-color: #ffdcba; 
      cursor:pointer;
    }
`;
    return (

        <>
            {selectedTechnicianId && <ConfirmationModal isOpen={isModalOpen} technicianId={selectedTechnicianId} text={`Do you want to delete the ${selectedTechnicianId} technician`} />}
            {
                data ? <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow >
                                {columns.map((column) => (
                                    <TableCell style={{ whiteSpace: "nowrap" }} key={column.id}>{column.label}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data?.map((row) => (
                                <HoverableTableRow key={row?.id}>
                                    {columns.map((column) => {
                                        return (
                                            <React.Fragment key={column.id}>
                                                {column.id === "photo" || column.id === "photos" || column.id === "afterJourneyPhotos" || column.id === "beforeJourneyPhotos" ?
                                                    <TableCell>
                                                        <StyledViewButton >View</StyledViewButton>
                                                    </TableCell> : column.id === "aadharCard" ?
                                                        <TableCell>
                                                            <StyledViewButton >View</StyledViewButton>
                                                        </TableCell> :
                                                        row?.[column.id] === true ? (
                                                            <TableCell>
                                                                <StyledViewButton>Yes</StyledViewButton>
                                                            </TableCell>
                                                        ) : row?.[column.id] === false ? (
                                                            <TableCell>
                                                                <StyledViewButton>No</StyledViewButton>
                                                            </TableCell>
                                                        ) : column.id === "edit" ? (
                                                            <TableCell>
                                                                <StyledViewButton onClick={() => handleUpdateClick(row._id)}>Edit</StyledViewButton>
                                                            </TableCell>
                                                        ) : column.id === "delete" ? (
                                                            <TableCell>
                                                                <CommonButton onClick={() => handleDeleteClick(row._id)} >Delete</CommonButton>

                                                            </TableCell>
                                                        ) : typeof row?.[column.id] === 'object' ?
                                                            <TableCell onClick={() => navigate(`/Details/${row?.id}`)}>{row?.[column.id]?.[column.fieldId]}</TableCell>

                                                            : (
                                                                <TableCell style={{ whiteSpace: "nowrap" }} onClick={() => navigate(`/Details/${row?.id}`)}>{row?.[column.id]}</TableCell>

                                                            )}
                                            </React.Fragment>
                                        );
                                    })}


                                </HoverableTableRow>
                            ))}
                        </TableBody>


                    </Table>
                </TableContainer> : "Loading..."
            }
        </>

    );
};

export default CustomTable;





