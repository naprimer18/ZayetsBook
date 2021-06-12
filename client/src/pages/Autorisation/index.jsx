import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { onRegistration, onLogin } from '../../services/Autorizations'
import { ModalWindow } from './ModalWindow'

export const Autorisation = () => {
  const [registrationStatus, setregistrationStatus] = useState({
    message:'',
    success: false,
    isShowModal: false
  })
  const [loginStatus, setLoginStatus] = useState({
    message:'',
    success: false,
    isShowModal: false
  })
  const [formValue, setFormValue] = useState({
    login:'',
    password:''
  })
  const dispatch = useDispatch()

  const logIn = async () => {
    if (formValue.login && formValue.password) {
      const loginStatus = await onLogin(formValue)
      console.log('loginStatus ', loginStatus)
      if(!loginStatus.success) {
        setLoginStatus({message: loginStatus.message, success: loginStatus.success, isShowModal: true})
        return
      }
      dispatch({ type: 'logIn' })
    }
  }

  const Registrations = async () => {
    if (formValue.login && formValue.password) {
      const registrationStatus = await onRegistration(formValue)
      setregistrationStatus({message: registrationStatus.message, success: registrationStatus.success, isShowModal: true})
    }
  }

  const onInputChange = (e) => {
    setFormValue({...formValue, [e.target.name]: e.target.value})
  }

  const onCloseLoginModal = () => {
    setLoginStatus({...loginStatus, isShowModal: false})
  }

  const onCloseRegistrationModal = () => {
    setregistrationStatus({...loginStatus, isShowModal: false})
  }

  return(
    <div className="autorization">
      <input placeholder='login' name='login' onChange={onInputChange}/>
      <input placeholder='password' name='password' onChange={onInputChange}/>
      <div className='autorization-buttons'>
        <button onClick={logIn}>logIn</button>
        <button onClick={Registrations}>Registrations</button>
      </div>
      <ModalWindow 
        isShowModal={loginStatus.isShowModal}
        bodyMessage={loginStatus.message}
        onClose={onCloseLoginModal}
      />
      <ModalWindow 
        isShowModal={registrationStatus.isShowModal}
        bodyMessage={registrationStatus.message}
        onClose={onCloseRegistrationModal}
      />
    </div>
  )
}
