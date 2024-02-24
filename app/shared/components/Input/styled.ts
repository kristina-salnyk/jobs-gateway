import styled from 'styled-components'

export const InputWrapper = styled.div`
  position: relative;
`
export const InputIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);

  svg {
    fill: ${({ theme }) => theme.colors.border};
  }
`

export const InputStyled = styled.input`
  padding: 10px 20px 10px 40px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
`
