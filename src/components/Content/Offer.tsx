import React from 'react'
import { useTranslation } from 'react-i18next'

import Image from '../UI/Image'
import website from '../../assets/images/website-color.png'
import responsive from '../../assets/images/responsive-color.png'
import ui from '../../assets/images/ui-color.png'

const Offer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section className='section-offer' id='section-offer'>
      <h2 className='section-header'>
        <span className='section-header__title'>{t('Offer.Title')}</span>
        <span className='section-header__sub-title'>{t('Offer.SubTitle')}</span>
      </h2>
      <div className='offer-content'>
        <div className='offer-content__item'>
          <Image
            className='offer-content__item-image'
            src={website}
            alt='Kodowanie stron'
            spinnerClass='spinner-icon--offer'
          />
          <h3 className='offer-content__item-title'>{t('Offer.MakingWebsites.Title')}</h3>
          <p className='offer-content__item-description'>{t('Offer.MakingWebsites.Description')}</p>
        </div>
        <div className='offer-content__item'>
          <Image
            className='offer-content__item-image'
            src={responsive}
            alt='Responsywny design'
            spinnerClass='spinner-icon--offer'
          />
          <h3 className='offer-content__item-title'>{t('Offer.ResponsiveDesign.Title')}</h3>
          <p className='offer-content__item-description'>
            {t('Offer.ResponsiveDesign.Description')}
          </p>
        </div>
        <div className='offer-content__item'>
          <Image
            className='offer-content__item-image'
            src={ui}
            alt='Intuicyjny interfejs'
            spinnerClass='spinner-icon--offer'
          />
          <h3 className='offer-content__item-title'>{t('Offer.IntuitiveInterface.Title')}</h3>
          <p className='offer-content__item-description'>
            {t('Offer.IntuitiveInterface.Description')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Offer
