// import 'styled-components'
import {BaseTheme} from './utils/Theme'

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme extends BaseTheme {}
}