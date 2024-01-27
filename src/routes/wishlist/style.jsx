import styled from "styled-components";

export const StyledSection = styled.section`
    margin: 3em 0;
`

export const ListItemsWishlist = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 330px));
    column-gap: 1em;
    row-gap: 2em;
`

export const NavigationWishlist = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5em;
    padding: 1em 1.5em;
    border: 2px solid #ccc;
    width: max-content;
    margin: 2em auto;
`

export const BtnNav = styled.button`
    --color-text: ${props => props.color};

    display: flex;
    align-items: center;
    gap: .5em;
    background-color: transparent;
    color: var(--color-text);
    border: none;
    font-size: calc(10px + 1vmin);
    font-weight: 500;
    padding: .2em .7em;
    cursor: pointer;
`

export const SectionWishlist = styled.div`
    display: flex;
    gap: 1em;
    align-items: center;
`