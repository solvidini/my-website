import React, { MouseEventHandler } from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
  clicked: MouseEventHandler,
}

const CookiesBar = ({ clicked }: Props) => {
  const { t } = useTranslation()

  return (
    <div className="cookies-bar">
      <div className="cookies-bar__text">
        <p>{t('Cookies.0')}</p>
        <p>{t('Cookies.1')}</p>
      </div>
      <button className="cookies-bar__button" onClick={clicked}>
        {t('Global.Understand')}
      </button>
    </div>
  )
}

export default CookiesBar
