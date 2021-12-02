import React, { useState, useEffect } from 'react'

import { Home } from '@styled-icons/boxicons-solid/Home'
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2'
import { CircleHalfFill } from '@styled-icons/fluentui-system-filled/CircleHalfFill'
import { ChevronUpCircle } from '@styled-icons/boxicons-solid/ChevronUpCircle'
import { Codepen } from '@styled-icons/boxicons-logos/Codepen'
import { AboutDotMe } from '@styled-icons/simple-icons/AboutDotMe'
// import { LightBulb as Light } from '@styled-icons/entypo/LightBulb'
import { Menu } from '@styled-icons/boxicons-regular/Menu'

import getThemeColor from '../../utils/getThemeColor'

import * as S from './styled'
import * as GA from './trackers'

const MenuBar = ({ setIsMenuOpen, isMenuOpen }) => {
    const [theme, setTheme] = useState(null)

    const isDarkMode = theme === 'dark'

    if (theme !== null) {
        GA.themeTracker(theme)
    }

    useEffect(() => {
        setTheme(window.__theme)

        window.__onThemeChange = () => setTheme(window.__theme)
    }, [])

    const openMenu = () => {
        GA.menuTracker()
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <S.MenuBarWrapper>
            <S.MenuBarGroup>
                <S.MenuBarLink
                    to="/"
                    cover
                    direction="right"
                    bg={getThemeColor()}
                    title="Voltar para o Início"
                    activeClassName="active"
                >
                    <S.MenuBarItem>
                        <Home />
                    </S.MenuBarItem>
                </S.MenuBarLink>
                <S.MenuBarLink
                    to="/search"
                    cover
                    direction="right"
                    bg={getThemeColor()}
                    title="Search"
                    activeClassName="active"
                >
                    <S.MenuBarItem onClick={() => GA.searchClickTrack()}>
                        <Search />
                    </S.MenuBarItem>
                </S.MenuBarLink>

                <S.MenuBarGroupDesktop>
                    <S.MenuBarLink
                        to="/about/"
                        cover
                        direction="right"
                        bg={getThemeColor()}
                        title="About"
                        activeClassName="active"
                    >
                        <S.MenuBarItem>
                            <AboutDotMe />
                            {/* <S.MenuBarNotification /> */}
                        </S.MenuBarItem>

                    </S.MenuBarLink>

                    <S.MenuBarLink
                        to="/portfolio/"
                        cover
                        direction="right"
                        bg={getThemeColor()}
                        title="Portfolio"
                        activeClassName="active"
                    >
                        <S.MenuBarItem onClick={() => GA.portfolioClickTrack()}>
                            <Codepen />
                            {/* <S.MenuBarNotification /> */}
                        </S.MenuBarItem>
                    </S.MenuBarLink>

                </S.MenuBarGroupDesktop>
            </S.MenuBarGroup>

            <S.MenuBarGroupMobile>
                <S.MenuBarGroup>
                    <S.MenuBarItem title="Abrir Menu" onClick={openMenu}>
                        <Menu />
                    </S.MenuBarItem>
                </S.MenuBarGroup>
            </S.MenuBarGroupMobile>

            <S.MenuBarGroup>
                <S.MenuBarItem
                    title="Mudar o Tema"
                    onClick={() => {
                        window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')

                        if (window.DISQUS !== undefined) {
                            window.setTimeout(() => {
                                window.DISQUS.reset({
                                    reload: true
                                })
                            }, 300)
                        }
                    }}
                    className={theme}
                    isDarkMode={isDarkMode}
                >
                    <CircleHalfFill />
                </S.MenuBarItem>
                <S.MenuBarItem
                    title="Ir para o Topo"
                    onClick={() => {
                        GA.topClickTrack()
                        window.scroll({ top: 0, behavior: 'smooth' })
                    }}
                >
                    <ChevronUpCircle />
                </S.MenuBarItem>
            </S.MenuBarGroup>
        </S.MenuBarWrapper>
    )
}

export default MenuBar
