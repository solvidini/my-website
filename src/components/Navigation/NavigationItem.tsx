import React from 'react'
import { Link, scroller } from 'react-scroll'

interface INavigationItem {
   to: string,
   offset?: number,
   onClick: (() => void) & React.MouseEventHandler<HTMLButtonElement>,
   isOpened: boolean,
}

const NavigationItem: React.FC<INavigationItem> = ({ children, to, offset = 0, onClick, isOpened }) => {
   const navigationItemClasses = ['navigation-item']
   if (isOpened) {
      navigationItemClasses.push('navigation-item--show-on')
   }

   return (
      <li className={navigationItemClasses.join(' ')}>
         <Link
            className="navigation-item__link"
            data-hover={children}
            to={to}
            spy
            smooth
            hashSpy
            isDynamic
            duration={500}
            offset={-250}
            
            activeClass="navigation-item--active"
            ignoreCancelEvents={false}
            onClick={() => {
               onClick()
               // window.scrollBy(0, 250)
            }}
         >
            {children}
         </Link>
      </li>
   )
}

export default NavigationItem
