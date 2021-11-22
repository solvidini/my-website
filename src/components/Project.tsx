import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faLaptop } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

interface Props {
   title: string,
   description: string,
   mobile?: boolean,
   live?: string,
   github?: string,
   source: string,
}

const Project = ({ title, description, mobile, live, github, source }: Props) => {
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
			<span
				className='projects__item-link projects__item-link--left link-disabled custom-label-container'>
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
	// <Effect>
		<div className='projects__item'>
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
				<img
					draggable='false'
					className='projects__item-image'
					src={source}
					alt={'Project ' + title}
				/>
			</div>
		</div>
	// </Effect>
	)
}

export default Project
