import styled from 'styled-components'

export const BlockStyled = styled.div`
    border: 1px solid white;
    padding: 20px;
    color: white;
    font-size: 20px;
    min-width: 80%;
    height: 300px;
    margin-bottom: 20px;
`

export const Invalid = styled.span`
    font-weight: bolder;
    color: red;
    border: 1px solid red;
    padding: 5px;
`

export const Valid = styled.span`
    font-weight: bolder;
    color: green;
    border: 1px solid green;
    padding: 5px;
`