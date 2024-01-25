import styled from "styled-components";

export const SectionBagStyled = styled.section`
    margin: 3em 0;
    display: flex;
    flex-direction: column;
    gap: 1em;

    & > span {
        font-size: calc(10px + 1vmin);
        font-weight: 500;
    }
`

export const BagItemsAndPaymentLayout = styled.div`
    position: relative;
    display: flex;
    gap: 1em;
`

export const ItemsBagLayout = styled.div`
    flex: 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1em;
    row-gap: 2em;
`

export const DataQuantityAndPayment = styled.div`
    flex: 1;
    position: sticky;
    top: 2em;
    height: max-content;
    display: flex;
    flex-direction: column;
    gap: 1em;
    font-weight: 500;

    & > button {
        border: none;
        background-color: black;
        text-align: center;
        color: white;
        padding: 1em 0;
    }
`

export const ItemsBagList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: .6em;
    list-style: none;

    & > li {
        display: flex;
        flex-direction: column;

        & > div {
            display: flex;
            justify-content: space-between;
            font-size: calc(10px + 1vmin);
        }
    }
`

export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: calc(10px + 1vmin);
`