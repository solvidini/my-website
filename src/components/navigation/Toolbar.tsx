import React, { RefObject } from 'react'

import NavigationItems from './NavigationItems'
import DrawerToggle from './DrawerToggle'
import classNames from 'classnames'

interface IToolbar {
  forwardedRef: RefObject<HTMLDivElement>
  sticky: boolean
  sideDrawerIsVisible: boolean
  sideDrawerToggleClicked: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Toolbar = ({
  forwardedRef,
  sticky,
  sideDrawerIsVisible,
  sideDrawerToggleClicked,
}: IToolbar) => {
  const navStyles = sticky
    ? {
        borderBottomLeftRadius: '2.7rem',
      }
    : {
        borderTopLeftRadius: '2.7rem',
      }

  return (
    <div className={classNames('toolbar', sticky && 'toolbar--fixed')} ref={forwardedRef}>
      <DrawerToggle sideDrawerIsVisible={sideDrawerIsVisible} onClick={sideDrawerToggleClicked} />
      <nav className='toolbar__nav desktop-only' style={navStyles}>
        <NavigationItems />
      </nav>
    </div>
  )
}

export default Toolbar
