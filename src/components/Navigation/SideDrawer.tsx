import React from 'react';

import NavigationItems from './NavigationItems';
import Backdrop from '../UI/Backdrop';

interface Props {
   onClose: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
   opened: boolean
};

const SideDrawer = (props: Props) => {
   const { onClose, opened } = props;
   let sideDrawerClasses = ['side-drawer', 'side-drawer--closed'];
   if (opened) {
      sideDrawerClasses = ['side-drawer', 'side-drawer--opened'];
   }
   return (
      <div className="side-drawer-container">
         <Backdrop show={opened} onClick={onClose} />
         <div className={sideDrawerClasses.join(' ')} onClick={onClose}>
            <nav className="side-drawer__nav">
               <NavigationItems clicked={onClose} opened={opened} />
            </nav>
         </div>
      </div>
   );
};

export default SideDrawer;
