import React from 'react'
import { CSSTransition } from 'react-transition-group'

import { useTranslation } from 'react-i18next'
import { isNoSubstitutionTemplateLiteral } from 'typescript'

interface Props {
   showToggler: React.MouseEventHandler<HTMLDivElement>,
   forwardedRef: React.LegacyRef<HTMLDivElement> | undefined,
   visible: boolean
}

const LanguagePack = (props: Props) => {
   const { showToggler, forwardedRef, visible } = props
   const { i18n, t } = useTranslation()

   return (
      <div className="language-pack" title="ENG / PL" onClick={showToggler} ref={forwardedRef}>
         <div className="language-pack__toggler">
            <span style={{ pointerEvents: 'none' }}>
               {t('Language')}&nbsp;
               <i
                  className={
                     visible
                        ? 'fas fa-caret-down language-pack__toggler-icon language-pack__toggler-icon--active '
                        : 'fas fa-caret-down language-pack__toggler-icon'
                  }
               ></i>
            </span>
         </div>
         <CSSTransition in={visible} mountOnEnter unmountOnExit timeout={200} classNames="lpa">
            <div className={'language-pack__dropdown'}>
               <button
                  className={
                     i18n.language === 'pl'
                        ? 'language-pack__select language-pack__select--active'
                        : 'language-pack__select'
                  }
                  onClick={() => i18n.changeLanguage('pl')}
               >
                  Polski
               </button>
               <button
                  className={
                     i18n.language === 'en'
                        ? 'language-pack__select language-pack__select--active'
                        : 'language-pack__select'
                  }
                  onClick={() => i18n.changeLanguage('en')}
               >
                  English
               </button>
            </div>
         </CSSTransition>
      </div>
   )
}

export default LanguagePack
