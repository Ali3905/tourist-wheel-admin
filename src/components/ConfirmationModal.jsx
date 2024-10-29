import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { deleteTechnicianAsync } from '../redux/technicianSlice';

const ConfirmationModal = ({ isOpen, technicianId, text }) => {
  const [open, setOpen] = useState(isOpen);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(text);
  const dispatch = useDispatch()
  
  const handleOk = () => {
    setModalText('Deleting the Technician');
    setConfirmLoading(true);
    // call the function to delete the technician
    dispatch(deleteTechnicianAsync(technicianId))
    setTimeout(() => {
      setConfirmLoading(false)
      setOpen(false)
      setModalText(text)
    }, 2000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  useEffect(()=>{
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