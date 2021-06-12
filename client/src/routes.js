import React from 'react'
import { Switch ,Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import { Home } from './pages/Home'
import { Autorisation } from './pages/Autorisation'

export const Routes = ({isAutorizationed}) => {
  console.log("isAuthenticated ", isAutorizationed)
  return (
    <>
    {
      isAutorizationed?
      <>
        <Router>
          <Switch>
            <Route path="/home" exact>
              <Home/>
            </Route>
          </Switch>
          <Redirect to='/home'/>
        </Router>
      </>
      :
      <>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Autorisation/>
            </Route>
          </Switch>
          <Redirect to='/'/>
        </Router>
      </>
    }
    </>
  )
}