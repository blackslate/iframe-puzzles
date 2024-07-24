/**
 * src/App.jsx
 */


import React from 'react'
import { Provider } from './contexts'
import { Menu } from './Menu'
import { IFrame } from './IFrame'





export const App = () => {


  return (
    <Provider>
      <Menu />
      <IFrame />
    </Provider>
  )
}