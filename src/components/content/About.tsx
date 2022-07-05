import React from 'react'
import gsap from 'gsap'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen, faGithub, faLinkedinIn, faSoundcloud } from '@fortawesome/free-brands-svg-icons'

import Image from 'src/components/ui/Image'
import { ImageLoaderContext } from 'src/utils/image-loader-context'

const About = () => {
  const { images } = React.useContext(ImageLoaderContext)
  const { t } = useTranslation()
  const aboutMeRef = React.useRef(null)

  React.useEffect(() => {
    gsap.from(aboutMeRef.current, {
      duration: 1.2,
      ease: 'power1',
      autoAlpha: 0,
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
          <span style={{ fontSize: '3rem' }}> Frontend&nbsp;Engineer</span>
        </h2>
        <div className='about-me' ref={aboutMeRef}>
          <Image className='about-me__image' src={images.justMe} alt='Just me' />
          <div className='about-me__info'>
            <p className='about-me__info-paragraph'>{t('About.Content')}</p>
            <div className='about-me__links'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='about-me__link'
                href='https://soundcloud.com/ssazero'
                title='SoundCloud'
              >
                <FontAwesomeIcon icon={faSoundcloud} />
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='about-me__link'
                href='https://github.com/ssazero'
                title='GitHub'
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='about-me__link'
                href='https://www.linkedin.com/in/ssazero/'
                title='LinkedIn'
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='about-me__link'
                href='https://codepen.io/ssazero'
                title='CodePen'
              >
                <FontAwesomeIcon icon={faCodepen} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
