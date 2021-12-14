import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid white;
    background-color: black;
    color: white;
    padding: 10px;
    width: 60%;
    height: 80%;

`
export const Overlay = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.8);
    z-index: 10;
`

export const MinerRow = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    > * {
        margin-left: 10px;
    }
`
export const MinerContent = styled.div`
    height: 62%;
    width: 100%;
    overflow-y: auto;
`

export const Strong = styled.span`
    font-weight: bolder;
`