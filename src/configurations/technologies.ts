import css3 from 'src/assets/images/technologies/css3.png'
import git from 'src/assets/images/technologies/git.png'
import html5 from 'src/assets/images/technologies/html5.png'
import js from 'src/assets/images/technologies/js.png'
import mongodb from 'src/assets/images/technologies/mongodb.png'
import mysql from 'src/assets/images/technologies/mysql.png'
import nodejs from 'src/assets/images/technologies/nodejs.png'
import ps from 'src/assets/images/technologies/ps.png'
import reactNative from 'src/assets/images/technologies/react-native.png'
import ts from 'src/assets/images/technologies/typescript.png'
import react from 'src/assets/images/technologies/react.png'
import redux from 'src/assets/images/technologies/redux.png'
import sass from 'src/assets/images/technologies/sass.png'
import i18next from 'src/assets/images/technologies/i18next.png'
import symfony from 'src/assets/images/technologies/symfony.png'
import vsc from 'src/assets/images/technologies/vsc.png'
import webstorm from 'src/assets/images/technologies/webstorm.png'
import gatsby from 'src/assets/images/technologies/gatsby.png'
import firebase from 'src/assets/images/technologies/firebase.png'
import npm from 'src/assets/images/technologies/npm.png'
import gql from 'src/assets/images/technologies/graphql.png'
import gs from 'src/assets/images/technologies/greensock.png'
import materialui from 'src/assets/images/technologies/material-ui.png'
import rtl from 'src/assets/images/technologies/testing-library.png'

export enum TechnologyType {
  Front = 'frontend',
  Back = 'backend',
  Other = 'other',
}

export interface ITechnology {
  id: string
  src: string
  name: string
  type: TechnologyType
  styles?: React.CSSProperties
}

export const TECHNOLOGIES: ITechnology[] = [
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
    src: gs,
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
