import React from 'react';

const Technology = (props) => {
   const { src, name, styles = {}, forwardedRef, placeholder, ...rest } = props;

   return (
         <div ref={forwardedRef} {...rest}>
            <div className="technologies__item" style={styles}>
               <img className="technologies__item-image" src={src} alt={name} />
               <div className="technologies__item-label">{name}</div>
            </div>
         </div>
   );
};

export default Technology;
