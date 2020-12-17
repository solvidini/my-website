import React, { useContext, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Effect from 'react-reveal/Fade';

import { LanguageContext } from '../../context';
import Technology from '../Technology';

import css3 from '../../assets/images/technologies/css3.png';
import git from '../../assets/images/technologies/git.png';
import html5 from '../../assets/images/technologies/html5.png';
import js from '../../assets/images/technologies/js.png';
import mongodb from '../../assets/images/technologies/mongodb.png';
import mysql from '../../assets/images/technologies/mysql.png';
import nodejs from '../../assets/images/technologies/nodejs.png';
import ps from '../../assets/images/technologies/ps.png';
import reactNative from '../../assets/images/technologies/react-native.png';
import react from '../../assets/images/technologies/react.png';
import redux from '../../assets/images/technologies/redux.png';
import sass from '../../assets/images/technologies/sass.png';
import springBoot from '../../assets/images/technologies/spring-boot.png';
import symfony from '../../assets/images/technologies/symfony.png';
import vsc from '../../assets/images/technologies/vsc.png';
import webstorm from '../../assets/images/technologies/webstorm.png';
import gatsby from '../../assets/images/technologies/gatsby.png';
import firebase from '../../assets/images/technologies/firebase.png';
import npm from '../../assets/images/technologies/npm.png';
import gql from '../../assets/images/technologies/graphql.png';

const data = {
   frontend: [
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
   ],
   backend: [
      {
         id: 'nodejs',
         src: nodejs,
         name: 'Node.js / Express.js',
      },
      {
         id: 'mongodb',
         src: mongodb,
         name: 'MongoDB',
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
   ],
   other: [
      {
         id: 'rn',
         src: reactNative,
         name: 'React Native',
      },
      {
         id: 'gql',
         src: gql,
         name: 'GraphQL',
      },
      {
         id: 'npm',
         src: npm,
         name: 'Node package manager',
         styles: { padding: '1.2rem' },
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
   ],
};

const Skills = (props) => {
   const context = useContext(LanguageContext);
   const [technologies, setTechnologies] = useState(data);

   const renderTechnologies = (techData) =>
      techData.map((technology, index) => {
         const id = 'tech-id_' + technology.id;
         return (
            <Draggable key={id} draggableId={id} index={index}>
               {(provided) => (
                  <Technology
                     forwardedRef={provided.innerRef}
                     {...technology}
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}
                  />
               )}
            </Draggable>
         );
      });

   const handleOnDragEnd = (result) => {
      const sourceId = result.source.droppableId;
      const destinationId = result.destination?.droppableId;
      if (!destinationId && sourceId !== destinationId) return false;

      const updatedTechnologies = technologies;
      const source = updatedTechnologies[sourceId];

      const [reorderedItem] = source.splice(result.source.index, 1);
      source.splice(result.destination.index, 0, reorderedItem);

      setTechnologies(updatedTechnologies);
   };

   return (
      <section className="section-skills" name="section-skills">
         <div className="section-skills__content">
            <h2 className="section-header section-header--white">
               <span className="section-header__title">{context.dictionary.skills.header}</span>
               <span className="section-header__post">{context.dictionary.skills.post}</span>
            </h2>
            <DragDropContext onDragEnd={handleOnDragEnd}>
               <div className="technologies">
                  <div className="technologies__group">
                     <h3 className="technologies__group-title">FRONT-END:</h3>
                     <Effect>
                        <Droppable droppableId="frontend" direction="horizontal">
                           {(provided) => (
                              <div
                                 className="technologies__items"
                                 {...provided.droppableProps}
                                 ref={provided.innerRef}
                              >
                                 {renderTechnologies(technologies.frontend)}
                                 {provided.placeholder}
                              </div>
                           )}
                        </Droppable>
                     </Effect>
                  </div>
                  <div className="technologies__group">
                     <h3 className="technologies__group-title">BACK-END:</h3>
                     <Effect>
                        <Droppable droppableId="backend" direction="horizontal">
                           {(provided) => (
                              <div
                                 className="technologies__items"
                                 {...provided.droppableProps}
                                 ref={provided.innerRef}
                              >
                                 {renderTechnologies(technologies.backend)}
                                 {provided.placeholder}
                              </div>
                           )}
                        </Droppable>
                     </Effect>
                  </div>
                  <div className="technologies__group">
                     <h3 className="technologies__group-title">
                        {context.dictionary.skills.other + ':'}
                     </h3>
                     <Effect>
                        <Droppable droppableId="other" direction="horizontal">
                           {(provided) => (
                              <div
                                 className="technologies__items"
                                 {...provided.droppableProps}
                                 ref={provided.innerRef}
                              >
                                 {renderTechnologies(technologies.other)}
                                 {provided.placeholder}
                              </div>
                           )}
                        </Droppable>
                     </Effect>
                  </div>
               </div>
            </DragDropContext>
         </div>
      </section>
   );
};

export default Skills;
