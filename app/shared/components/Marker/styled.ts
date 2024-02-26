import styled from 'styled-components'

export const MarkerWrapper = styled.div`
  opacity: 0;
  animation: fadeIn ${({ theme }) => theme.animation.duration}
    ${({ theme }) => theme.animation.timingFunction} forwards;
`

export const MarkerIcon = styled.button<{ selected: boolean }>`
  padding: 4px 8px;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  color: ${({ theme, selected }) => theme.colors.white};
  background-color: ${({ theme, selected }) => theme.colors.gray1000};
  border-radius: 20px;
  border: 2px solid
    ${({ theme, selected }) => theme.colors[selected ? 'white' : 'transparent']};
  cursor: pointer;
  transition: background-color
    ${({ theme }) =>
      `${theme.transition.duration} ${theme.transition.timingFunction}`};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.gray350};
  }
`
