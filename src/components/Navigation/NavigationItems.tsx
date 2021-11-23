import React from 'react'
import { useTranslation } from 'react-i18next'

import NavigationItem from './NavigationItem'

interface INavigationItems {
  isOpened?: boolean
  onClick?: (() => void) & React.MouseEventHandler<HTMLButtonElement>
}

const NavigationItems = ({ isOpened = false, onClick = () => undefined }: INavigationItems) => {
  const { t } = useTranslation()

  return (
    <ul className='navigation'>
      <NavigationItem to='top' isOpened={isOpened} onClick={onClick}>
        {t('Nav.Home')}
      </NavigationItem>
      <NavigationItem to='section-about' isOpened={isOpened} onClick={onClick}>
        {t('Nav.About')}
      </NavigationItem>
      <NavigationItem to='section-skills' isOpened={isOpened} onClick={onClick}>
        {t('Nav.Skills')}
      </NavigationItem>
      <NavigationItem to='section-offer' isOpened={isOpened} onClick={onClick}>
        {t('Nav.Offer')}
      </NavigationItem>
      <NavigationItem to='section-portfolio' isOpened={isOpened} onClick={onClick}>
        {t('Nav.Portfolio')}
      </NavigationItem>
      <NavigationItem to='section-contact' isOpened={isOpened} onClick={onClick}>
        {t('Nav.Contact')}
      </NavigationItem>
    </ul>
  )
}

export default NavigationItems
