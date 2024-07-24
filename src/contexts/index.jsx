/**
 * src/Menu/contexts/index.jsx
 */

import { MenuProvider, MenuContext } from "./Menu";


export const Provider = ({children}) => {
  return (
    <MenuProvider>
      {children}
    </MenuProvider>
  )
}


export {
  MenuContext
}