function Modal({
  isModalOpen,
  title,
  content,
  children,

  closeModal,
}) {
  return (
    isModalOpen && (
      <div className='overlay' onClick={() => closeModal()}>
        <div className='modal' onClick={(e) => e.stopPropagation()}>
          {/* <button className='closeButton' onClick={() => setIsModalOpen(false)}>
            &times;
          </button> */}

          <h2 className='modalHeader'>{title}</h2>
          <div className='modalBody'>{content}</div>
          <div className='modalFooter'>{children}</div>
        </div>
      </div>
    )
  );
}

export default Modal;
