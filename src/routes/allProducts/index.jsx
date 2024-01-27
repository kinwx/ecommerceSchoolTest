import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import { BtnNav, ListItemsWishlist, NavigationWishlist, SectionWishlist, StyledSection } from "../wishlist/style";
import { divideArr } from "../../functions/divideArr";
import { ProductCard } from "../../components/ProductCard";

export const AllProducts = () => {
    const { values, setCurrentRoute } = useContext(DataContext);
    const [ productsParts, setProductsParts ] = useState([]);
    const [ productListSection, setProductListSection ] = useState(0);

    useEffect(() => {
        setCurrentRoute('allProducts');
    }, []);
    useEffect(() => {
        if(values.length > 0) {
            setProductsParts(divideArr(values, 9));
        };
    }, [values]);

    const nextSection = () => {
        if(productListSection < productsParts.length - 1)
            setProductListSection(prev => prev + 1);
    };
    const previousSection = () => {
        if(productListSection != 0)
            setProductListSection(prev => prev - 1);
    };
    const selectSectionWish = sectionNumber => {
        if(sectionNumber <= productsParts.length)
            setProductListSection(prev => sectionNumber - 1);

        return
    };

    return (
        <>
            { values.length == 0 ?
                <span>A lista está vazia.</span> :
                <StyledSection>
                    { productsParts.length > 0 &&
                        <ListItemsWishlist>
                            {productsParts[productListSection].map( (item, index) =>
                                <ProductCard key={index} itemData={item} />
                            )}
                        </ListItemsWishlist>
                    }
                    <NavigationWishlist>
                        <BtnNav onClick={previousSection} color={productListSection == 0 ? "#ccc" : "#000"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                            </svg>
                            Previous
                        </BtnNav>
                        <SectionWishlist>
                            <BtnNav onClick={() => selectSectionWish(1)} color={productListSection != 0 ? "#ccc" : "#000"}>1</BtnNav>
                            <BtnNav onClick={() => selectSectionWish(2)} color={productListSection != 1 ? "#ccc" : "#000"}>2</BtnNav>
                            <BtnNav onClick={() => selectSectionWish(3)} color={productListSection != 2 ? "#ccc" : "#000"}>3</BtnNav>
                            <BtnNav color={productListSection <= 2 ? "#ccc" : "#000"}>...</BtnNav>
                        </SectionWishlist>
                        <BtnNav onClick={nextSection} color={productListSection == productsParts.length - 1 ? "#ccc" : "#000"}>
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