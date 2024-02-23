import React from 'react'
import Marquee from 'react-fast-marquee'
import { useTranslation } from 'react-i18next'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const { t } = useTranslation()
  const currentDate = new Date().getFullYear()

  return (
    <footer className='footer'>
      <div className='footer__triangle footer__triangle--top' />
      <div className='footer__top'>
        <div className='footer__top-logo'>&nbsp;</div>
        <div className='footer__top-item'>
          <h4>
            {t('Footer.Contact')} <FontAwesomeIcon icon={faEnvelope} />
          </h4>
          <a target='_blank' rel='noopener noreferrer' href='mailto:samuel@front-up.pro'>
            samuel@front-up.pro
          </a>
        </div>
        <div className='footer__top-item'>
          <h4>
            CV <FontAwesomeIcon icon={faAddressCard} />
          </h4>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='/contact-me-about-one'
            title='Curriculum vitae ENG'
          >
            Resume (ENG)
          </a>
        </div>
      </div>
      <div className='footer__social'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          className='footer__social-link'
          href='https://www.linkedin.com/in/samuelkedziora/'
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          className='footer__social-link'
          href='https://github.com/solvidini'
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <Marquee
        className='footer__marquee'
        gradient
        gradientColor={[17, 17, 17]}
        gradientWidth={150}
        speed={50}
      >
        <span className='footer__marquee-item'>
          {t('Footer.OfferIcons')}(
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.flaticon.com/authors/freepik'
            title='Freepik'
          >
            Freepik&nbsp;-&nbsp;
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.flaticon.com/'
            title='Flaticon'
          >
            www.flaticon.com)
          </a>
        </span>
        <span className='footer__marquee-item'>
          {t('Footer.Particles')}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.npmjs.com/package/react-tsparticles'
            title='Flaticon'
          >
            (react-tsparticles)
          </a>
        </span>
      </Marquee>
      <div className='footer__copyright'>
        <div className='footer__triangle footer__triangle--copyright' />
        <span>
          Samuel Kędziora &copy; <b>{currentDate}</b>
        </span>
        <span>{t('Footer.AllRights')}</span>
      </div>
    </footer>
  )
}

export default Footer
