import React from 'react'
import { Routes } from './routes'
import { useSelector } from 'react-redux'

function App() {
  const isAutorizationed = useSelector( store => store.isAutorizationed)
  const routes = Routes(isAutorizationed)

  return (
    <div>
        {routes}
    </div>
  );
}

export default App;
