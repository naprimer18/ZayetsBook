import React from 'react'

export const ModalWindow = (props) => {
  const { isShowModal, onClose, bodyMessage } = props
  return (
    <>
    {
      isShowModal ?
      <div className='modal-success-registrations'>
        <div className='modal-window-header'>
          <div className='modal-window-title'>
            Information
          </div>
          <button className='close-modal-window' onClick={onClose}>
            X
          </button>
        </div>
        <div className='modal-window-body'>
          <h2>{bodyMessage}</h2>
        </div>
      </div> : null
    }
  </>
  )
}