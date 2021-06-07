import React from 'react';

import Navigation from './NavigationItems';
import DrawerToggle from './DrawerToggle';

const Toolbar = (props) => {
   const { toolbarRef, sideDrawerIsVisible } = props;
   const toolbarClasses = ['toolbar'];
   if (props.sticky) {
      toolbarClasses.push('toolbar--fixed');
   }
   if (props.sideDrawerIsVisible) {
      toolbarClasses.push('toolbar--transparent');
   }
   return (
      <div className={toolbarClasses.join(' ')} ref={toolbarRef}>
         <div></div>
         <DrawerToggle
            sideDrawerIsVisible={sideDrawerIsVisible}
            clicked={props.sideDrawerToggleClicked}
         />
         <nav className="toolbar__nav desktop-only">
            <Navigation />
         </nav>
      </div>
   );
};

export default Toolbar;
