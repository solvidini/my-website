import React from 'react'
import { useTranslation } from 'react-i18next'

import Technology from '../Technology'

import css3 from '../../assets/images/technologies/css3.png'
import git from '../../assets/images/technologies/git.png'
import html5 from '../../assets/images/technologies/html5.png'
import js from '../../assets/images/technologies/js.png'
import mongodb from '../../assets/images/technologies/mongodb.png'
import mysql from '../../assets/images/technologies/mysql.png'
import nodejs from '../../assets/images/technologies/nodejs.png'
import ps from '../../assets/images/technologies/ps.png'
import reactNative from '../../assets/images/technologies/react-native.png'
import ts from '../../assets/images/technologies/typescript.png'
import react from '../../assets/images/technologies/react.png'
import redux from '../../assets/images/technologies/redux.png'
import sass from '../../assets/images/technologies/sass.png'
import i18next from '../../assets/images/technologies/i18next.png'
import symfony from '../../assets/images/technologies/symfony.png'
import vsc from '../../assets/images/technologies/vsc.png'
import webstorm from '../../assets/images/technologies/webstorm.png'
import gatsby from '../../assets/images/technologies/gatsby.png'
import firebase from '../../assets/images/technologies/firebase.png'
import npm from '../../assets/images/technologies/npm.png'
import gql from '../../assets/images/technologies/graphql.png'
import gsap from '../../assets/images/technologies/greensock.png'
import materialui from '../../assets/images/technologies/material-ui.png'
import rtl from '../../assets/images/technologies/testing-library.png'

enum TechnologyType {
  Front = 'frontend',
  Back = 'backend',
  Other = 'other',
}

interface ITechnology {
  id: string
  src: string
  name: string
  type: TechnologyType
  styles?: React.CSSProperties
}

const TECHNOLOGIES: ITechnology[] = [
  {
    id: 'react',
    src: react,
    name: 'React',
    type: TechnologyType.Front,
  },
  {
    id: 'gatsby',
    src: gatsby,
    name: 'Gatsby (React based framework)',
    type: TechnologyType.Front,
  },
  {
    id: 'js',
    src: js,
    name: 'JavaScript ES5, ES6+',
    type: TechnologyType.Front,
  },
  {
    id: 'ts',
    src: ts,
    name: 'TypeScript',
    type: TechnologyType.Front,
  },
  {
    id: 'redux',
    src: redux,
    name: 'Redux',
    type: TechnologyType.Front,
  },
  {
    id: 'html',
    src: html5,
    name: 'HTML5',
    type: TechnologyType.Front,
  },
  {
    id: 'css',
    src: css3,
    name: 'CSS3',
    type: TechnologyType.Front,
  },
  {
    id: 'sass',
    src: sass,
    name: 'Sass',
    type: TechnologyType.Front,
  },
  {
    id: 'material-ui',
    src: materialui,
    name: 'Material-UI',
    type: TechnologyType.Front,
  },
  {
    id: 'gsap',
    src: gsap,
    name: 'GreenSock',
    type: TechnologyType.Front,
  },
  {
    id: 'npm',
    src: npm,
    name: 'npm / yarn',
    styles: { padding: '2rem' },
    type: TechnologyType.Other,
  },
  {
    id: 'rn',
    src: reactNative,
    name: 'React Native',
    type: TechnologyType.Other,
  },
  {
    id: 'mysql',
    src: mysql,
    name: 'MySQL',
    type: TechnologyType.Back,
  },
  {
    id: 'i18next',
    src: i18next,
    name: 'i18ext',
    type: TechnologyType.Front,
  },
  {
    id: 'symfony',
    src: symfony,
    name: 'Symfony 4 / php',
    type: TechnologyType.Back,
  },
  {
    id: 'gql',
    src: gql,
    name: 'GraphQL',
    type: TechnologyType.Other,
  },
  {
    id: 'mongodb',
    src: mongodb,
    name: 'MongoDB',
    type: TechnologyType.Back,
  },
  {
    id: 'git',
    src: git,
    name: 'Git',
    type: TechnologyType.Other,
  },
  {
    id: 'fb',
    src: firebase,
    name: 'Firebase',
    type: TechnologyType.Other,
  },
  {
    id: 'nodejs',
    src: nodejs,
    name: 'Node.js / Express.js',
    type: TechnologyType.Back,
  },
  {
    id: 'rtl',
    src: rtl,
    name: 'Testing Library',
    type: TechnologyType.Other,
  },
  {
    id: 'vsc',
    src: vsc,
    name: 'Visual Studio Code',
    type: TechnologyType.Other,
  },
  {
    id: 'ws',
    src: webstorm,
    name: 'Webstorm',
    type: TechnologyType.Other,
  },
  {
    id: 'ps',
    src: ps,
    name: 'Photoshop',
    type: TechnologyType.Other,
  },
]

const Skills: React.FC = () => {
  const { t } = useTranslation()
  const [highlightedType, setHighlightedType] = React.useState<TechnologyType>(null)

  const renderTechnologies = (techData: ITechnology[]) =>
    techData.map(({ id, src, name, styles, type }) => (
      <Technology
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
    <section className='section-skills' id='section-skills'>
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
