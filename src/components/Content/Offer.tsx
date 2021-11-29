import React from 'react'
import { useTranslation } from 'react-i18next'

import Image from '../UI/Image'
import website from '../../assets/images/website.png'
import responsive from '../../assets/images/responsive.png'
import ui from '../../assets/images/ui.png'
import server from '../../assets/images/server.png'

const Offer: React.FC = () => {
  const { t } = useTranslation()

  const offerItems = [
    {
      id: 'offer_creating_websites',
      src: website,
      title: t('Offer.MakingWebsites.Title'),
      description: t('Offer.MakingWebsites.Description'),
    },
    {
      id: 'offer_responsive_design',
      src: responsive,
      title: t('Offer.ResponsiveDesign.Title'),
      description: t('Offer.ResponsiveDesign.Description'),
    },
    {
      id: 'offer_intuitive_interface',
      src: ui,
      title: t('Offer.IntuitiveInterface.Title'),
      description: t('Offer.IntuitiveInterface.Description'),
    },
    {
      id: 'offer_server_administration',
      src: server,
      title: t('Offer.ServerAdministration.Title'),
      description: t('Offer.ServerAdministration.Description'),
    },
  ]

  const renderOfferItems = () =>
    offerItems.map(item => (
      <div className='offer-grid__item' key={item.id}>
        <Image
          className='offer-grid__item-image'
          src={item.src}
          alt='Kodowanie stron'
          spinnerClass='spinner-icon--offer'
        />
        <div className='offer-grid__item-content'>
          <h3 className='offer-grid__item-title'>{item.title}</h3>
          <p className='offer-grid__item-description'>{item.description}</p>
        </div>
      </div>
    ))

  return (
    <section className='section-offer' id='section-offer'>
      <h2 className='section-header'>
        <span className='section-header__title'>{t('Offer.Title')}</span>
        <span className='section-header__sub-title'>{t('Offer.SubTitle')}</span>
      </h2>
      <div className='offer-grid'>{renderOfferItems()}</div>
    </section>
  )
}

export default Offer
