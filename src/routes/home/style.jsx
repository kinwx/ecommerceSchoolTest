import styled from "styled-components";
import banner from "../../assets/banner_background.jpg"

export const SectionStyled1 = styled.section`
    margin: 3em 0;
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

// ===========
export const FakeButtonFeatures = styled.div`
    width: 10em;
    margin: 0 auto;
    padding: .6em 1em;

    border: 1px solid black;
    background-color: transparent;

    font-weight: 500;
    text-align: center;
    pointer-events: none;
`

export const TitleFeatures = styled.h3`
    text-align: center;
    font-size: calc(10px + 3vmin);
    font-weight: 500;
    margin-top: .6em;
    pointer-events: none;
`

export const LayoutFeaturesCards = styled.div`
    margin-top: 2em;
    display: flex;
    gap: 1em;
    pointer-events: none;
`

export const FeatureCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .4em;
    text-align: center;

    & > p {
        color: gray;
    }
`

// ============
export const StrongProducts = styled.strong`
    font-size: calc(10px + 1vmin);
`

export const TitleProducts = styled.h2`
    font-size: calc(10px + 3vmin);
    font-weight: 600;
`

export const MenuIcons = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-auto-rows: 12em;
    grid-gap: .5em;

    & > div {
        background-color: #f1f1f1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2em;
        transition: all .4s ease;

        & > span {
            font-size: calc(10px + 1vmin);
            font-weight: 500;
            pointer-events: none;
        }

        &:hover {
            background-color: black;
            color: white;
        }
    }
`