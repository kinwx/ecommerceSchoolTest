import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { DataContext } from "../../App";
import { FooterDescription, FooterInside, FooterOptions, FooterStyled, InputDiv, ItemLink, ListButtons, LogoutButton, NavButtons, NavTopBar, SearchButton, StyledHeader, StyledInput, StyledMain } from "./style";

export const Layout = () => {
    const { bag, atualRoute } = useContext(DataContext);

    return (
        <>
            <StyledMain>
                <StyledHeader>
                    <NavTopBar>
                        <NavButtons>
                            <Link to="/">OUTSTER</Link>
                            <nav>
                                <ListButtons>
                                    <ItemLink select={atualRoute == 'Home' ? "black" : "gray"}><Link to="/">Home</Link></ItemLink>
                                    <ItemLink select={atualRoute == 'Products' ? "black" : "gray"}><Link to="/products">Products</Link></ItemLink>
                                    <ItemLink select={atualRoute == 'Wishlist' ? "black" : "gray"}><Link to="/wishlist">Wishlist</Link></ItemLink>
                                    <ItemLink select={atualRoute == 'Bag' ? "black" : "gray"}><Link to="/bag">Bag {bag.length > 0 && <span>{bag.length}</span>}</Link></ItemLink>
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
            <FooterStyled>
                <FooterInside>
                    <FooterDescription>
                        <span>OUTSTER</span>
                        <p>
                            It's not about having it all, but making the best of what you have.
                        </p>
                    </FooterDescription>
                    <FooterOptions>
                        <strong>Explore</strong>
                        <Link to="/">Home</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/wishlist">Wishlist</Link>
                    </FooterOptions>
                    <FooterOptions>
                        <strong>Follow us</strong>
                        <a href="https://facebook.com" target="_blank">Facebook</a>
                        <a href="https://instagram.com" target="_blank">Instagram</a>
                        <a href="https://linkedin.com" target="_blank">Linkedin</a>
                    </FooterOptions>
                </FooterInside>
            </FooterStyled>
        </>
    );
};