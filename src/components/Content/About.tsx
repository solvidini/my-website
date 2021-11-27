import React from 'react'
import gsap from 'gsap'
import { useTranslation } from 'react-i18next'

import justMe from '../../assets/images/me.png'
import Image from '../UI/Image'

const About = () => {
  const { t } = useTranslation()
  const aboutMeRef = React.useRef(null)

  React.useEffect(() => {
    gsap.from(aboutMeRef.current, {
      opacity: 0,
      duration: 1.2,
      ease: 'slow',
      scrollTrigger: {
        trigger: '#section-about',
        start: 'top center+=100',
        toggleActions: 'play none none reverse',
      },
    })
  }, [])

  return (
    <section className='section-about' id='section-about'>
      <div className='section-about__content'>
        <h2 className='section-header'>
          <span className='section-header__pre'>{t('About.Header')}</span>
          <span className='section-header__name' style={{ fontSize: '3rem' }}>
            Samuel Kędziora -
          </span>
          <span style={{ fontSize: '3rem' }}> Web&nbsp;Developer</span>
        </h2>
        <div className='about-me' ref={aboutMeRef}>
          <Image
            className='about-me__image'
            src={justMe}
            alt='Just me'
            spinnerClass='spinner-icon--about'
          />
          <div className='about-me__text'>
            <p className='about-me__text-paragraph'>{t('About.Content')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
