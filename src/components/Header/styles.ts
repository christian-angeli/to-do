import styled from "styled-components"

interface InfoProps {
    background: string;
}

export const Container = styled.div<InfoProps>`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 35%;

    background-size: cover;
    background-image: url(${(props) => props.background});

    img{
        width: 100%;
        height: 20rem;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 4rem;
    width: 40%;

    input{
        width: 100%;
        height: 4rem;
        font-size: 1.5rem;
    }

    @media (max-width: 700px) { 
        width: 90%;
    }
`



export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 10rem;
    img{
        width: 35px;
        height: 35px;
    }
    button{
        border: none;
        background: none;
    }
`

export const Input = styled.form`
    display: flex;
    align-items: center;
    width: 100%;

    border-radius: 0.25rem;

    background: ${props => props.theme.colors.content_background};
    div{
        width: 1.5rem;
        height: 1.5rem;

        margin: 0 2rem;
        border-radius: 50%;
        border: 1px solid ${props => props.theme.colors.border_theme};
    }

    input{
        background: ${props => props.theme.colors.content_background};
        border: none;
        border-radius: 0.25rem;
        
        :focus{
            outline: none;
        }
    }
`


