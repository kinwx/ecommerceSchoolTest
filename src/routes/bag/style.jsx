import styled from "styled-components";

export const SectionBagStyled = styled.section`
    margin: 3em 0;
    display: flex;
    flex-direction: column;
    gap: 1em;
    z-index: 0;

    & > span {
        font-size: calc(10px + 2vmin);
        font-weight: 500;
    }
`

export const BagItemsAndPaymentLayout = styled.div`
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

export const AsidePayment = styled.div`
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2em;
`

export const DataQuantityAndPayment = styled.div`
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
        cursor: pointer;
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