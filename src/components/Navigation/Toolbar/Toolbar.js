import React from "react";

import "./Toolbar.scss";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = props => {
  const toolbarClasses = ["toolbar"];
  if (props.sticky) {
    toolbarClasses.push("toolbar--fixed");
  }
  if (props.sideDrawerIsVisible) {
    toolbarClasses.push("toolbar--transparent")
  }
  return (
    <div className={toolbarClasses.join(" ")} ref={props.toolbarRef}>
      <div></div>
      <DrawerToggle sideDrawerIsVisible={props.sideDrawerIsVisible} clicked={props.sideDrawerToggleClicked} />
      <nav className="toolbar__nav desktop-only">
        <NavigationItems />
      </nav>
    </div>
  );
};

export default Toolbar;
