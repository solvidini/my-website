import React from 'react';

import NavigationItems from './NavigationItems';
import Backdrop from '../UI/Backdrop';

interface Props {
   onClose: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
   isOpened: boolean
};

const SideDrawer = (props: Props) => {
   const { onClose, isOpened } = props;
   let sideDrawerClasses = ['side-drawer', 'side-drawer--closed'];
   if (isOpened) {
      sideDrawerClasses = ['side-drawer', 'side-drawer--opened'];
   }
   return (
      <div className="side-drawer-container">
         <Backdrop show={isOpened} onClick={onClose} />
         <div className={sideDrawerClasses.join(' ')} onClick={onClose}>
            <nav className="side-drawer__nav">
               <NavigationItems clicked={onClose} isOpened={isOpened} />
            </nav>
         </div>
      </div>
   );
};

export default SideDrawer;
