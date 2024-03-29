import React from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'

import Project from '../Project'

import myWebsite from 'src/assets/images/projects/project-my-website.gif'
import yourTurn from 'src/assets/images/projects/project-your-turn.jpg'
import projectW from 'src/assets/images/projects/project-projektw.gif'
import pizzaBuilder from 'src/assets/images/projects/project-pizza-builder.gif'
import bregulaInsurances from 'src/assets/images/projects/project-bregula-insurances.gif'
import dailyTasks from 'src/assets/images/projects/project-daily-tasks.jpg'
import canvasBubbles from 'src/assets/images/projects/canvas-bubbles.gif'
import swpiu from 'src/assets/images/projects/project-swpiu.gif'
import button from 'src/assets/images/projects/project-button.gif'
import calculator from 'src/assets/images/projects/project-calculator.jpg'
import mot from 'src/assets/images/projects/project-mot.gif'
import annsr from 'src/assets/images/projects/project-annsr.gif'
import miniYT from 'src/assets/images/projects/project-mini-youtube.gif'
import seishinDreams from 'src/assets/images/projects/project-seishin-dreams.jpeg'

const Portfolio: React.FC = () => {
  const { t } = useTranslation()
  const projectRefs = React.useRef<HTMLDivElement[]>([])
  projectRefs.current = []

  const projects = [
    {
      title: 'Seishin Dreams',
      description: t('Portfolio.SeishinDreams.Description'),
      github: 'https://github.com/solvidini/seishin-dreams',
      live: 'https://seishindreams.com',
      source: seishinDreams,
    },
    {
      title: 'Projekt W',
      description: t('Portfolio.ProjectW.Description'),
      live: 'https://projektw.pl',
      source: projectW,
    },
    {
      title: 'SWPIU',
      description: t('Portfolio.SWPIU.Description'),
      github: 'https://github.com/solvidini/eng-proj-client',
      live: 'http://swpiu.front-up.pro/',
      source: swpiu,
    },
    {
      title: 'Mini YouTube',
      description: t('Portfolio.MiniYT.Description'),
      github: 'https://github.com/solvidini/mini-youtube',
      live: 'https://solvidini.github.io/mini-youtube/#/',
      source: miniYT,
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
      github: 'https://github.com/solvidini/multiple-object-tracking',
      live: 'https://solvidini.github.io/multiple-object-tracking/',
      source: mot,
    },
    {
      title: 'Pizza Builder',
      description: t('Portfolio.PizzaBuilder.Description'),
      github: 'https://github.com/solvidini/pizza-builder',
      live: 'https://pizza-builder-6412e.web.app/',
      source: pizzaBuilder,
    },
    {
      title: 'Calculator',
      description: t('Portfolio.Calculator.Description'),
      github: 'https://github.com/solvidini/calculator',
      live: 'https://solvidini.github.io/calculator/',
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
      github: 'https://github.com/solvidini/ann-symbol-recognition',
      live: 'https://solvidini.github.io/ann-symbol-recognition/',
      source: annsr,
    },
    {
      title: 'Daily Tasks',
      description: t('Portfolio.DailyTasks.Description'),
      github: 'https://github.com/solvidini/daily-tasks',
      source: dailyTasks,
      mobile: true,
      live: 'https://expo.io/@solvidi/daily-tasks',
    },
    {
      title: 'My Website',
      description: t('Portfolio.MyWebsite.Description'),
      github: 'https://github.com/solvidini/my-website',
      live: '/',
      source: myWebsite,
    },
    {
      title: 'Your Turn',
      description: t('Portfolio.YourTurn.Description'),
      github: 'https://github.com/solvidini/your-turn',
      source: yourTurn,
    },
    {
      title: 'Canvas Bubbles',
      description: t('Portfolio.CanvasBubbles.Description'),
      github: 'https://github.com/solvidini/canvas-bubbles',
      live: 'https://solvidini.github.io/canvas-bubbles',
      source: canvasBubbles,
    },
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
            id: 'portfolio',
            trigger: el,
            start: 'top center+=200',
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
    <section className='section-portfolio' id='portfolio'>
      <h2 className='section-header section-header--white'>
        <span className='section-header__title'>{t('Portfolio.Title')}</span>
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
