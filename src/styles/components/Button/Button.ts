import styled from 'styled-components'
import { Theme } from '@/styles/Theme'
import { media } from '@/styles/GlobalStyles'

export const Button = styled.button`
  align-items: center;
  background-color: ${Theme.ProformGreen};
  border: none;
  border-radius: 20px;
  box-shadow: 0 3px 6px ${Theme.ProformBlack};
  box-sizing: border-box;
  color: ${Theme.White};
  display: flex;
  font-family: 'Nunito', sans-serif;
  font-size: 24px;
  justify-content: space-between;
  line-height: 32px;
  padding: 12px 20px;
  transition: all 0.5s ease-in-out;
  width: 45%;

  svg {
    transition: all 0.5s ease-in-out;

    path {
      fill: ${Theme.White};
      stroke: ${Theme.ProformGreen};
    }
  }

  &:hover {
    background-color: ${Theme.Transparent};
    box-shadow: 0 6px 9px ${Theme.ProformGreen};
    color: ${Theme.ProformGreen};
    cursor: pointer;

    svg {
      path {
        fill: ${Theme.ProformGreen};
        stroke: ${Theme.ProformGreen};
      }
    }
  }

  ${media.tablet} {
    font-size: 20px;
    line-height: 27px;
    width: 55%;
    padding: 16px 20px;
  }

  ${media.mobile} {
    width: 65%;
  }
`
