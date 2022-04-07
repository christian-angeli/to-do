import "styled-components";


declare module "styled-components" {
    export interface DefaultTheme{
        name: string;
        colors: {
            page_background: string;
            content_background: string;
            border_theme: string;
            input_letter: string;
            done_letter: string;
        }
    }
}