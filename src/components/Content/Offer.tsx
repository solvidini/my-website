import React from 'react'

import website from '../../assets/images/website-color.png'
import responsive from '../../assets/images/responsive-color.png'
import ui from '../../assets/images/ui-color.png'
import { useTranslation } from 'react-i18next'

const Offer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className='section-drop-shadow'>
      <section className='section-offer' id='section-offer'>
        <div className='section-offer__content'>
          <h2 className='section-header'>
            <span className='section-header__title'>{t('Offer.Title')}</span>
            <span className='section-header__sub-title'>{t('Offer.SubTitle')}</span>
          </h2>
          <div className='offer-content'>
            {/* <Effect left> */}
            <div className='offer-content__item'>
              <img className='offer-content__item-image' src={website} alt='Kodowanie stron' />
              <h3 className='offer-content__item-title'>{t('Offer.MakingWebsites.Title')}</h3>
              <p className='offer-content__item-description'>
                {t('Offer.MakingWebsites.Description')}
              </p>
            </div>
            {/* </Effect> */}
            {/* <Effect> */}
            <div className='offer-content__item'>
              <img
                className='offer-content__item-image'
                src={responsive}
                alt='Responsywny design'
              />
              <h3 className='offer-content__item-title'>{t('Offer.ResponsiveDesign.Title')}</h3>
              <p className='offer-content__item-description'>
                {t('Offer.ResponsiveDesign.Description')}
              </p>
            </div>
            {/* </Effect> */}
            {/* <Effect right> */}
            <div className='offer-content__item'>
              <img className='offer-content__item-image' src={ui} alt='Intuicyjny interfejs' />
              <h3 className='offer-content__item-title'>{t('Offer.IntuitiveInterface.Title')}</h3>
              <p className='offer-content__item-description'>
                {t('Offer.IntuitiveInterface.Description')}
              </p>
            </div>
            {/* </Effect> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Offer
