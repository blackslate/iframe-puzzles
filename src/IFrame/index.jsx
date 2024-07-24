/**
 * src/IFrame/index.jsx
 */


import React, { useContext } from 'react'
import { MenuContext } from '../contexts';


export const IFrame = () => {
  const { src } = useContext(MenuContext)

  const iframe = src && <iframe src={src} title=""/>

  return (
    <>
      { iframe }
    </>
  )
}