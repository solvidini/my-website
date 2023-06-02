import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-scroll'

interface INavigationItem {
  children: React.ReactNode
  to: string
  offset?: number
  onClick: (() => void) & React.MouseEventHandler<HTMLButtonElement>
  isOpened: boolean
}

const NavigationItem: React.FC<INavigationItem> = ({ children, to, onClick, isOpened }) => (
  <li className={classNames('navigation-item', isOpened && 'navigation-item--show-on')}>
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

export default NavigationItem
