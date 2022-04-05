import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --brigth-blue: hsl(220, 98%, 61%);
    --check-background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
}
    * {
        margin: 0;
        padding: 0;
    }

    html{
        @media(max-width: 1080px){
            font-size: 93.75%; //15px
        }

        @media(max-width: 1080px){
            font-size: 87.5%; //14px
        }
    }

    body{
        max-height: 100vh;
    }

    p, span, button {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 3rem;
        font-weight: 700;
        letter-spacing: 1rem;
        color: hsl(0, 0%, 98%);
    } 

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

   
`;
