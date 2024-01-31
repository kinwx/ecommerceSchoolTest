import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import { Link } from "react-router-dom";
import girlPhoto from "../../assets/girl_banner_products.jpg";
import { BannerProducts, BannerTexts, Brands, GridLayoutProduct, LayoutRecentList, Loading, SectionStyled, SlideBrands, TopTitle } from "./style";
import { ProductCard } from "../../components/ProductCard";
import { Overlay } from "../home/style";
import allen from '../../assets/allenSolly.png';
import adidas from '../../assets/adidas.jpg';
import nike from '../../assets/nike.jpg';
import pepe from '../../assets/pepeJeans.jpg';
import { SectionFooterBottom } from "../../components/SectionFooterBottom";

export const Products = () => {
    const { values, setCurrentRoute } = useContext(DataContext);

    const [ recentList, setRecentList ] = useState([]);

    useEffect(() => {
        setCurrentRoute('Products');
        setRecentList(values.filter( item => item.id <= 6 && item.id > 3));
    }, []);

    useEffect(() => {
        if(values.length > 0)
        setRecentList(values.filter( item => item.id <= 6 && item.id > 3));
    }, [values]);

    return (
        <>
            { values.length < 1 ?
                <SectionFooterBottom>
                    <Loading>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16" fill="currentColor" className="hds-flight-icon--animation-loading">
                            <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" opacity=".2"/>
                            <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"/>
                        </svg>
                    </Loading>
                </SectionFooterBottom> :
                <>
                    <SectionStyled>
                        <BannerProducts>
                            <BannerTexts id="texts">
                                <p>
                                    Explore the Latest Trends and Unleash Your Fashionista. Your Ultimate Shopping, Destination Awaits
                                </p>
                                <button>Show now</button>
                            </BannerTexts>
                            <img src={girlPhoto} alt="image_girl" />
                            <Overlay />
                        </BannerProducts>
                    </SectionStyled>      
                    <SectionStyled>
                        <TopTitle>
                            <span>Recent shopping</span>
                            <Link to="/products/all">See all</Link>
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
                            <Link to="/products/all">All Product</Link>
                        </TopTitle>
                        <GridLayoutProduct>
                            {["Mobile", "Clocks", "Headphones", "Water Bottles", "Jewellery"].map((label, index) =>
                                <div key={index}>
                                    <span>{label}</span>
                                    <Overlay />
                                </div>
                            )}
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
            }
        </>
    );
};