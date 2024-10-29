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
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import CommonButton from './commonButton';
import ConfirmationModal from './ConfirmationModal';
import ImageModal from './ImageModal';
const CustomTable = ({ columns, data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedTechnician, setSelectedTechnician] = useState(null)
    const [isImageModalOpen, setIsImageModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const navigate = useNavigate()
    const { pathname } = useLocation()

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

    // const handleViewClick = (col, row) => {
    //     console.log('View clicked for :', col.label);
    // };
    const handleUpdateClick = (id) => {
        // alert(`${pathname}/${id}`)
        navigate(`${pathname}/${id}`)
    }

    const handleDeleteClick = (technician) => {
        setSelectedTechnician(technician)
        setIsModalOpen(true)
    }
    const handleOpenImageModal = (img, title) => {
        // alert(img)
        setIsImageModalOpen(true)
        setSelectedImage({
            img, title
        })
    }
    const handleCloseImageModal = () => {
        setSelectedImage(null)
        setIsImageModalOpen(false)
    }
    const HoverableTableRow = styled(MuiTableRow)`
    &:hover {
        background-color: #ffdcba; 
      cursor:pointer;
    }
`;
    return (

        <>
            {selectedTechnician && <ConfirmationModal isOpen={isModalOpen} technicianId={selectedTechnician._id} text={`Do you want to delete the ${selectedTechnician?.name} technician`} />}
            {selectedImage?.img && "IT is True" && <ImageModal isOpen={isImageModalOpen} handleClose={handleCloseImageModal} image={selectedImage.img} title={selectedImage.title} />}
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
                                                {column.id === "photos" || column.id === "afterJourneyPhotos" || column.id === "beforeJourneyPhotos" ?
                                                    <TableCell onClick={() => handleOpenImageModal(row[column.id], "Employee Photo")}>
                                                        <StyledViewButton >View</StyledViewButton>
                                                    </TableCell> : column.id === "photo" || column.id === "license" || column.id === "aadharCard" ?
                                                        <TableCell onClick={() => handleOpenImageModal(row[column.id], column.id.toUpperCase())}>
                                                            <StyledViewButton >View</StyledViewButton>
                                                        </TableCell> :
                                                        column.id === "isSubsciptionValid" ? (
                                                            <TableCell>
                                                                <CommonButton type={row["isSubsciptionValid"] === true ? "secondary" : "default"}  > {row[column.id] === true ? "Subscribed" : "Not Subscribed"} </CommonButton>
                                                            </TableCell>
                                                        ) : row?.[column.id] === false && column.id !== "isSubsciptionValid" ? (
                                                            <TableCell>
                                                                <StyledViewButton>No</StyledViewButton>
                                                            </TableCell>
                                                        ) : column.id === "edit" ? (
                                                            <TableCell>
                                                                <StyledViewButton onClick={() => handleUpdateClick(row._id)}>Edit</StyledViewButton>
                                                            </TableCell>
                                                        ) : column.id === "delete" ? (
                                                            <TableCell>
                                                                <CommonButton onClick={() => handleDeleteClick(row)} >Delete</CommonButton>

                                                            </TableCell>
                                                        ) : typeof row?.[column.id] === 'object' ?
                                                            <TableCell >{row?.[column.id]?.[column.fieldId]}</TableCell>

                                                            : (
                                                                <TableCell style={{ whiteSpace: "nowrap" }} >{row?.[column.id]}</TableCell>

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





