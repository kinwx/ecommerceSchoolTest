import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { DataContext } from "../../App";
import { InputDiv, ItemLink, ListButtons, LogoutButton, NavButtons, NavTopBar, SearchButton, StyledHeader, StyledInput, StyledMain } from "./style";

export const Layout = () => {
    const { bag, atualRoute } = useContext(DataContext);

    return (
        <StyledMain>
            <StyledHeader>
                <NavTopBar>
                    <NavButtons>
                        <Link to="/">OUTSTER</Link>
                        <nav>
                            <ListButtons>
                                <ItemLink select={atualRoute == 'Home' ? true : false}><Link to="/">Home</Link></ItemLink>
                                <ItemLink select={atualRoute == 'Products' ? true : false}><Link to="/products">Products</Link></ItemLink>
                                <ItemLink select={atualRoute == 'Wishlist' ? true : false}><Link to="/wishlist">Wishlist</Link></ItemLink>
                                <ItemLink select={atualRoute == 'Bag' ? true : false}><Link to="/bag">Bag {bag.length > 0 && <span>{bag.length}</span>}</Link></ItemLink>
                            </ListButtons>
                        </nav>
                    </NavButtons>
                    <LogoutButton>Logout</LogoutButton>
                </NavTopBar>
                <InputDiv>
                    <StyledInput type="text" placeholder="What are you looking for?"/>
                    <SearchButton onClick={() => console.log("Pesquisar")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </SearchButton>
                </InputDiv>
            </StyledHeader>
            <Outlet />
        </StyledMain>
    );
};