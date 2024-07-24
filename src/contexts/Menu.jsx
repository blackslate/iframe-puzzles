/**
 * src/Menu/contexts/Menu.jsx
 *
 * description
 */


import React, { createContext, useState } from 'react'
import puzzles from '../assets/puzzles.json'


console.log("Menu (context) puzzles:", puzzles);



export const MenuContext = createContext()


export const MenuProvider = ({ children }) => {
  const [ rootSrc, setRootSrc ] = useState(getRootSrc)
  const { root: current, src } = rootSrc


  function getRootSrc(root = puzzles[0].root) {
    const src = `${root}/index.html`
    return { root, src }
  }


  const selectPuzzle = ({target}) => {
    const button = target.closest("button")
    const root =  button.dataset.root
    setRootSrc(getRootSrc( root ))
  }


  return (
    <MenuContext.Provider
      value = {{
        current,
        src,
        puzzles,
        selectPuzzle
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}