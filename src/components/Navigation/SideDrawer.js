import React from 'react';

import NavigationItems from './NavigationItems';
import Backdrop from '../UI/Backdrop';

const SideDrawer = (props) => {
  let sideDrawerClasses = ['side-drawer', 'side-drawer--closed'];
  if (props.opened) {
    sideDrawerClasses = ['side-drawer', 'side-drawer--opened'];
  }
  return (
    <div className="side-drawer-container">
      <Backdrop show={props.opened} clicked={props.closed} />
      <div
        className={sideDrawerClasses.join(' ')}
        onClick={props.closed}
      >
        <nav className="side-drawer__nav">
          <NavigationItems
            clicked={props.closed}
            opened={props.opened}
          />
        </nav>
      </div>
    </div>
  );
};

export default SideDrawer;
