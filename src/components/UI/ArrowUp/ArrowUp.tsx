import React from 'react';

import classes from './ArrowUp.module.scss';

const ArrowUp = () => (
   <div className={classes['arrow-container']}>
      <div className={classes['arrow-slide-effect']}>
         <div className={classes['arrow']}></div>
      </div>
      <div className={classes['arrow-slide-effect'] + ' ' + classes['arrow-slide-effect--delay-1']}>
         <div className={classes['arrow']}></div>
      </div>
      <div className={classes['arrow-slide-effect'] + ' ' + classes['arrow-slide-effect--delay-2']}>
         <div className={classes['arrow']}></div>
      </div>
      <div className={classes['arrow-slide-effect'] + ' ' + classes['arrow-slide-effect--delay-3']}>
         <div className={classes['arrow']}></div>
      </div>
   </div>
);

export default ArrowUp;
