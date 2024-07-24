/**
 * src/Menu/index.jsx
 */


import React, { useContext } from 'react'
import { MenuContext } from '../contexts/'


export const Menu = () => {
  const { puzzles, selectPuzzle, current } = useContext(MenuContext)


  // selectPuzzle in MenuContext will read data-root from target
  const list = puzzles.map(({ root, title, icon }) => {
    const iconSrc = `${root}/${icon}`
    const className = (root === current)
      ? "selected"
      : null

    return (
      <li
        key={root}
      >
        <button
          data-root={root}
          title={title}
          className={className}
          onClick={selectPuzzle}
        >
          <img
            src={iconSrc}
            draggable={false}
          />
        </button>
      </li>
    )
  })


  return (
    <>
      <ul id="menu">{list}</ul>
    </>
  )
}