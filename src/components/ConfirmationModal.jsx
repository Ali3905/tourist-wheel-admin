import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { deleteTechnicianAsync } from '../redux/technicianSlice';
import { useLocation } from 'react-router-dom';
import { deleteEmployeeAsync } from '../redux/employeesSlice';
import { deleteDriverAsync } from '../redux/driversSlice';

const ConfirmationModal = ({ isOpen, technicianId, text }) => {
  const [open, setOpen] = useState(isOpen);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(text);
  const { pathname } = useLocation()
  const dispatch = useDispatch()

  const handleOk = () => {
    setModalText(`Deleting the ${pathname === "/technicians" ? "Technician" : pathname === "/employees" ? "Employee" : pathname === "/drivers" ? "Driver" : ""}`);
    setConfirmLoading(true);
    // call the function to delete the technician
    // dispatch(deleteTechnicianAsync(technicianId))
    if (pathname === "/technicians") {
      dispatch(deleteTechnicianAsync(technicianId));
    } else if (pathname === "/employees") {
      dispatch(deleteEmployeeAsync(technicianId));
    } else if (pathname === "/drivers") {
      dispatch(deleteDriverAsync(technicianId));
    }
    setTimeout(() => {
      setConfirmLoading(false)
      setOpen(false)
      setModalText(text)
    }, 2000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(isOpen)
    setModalText(text)
  }, [technicianId])

  return (
    <>
      <Modal
        title="Confirm Deletion"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText={"Delete"}
        okType='danger'
        className='confirmation_modal'
      // okButtonProps={}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};
export default ConfirmationModal;