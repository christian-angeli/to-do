import styled from "styled-components"

export const ActiveButton = styled.button`
        width: 1.5rem;
        height: 1.5rem;

        margin-left: 1rem;
        border-radius: 50%;
        border: 1px solid ${props => props.theme.colors.border_theme};
        background: ${props => props.theme.colors.content_background};
`

export const DisabledButton = styled.button`
        width: 1.5rem;
        height: 1.5rem;

        margin-left: 1rem;
        border-radius: 50%;
        border: 1px solid ${props => props.theme.colors.border_theme};
        background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
`