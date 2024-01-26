import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { DataContext } from "../../App";
import { FooterDescription, FooterInside, FooterOptions, FooterStyled, InputDiv, ItemLink, ListButtons, LogoutButton, NavButtons, NavBar, SearchButton, HeaderStyled, StyledInput, MainStyled } from "./style";

export const Layout = () => {
    const { bag, wishlist, currentRoute } = useContext(DataContext);

    return (
        <>
            <MainStyled>
                <HeaderStyled>
                    <NavBar>
                        <NavButtons>
                            <Link to="/">OUTSTER</Link>
                            <nav>
                                <ListButtons>
                                    <ItemLink select={currentRoute == 'Home' ? "black" : "gray"}><Link to="/">Home</Link></ItemLink>
                                    <ItemLink select={currentRoute == 'Products' ? "black" : "gray"}><Link to="/products">Products</Link></ItemLink>
                                    <ItemLink select={currentRoute == 'Wishlist' ? "black" : "gray"}><Link to="/wishlist">Wishlist {wishlist.length > 0 && <span>{wishlist.length > 99 ? '99+' : wishlist.length}</span>}</Link></ItemLink>
                                    <ItemLink select={currentRoute == 'Bag' ? "black" : "gray"}><Link to="/bag">Bag {bag.length > 0 && <span>{bag.length > 99 ? '99+' : bag.length}</span>}</Link></ItemLink>
                                </ListButtons>
                            </nav>
                        </NavButtons>
                        <LogoutButton>Logout</LogoutButton>
                    </NavBar>
                    <InputDiv>
                        <StyledInput type="text" placeholder="What are you looking for?"/>
                        <SearchButton onClick={() => console.log("Pesquisar")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </SearchButton>
                    </InputDiv>
                </HeaderStyled>
                <Outlet />
            </MainStyled>
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