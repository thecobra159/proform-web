import {
  HeaderContent,
  HeaderLogo,
  HeaderMenu,
  HeaderMenuMobile,
  HeaderMenuBar,
  HeaderMenuItem,
  HeaderWrapper,
} from '@/styles/components/Header/Header'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

export default function Header(): JSX.Element {
  const [isScrolled, setScrolled] = useState(false)

  function changeBackgroundColor() {
    if (window.scrollY > 70) setScrolled(true)
    else setScrolled(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackgroundColor)
  })

  return (
    <HeaderWrapper isScrolled={isScrolled}>
      <HeaderContent>
        <HeaderLogo alt="Proform Logo" src={'assets/logo/logo.png'} />
        <HeaderMenu>
          <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
            <HeaderMenuItem data-goto="#home">Home</HeaderMenuItem>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <HeaderMenuItem data-goto="#about">Sobre</HeaderMenuItem>
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <HeaderMenuItem data-goto="#services">Serviços</HeaderMenuItem>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <HeaderMenuItem data-goto="#contact">Contato</HeaderMenuItem>
          </Link>
        </HeaderMenu>
        <HeaderMenuMobile>
          <HeaderMenuBar />
          <HeaderMenuBar />
          <HeaderMenuBar />
        </HeaderMenuMobile>
      </HeaderContent>
    </HeaderWrapper>
  )
}
