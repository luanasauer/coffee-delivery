// O IMPORT DIZ QUE ESTÁ SOBRESCREVENDO ALGO, E NÃO CRIANDO DO ZERO
import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// CRIA UMA TIPAGEM PARA O MODULO 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
