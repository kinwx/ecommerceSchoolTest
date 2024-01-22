import styled from "styled-components";
import banner from "../../assets/banner_background.jpg"

export const SectionStyled = styled.section`
    margin-top: 2em;
`

export const DivImageBackground = styled.div`
    position: relative;
    width: 100%;
    height: 550px;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5em;
`

export const Overlay = styled.div`
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: brightness(70%);
`

export const Texts = styled.div`
    position: relative;
    text-align: center;
    color: white;
    z-index: 1;

    & > p {
        font-size: calc(10px + 2vmin);
    }
    & > h2 {
        font-size: calc(10px + 4vmin);
        font-weight: 500;
    }
`

export const Buttons = styled.div`
    position: relative;
    display: flex;
    gap: 1em;
    z-index: 1;
    width: 30%;
`

export const ButtonStyled = styled.button`
    flex: 1;
    padding: .6em .8em;
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;

    font-weight: 500;
    font-size: calc(10px + .4vmin);
`

export const LinkStyled = styled.a`
    flex: 1;
    padding: .6em .8em;
    background-color: transparent;
    color: white;
    border: 1px solid white;

    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .2em;
`