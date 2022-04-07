import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 65%;

    background: ${props => props.theme.colors.page_background};
`

export const Content = styled.div`
    width: 40%;
    margin-top: -3%;
    height: 90%;

    border-radius: 0.25rem;
    background: ${props => props.theme.colors.content_background};

    overflow-y: hidden;
`

export const Input = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 4rem;

    border-bottom: 1px solid ${props => props.theme.colors.border_theme};

    background: ${props => props.theme.colors.content_background};
`
export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 100%;
`

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

export const ActiveDescription = styled.div`
    display: flex;
    align-items: center;

    width: 80%;
    max-width: 80%;
    height: 100%;

    overflow-wrap: break-word;

    p{
        max-width: 100%;
    }
`

export const DisabledDescription = styled.div`
    text-decoration: line-through;
    text-decoration-color: ${props => props.theme.colors.done_letter};
    display: flex;
    align-items: center;

    width: 80%;
    max-width: 80%;
    height: 100%;

    overflow-wrap: break-word;

    p{
        max-width: 100%;
    }
`

export const TodoList = styled.div`
    height: 90%;

    overflow: auto;

    ::-webkit-scrollbar {
        width: 12px;
    }
    ::-webkit-scrollbar-thumb {
        background: #cccc;
        border-radius: 0.25rem;
    }
    ::-webkit-scrollbar-track{
        border-radius: 0 0.25rem 0.25rem 0;
    }
`

export const Advice = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20%;
`

export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 10%;
    
    button{
        background: none;
        border: none;

        transition: filter 0.2s;

        &:hover {
            filter: opacity(0.6);
        }
    }
`

export const Filters = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; 
    width: 20%;
    height: 10%;

    button{
        background: none;
        border: none;

        transition: filter 0.2s;

        &:hover {
            filter: opacity(0.6);
        }        
    }

    button.selected{
        color: hsl(220, 98%, 61%);
    }
`
