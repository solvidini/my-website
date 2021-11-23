import React from 'react'

import justMe from '../../assets/images/me.png'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()

  return (
    <div className='section-drop-shadow'>
      <section className='section-about' id='section-about'>
        <div className='section-about__content'>
          <h2 className='section-header'>
            <span className='section-header__pre'>{t('About.Header')}</span>
            <span className='section-header__name' style={{ fontSize: '3rem' }}>
              Samuel Kędziora -
            </span>
            <span style={{ fontSize: '3rem' }}> Web&nbsp;Developer</span>
          </h2>
          <div className='about-me'>
            {/* <Effect> */}
            <img className='about-me__image' src={justMe} alt='Just me' />
            {/* </Effect> */}
            {/* <Effect> */}
            <div className='about-me__text'>
              <p className='about-me__text-paragraph'>{t('About.Content')}</p>
            </div>
            {/* </Effect> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
