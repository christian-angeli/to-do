import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 65%;

    background: hsl(236, 33%, 92%);
`

export const Content = styled.div`
    width: 40%;
    margin-top: -3%;
    height: 90%;

    border-radius: 0.25rem;
    background: hsl(0, 0%, 98%);

    overflow-y: hidden;
`

export const Input = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 4rem;

    border-bottom: 1px solid #cccc;

    background: hsl(0, 0%, 98%);
    div{
        width: 1.5rem;
        height: 1.5rem;

        margin: 0 2rem;
        border-radius: 50%;
        border: 1px solid #CCC;
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
    
`

export const Filters = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; 
    width: 20%;
    height: 10%;
`