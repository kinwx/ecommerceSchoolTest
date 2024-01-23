import styled from "styled-components";
import banner from "../../assets/banner_background.jpg"

export const SectionStyled = styled.section`
    margin: 4em 0;
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

// ===========
export const PopularCollectionComponent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(505px, 1fr));
    column-gap: .5em;
`

export const ImageArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    & > img {
        width: 400px;
        aspect-ratio: 8/8;
        object-fit: contain;
    }
`

export const ProductData = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1em;
`

export const Labels = styled.div`
    pointer-events: none;
`

export const StarsAndQuantity = styled.div`
    display: flex;
    justify-content: space-between;
    pointer-events: none;

    & > p {
        color: green;
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
`

export const ButtonArea = styled.div`
    display: flex;
    gap: 2em;
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
`

export const VisualRes = styled.div`
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
export const LayoutCards = styled.div`
    display: flex;
    gap: 3.2em;
    pointer-events: none;
`

export const CardOpinion = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8em;

    & > svg {
        color: #c0c0c0;
        margin: 1em 0;
    }
`

export const OpinionText = styled.p`
    font-weight: 500;
    text-align: justify;
`

export const Profile = styled.div`
    display: flex;
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
export const FaqList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.2em;
    margin-top: 3em;
`

export const FaqItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > strong {
        font-size: calc(10px + .8vmin);
    }
    & > svg {
        cursor: pointer;
    }
`