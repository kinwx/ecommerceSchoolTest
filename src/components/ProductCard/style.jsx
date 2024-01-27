import styled from "styled-components";

export const CardLayout = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: .7em;

    & > img {
        width: 100%;
        aspect-ratio: 8/8;
        object-fit: contain;
    }
`

export const ProductLabels = styled.div`
    display: flex;
    flex-direction: column;
    gap: .3em;

    & > strong {
        font-size: calc(10px + .8vmin);
        display: -webkit-box;
        -webkit-line-clamp: 1;
        overflow: hidden;
        -webkit-box-orient: vertical;
    }

    & > p {
        color: gray;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        -webkit-box-orient: vertical;
    }
`

export const PriceAndWish = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ButtonHeart = styled.button`
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
`

export const ButtonsCard = styled.div`
    display: flex;
    gap: 1em;
    
    & > button {
        padding: 1em;
        cursor: pointer;
    }
    & > button:nth-child(1) {
        background-color: black;
        color: white;
        flex: .8;
        border: none;
        transition: .8s ease-in-out;
    }
    & > button:nth-child(2) {
        background-color: transparent;
        color: black;
        border: 1px solid black;
        flex: 1.2;
        font-weight: 500;
    }
`