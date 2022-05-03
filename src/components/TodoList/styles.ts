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

    @media (max-width: 700px) { 
        width: 90%;
    }
`
export const List = styled.ul`
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

        @media (max-width: 700px) { 
            margin: 0 0.25rem;
        }
    }

    button.selected{
        color: hsl(220, 98%, 61%);
    }

    @media (max-width: 700px) { 
        width: 30%;
    }
`
