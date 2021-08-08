import {
  HeaderContent,
  HeaderLogo,
  HeaderMenu,
  HeaderMenuItem,
  HeaderMenuMobile,
  HeaderMenuMobileContent,
  HeaderWrapper,
} from '@/styles/components/Header/Header'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { normalizedIdsForLink } from '@/utils/Functions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons'

interface IHeader {
  text: string
  link: string
}

export default function Header(): JSX.Element {
  const [isScrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuLinks: IHeader[] = [
    {
      text: 'Home',
      link: '#home',
    },
    {
      text: 'Sobre',
      link: '#about',
    },
    {
      text: 'Serviços',
      link: '#services',
    },
    {
      text: 'Contato',
      link: '#contact',
    },
  ]

  function changeBackgroundColor() {
    if (window.scrollY > 70) setScrolled(true)
    else setScrolled(false)
  }

  const isScrolledIntoView = element => {
    if (element) {
      const rect = element.getBoundingClientRect()
      const elemTop = rect.top
      const elemBottom = rect.bottom

      return elemTop < window.innerHeight && elemBottom >= 0
    }

    return false
  }

  function checkMenu(): void {
    const links = document.querySelectorAll('a[data-goto]')
    let done = false
    links.forEach(link => {
      const element = link as HTMLElement
      link.classList.remove('active')

      if (
        isScrolledIntoView(document.querySelector(element.dataset.goto)) &&
        !done
      ) {
        link.classList.add('active')
        done = true
      }
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackgroundColor)

    window.onscroll = () => {
      checkMenu()
    }
  })

  return (
    <HeaderWrapper isScrolled={isScrolled} isMobileMenuOpen={isMobileMenuOpen}>
      <HeaderContent>
        <HeaderLogo alt="Proform Logo" src={'assets/logo/logo.png'} />
        <HeaderMenu>
          {menuLinks.map(({ text, link }) => (
            <Link
              to={normalizedIdsForLink(link)}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              key={text}
            >
              <HeaderMenuItem data-goto={link}>{text}</HeaderMenuItem>
            </Link>
          ))}
        </HeaderMenu>
        <HeaderMenuMobile>
          {!isMobileMenuOpen ? (
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setIsMobileMenuOpen(true)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faWindowClose}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
        </HeaderMenuMobile>
      </HeaderContent>
      {isMobileMenuOpen && (
        <HeaderMenuMobileContent isMobileMenuOpen={isMobileMenuOpen}>
          {menuLinks.map(({ text, link }) => (
            <HeaderMenuItem data-goto={link} key={text}>
              <Link
                to={normalizedIdsForLink(link)}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => {
                  setIsMobileMenuOpen(false)
                }}
              >
                {text}
              </Link>
            </HeaderMenuItem>
          ))}
        </HeaderMenuMobileContent>
      )}
    </HeaderWrapper>
  )
}
