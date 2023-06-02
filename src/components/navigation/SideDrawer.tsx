import React from 'react'

import NavigationItems from './NavigationItems'
import Backdrop from 'src/components/ui/Backdrop'
import classNames from 'classnames'

interface ISideDrawer {
  onClose: (() => void) & React.MouseEventHandler<HTMLButtonElement>
  isOpened: boolean
}

const SideDrawer = ({ onClose, isOpened }: ISideDrawer) => (
  <div className='side-drawer-container'>
    <Backdrop show={isOpened} onClick={onClose} isSideDrawer />
    <div
      className={classNames(
        'side-drawer',
        isOpened ? 'side-drawer--opened' : 'side-drawer--closed',
      )}
      onClick={onClose}
    >
      <nav className='side-drawer__nav'>
        <NavigationItems onClick={onClose} isOpened={isOpened} />
      </nav>
    </div>
  </div>
)

export default SideDrawer
