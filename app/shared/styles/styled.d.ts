import 'styled-components'
import { templates, screenSizes, colors } from './theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors
    templates: typeof templates
    screenSizes: typeof screenSizes
  }
}
