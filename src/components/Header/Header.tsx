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
import Link from 'next/link'

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
          <Link href="#home" passHref>
            <HeaderMenuItem data-goto="#home">Home</HeaderMenuItem>
          </Link>
          <Link href="#about" passHref>
            <HeaderMenuItem data-goto="#about">Sobre</HeaderMenuItem>
          </Link>
          <Link href="#services" passHref>
            <HeaderMenuItem data-goto="#services">Serviços</HeaderMenuItem>
          </Link>
          <Link href="#contact" passHref>
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
