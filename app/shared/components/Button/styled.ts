import styled from 'styled-components'

export const ButtonStyled = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme, color }) =>
    color === 'primary' ? theme.colors.darkBlue : 'transparent'};
  color: ${({ theme, color }) =>
    color === 'primary' ? theme.colors.white : theme.colors.darkBlue};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transition.duration}
    ${({ theme }) => theme.transition.timingFunction};

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`
