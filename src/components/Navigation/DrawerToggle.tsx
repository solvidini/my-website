import React from 'react'

interface Props {
   sideDrawerIsVisible: boolean,
   onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const DrawerToggle = (props: Props) => {
   const { sideDrawerIsVisible, onClick } = props
   const iconClasses = ['drawer-toggle__icon']
   if (sideDrawerIsVisible) {
      iconClasses.push('drawer-toggle__icon--active')
   }
   return (
      <div onClick={onClick} className="drawer-toggle__button">
         <div className={iconClasses.join(' ')}>&nbsp;</div>
      </div>
   )
}

export default DrawerToggle
