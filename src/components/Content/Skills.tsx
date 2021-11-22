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
import springBoot from '../../assets/images/technologies/spring-boot.png'
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

interface ITechnology {
   id: string
   src: string
   name: string
   styles?: React.CSSProperties
}

const TECHNOLOGIES: ITechnology[] = [
   {
      id: 'react',
      src: react,
      name: 'React',
   },
   {
      id: 'gatsby',
      src: gatsby,
      name: 'Gatsby (React based framework)',
   },
   {
      id: 'js',
      src: js,
      name: 'JavaScript ES5, ES6+',
   },
   {
      id: 'ts',
      src: ts,
      name: 'TypeScript'
   },
   {
      id: 'redux',
      src: redux,
      name: 'Redux',
   },
   {
      id: 'html',
      src: html5,
      name: 'HTML5',
   },
   {
      id: 'css',
      src: css3,
      name: 'CSS3',
   },
   {
      id: 'sass',
      src: sass,
      name: 'Sass',
   },
   {
      id: 'material-ui',
      src: materialui,
      name: 'Material-UI',
   },
   {
      id: 'gsap',
      src: gsap,
      name: 'GreenSock',
   },
   {
      id: 'npm',
      src: npm,
      name: 'npm / yarn',
      styles: { padding: '2rem' },
   },
   {
      id: 'rn',
      src: reactNative,
      name: 'React Native',
   },
   {
      id: 'mysql',
      src: mysql,
      name: 'MySQL',
   },
   {
      id: 'spring',
      src: springBoot,
      name: 'Spring Boot / Java',
   },
   {
      id: 'symfony',
      src: symfony,
      name: 'Symfony 4 / php',
   },
   {
      id: 'gql',
      src: gql,
      name: 'GraphQL',
   },
   {
      id: 'mongodb',
      src: mongodb,
      name: 'MongoDB',
   },
   {
      id: 'git',
      src: git,
      name: 'Git',
   },
   {
      id: 'fb',
      src: firebase,
      name: 'Firebase',
   },
   {
      id: 'nodejs',
      src: nodejs,
      name: 'Node.js / Express.js',
   },
   {
      id: 'rtl',
      src: rtl,
      name: 'Testing Library',
   },
   {
      id: 'vsc',
      src: vsc,
      name: 'Visual Studio Code',
   },
   {
      id: 'ws',
      src: webstorm,
      name: 'Webstorm',
   },
   {
      id: 'ps',
      src: ps,
      name: 'Photoshop',
   },
]

const Skills: React.FC = () => {
   const { t } = useTranslation()

   const renderTechnologies = (techData: ITechnology[]) =>
      techData.map(({ id, src, name, styles }) => <Technology key={id} src={src} name={name} styles={styles} />)

   return (
      <section className="section-skills" id="section-skills">
         <div className="section-skills__content">
            <h2 className="section-header section-header--white">
               <span className="section-header__title">{t('Skills.Title')}</span>
               <span className="section-header__sub-title">{t('Skills.SubTitle')}</span>
            </h2>
            <div className="technologies">
               <div className="technologies__skills">
                  {renderTechnologies(TECHNOLOGIES)}
               </div>
            </div>
         </div>
      </section>
   )
}

export default Skills
