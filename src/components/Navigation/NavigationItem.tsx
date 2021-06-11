import React from 'react';
import { Link } from 'react-scroll';

const NavigationItem = (props) => {
   const { children, to, offset = 0, clicked, opened } = props;
   const navigationItemClasses = ['navigation-item'];
   if (opened) {
      navigationItemClasses.push('navigation-item--show-on');
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
            onClick={clicked}
         >
            {children}
         </Link>
      </li>
   );
};

export default NavigationItem;
