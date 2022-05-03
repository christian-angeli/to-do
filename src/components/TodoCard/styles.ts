import styled from "styled-components"

export const Container = styled.li`
    display: flex;
    align-items: center;
    width: 100%;
    height: 4rem;

    border-bottom: 1px solid ${props => props.theme.colors.border_theme};

    background: ${props => props.theme.colors.content_background};
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 100%;
`

export const DeleteButton = styled.button`
    display: flex;
    border: none;
    background: none;
    margin-right: 0.5rem;

    transition: filter 0.2s;

    &:hover {
        filter: opacity(0.6);
    }
`
interface DescriptionProps {
    isActive: boolean;
}

export const Description = styled.p<DescriptionProps>`
    display: flex;
    align-items: center;

    width: 80%;
    max-width: 80%;
    height: 100%;

    overflow-wrap: break-word;

    text-decoration: ${props => props.isActive === true ? "" : "line-through"};
    text-decoration-color: ${props => props.theme.colors.done_letter};

    p{
        max-width: 100%;
    }
`