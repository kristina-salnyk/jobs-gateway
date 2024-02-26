import React from 'react'
import {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form'
import { InputIcon, InputStyled, InputWrapper } from './styled'

interface InputProps<T extends FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  register: UseFormRegister<T>
  options?: RegisterOptions<T, Path<T>>
  error?: FieldError
}

function Input<T extends FieldValues>({
  name,
  Icon,
  register,
  options,
  error,
  ...rest
}: InputProps<T>) {
  return (
    <InputWrapper>
      <InputIcon>
        <Icon width={30} height={30} />
      </InputIcon>
      <InputStyled {...rest} {...register(name, options)} />
      {error && <span role='alert'>{error.message}</span>}
    </InputWrapper>
  )
}

export default Input
