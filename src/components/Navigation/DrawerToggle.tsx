import React from 'react'

interface IDrawerToggle {
   sideDrawerIsVisible: boolean,
   onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
   styles: React.CSSProperties
}

const DrawerToggle = ({ sideDrawerIsVisible, onClick, styles }: IDrawerToggle) => {
	const iconClasses = ['drawer-toggle__icon']
	if (sideDrawerIsVisible) {
		iconClasses.push('drawer-toggle__icon--active')
	}

	return (
		<div onClick={onClick} className={`drawer-toggle__button${sideDrawerIsVisible ? ' transparent' : ''}`} style={{ ...styles, }}>
			<div className={iconClasses.join(' ')}>&nbsp;</div>
		</div>
	)
}

export default DrawerToggle
