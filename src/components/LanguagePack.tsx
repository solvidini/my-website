import React from 'react'
import { CSSTransition } from 'react-transition-group'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import ReactCountryFlag from 'react-country-flag'
import { useTranslation } from 'react-i18next'

interface ILanguagePack {
  showToggler: React.MouseEventHandler<HTMLDivElement>
  forwardedRef: React.LegacyRef<HTMLDivElement> | undefined
  visible: boolean
}

const languages = [
  {
    text: 'Polski',
    code: 'pl',
    country: 'PL',
  },
  {
    text: 'English',
    code: 'en',
    country: 'GB',
  },
  {
    text: 'Español',
    code: 'es',
    country: 'ES',
  },
]

const LanguagePack = ({ showToggler, forwardedRef, visible }: ILanguagePack) => {
  const { i18n, t } = useTranslation()

  const renderLanguageTiles = () =>
    languages.map(l => (
      <div
        key={l.code}
        className={
          i18n.language === l.code
            ? 'language-pack__select language-pack__select--active'
            : 'language-pack__select'
        }
        onClick={() => i18n.changeLanguage(l.code)}
      >
        <ReactCountryFlag svg countryCode={l.country} aria-label={l.text} />
        <span className='language-pack__lang'>{l.text}</span>
      </div>
    ))

  return (
    <div
      className='language-pack'
      style={{ borderBottomRightRadius: visible ? 0 : '2.7rem' }}
      title='EN / PL / ES'
      onClick={showToggler}
      ref={forwardedRef}
    >
      <div className='language-pack__toggler'>
        <span style={{ pointerEvents: 'none' }}>
          {t('Language')}
          <i
            style={{ marginLeft: '.5rem' }}
            className={
              visible
                ? 'fas fa-caret-down language-pack__toggler-icon language-pack__toggler-icon--active '
                : 'fas fa-caret-down language-pack__toggler-icon'
            }
          ></i>
        </span>
      </div>
      <CSSTransition in={visible} mountOnEnter unmountOnExit timeout={200} classNames='lpa'>
        <div className={'language-pack__dropdown'}>{renderLanguageTiles()}</div>
      </CSSTransition>
    </div>
  )
}

export default LanguagePack
