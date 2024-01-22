import styled from "styled-components";

export const StyledMain = styled.main`
    width: 1024px;
    height: auto;

    margin: 0 auto;
    border-left: 1px solid black;
    border-right: 1px solid black;
`

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    gap: 1em;

    padding-top: 1.5em;
`

export const NavTopBar = styled.div`
    display: flex;
    justify-content: space-between;
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
`

export const ListButtons = styled.ul`
    list-style: none;
    display: flex;
    gap: 2em;
`

export const ItemLink = styled.li`
    & a {
        text-decoration: none;
        color: ${props => props.select ? 'black' : 'gray'};
        font-weight: ${props => props.select ? 500 : 400 };
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
`