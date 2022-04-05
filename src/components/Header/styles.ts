import light_desktop_background from "../../assets/bg-desktop-light.jpg";
import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 35%;

    background-size: cover;
    background-image: url(${light_desktop_background});

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
`

export const Input = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

    border: 1px solid black;
    border-radius: 0.25rem;

    background: white;
    div{
        width: 1.5rem;
        height: 1.5rem;

        margin: 0 2rem;
        border-radius: 50%;
        border: 1px solid #CCC;
    }

    input{
        border: none;
        border-radius: 0.25rem;
        :focus{
            outline: none;
        }
    }
`


