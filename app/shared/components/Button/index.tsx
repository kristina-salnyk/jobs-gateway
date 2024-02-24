import React from 'react'
import { ButtonStyled } from './styled'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary'
}

function Button({
  type = 'button',
  color = 'primary',
  children,
  onClick,
}: ButtonProps) {
  return (
    <ButtonStyled type={type} color={color} onClick={onClick}>
      {children}
    </ButtonStyled>
  )
}

export default Button
