import styled from "styled-components";
import banner from "../../assets/banner_background.jpg"

// Banner
export const SectionStyled = styled.section`
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
    top: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: brightness(70%);
`

export const TextsInitialBanner = styled.div`
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

export const ButtonsBanner = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    z-index: 1;
    width: 30%;
`

export const ButtonBannerStyled = styled.button`
    flex: 1;
    padding: .6em .8em;
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;

    font-weight: 500;
    font-size: calc(10px + .4vmin);
`

export const LinkBannerStyled = styled.a`
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
// Features
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

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const FeatureCard = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .4em;
    text-align: center;

    & > p {
        color: gray;

        @media (max-width: 768px) {
            max-width: 65%;
        }
    }
`

// ============
// Product Categories Menu 
export const StrongNameSection = styled.strong`
    font-size: calc(10px + 1vmin);
`

export const TitleSection = styled.h2`
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

// ===========
// Popular Products
export const PreviewProductComponent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(505px, 1fr));
    grid-auto-rows: 1fr;
    column-gap: .5em;
    row-gap: 1em;

    @media (max-width: 505px) {
        grid-template-columns: 1fr;
    }
`

export const ImageArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    & > img {
        width: 20em;
        aspect-ratio: 8/8;
        object-fit: contain;

        @media (max-width: 338px) {
            width: 100%;
        }
    }
`

export const ProductData = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1em;
`

export const ProductLabels = styled.div`
    pointer-events: none;
`

export const StarsAndQuantity = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    pointer-events: none;

    & > p {
        color: green;
    }

    @media (max-width: 346px) {
        flex-direction: column;
        gap: .5em;
    }
`

export const Stars = styled.div`
    display: flex;
    align-items: center;
    gap: .9em;

    & > div {
        color: yellow;
        display: flex;
        gap: .2em;
    }
    & > span {
        font-weight: 500;
    }
`

export const Price = styled.strong`
    font-size: calc(10px + 2vmin);
`

export const BottomPosition = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1em;
    @media (max-width: 505px) {
        position: relative;;
    }
`

export const ButtonArea = styled.div`
    display: flex;
    gap: 2em;

    @media (max-width: 506px) {
        flex-direction: column;
        gap: .5em;
    }
`

export const BtnAddBag = styled.button`
    flex: 1;
    background-color: black;
    color: white;
    padding: .8em 1em;
    border: none;
    cursor: pointer;
`

export const AreaBtnDetails = styled.div`
    position: relative;
    flex: 1;

    & > button:nth-child(1){
        position: relative;
        z-index: 1;
        width: 100%;
        background-color: transparent;
        color: black;
        border: 1px solid black;
        padding: .8em 1em;
        font-size: calc(10px + .5vmin);
        font-weight: 500;
        cursor: pointer;
    }
    & > button:nth-child(2){
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(25%, -25%);
        z-index: 2;

        width: 2.4em;
        height: 2.4em;
        border-radius: 50%;
        color: red;
        background-color: white;
        border: none;

        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`

export const CarouselLayout = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 506px) {
        flex-direction: column;
        gap: 1em;
    }
`

export const VisualBars = styled.div`
    display: flex;
    gap: .3em;
    height: .3em;
`

export const ResponseBar = styled.div`
    background-color: ${props => props.color};
    height: .3em;
    width: 4em;
    border-radius: .3em;
`

export const ArrowButtons = styled.div`
    display: flex;
    gap: .5em;

    & > button {
        border: 1px solid black;
        background-color: transparent;
        color: black;

        padding: .2em 2em;

        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`

// ======================
// Comments feedback
export const LayoutCards = styled.div`
    display: flex;
    gap: 3.2em;
    pointer-events: none;

    @media (max-width: 887px) {
        flex-direction: column;
        align-items: center;
    }
`

export const OpinionCard = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: .8em;

    & > svg {
        color: #c0c0c0;
        margin: 1em 0;
    }
    @media (max-width: 887px) {
        max-width: 70%;
    }
`

export const OpinionText = styled.p`
    font-weight: 500;
    text-align: justify;
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;

    & > img {
        width: 4em;
        aspect-ratio: 8/8;
        object-fit: cover;
        border-radius: 50%;
    }
    
`

export const ProfileDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > span {
        color: gray;
        font-size: calc(10px + .4vmin);
    }
`

// ===========
// FAQ
export const FaqList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.2em;
    margin-top: 3em;
`

export const FaqItem = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: max-content 0fr;
    transition: all .4s ease-in-out;

    &:hover {
        grid-template-rows: max-content 1fr;
    }
    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    & > div > strong {
        font-size: calc(10px + .8vmin);
    }
    & > div > svg {
        cursor: pointer;
    }
    & > p {
        color: gray;
        overflow: hidden;
    }
`