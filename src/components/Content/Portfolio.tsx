import React from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'

import Project from '../Project'

import mySite from '../../assets/images/projects/project-my-site.gif'
import yourTurn from '../../assets/images/projects/project-your-turn.jpg'
import projectW from '../../assets/images/projects/project-projektw.gif'
import pizzaBuilder from '../../assets/images/projects/project-pizza-builder.gif'
import bregulaInsurances from '../../assets/images/projects/project-bregula-insurances.gif'
import dailyTasks from '../../assets/images/projects/project-daily-tasks.jpg'
import canvasBubbles from '../../assets/images/projects/project-canvas-1.gif'
import swpiu from '../../assets/images/projects/project-swpiu.gif'
import button from '../../assets/images/projects/project-button.gif'
import calculator from '../../assets/images/projects/project-calculator.png'
import mot from '../../assets/images/projects/project-mot.gif'
import annsr from '../../assets/images/projects/project-annsr.gif'

// import fotobudka from '../../assets/images/projects/project-fotobudka.gif'

const Portfolio: React.FC = () => {
  const { t } = useTranslation()
  const projectRefs = React.useRef<HTMLDivElement[]>([])
  projectRefs.current = []

  const projects = [
    {
      title: t('Portfolio.ProjectW.Title'),
      description: t('Portfolio.ProjectW.Description'),
      live: 'https://projektw.pl',
      source: projectW,
    },
    {
      title: 'SWPIU',
      description: t('Portfolio.SWPIU.Description'),
      github: 'https://github.com/ssazero/eng-proj-client',
      live: 'http://swpiu.samuelk.pl/',
      source: swpiu,
    },
    {
      title: 'Pizza Builder',
      description: t('Portfolio.PizzaBuilder.Description'),
      github: 'https://github.com/ssazero/pizza-builder',
      live: 'https://pizza-builder-6412e.web.app/',
      source: pizzaBuilder,
    },
    {
      title: 'Tapicernia Button',
      description: t('Portfolio.Button.Description'),
      live: 'http://www.pracownia-button.pl/',
      source: button,
    },
    {
      title: 'Multiple Object Tracking',
      description: t('Portfolio.MOT.Description'),
      github: 'https://github.com/ssazero/multiple-object-tracking',
      live: 'https://ssazero.github.io/multiple-object-tracking/',
      source: mot,
    },
    {
      title: 'Calculator',
      description: t('Portfolio.Calculator.Description'),
      github: 'https://github.com/ssazero/calculator',
      live: 'https://ssazero.github.io/calculator/',
      source: calculator,
    },
    {
      title: 'Bregula Ubezpieczenia',
      description: t('Portfolio.Bregula.Description'),
      live: 'http://bregulaubezpieczenia.pl/',
      source: bregulaInsurances,
    },
    {
      title: 'ANN Symbol Recognition',
      description: t('Portfolio.ANNSR.Description'),
      github: 'https://github.com/ssazero/ann-symbol-recognition',
      live: 'https://ssazero.github.io/ann-symbol-recognition/',
      source: annsr,
    },
    {
      title: 'Daily Tasks',
      description: t('Portfolio.DailyTasks.Description'),
      github: 'https://github.com/ssazero/daily-tasks',
      source: dailyTasks,
      mobile: true,
      live: 'https://expo.io/@ssazero/daily-tasks',
    },
    {
      title: 'My Website',
      description: t('Portfolio.MySite.Description'),
      github: 'https://github.com/ssazero/my-site',
      live: '/',
      source: mySite,
    },
    {
      title: 'Your Turn',
      description: t('Portfolio.YourTurn.Description'),
      github: 'https://github.com/ssazero/your-turn',
      source: yourTurn,
    },
    {
      title: 'Canvas Animation',
      description: t('Portfolio.CanvasBubbles.Description'),
      github: 'https://github.com/ssazero/canvas-project-one',
      live: 'https://ssazero.github.io/canvas-project-one/',
      source: canvasBubbles,
    },
    // {
    //     title: 'Fotobudka Premium Box',
    //     description: t('Portfolio.Fotobudka.Description'),
    //     live: 'http://fotobudka-premiumbox.pl',
    //     source: fotobudka,
    // },
  ]

  React.useEffect(() => {
    projectRefs.current.forEach(el => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
        },
        {
          duration: 1,
          ease: 'power1',
          autoAlpha: 1,
          scrollTrigger: {
            id: 'section-portfolio',
            trigger: el,
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
          },
        },
      )
    })
  }, [])

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el)
    }
  }

  return (
    <section className='section-portfolio' id='section-portfolio'>
      <h2 className='section-header section-header--white'>
        <span className='section-header__title'>Portfolio</span>
        <span className='section-header__sub-title'>{t('Portfolio.SubTitle')}</span>
      </h2>
      <div className='projects'>
        {projects.map(project => (
          <Project key={project.title} {...project} projectRef={addToRefs} />
        ))}
      </div>
    </section>
  )
}

export default Portfolio
