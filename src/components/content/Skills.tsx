import React from 'react'
import { useTranslation } from 'react-i18next'

import { TECHNOLOGIES, TechnologyType, ITechnology } from 'src/configurations/technologies'
import Technology from 'src/components/Technology'

const Skills: React.FC = () => {
  const { t } = useTranslation()
  const [highlightedType, setHighlightedType] = React.useState<TechnologyType>(null)

  const renderTechnologies = (techData: ITechnology[]) =>
    techData.map(({ id, src, name, styles, type }) => (
      <Technology
        id={id}
        key={id}
        src={src}
        name={name}
        styles={styles}
        highlight={highlightedType === type}
      />
    ))

  const highlightTechnologies = (type: TechnologyType) => {
    setHighlightedType(prevState => (prevState === type ? null : type))
  }

  const getButtonClasses = (buttonType: TechnologyType): string => {
    const buttonClasses = ['technologies__highlight-button']
    if (buttonType === highlightedType) {
      buttonClasses.push('technologies__highlight-button--active')
    }
    return buttonClasses.join(' ')
  }

  return (
    <section className='section-skills' id='skills'>
      <h2 className='section-header section-header--white'>
        <span className='section-header__title'>{t('Skills.Title')}</span>
        <span className='section-header__sub-title'>{t('Skills.SubTitle')}</span>
      </h2>
      <div className='technologies__buttons'>
        <div
          className={getButtonClasses(TechnologyType.Front)}
          onClick={() => highlightTechnologies(TechnologyType.Front)}
        >
          Frontend
        </div>
        <div
          className={getButtonClasses(TechnologyType.Back)}
          onClick={() => highlightTechnologies(TechnologyType.Back)}
        >
          Backend
        </div>
        <div
          className={getButtonClasses(TechnologyType.Other)}
          onClick={() => highlightTechnologies(TechnologyType.Other)}
        >
          {t('Skills.Other')}
        </div>
      </div>
      <div className='technologies'>
        <div className='technologies__skills'>{renderTechnologies(TECHNOLOGIES)}</div>
      </div>
      <div className='technologies__and-other'>{t('Skills.AndMore')}</div>
    </section>
  )
}

export default Skills
