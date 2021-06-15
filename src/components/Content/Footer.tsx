import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import withTranslation from '../../hoc/withTranslation';
import { Dictionary } from './../../languageContext';

interface Props {
   dictionary: Dictionary
}

const Footer = (props: Props) => {
   const { dictionary } = props;
   const currentDate = new Date().getFullYear();

   return (
      <footer className="footer">
         <div className="footer__triangle footer__triangle--top" />
         <div className="footer__top">
            <div className="footer__top-logo">&nbsp;</div>
            <div className="footer__top-item">
               <h4>
                  {dictionary.footer.contact} <FontAwesomeIcon icon={faEnvelope} />
               </h4>
               <a target="_blank" rel="noopener noreferrer" href="mailto:contact@samuelk.pl">
                  contact@samuelk.pl
               </a>
               <a target="_blank" rel="noopener noreferrer" href="mailto:samukedo@gmail.com">
                  samukedo@gmail.com
               </a>
            </div>
            <div className="footer__top-item">
               <h4>
                  CV <FontAwesomeIcon icon={faAddressCard} />
               </h4>
               <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1xP9JN5og8rnONDwM8AJlnhGHyrsU2Q1p/view"
                  title="Curriculum vitae PL"
               >
                  Resume (PL)
               </a>
               <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1JPlq5PQlUYPhNXDbvKRrTA3TA-WTPeVA/view"
                  title="Curriculum vitae ENG"
               >
                  Resume (ENG)
               </a>
            </div>
            <div className="footer__top-item" style={{ lineHeight: '1.6' }}>
               {dictionary.footer.offerIcons}{' '}
               <span>
                  <a
                     target="_blank"
                     rel="noopener noreferrer"
                     href="https://www.flaticon.com/authors/freepik"
                     title="Freepik"
                  >
                     Freepik
                  </a>
               </span>
               <span>
                  from{' '}
                  <a
                     target="_blank"
                     rel="noopener noreferrer"
                     href="https://www.flaticon.com/"
                     title="Flaticon"
                  >
                     www.flaticon.com
                  </a>
               </span>
            </div>
         </div>
         <div className="footer__social">
            <a
               target="_blank"
               rel="noopener noreferrer"
               className="footer__social-link"
               href="https://www.linkedin.com/in/samuel-k%C4%99dziora-b45b86159/"
            >
               <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
               target="_blank"
               rel="noopener noreferrer"
               className="footer__social-link"
               href="https://github.com/ssazero"
            >
               <FontAwesomeIcon icon={faGithub} />
            </a>
         </div>

         <div className="footer__copyright">
            <div className="footer__triangle footer__triangle--copyright" />
            <span>
               Samuel Kędziora &copy; <b>{currentDate}</b>
            </span>
            <span>{dictionary.footer.allRights} </span>
         </div>
      </footer>
   );
};

export default withTranslation(Footer);
