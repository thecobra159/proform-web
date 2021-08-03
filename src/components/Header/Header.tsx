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

export default function Header(): JSX.Element {
  const [isScrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (window.scrollY > 70) setScrolled(true)
    else setScrolled(false)
  }, [])

  return (
    <HeaderWrapper isScrolled={isScrolled}>
      <HeaderContent>
        <HeaderLogo alt="Proform Logo" src={'assets/proform-logo.png'} />
        <HeaderMenu>
          <HeaderMenuItem className="active">Home</HeaderMenuItem>
          <HeaderMenuItem>Sobre</HeaderMenuItem>
          <HeaderMenuItem>Serviços</HeaderMenuItem>
          <HeaderMenuItem>Contato</HeaderMenuItem>
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
