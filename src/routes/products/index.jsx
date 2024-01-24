import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import { Link } from "react-router-dom";
import girlPhoto from "../../assets/girl_banner_products.jpg";
import { BannerProducts, BannerTexts, Brands, GridLayoutProduct, LayoutRecentList, SectionStyled, SlideBrands, TopTitle } from "./style";
import { ProductCard } from "../../components/ProductCard";
import { Overlay } from "../home/style";
import allen from '../../assets/allenSolly.png';
import adidas from '../../assets/adidas.jpg';
import nike from '../../assets/nike.jpg';
import pepe from '../../assets/pepeJeans.jpg';

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
            <SectionStyled>
                <TopTitle>
                    <span>Best Product</span>
                    <Link>All Product</Link>
                </TopTitle>
                <GridLayoutProduct>
                    <div>
                        <span>Mobile</span>
                        <Overlay />
                    </div>
                    <div>
                        <span>Clocks</span>
                        <Overlay />
                    </div>
                    <div>
                        <span>Headphones</span>
                        <Overlay />
                    </div>
                    <div>
                        <span>Water Bottles</span>
                        <Overlay />
                    </div>
                    <div>
                        <span>Jewellery</span>
                        <Overlay />
                    </div>
                </GridLayoutProduct>
            </SectionStyled>
            <SectionStyled>
                <TopTitle>
                    <span>Top cloths brands</span>
                    <Link>See all</Link>
                </TopTitle>
                <Brands>
                    <SlideBrands>
                        {[allen, adidas, nike, pepe].map( (image, index) =>
                            <img key={index} src={image} alt="brand_image" />
                        )}
                    </SlideBrands>
                    <SlideBrands>
                        {[allen, adidas, nike, pepe].map( (image, index) =>
                            <img key={index} src={image} alt="brand_image" />
                        )}
                    </SlideBrands>
                </Brands>
            </SectionStyled>
        </>
    );
};