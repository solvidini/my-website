import React from 'react'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faLaptop } from '@fortawesome/free-solid-svg-icons'

import Image from 'src/components/ui/Image'

interface Props {
  title: string
  description: string
  mobile?: boolean
  live?: string
  github?: string
  source: string
  projectRef: (el: HTMLDivElement) => void
}

const Project = ({ title, description, mobile, live, github, source, projectRef }: Props) => {
  const { t } = useTranslation()

  const renderGithubButton = () => {
    if (github) {
      return (
        <a
          target='_blank'
          rel='noopener noreferrer'
          className='projects__item-link projects__item-link--left'
          href={github}
        >
          GitHub
        </a>
      )
    }
    return (
      <span className='projects__item-link projects__item-link--left link-disabled custom-label-container'>
        GitHub
        <div className='custom-label custom-label--project custom-label--project--1'>
          {t('Portfolio.Project.NoGithubLink')}
        </div>
      </span>
    )
  }

  const renderPreviewButton = () => {
    if (live) {
      return (
        <a
          target='_blank'
          rel='noopener noreferrer'
          className='projects__item-link projects__item-link--right'
          href={live}
        >
          {mobile ? t('Portfolio.Project.Install') : t('Portfolio.Project.Preview')}
        </a>
      )
    }
    return (
      <span className='projects__item-link projects__item-link--right link-disabled custom-label-container'>
        {mobile ? t('Portfolio.Project.Install') : t('Portfolio.Project.Preview')}
        <div className='custom-label custom-label--project custom-label--project--2'>
          {t('Portfolio.Project.NoLiveLink')}
        </div>
      </span>
    )
  }

  return (
    <div className='projects__item' ref={projectRef}>
      <div className='projects__item-drawer'>
        <h4 className='projects__item-title'>{title}</h4>
        <p className='projects__item-description'>{description}</p>
        <FontAwesomeIcon
          icon={mobile ? faMobileAlt : faLaptop}
          className='projects__item-icon'
          title={mobile ? 'Mobile project' : 'Web project'}
        />
      </div>
      {renderGithubButton()}
      {renderPreviewButton()}
      <div className='projects__item-image-container'>
        <Image
          className='projects__item-image'
          src={source}
          alt={'Project ' + title}
          spinnerClass='spinner-icon--x'
        />
      </div>
    </div>
  )
}

export default Project
