import React from "react";

import "./Toolbar.scss";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = props => {
  const toolbarClasses = ["toolbar"];
  if (props.sticky) {
    toolbarClasses.push("toolbar--fixed");
  }
  return (
    <div className={toolbarClasses.join(" ")}>
      {/* <DrawerToggle clicked={props.sideDrawerToggleClicked} /> */}
      <div></div>
      <nav className="toolbar__nav desktop-only">
        <NavigationItems />
      </nav>
    </div>
  );
};

export default Toolbar;
