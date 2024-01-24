import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import { Link } from "react-router-dom";
import girlPhoto from "../../assets/girl_banner_products.jpg";
import { BannerProducts, BannerTexts, LayoutRecentList, SectionStyled, TopTitle } from "./style";
import { ProductCard } from "../../components/ProductCard";

export const Products = () => {
    const { values, setCurrentRoute } = useContext(DataContext);

    if(values.length < 1)
        return (
            <span>Carregando...</span>
        );

    const [ recentList, setRecentList ] = useState([]);

    useEffect(() => {
        setCurrentRoute('Products');
        setRecentList(values.filter( item => item.id <= 6 && item.id > 3))
    }, []);

    return (
        <>
            <SectionStyled>
                <BannerProducts>
                    <BannerTexts>
                        <p>
                            Explore the Latest Trends and Unleash Your Fashionista. Your Ultimate Shopping, Destination Awaits
                        </p>
                        <button>Show now</button>
                    </BannerTexts>
                    <img src={girlPhoto} alt="image_girl" />
                </BannerProducts>
            </SectionStyled>      
            <SectionStyled>
                <TopTitle>
                    <span>Recent shopping</span>
                    <Link>See all</Link>
                </TopTitle>
                <LayoutRecentList>
                    {recentList?.map((item, index) => 
                        <ProductCard key={index} itemData={item} />
                    )}
                </LayoutRecentList>
            </SectionStyled>
        </>
    );
};