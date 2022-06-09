import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
      title: string

      colors: {
        primary: string
        secondary: string
        success: string
        danger: string
        gray500: string
        sidemenu: string
        background: string
        darkBackground: string
        text: string
        textInvert: string
        cardbg: string
        borderColor: string
        shadows: string
      }
    }
}