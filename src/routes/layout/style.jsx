import styled from "styled-components";

// Header Navegation
export const MainStyled = styled.main`
    width: 1024px;
    height: auto;

    margin: 0 auto;
    /* border-left: 1px solid black;
    border-right: 1px solid black; */

    @media (max-width: 1024px) {
        width: 100vw;
        padding: 0 .5em;
        overflow-x: hidden;
    }
`

export const HeaderStyled = styled.header`
    display: flex;
    flex-direction: column;
    gap: 1em;

    padding-top: 1.5em;
`

export const NavBar = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1em;


    }
`

export const NavButtons = styled.div`
    & > a {
        text-decoration: none;
        color: black;
        font-size: calc(10px + 1vmin);
        font-weight: 600;
        font-family: "Oswald", sans-serif;
    }

    display: flex;
    align-items: center;
    gap: 2.5em;

    @media (max-width: 432px) {
        flex-direction: column;
        gap: 1.4em;
    }
`

export const ListButtons = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
`

export const ItemLink = styled.li`
    margin: 0 auto;

    & a {
        text-decoration: none;
        color: ${props => props.select};
        font-weight: ${props => props.select == 'black' ? 500 : 400 };
        display: flex;
        align-items: center;
        gap: .4em;

        & > span {
            background-color: red;
            color: #ffffff;
            border-radius: 49%;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1.8em;
            height: 1.8em;
            font-weight: 500;
            font-size: calc(10px + .3vmin);
        }
    }
`

export const LogoutButton = styled.button`
    color: white;
    background-color: black;
    font-weight: 400;

    padding: .6em 2em;
    border: none;
    cursor: pointer;
`

export const InputDiv = styled.div`
    position: relative;
`

export const StyledInput = styled.input`
    &::placeholder {
        font-size: calc(10px + .7vmin);
    }

    width: 100%;
    padding: .25em 1em;
    font-size: calc(10px + 1vmin);

    position: relative;
    z-index: 1;
`

export const SearchButton = styled.button`
    position: absolute;
    right: .8em;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;

    width: 2em;
    height: 2em;
    border: none;
    border-radius: 50%;
    color: gray;
    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

// ==========
// Footer
export const FooterStyled = styled.footer`
    height: auto;
    background-color: black;
    color: white;
    width: 100vw;
    overflow-x: hidden;
`

export const FooterInside = styled.div`
    width: 1024px;
    height: 100%;
    margin: 0 auto;
    padding: 3em 2em 6em;

    display: grid;
    grid-template-columns: 8fr 1fr 1fr;
    column-gap: .5em;

    @media (max-width: 1024px) {
        width: 100vw;
        padding: 3em 2em 6em;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 1fr;
        justify-items: center;
        overflow-x: hidden;
    }
`

export const FooterDescription = styled.div`
    padding-top: 2em;
    font-weight: 300;
    
    & > span {
        font-family: "Oswald", sans-serif;
        font-weight: 600;
        font-size: calc(10px + .9vmin);
    }

    @media (max-width: 1024px) {
        grid-column: span 2;
        text-align: center;
    }
`
export const FooterOptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;

    & > strong {
        margin-bottom: .8em;
    }
    & > a {
        text-decoration: none;
        color: white;
        font-weight: 300;
    }
`