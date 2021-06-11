import React from 'react';
import Effect from 'react-reveal/Fade';

interface Props {
   src: string,
   name: string,
   styles?: Object
}

const Technology = (props: Props) => {
   const { src, name, styles = {} } = props;

   return (
      <Effect>
         <div className="technologies__item" style={styles}>
            <img className="technologies__item-image" src={src} alt={name} />
            <div className="technologies__item-label">{name}</div>
         </div>
      </Effect>
   );
};

export default Technology;
