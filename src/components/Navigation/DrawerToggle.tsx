import React from 'react'

interface IDrawerToggle {
  sideDrawerIsVisible: boolean
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const DrawerToggle = ({ sideDrawerIsVisible, onClick }: IDrawerToggle) => {
  const iconClasses = ['drawer-toggle__icon']
  if (sideDrawerIsVisible) {
    iconClasses.push('drawer-toggle__icon--active')
  }

  return (
    <div
      onClick={onClick}
      className={`drawer-toggle__button${sideDrawerIsVisible ? ' transparent' : ''}`}
    >
      <div className={iconClasses.join(' ')}>&nbsp;</div>
    </div>
  )
}

export default DrawerToggle
