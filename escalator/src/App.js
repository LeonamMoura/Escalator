import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Route exact path='/' component={HomePage} />
    </BrowserRouter>
  )
}

export default App
