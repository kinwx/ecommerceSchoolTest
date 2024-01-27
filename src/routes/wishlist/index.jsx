import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import { BtnNav, ListItemsWishlist, NavigationWishlist, SectionWishlist, StyledSection } from "./style";
import { ProductCard } from "../../components/ProductCard";
import { divideArr } from "../../functions/divideArr";
import { SectionFooterBottom } from "../../components/SectionFooterBottom";

export const Wishlist = () => {
    const { setCurrentRoute, wishlist } = useContext(DataContext);
    const [ WishParts, setWishParts ] = useState([]);
    const [ wishSection, setWishSection ] = useState(0);

    useEffect(() => {
        setCurrentRoute('Wishlist');
    }, []);
    useEffect(() => {
        if(wishlist.length > 0) {
            setWishParts(divideArr(wishlist, 9));
        };
    }, [wishlist]);

    const nextSection = () => {
        if(wishSection < WishParts.length - 1)
            setWishSection(prev => prev + 1);
    };
    const previousSection = () => {
        if(wishSection != 0)
            setWishSection(prev => prev - 1);
    };
    const selectSectionWish = sectionNumber => {
        if(sectionNumber <= WishParts.length)
            setWishSection(prev => sectionNumber - 1);

        return
    };

    return (
        <>
            { wishlist.length == 0 ?
                <SectionFooterBottom>
                    <h2>A lista está vazia.</h2>
                </SectionFooterBottom> :
                <StyledSection>
                    { WishParts.length > 0 &&
                        <ListItemsWishlist>
                            {WishParts[wishSection].map( (item, index) =>
                                <ProductCard key={index} itemData={item} />
                            )}
                        </ListItemsWishlist>
                    }
                    <NavigationWishlist>
                        <BtnNav onClick={previousSection} color={wishSection == 0 ? "#ccc" : "#000"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                            </svg>
                            Previous
                        </BtnNav>
                        <SectionWishlist>
                            <BtnNav onClick={() => selectSectionWish(1)} color={wishSection != 0 ? "#ccc" : "#000"}>1</BtnNav>
                            <BtnNav onClick={() => selectSectionWish(2)} color={wishSection != 1 ? "#ccc" : "#000"}>2</BtnNav>
                            <BtnNav onClick={() => selectSectionWish(3)} color={wishSection != 2 ? "#ccc" : "#000"}>3</BtnNav>
                            <BtnNav color={wishSection <= 2 ? "#ccc" : "#000"}>...</BtnNav>
                        </SectionWishlist>
                        <BtnNav onClick={nextSection} color={wishSection == WishParts.length - 1 ? "#ccc" : "#000"}>
                            Next
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                        </BtnNav>
                    </NavigationWishlist>
                </StyledSection>
             }
        </>
    );
};