import React from 'react'
import { Link } from 'react-scroll'

interface Props {
   to: string,
   offset?: number,
   onClick: (() => void) & React.MouseEventHandler<HTMLButtonElement>,
   isOpened: boolean,
}

const NavigationItem: React.FC<Props> = ({ children, to, offset = 0, onClick, isOpened }) => {
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
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={500}
            isDynamic={true}
            offset={offset}
            activeClass="navigation-item--active"
            ignoreCancelEvents={false}
            onClick={onClick}
         >
            {children}
         </Link>
      </li>
   )
}

export default NavigationItem
