import 'styled-components';
import { MainThemeInterface } from '@ce/components';

declare module 'styled-components' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface DefaultTheme extends MainThemeInterface {}
}
