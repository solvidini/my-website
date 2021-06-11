import React from 'react';
import Effect from 'react-reveal/Fade';

import withTranslation from '../../hoc/withTranslation';
import website from '../../assets/images/website-color.png';
import responsive from '../../assets/images/responsive-color.png';
import ui from '../../assets/images/ui-color.png';
import { Dictionary } from './../../languageContext';

interface Props {
   dictionary: Dictionary
}

const Offer = (props: Props) => {
   const { dictionary } = props;

   return (
      <div className="section-drop-shadow">
         <section className="section-offer" id="section-offer">
            <div className="section-offer__content">
               <h2 className="section-header">
                  <span className="section-header__title">{dictionary.offer.title}</span>
                  <span className="section-header__post">{dictionary.offer.post}</span>
               </h2>
               <div className="offer-content">
                  <Effect left>
                     <div className="offer-content__item">
                        <img
                           className="offer-content__item-image"
                           src={website}
                           alt="Kodowanie stron"
                        />
                        <h3 className="offer-content__item-title">
                           {dictionary.offer.makingWebsites.title}
                        </h3>
                        <p className="offer-content__item-description">
                           {dictionary.offer.makingWebsites.description}
                        </p>
                     </div>
                  </Effect>
                  <Effect>
                     <div className="offer-content__item">
                        <img
                           className="offer-content__item-image"
                           src={responsive}
                           alt="Responsywny design"
                        />
                        <h3 className="offer-content__item-title">
                           {dictionary.offer.responsiveDesign.title}
                        </h3>
                        <p className="offer-content__item-description">
                           {dictionary.offer.responsiveDesign.description}
                        </p>
                     </div>
                  </Effect>
                  <Effect right>
                     <div className="offer-content__item">
                        <img
                           className="offer-content__item-image"
                           src={ui}
                           alt="Intuicyjny interfejs"
                        />
                        <h3 className="offer-content__item-title">
                           {dictionary.offer.intuitiveInterface.title}
                        </h3>
                        <p className="offer-content__item-description">
                           {dictionary.offer.intuitiveInterface.description}
                        </p>
                     </div>
                  </Effect>
               </div>
            </div>
         </section>
      </div>
   );
};

export default withTranslation(Offer);
