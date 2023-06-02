import classNames from 'classnames'
import React from 'react'

interface IDrawerToggle {
  sideDrawerIsVisible: boolean
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const DrawerToggle = ({ sideDrawerIsVisible, onClick }: IDrawerToggle) => (
  <div
    onClick={onClick}
    className={classNames('drawer-toggle__button', sideDrawerIsVisible && 'transparent')}
  >
    <div
      className={classNames(
        'drawer-toggle__icon',
        sideDrawerIsVisible && 'drawer-toggle__icon--active',
      )}
    >
      &nbsp;
    </div>
  </div>
)

export default DrawerToggle
