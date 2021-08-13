import styled, { css } from 'styled-components'
import { Theme } from '@/styles/Theme'
import { media } from '@/styles/GlobalStyles'
import { Field, ErrorMessage } from 'formik'

interface IInput {
  width?: string
  height?: string
  hasError?: boolean
}

function InputStyle({ hasError }: IInput) {
  if (hasError) {
    return css`
      border: 3px solid red;
      box-shadow: 0 3px 6px red;
      color: red;
    `
  }
}

export const InputWrapper = styled.div<IInput>`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: ${props => props.height || '75px'};
  width: ${props => props.width || '45%'};
`

export const Input = styled(Field)<IInput>`
  ${InputStyle};
  align-items: start;
  border: 1px solid ${Theme.ProformLightGray};
  border-radius: 20px;
  box-shadow: 0 1px 3px ${Theme.ProformBlack};
  box-sizing: border-box;
  color: ${Theme.ProformBlack};
  display: flex;
  font-size: 18px;
  height: 100%;
  line-height: 24px;
  padding: 0 18px;
  text-align: left;
  transition: all 0.2s ease-in-out;
  vertical-align: top;
  width: 100%;

  &:focus {
    box-shadow: 0 3px 6px ${Theme.ProformGreen};
    outline: none;
  }

  &:disabled {
    background-color: ${Theme.Gray};
    border: 1px solid ${Theme.Gray};
  }

  ${media.smallTablet} {
    width: 100%;
  }
`

export const InputMessage = styled(ErrorMessage)`
  align-self: flex-start;
  box-sizing: border-box;
  color: red;
  font-size: 16px;
  line-height: 19px;
`
