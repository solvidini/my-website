import React from 'react'

import NavigationItems from './NavigationItems'
import Backdrop from '../UI/Backdrop'

interface Props {
   onClose: (() => void) & React.MouseEventHandler<HTMLButtonElement>,
   isOpened: boolean
}

const SideDrawer = ({ onClose, isOpened }: Props) => {
   let sideDrawerClasses = ['side-drawer', 'side-drawer--closed']
   if (isOpened) {
      sideDrawerClasses = ['side-drawer', 'side-drawer--opened']
   }
   return (
      <div className="side-drawer-container">
         <Backdrop show={isOpened} onClick={onClose} />
         <div className={sideDrawerClasses.join(' ')} onClick={onClose}>
            <nav className="side-drawer__nav">
               <NavigationItems onClick={onClose} isOpened={isOpened} />
            </nav>
         </div>
      </div>
   )
}

export default SideDrawer
