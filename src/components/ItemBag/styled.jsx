import styled from "styled-components";

export const CountArea = styled.div`
    display: flex;
    justify-content: space-between;

    & > * {
        width: 1.8em;
        height: 1.8em;
        background-color: transparent;
        font-size: calc(10px + 2vmin);
        text-align: center;
        font-weight: 500;
    }
    & > button {
        cursor: pointer;
        border: none;
    }
`

export const ButtonRemove = styled.button`
    border: none;
    background-color: black;
    text-align: center;
    color: white;
    padding: 1em 0;
    cursor: pointer;
`