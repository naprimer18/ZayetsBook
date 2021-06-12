import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

export const Home = () => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messages, setMessages] = useState([]);  
  const dispatch = useDispatch()
  const addMessage = async () => {
    if (currentMessage) {
      const method = 'POST'
      const body = JSON.stringify({message: currentMessage})
      const response = await fetch(
        '/api/home',
        {
          method,
          body,
          headers: {
            'Content-Type': 'application/json'
          },
        }
      )
      const data = await response.json();
      console.log("data ", data)
      getAllMessage()
      setCurrentMessage('');
    }
  }

  const getAllMessage = async () => {
    const method = 'GET'
    const requets = await fetch('/api/getAllMessages', {method})
    const data = await requets.json()
    setMessages(data)
  }

  useEffect(() => {
    getAllMessage()
  }, [])

  const refreshCurrentMessage = (e) => {
    setCurrentMessage(e.target.value)
  }

  const deleteMessage = async (id) => {
    const method = 'DELETE'
    const body = JSON.stringify({id})
    const requets = await fetch(
      '/api/deleteMessage',
      {
        method,
        body,
        headers: {
          'Content-Type': 'application/json'
        },
      }
    )
    const data = await requets.json()
    getAllMessage()
    console.log(data)
  }

  const logOut = () => {
    dispatch({ type: 'logOut'})
  }

  return(
    <div>
      Home
      <button onClick={logOut}>logOut</button>
      <input placeholder='Your message' value={currentMessage} onChange={refreshCurrentMessage} />
      <button onClick={addMessage}>Sent</button>
      {
        messages.length ? (
          messages.map( item => (
            <div key={item._id}>
              <div>{item.message}</div>
              <button onClick={() => deleteMessage(item._id)}>X</button>
            </div>
          ))
        ): null
      }
    </div>
  )
}


