import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyles = createGlobalStyle`
    ${normalize}
    * {
        outline: none;
        box-sizing: border-box;
        caret-color: transparent;
    }

    html, body {
        min-height: 100%;
    }

    body {
        font-family: "Proxima Nova", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        padding: 0;
        margin: 0;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        position: relative;
        font-size: 16px;
        overflow: hidden;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    img {
        display: block;
        max-width: 100%;
        height: 100%;
    }

    input, textarea {
        caret-color: ${({ theme }) => theme.colors.black};
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        -webkit-box-shadow: unset !important;
        box-shadow: unset !important;
        border: inherit;
    }

    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;

        @media screen and ${({ theme }) => theme.screenSizes.TABLET_L} {
            width: 7px;
            height: 7px;
        }

        @media screen and ${({ theme }) => theme.screenSizes.MOBILE_M} {
            width: 6px;
            height: 6px;
        }
    }

    &::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.yellow100};
        border-radius: 4px;
        box-shadow: 1px 2px 5px 1px ${({ theme }) => theme.colors.yellow50} inset;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: 4px;
    }
`
