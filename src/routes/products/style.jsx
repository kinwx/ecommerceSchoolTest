import styled from "styled-components";

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
    margin-bottom: 1.8em;
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