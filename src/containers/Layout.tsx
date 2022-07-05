import React, { useState, useEffect, useRef, FC } from 'react'

import { CSSTransition } from 'react-transition-group'
import { animateScroll } from 'react-scroll'

import Toolbar from 'src/components/navigation/Toolbar'
import SideDrawer from 'src/components/navigation/SideDrawer'
import Header from 'src/components/content/Header'
import Footer from 'src/components/content/Footer'
import ArrowUp from 'src/components/ui/ArrowUp/ArrowUp'
import Logo from 'src/components/Logo'
import CookiesBar from 'src/components/CookiesBar'
import LanguagePack from 'src/components/LanguagePack'

const Layout: FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false)
  const [languageDropdownIsVisible, setLanguageDropdownIsVisible] = useState(false)
  const [cookiesBarIsVisible, setCookiesBarIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [stickyToolbar, setStickyToolbar] = useState(false)
  const headerRef = useRef<HTMLHeadElement>(null)
  const toolbarRef = useRef<HTMLDivElement>(null)
  const languagePackRef = useRef<HTMLDivElement>(null)

  const yOffset = () => {
    setScrollY(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', yOffset)
    window.addEventListener('click', languagePackClosedHandler)

    return () => {
      window.removeEventListener('scroll', yOffset)
      window.removeEventListener('click', languagePackClosedHandler)
    }
  })

  useEffect(() => {
    if (localStorage.getItem('cookiesAccepted')) {
      setCookiesBarIsVisible(false)
    } else {
      setTimeout(() => {
        setCookiesBarIsVisible(true)
      }, 5000)
    }
  }, [setCookiesBarIsVisible])

  useEffect(() => {
    const toolbarHeight = toolbarRef?.current?.offsetHeight ? toolbarRef.current.offsetHeight : 50
    const height = headerRef?.current?.offsetHeight
      ? headerRef.current.offsetHeight - toolbarHeight
      : 0

    if (scrollY > height) {
      setStickyToolbar(true)
    } else {
      setStickyToolbar(false)
    }
  }, [setStickyToolbar, scrollY])

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible)
  }

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false)
  }

  const languagePackToggleHandler = () => {
    setLanguageDropdownIsVisible(!languageDropdownIsVisible)
  }

  const languagePackClosedHandler = (e: MouseEvent | { target: any }) => {
    if (languagePackRef.current) {
      if (!languagePackRef.current.contains(e.target)) {
        setLanguageDropdownIsVisible(false)
      }
    }
  }

  const acceptedCookiesHandler = () => {
    setCookiesBarIsVisible(false)
    localStorage.setItem('cookiesAccepted', 'true')
  }

  return (
    <>
      {!sideDrawerIsVisible && (
        <>
          <Logo transparent />
          <LanguagePack
            visible={languageDropdownIsVisible}
            showToggler={languagePackToggleHandler}
            forwardedRef={languagePackRef}
          />
        </>
      )}
      {cookiesBarIsVisible && <CookiesBar clicked={acceptedCookiesHandler} />}
      <Header forwardedRef={headerRef}>
        <Toolbar
          forwardedRef={toolbarRef}
          sideDrawerToggleClicked={sideDrawerToggleHandler}
          sideDrawerIsVisible={sideDrawerIsVisible}
          sticky={stickyToolbar}
        />
      </Header>
      <SideDrawer isOpened={sideDrawerIsVisible} onClose={sideDrawerClosedHandler} />
      {children}
      <Footer />
      <CSSTransition in={stickyToolbar} mountOnEnter unmountOnExit timeout={500} classNames='arrow'>
        <div
          onClick={() => animateScroll.scrollToTop({ duration: 1500, smooth: true })}
          className='arrow-top'
        >
          <ArrowUp />
        </div>
      </CSSTransition>
    </>
  )
}

export default Layout
