import React from 'react';

import classes from './ArrowDown.module.scss';

const ArrowDown = () => (
   <div className={classes['arrow-container']}>
      <div className={classes['arrow-slide-effect']}>
         <div className={classes['arrow']}></div>
      </div>
   </div>
);

export default ArrowDown;
