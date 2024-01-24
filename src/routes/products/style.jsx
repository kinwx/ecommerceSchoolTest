import styled from "styled-components";
import mobile from '../../assets/mobile.jpg';
import clock from '../../assets/clock.jpg';
import headphones from '../../assets/headphones.jpg';
import bottle_mockup from '../../assets/bottle_mockup.jpg';
import jewellery from '../../assets/jewellery.jpg';

export const SectionStyled = styled.section`
    margin: 3em 0;
`

export const BannerProducts = styled.div`
    position: relative;
    background-color: #f6f6f6;
    height: 550px;

    & > img {
        height: 90%;
        aspect-ratio: 8/8;
        object-fit: cover;

        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 0;
    }
`

export const BannerTexts = styled.div`
    position: relative;
    width: 90%;
    margin: 0 auto;
    padding-top: 8em;
    z-index: 1;

    display: flex;
    flex-direction: column;
    gap: 1em;

    & > p {
        font-size: calc(10px + 2.2vmin);
        letter-spacing: 2px;
        font-weight: 400;
        width: 75%;
    }

    & > button {
        padding: .6em 1.1em;
        border: none;
        color: white;
        background-color: black;
        font-size: calc(10px + .7vmin);
        width: max-content;
        cursor: pointer;
    }
`

// ============
export const TopTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
    font-size: calc(10px + 1vmin);
    font-weight: 500;

    & > a {
        text-decoration: none;
        color: black;
    }
`

export const LayoutRecentList = styled.div`
    display: flex;
    gap: 1em;
`
// ===============
export const GridLayoutProduct = styled.div`
    height: 790px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 250px;
    grid-gap: 1em;

    & > div {
        position: relative;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        
        & > span {
            position: relative;
            font-size: calc(10px + 1vmin);
            color: white;
            font-weight: 500;
            z-index: 1;
        }
    }
    & > div:nth-child(1) {
        grid-row: 1;
        grid-column: 1;
        background-image: url(${mobile});
    }
    & > div:nth-child(2) {
        grid-row: 1;
        grid-column: 2 span;
        background-image: url(${clock});
    }
    & > div:nth-child(3) {
        grid-row: 2;
        grid-column: span 2;
        background-image: url(${headphones});
    }
    & > div:nth-child(4) {
        grid-row: 2;
        grid-column: 3;
        background-image: url(${bottle_mockup});
    }
    & > div:nth-child(5) {
        grid-row: 3;
        grid-column: span 3;
        background-image: url(${jewellery});
    }
`

// ===========
export const Brands = styled.div`
    position: relative;
    white-space: nowrap;
    overflow: hidden;

    &:hover div {
        animation-play-state: paused;
    }
    &:before {
        height: 100%;
        width: 100px;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        background: linear-gradient(to right, white, transparent);
    }
    &::after {
        height: 100%;
        width: 100px;
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
        background: linear-gradient(to left, white, transparent);
    }
`

export const SlideBrands = styled.div`
    display: inline-block;
    animation: slide 7s linear infinite;

    & > img {
        height: 12em;
        margin: 0 2em;
    }

    @keyframes slide {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
    }
`