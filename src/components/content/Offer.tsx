import React from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'

import Image from 'src/components/ui/Image'
import website from 'src/assets/images/website.png'
import responsive from 'src/assets/images/responsive.png'
import ui from 'src/assets/images/ui.png'
import server from 'src/assets/images/server.png'

const Offer: React.FC = () => {
  const { t } = useTranslation()
  const offerRefs = React.useRef<HTMLDivElement[]>([])

  const offers = [
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

  React.useEffect(() => {
    offerRefs.current.forEach((el, index) => {
      let xPosition: number
      if ((index + 1) % 2 === 0) {
        xPosition = 500
      } else {
        xPosition = -500
      }

      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          x: xPosition,
        },
        {
          duration: 1,
          ease: 'power1',
          autoAlpha: 1,
          x: 0,
          scrollTrigger: {
            id: 'section-offer',
            trigger: el,
            start: 'top center+=110',
            toggleActions: 'play none none reverse',
          },
        },
      )
    })
  }, [])

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !offerRefs.current.includes(el)) {
      offerRefs.current.push(el)
    }
  }

  const renderOfferItems = () =>
    offers.map(item => (
      <div className='offer-grid__item' key={item.id} ref={addToRefs}>
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
      <div className='section-warning'>{t('Offer.Warning')}</div>
      <div className='offer-grid'>{renderOfferItems()}</div>
    </section>
  )
}

export default Offer
