import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';

const ImageModal = ({ image, isOpen, title, handleClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  const handleOk = () => {
    setIsModalOpen(false);
    handleClose()
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    handleClose()
  };

  useEffect(() => {
    setIsModalOpen(isOpen)
  }, [isOpen])

  return (
    <>
      <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className='w-full flex justify-center'>
          <img src={image} alt="image" className='mx-auto max-w-[450px]' />
        </div>
      </Modal>


    </>
  );
};

export default ImageModal;