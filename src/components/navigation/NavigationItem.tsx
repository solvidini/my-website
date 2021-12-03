import React from 'react'
import { Link } from 'react-scroll'

interface INavigationItem {
  to: string
  offset?: number
  onClick: (() => void) & React.MouseEventHandler<HTMLButtonElement>
  isOpened: boolean
}

const NavigationItem: React.FC<INavigationItem> = ({ children, to, onClick, isOpened }) => {
  const navigationItemClasses = ['navigation-item']
  if (isOpened) {
    navigationItemClasses.push('navigation-item--show-on')
  }

  return (
    <li className={navigationItemClasses.join(' ')}>
      <Link
        className='navigation-item__trigger'
        to={to}
        smooth
        duration={600}
        ignoreCancelEvents={false}
        onClick={onClick}
      />
      <Link
        className='navigation-item__link'
        data-hover={children}
        to={to}
        offset={-300}
        spy
        hashSpy
        isDynamic
        activeClass='navigation-item--active'
      >
        {children}
      </Link>
    </li>
  )
}

export default NavigationItem
