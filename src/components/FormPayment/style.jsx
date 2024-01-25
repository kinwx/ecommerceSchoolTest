import styled from "styled-components";

export const FormArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;

    & > button {
        width: 2em;
        height: 2em;
        border: none;
        background-color: black;
        color: white;
        border-radius: 50%;
        align-self: flex-end;
        font-weight: 600;

        display: flex;
        align-items: center;
        justify-content: center;
        padding: .4em;
        cursor: pointer;
    }
`

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1em;

    & > button {
        border: none;
        background-color: black;
        text-align: center;
        color: white;
        padding: 1em 0;
        cursor: pointer;
    }

    & > div {
        display: flex;
        flex-direction: column;
        gap: .3em;

        & > label {
            font-weight: 500;
            font-size: calc(10px + 1.2vmin);
        }
        & > input {
            padding: .25em 1em;
            font-size: calc(10px + 1vmin);

            &::placeholder {
                font-size: calc(10px + .7vmin);
            }
        }
    }
`