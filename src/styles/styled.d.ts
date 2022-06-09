import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
      title: string

      colors: {
        primary: string
        secondary: string
        success: string
        danger: string
        sidemenu: string
        background: string
        darkBackground: string
        text: string
        textInvert: string
        cardbg: string
        borderColor: string
        shadows: string
        gray100: string
        gray200: string
        gray300: string
        gray400: string
        gray500: string
        gray600: string
        gray700: string
        gray800: string
      }
    }
}