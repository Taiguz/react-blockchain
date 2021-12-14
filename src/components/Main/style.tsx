import styled from "styled-components";

export const Container = styled.div`
    background-color: black;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    label {
        color: white;
    }
`
export const BlocksContainer = styled.div`
    width: 100%;
    height: 90%;
    overflow-y: auto;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`

export const ButtonContainer = styled.div`
    width: 100%;
    height: 10%;
    padding: 20px;
    box-sizing: border-box;
    border-top: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    > * {
        margin-right: 10px;

    }

`

export const Button = styled.button`
    color: white;
    border: 1px solid white;
    padding: 10px;
    background-color: black;
    cursor: pointer;
    transition: transform 0.3s ease;
    :hover {
        transform: scale(1.1);
    }
    :active {
        transform: scale(1);
    }
    :disabled {
        border 1px solid grey;
        transform: scale(1);
        cursor: default;
    }
`

export const Input = styled.input`
    color: white;
    border: 1px solid white;
    padding: 10px;
    background-color: black;
`