import { css, DefaultTheme } from 'styled-components'

export const palette = {
  // blue
  blue20: '#f1f5f8',
  blue30: '#E9EEF3',
  blue40: '#e7edf7',
  blue50: '#D5DEE7',
  blue80: '#cad9e3',
  blue100: '#d8f0fe',
  blue110: '#BFCDDB',
  blue150: '#d6f1ff',
  blue200: '#e8f8ff',
  blue205: '#E8EDF2',
  blue210: '#225dd2',
  blue220: '#387DF4',
  blue230: '#baebff',
  blue250: '#2592D0',
  blue263: '#0471bc',
  blue280: '#94dfff',
  blue300: '#ebf8ff',
  blue320: '#c2e9fe',
  blue331: '#0080cb',
  blue340: '#c5e9fe',
  blue350: '#c4e9fe',
  blue360: '#bbdbf5',
  blue370: '#7d9fbd',
  blue400: '#0070f3',
  blue420: '#3db8fb',
  blue430: '#61c2fb',
  blue450: '#35aae6',
  blue480: '#20c2fe',
  blue500: '#3db6fb',
  blue550: '#00B7FF',
  blue600: '#00a7ff',
  blue605: '#0093D6',
  blue610: '#0072CE',
  blue630: '#2C72D5',
  blue650: '#215EBF',
  blue700: '#0064BC',
  blue725: '#004488',
  blue750: '#2D5A87',
  blue750RGBA05: 'rgba(45, 90, 135, 0.05)',
  blue750RGBA1: 'rgba(45, 90, 135, 0.1)',
  blue750RGBA5: 'rgba(45, 90, 135, 0.5)',
  blue750RGBA9: 'rgba(45, 90, 135, 0.9)',
  blue780: '#1C5889',
  blue790: '#1E50A5',
  blue830: '#003666',
  blue850: '#003155',
  blue900: '#06152B',
  blue1000: '#122946',
  // green
  green: '#13dbb5',
  green10: '#13dbb519',
  green100: '#b1e1de',
  green120: '#c1dfba',
  green200: '#87cc43',
  green300: '#2ab736',
  green350: '#54a546',
  green400: '#13dbb5',
  green500: '#68AB3B',
  green600: '#00A586',
  // gray
  gray5: 'rgba(0, 0, 0, 0.05)',
  gray10: 'rgba(0, 0, 0, 0.1)',
  gray20: 'rgba(0, 0, 0, 0.2)',
  gray30: 'rgba(242, 242, 242, 0.2)',
  gray50: '#f6f6f6',
  gray80: '#f5f7f9',
  gray100: '#f3f4f6',
  gray120: '#e5ecf3',
  gray130: '#E4E6EC',
  gray150: '#d6dae2',
  gray180: '#eceff1',
  gray200: '#bac0ce',
  gray220: '#a0b0c0',
  gray235: '#A0A8BB',
  gray240: '#BCC1CD',
  gray250: '#78849e',
  gray260: '#BBBCCD',
  gray270: '#7A849C',
  gray280: '#8F8B8C',
  gray300: '#606060',
  gray350: '#454f63',
  gray380: '#353D46',
  gray400: '#272d3d',
  gray450: '#393939',
  gray500: '#21293d',
  gray550: '#0d2135',
  gray600: '#191e2d',
  gray658: '#d6dae2',
  gray800: '#231f20',

  gray1000: '#263238',
  // red
  red200: '#ffcfc7',
  red400: '#f5634b',
  red500: '#ff553f',
  // purple
  purple100: '#efddfa',
  purple400: '#A25DDC',
  // yellow
  yellow: '#ffbc43',
  yellow50: '#fff8ec',
  yellow100: '#fff8eb',
  yellow500: '#CBA67F',
  yellow700: '#E7A03A',
  yellow800: '#ffbc4319',
  // other
  white: '#fff',
  whiteRGB0: 'rgba(255, 255, 255, 0)',
  whiteRGB10: 'rgba(255, 255, 255, 0.1)',
  whiteRGB20: 'rgba(255, 255, 255, 0.2)',
  whiteRGB60: 'rgba(255, 255, 255, 0.6)',
  black: '#000',
  orange: '#F7A511',
  red: '#ff0000',
  red10: '#f5634b19',
  red100: '#DF691E',
  pink: '#ff326e',
  pink10: '#ff326e19',
  pink100: '#aa4992',
  pink300: '#CF1A96',
  pink500: '#CB008D',
  pink800: '#BA0239',
  darkBlue: '#0d5ada',
  darkBlue10: '#0d5ada19',
  blue: '#3db6fb',
  blue10: '#3db6fb19',
  transparent: 'transparent',
  walmart: '#0071DC',
  walmartLight: '#4C9BE6',
  walmartRGB50: '#0071DC88',
}

export const templates = {
  absolute: css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `,
  centerContent: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  centerItems: css`
    display: flex;
    align-items: center;
  `,
  ellipsis: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
}

export const SIZE = {
  MOBILE_S: '320px',
  MOBILE_MS: '360px',
  MOBILE_ML: '400px',
  MOBILE_M: '480px',
  MOBILE_L: '600px',
  TABLET_XS: '720px',
  TABLET_S: '768px',
  TABLET_M: '960px',
  TABLET_MS: '1024px',
  TABLET_L: '1280px',
  DESKTOP_M: '1440px',
  DESKTOP_ML: '1520px',
  DESKTOP_MX: '1660px',
  DESKTOP_L: '1920px',
} as const

export const screenSizes = {
  MOBILE_S: `(max-width: ${SIZE.MOBILE_S})`,
  MOBILE_MS: `(max-width: ${SIZE.MOBILE_MS})`,
  MOBILE_ML: `(max-width: ${SIZE.MOBILE_ML})`,
  MOBILE_M: `(max-width: ${SIZE.MOBILE_M})`,
  MOBILE_L: `(max-width: ${SIZE.MOBILE_L})`,
  TABLET_XS: `(max-width: ${SIZE.TABLET_XS})`,
  TABLET_S: `(max-width: ${SIZE.TABLET_S})`,
  TABLET_M: `(max-width: ${SIZE.TABLET_M})`,
  TABLET_MS: `(max-width: ${SIZE.TABLET_MS})`,
  TABLET_L: `(max-width: ${SIZE.TABLET_L})`,
  DESKTOP_M: `(max-width: ${SIZE.DESKTOP_M})`,
  DESKTOP_ML: `(max-width: ${SIZE.DESKTOP_ML})`,
  DESKTOP_MX: `(max-width: ${SIZE.DESKTOP_MX})`,
  DESKTOP_L: `(max-width: ${SIZE.DESKTOP_L})`,
}

export const colors = {
  ...palette,
  transparent: palette.transparent,
  background: palette.white,
  primary: palette.gray1000,
  text: palette.white,
  textInverted: palette.white,
  textLight: palette.gray250,
  border: palette.gray150,
  error: palette.red400,
  errorBackground: palette.red200,
}

export const assets = {
  palette,
  templates,
  screenSizes,
}

export const theme: DefaultTheme = {
  ...assets,
  colors,
}
