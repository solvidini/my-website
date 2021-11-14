import React, { RefObject } from 'react'

import NavigationItems from './NavigationItems'
import DrawerToggle from './DrawerToggle'

interface Props {
   forwardedRef: RefObject<HTMLDivElement>,
   sticky: boolean,
   sideDrawerIsVisible: boolean,
   sideDrawerToggleClicked: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Toolbar = (props: Props) => {
   const { forwardedRef, sticky, sideDrawerIsVisible, sideDrawerToggleClicked } = props
   const toolbarClasses = ['toolbar']
   if (sticky) {
      toolbarClasses.push('toolbar--fixed')
   }
   if (sideDrawerIsVisible) {
      toolbarClasses.push('toolbar--transparent')
   }
   return (
      <div className={toolbarClasses.join(' ')} ref={forwardedRef}>
         <div></div>
         <DrawerToggle
            sideDrawerIsVisible={sideDrawerIsVisible}
            onClick={sideDrawerToggleClicked}
         />
         <nav className="toolbar__nav desktop-only">
            <NavigationItems />
         </nav>
      </div>
   )
}

export default Toolbar
