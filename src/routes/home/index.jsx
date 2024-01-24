import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import { AreaBtnDetails, ArrowButtons, BottomPosition, BtnAddBag, ButtonArea, ButtonBannerStyled, ButtonsBanner, OpinionCard, CarouselLayout, DivImageBackground, FakeButtonFeatures, FaqItem, FaqList, FeatureCard, ImageArea, ProductLabels, LayoutCards, LayoutFeaturesCards, LinkBannerStyled, MenuIcons, OpinionText, Overlay, PreviewProductComponent, Price, ProductData, Profile, ProfileDescription, ResponseBar, SectionStyled, Stars, StarsAndQuantity, StrongNameSection, TextsInitialBanner, TitleFeatures, TitleSection, VisualBars } from "./style";
import perfil1 from '../../assets/perfil1.jpg';
import perfil2 from '../../assets/perfil2.jpg';
import perfil3 from '../../assets/perfil3.jpg';

const Features = [
    {
        icon: [
            "M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"
        ],
        scale: "25",
        title: "Best Quality",
        description: "Elevate your eyewear game with these sleek and sophisticated sunglasses designed",
    },
    {
        icon: [
            "M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z",
            "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16",
        ],
        scale: "25",
        title: "Safety Payment Option",
        description: "Elevate your eyewear game with these sleek and sophisticated sunglasses designed",
    },
    {
        icon: [
            "M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"
        ],
        scale: "25",
        title: "Find Us Anywhere",
        description: "Elevate your eyewear game with these sleek and sophisticated sunglasses designed",
    },
];

const CardComents = [
    {
        scale: '40',
        comment: "The fabric feels luxurious, and the attention to detail in the stitching is impressive. I'll definitely be shopping here again!",
        pfp: perfil1,
        name: 'Vasanth Kumar',
        description: 'Productor Manager',
    },
    {
        scale: '40',
        comment: "The fabric feels luxurious, and the attention to detail in the stitching is impressive. I'll definitely be shopping here again!",
        pfp: perfil2,
        name: 'Suresh',
        description: 'Productor Manager',
    },
    {
        scale: '40',
        comment: "The fabric feels luxurious, and the attention to detail in the stitching is impressive. I'll definitely be shopping here again!",
        pfp: perfil3,
        name: 'Joe Brihop',
        description: 'Costume Designer',
    },
];

const FaqQuest = [
    'How do I place an order?',
    'What payment methods do you accept?',
    'Is my payment information secure?',
    'How can I track my order?',
];

export const Home = () => {
    const { setCurrentRoute, values, setBag } = useContext(DataContext);

    const [ popularList, setPopularList ] = useState([]);
    const [ currentProduct, setCurrentProduct ] = useState({});

    const backPreviw = () => {
        const index = popularList.findIndex((item) => {
            return item == currentProduct; 
        });
        (index <= 2 && index != 0) ? setCurrentProduct(popularList[index - 1]) : setCurrentProduct(popularList[2])
    };
    const nextPreview = () => {
        const index = popularList.findIndex((item) => {
            return item == currentProduct;
        });
        (index >= 0 && index != 2) ? setCurrentProduct(popularList[index + 1]) : setCurrentProduct(popularList[0])
    };
    const addCart = (item) => {
        setBag(prev => {
            if(prev.includes(item))
                return [...prev];

            return [...prev, item];
        });
    };

    useEffect(() => {
        setCurrentRoute('Home');
    }, []);

    useEffect(() => {
        if(values.length > 0)
            setPopularList(values.filter( item => item.id <= 3) || []);
            const [ first ] = values.filter( item => item.id == 1);
            setCurrentProduct(first);
    }, [values]);

    return (
        <>
            <SectionStyled>
                <DivImageBackground>
                    <Overlay></Overlay>
                    <TextsInitialBanner>
                        <p>Winter Special Sale</p>
                        <h2>
                            Dive into Winter Savings with Our Exclusive Offers
                        </h2>
                    </TextsInitialBanner>
                    <ButtonsBanner>
                        <ButtonBannerStyled>Explore all</ButtonBannerStyled>
                        <LinkBannerStyled href="https://youtube.com" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
                            </svg>
                            Our Story
                        </LinkBannerStyled>
                    </ButtonsBanner>
                </DivImageBackground>
            </SectionStyled>
            <SectionStyled>
                <FakeButtonFeatures>
                    <span>Features</span>
                </FakeButtonFeatures>
                <TitleFeatures>Special Offer For You</TitleFeatures>
                <LayoutFeaturesCards>
                    {Features.map((values, index) =>
                        <FeatureCard key={index}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={values.scale} height={values.scale} fill="currentColor" viewBox="0 0 16 16">
                                {values.icon.map( (data, id) =>
                                    <path key={id} d={data} />
                                )}
                            </svg>
                            <strong>{values.title}</strong>
                            <p>{values.description}</p>
                        </FeatureCard>
                    )}
                </LayoutFeaturesCards>
            </SectionStyled>
            <SectionStyled>
                <StrongNameSection>Products</StrongNameSection>
                <TitleSection>Best Quality Products</TitleSection>
                <MenuIcons>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" height="50" width="50" version="1.1" id="Layer_1" viewBox="0 0 490.561 490.561" xmlSpace="preserve">
                            <path d="M356.214,0H134.24c-18.133,0-32.96,14.72-32.96,32.853v424.853c0,18.24,14.827,32.96,32.96,32.853h221.973     c18.24,0,32.96-14.72,33.067-32.853V32.853C389.28,14.72,374.454,0,356.214,0z M367.947,457.813c0,6.4-5.227,11.52-11.733,11.52     H134.24c-6.4,0-11.627-5.12-11.627-11.52V202.667h245.333V457.813z M367.947,181.333H122.614V32.853     c0-6.4,5.227-11.52,11.627-11.52h221.973c6.4,0,11.627,5.12,11.733,11.52V181.333z"/>
                            <path d="M335.947,85.333c-5.867,0-10.667,4.8-10.667,10.667v42.667c0,5.867,4.8,10.667,10.667,10.667     c5.867,0,10.667-4.8,10.667-10.667V96C346.614,90.133,341.814,85.333,335.947,85.333z"/>
                            <path d="M335.947,298.667c5.867,0,10.667-4.8,10.667-10.667v-53.333c0-5.867-4.8-10.667-10.667-10.667     c-5.867,0-10.667,4.8-10.667,10.667V288C325.28,293.867,330.08,298.667,335.947,298.667z"/>
                        </svg>
                        <span>Domestics</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.08 2.08 0 0 1-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.92 1.92 0 0 0 3 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 0 1 4 6.5v-3a.5.5 0 0 1 .5-.5h1V.5A.5.5 0 0 1 6 0M5 4v2.5A2.5 2.5 0 0 0 7.5 9h1A2.5 2.5 0 0 0 11 6.5V4z"/>
                        </svg>
                        <span>Lights</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" height="50" width="50" version="1.1" id="_x32_" viewBox="0 0 512 512" xmlSpace="preserve">
                            <path className="st0" d="M474.828,156.693H460.18v-25.402c0-36.184-29.321-65.505-65.518-65.512h-277.33   C81.14,65.786,51.82,95.107,51.82,131.291v25.402H37.169C16.637,156.7,0.004,173.33,0,193.873v165.6   c0.004,20.536,16.637,37.158,37.169,37.172h17.398l3.989,49.576h54.651l3.985-49.576h277.624l3.986,49.576h54.65l3.979-49.576   h17.398c20.53-0.014,37.16-16.636,37.172-37.172v-165.6C511.993,173.33,495.357,156.7,474.828,156.693z M73.584,131.291   c0.006-12.116,4.88-22.986,12.815-30.93c7.951-7.931,18.823-12.811,30.934-12.811h277.33c12.117,0,22.992,4.88,30.937,12.811   c7.938,7.944,12.811,18.814,12.818,30.93v30.99c-10.362,6.483-17.264,17.945-17.278,31.07v108.8H90.858v-108.8   c-0.007-13.125-6.909-24.587-17.274-31.07V131.291z M93.118,424.45H78.644l-2.237-27.805h3.565h15.385L93.118,424.45z    M433.356,424.45h-14.474l-2.229-27.805h15.368h3.578L433.356,424.45z M490.23,359.473c-0.007,4.286-1.703,8.064-4.514,10.895   c-2.824,2.804-6.602,4.5-10.889,4.506h-42.806H79.972H37.169c-4.286-0.007-8.065-1.702-10.889-4.506   c-2.804-2.831-4.503-6.609-4.509-10.895v-165.6c0.006-4.293,1.706-8.078,4.509-10.902c2.817-2.798,6.602-4.5,10.889-4.506H54.2   c4.152,0.007,7.797,1.649,10.534,4.36c2.707,2.737,4.35,6.382,4.356,10.528v130.564h373.82V193.351   c0.007-4.146,1.649-7.79,4.359-10.528c2.73-2.711,6.382-4.353,10.528-4.36h17.03c4.286,0.007,8.065,1.709,10.889,4.513   c2.81,2.824,4.507,6.602,4.514,10.895V359.473z"/>
                        </svg>
                        <span>Forniture</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" height="50" width="50" version="1.1" id="Layer_1" viewBox="0 0 501.639 501.639" xmlSpace="preserve">
                            <path d="M293.417,0.153h-85.333c-113.067,0-204.8,91.733-205.867,204.8v5.333c0,11.733,9.6,21.333,21.333,21.333h454.4    c10.667,0,20.267-9.6,21.333-20.267v-5.333C499.284,91.886,406.483,0.153,293.417,0.153z M45.95,190.019    c7.467-83.2,77.867-148.267,162.133-148.267h85.333c84.267,0,154.667,65.067,163.2,148.267H45.95z"/>
                            <path d="M493.95,373.486c-4.267-5.333-10.667-8.533-17.067-8.533H23.55c-6.4,0-12.8,3.2-17.067,8.533    c-4.267,6.4-5.333,12.8-3.2,19.2l12.8,38.4c13.867,41.6,51.2,70.4,93.867,70.4h281.6c41.6,0,80-28.8,93.867-70.4l11.733-38.4    C499.284,386.286,498.217,378.82,493.95,373.486z M444.884,418.286c-8.533,24.533-29.867,41.6-54.4,41.6H109.95    c-24.533,0-46.933-17.067-54.4-41.6l-3.2-11.733h395.733L444.884,418.286z"/>
                            <path d="M492.883,305.22l-40.533-28.8c-27.733-20.267-66.133-20.267-93.867,0l-4.267,3.2c-13.867,9.6-33.067,9.6-45.867,0    l-8.533-6.4c-27.733-20.267-66.133-20.267-93.867,0l-12.8,9.6c-13.867,9.6-33.067,9.6-45.867,0c-25.6-19.2-61.867-20.267-89.6-3.2    l-46.933,28.8c-10.667,6.4-13.867,19.2-7.467,28.8c4.267,6.4,10.666,9.6,18.133,9.6c3.2,0,7.467-1.067,10.667-3.2l46.933-28.8    c13.867-8.533,32-7.467,43.733,1.067c27.733,20.267,66.133,20.267,93.867,0l12.8-9.6c13.867-9.6,33.067-9.6,45.867,0l8.533,6.4    c27.733,20.267,66.133,20.267,93.867,0l4.267-3.2c13.867-9.6,33.067-9.6,45.867,0l40.533,28.8c8.533,7.467,22.4,5.333,28.8-4.267    C504.616,325.487,502.483,311.62,492.883,305.22z"/>
                        </svg>
                        <span>Foods</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" height="50" width="50" version="1.1" id="_x32_" viewBox="0 0 512 512" xmlSpace="preserve">
                            <path className="st0" d="M474.658,121.941L304.895,60.196v18.563l163.782,59.6c1.885,0.67,3.493,1.608,4.98,2.823   c0.734,0.536,1.474,1.207,2.082,1.877c4.504,4.783,6.187,11.911,3.837,18.571L362.74,482.528   c-3.427,9.408-13.859,14.257-23.271,10.824L132.982,418.22c-3.095-1.14-5.717-3.024-7.669-5.445h-19.774   c3.363,9.818,10.961,18.027,21.453,21.863l206.488,75.19c13.118,4.775,27.107,1.416,36.594-7.531   c1.345-1.214,2.554-2.556,3.695-4.038c2.224-2.89,4.108-6.123,5.382-9.75l116.831-320.898   C502.708,149.115,493.158,128.668,474.658,121.941z"/>
                            <path className="st0" d="M307.855,319.014c7.062,3.963,15.673,5.118,23.14,2.354c11.636-4.44,17.282-14.668,18.496-26.362   c0.54-5.52,0.134-11.367-1.14-17.088c-0.342-1.751-0.808-3.561-1.348-5.311c-1.55-4.849-3.434-9.893-5.516-15.002   c-3.568-9.073-7.665-18.228-10.831-26.429c-2.354-6.258-4.168-11.912-4.842-16.545c-0.067-0.603-0.13-1.214-0.204-1.75   c0-0.134,0-0.268-0.063-0.402c-0.067-0.611-0.272-0.812-0.403-0.879c-0.204-0.126-0.473-0.067-0.946,0.402   c-0.067,0.075-0.131,0.134-0.268,0.268c-0.272,0.269-0.54,0.537-0.876,0.812c-3.494,3.292-8.674,6.592-14.726,9.952   c-1.143,0.671-2.284,1.274-3.434,1.884v92.279c0.808,0.544,1.616,1.08,2.488,1.616C307.52,318.879,307.726,318.946,307.855,319.014   z"/>
                            <path className="st0" d="M422.98,209.11c0.008-4.947,1.129-10.429,2.79-15.956c2.287,4.581,8.332,7.076,13.085,5.282   c7.11-2.674,8.309-11.159,6.038-18.407c-2.47-7.896-7.658-17.364-8.067-22.586l-0.19-0.499l-0.458,0.261   c-3.672,3.739-13.721,7.658-20.705,12.12c-6.394,4.089-10.928,11.367-7.199,17.974c2.492,4.432,8.72,6.407,13.412,4.366   c-2.272,5.304-4.939,10.227-8.123,14.019L422.98,209.11z"/>
                            <path className="st0" d="M304.88,377.116v-53.41c0.004,0.008,0.012,0.015,0.015,0.015v-6.526c-0.004,0-0.011-0.008-0.015-0.014v-98.127   c0.004,0.008,0.012,0.008,0.015,0.014v-7.33c-0.004,0-0.011,0.008-0.011,0.008L304.88,35.636   C304.868,15.948,288.935,0.008,269.243,0H49.504c-19.691,0-35.64,15.956-35.64,35.636v341.48c0,19.68,15.948,35.629,35.64,35.636   h219.74C288.935,412.745,304.868,396.804,304.88,377.116z M31.35,377.116V35.636c0.027-10.027,8.131-18.131,18.154-18.153h219.74   c10.023,0.022,18.128,8.134,18.153,18.153v341.48c-0.026,10.018-8.13,18.13-18.153,18.146H49.504   C39.481,395.247,31.377,387.142,31.35,377.116z"/>
                            <path className="st0" d="M189.632,186.383c-1.747,0-3.441,0.141-5.11,0.417c4.06-5.311,6.477-11.941,6.477-19.137   c0-17.424-14.186-31.614-31.618-31.614c-17.434,0-31.621,14.19-31.621,31.614c0,7.196,2.418,13.826,6.477,19.137   c-1.668-0.276-3.378-0.417-5.11-0.417c-17.446,0-31.621,14.19-31.621,31.614c0,17.439,14.176,31.629,31.621,31.629   c9.747,0,18.47-4.44,24.262-11.397c-0.983,13.907-3.151,27.174-7.263,38.466h26.496c-4.1-11.292-6.268-24.559-7.266-38.466   c5.806,6.957,14.529,11.397,24.276,11.397c17.435,0,31.61-14.19,31.61-31.629C221.242,200.573,207.066,186.383,189.632,186.383z"/>
                            <path className="st0" d="M254.647,339.588c-0.749,0-1.471,0.06-2.183,0.171c1.736-2.279,2.787-5.132,2.787-8.231   c0-7.501-6.108-13.616-13.61-13.616c-7.513,0-13.621,6.115-13.621,13.616c0,3.099,1.05,5.952,2.783,8.231   c-0.708-0.112-1.446-0.171-2.194-0.171c-7.512,0-13.61,6.108-13.61,13.602c0,7.516,6.097,13.616,13.61,13.616   c4.19,0,7.948-1.914,10.443-4.902c-0.42,5.99-1.367,11.688-3.124,16.567h11.415c-1.773-4.879-2.707-10.578-3.14-16.567   c2.51,2.987,6.265,4.902,10.444,4.902c7.512,0,13.609-6.1,13.609-13.616C268.256,345.696,262.159,339.588,254.647,339.588z"/>
                            <path className="st0" d="M103.759,77.738c0-7.501-6.108-13.602-13.624-13.602c-0.734,0-1.472,0.06-2.194,0.164   c1.747-2.272,2.786-5.132,2.786-8.231c0-7.494-6.097-13.61-13.594-13.61c-7.516,0-13.624,6.116-13.624,13.61   c0,3.099,1.039,5.96,2.786,8.231c-0.712-0.104-1.446-0.164-2.194-0.164c-7.501,0-13.61,6.101-13.61,13.602   c0,7.509,6.108,13.617,13.61,13.617c4.19,0,7.948-1.922,10.444-4.909c-0.436,5.989-1.367,11.688-3.128,16.567H82.82   c-1.762-4.879-2.692-10.578-3.129-16.567c2.496,2.987,6.254,4.909,10.444,4.909C97.65,91.356,103.759,85.247,103.759,77.738z"/>
                        </svg>
                        <span>Playing Cards</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M13.902.334a.5.5 0 0 1-.28.65l-2.254.902-.4 1.927c.376.095.715.215.972.367.228.135.56.396.56.82q0 .069-.011.132l-.962 9.068a1.28 1.28 0 0 1-.524.93c-.488.34-1.494.87-3.01.87s-2.522-.53-3.01-.87a1.28 1.28 0 0 1-.524-.93L3.51 5.132A1 1 0 0 1 3.5 5c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372C5.824 3.614 6.867 3.5 8 3.5c.712 0 1.389.045 1.985.127l.464-2.215a.5.5 0 0 1 .303-.356l2.5-1a.5.5 0 0 1 .65.278M9.768 4.607A14 14 0 0 0 8 4.5c-1.076 0-2.033.11-2.707.278A3.3 3.3 0 0 0 4.645 5c.146.073.362.15.648.222C5.967 5.39 6.924 5.5 8 5.5c.571 0 1.109-.03 1.588-.085zm.292 1.756C9.445 6.45 8.742 6.5 8 6.5c-1.133 0-2.176-.114-2.95-.308a6 6 0 0 1-.435-.127l.838 8.03c.013.121.06.186.102.215.357.249 1.168.69 2.438.69s2.081-.441 2.438-.69c.042-.029.09-.094.102-.215l.852-8.03a6 6 0 0 1-.435.127 9 9 0 0 1-.89.17zM4.467 4.884s.003.002.005.006zm7.066 0-.005.006zM11.354 5a3 3 0 0 0-.604-.21l-.099.445.055-.013c.286-.072.502-.149.648-.222"/>
                        </svg>
                        <span>Water Bottles</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" height="50" width="50" version="1.1" id="Layer_1" viewBox="0 0 500.462 500.462" xmlSpace="preserve">
                            <path d="M375.913,42.712h-74.75v9.846c0,13.606-5.288,26.404-14.913,36.019c-9.625,9.625-22.413,14.923-36.019,14.923    c-13.615,0-26.413-5.298-36.029-14.933c-9.606-9.615-14.894-22.404-14.875-36l0.01-9.856h-74.798L0,167.26l77.058,77.058    l41.702-41.692V457.75h262.933V202.625l41.702,41.692l77.067-77.058L375.913,42.712z M362,155.087v282.971H138.452V155.087    l-61.394,61.385L27.846,167.26L132.692,62.404h47.606c2.087,15.125,8.99,29.096,19.971,40.087    c13.337,13.346,31.077,20.702,49.962,20.702c18.865,0,36.606-7.346,49.942-20.683c10.99-11,17.913-24.971,20.01-40.106h47.577    L472.615,167.26l-49.221,49.212L362,155.087z"/>
                        </svg>
                        <span>Fashion</span>
                    </div>
                    <div>
                        <span>See all</span>
                    </div>
                </MenuIcons>
            </SectionStyled>
            { popularList &&
                <SectionStyled>
                    <StrongNameSection>Popular</StrongNameSection>
                    <TitleSection>Popular Collection</TitleSection>
                    <PreviewProductComponent>
                        <ProductData>
                            <ProductLabels>
                                <strong>{currentProduct?.title}</strong>
                                <p>{currentProduct?.description}</p>
                            </ProductLabels>
                            <StarsAndQuantity>
                                <Stars>
                                    <div>
                                        {[1, 2, 3, 4].map((item, id) => {
                                            return (
                                                <svg key={id} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                </svg>
                                            );
                                        })}
                                    </div>
                                    <span>(1.3k)</span>
                                </Stars>
                                <p>
                                    {currentProduct?.id == 4 ? '28 Stock Avaliable' : '43 Stock Avaliable'}
                                </p>
                            </StarsAndQuantity>
                            <BottomPosition>
                                <Price>$ {currentProduct?.price}</Price>
                                <ButtonArea>
                                    <BtnAddBag onClick={() => addCart(currentProduct)}>Add Bag</BtnAddBag>
                                    <AreaBtnDetails>
                                        <button>Details</button>
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                            </svg>
                                        </button>
                                    </AreaBtnDetails>
                                </ButtonArea>
                                <CarouselLayout>
                                    <VisualBars>
                                        {popularList.map((item, index) => {
                                            if(currentProduct === item)
                                                return <ResponseBar key={index} color='black'></ResponseBar>

                                            return <ResponseBar key={index} color='gray'></ResponseBar>
                                        })}
                                    </VisualBars>
                                    <ArrowButtons>
                                        <button onClick={backPreviw}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                                            </svg>
                                        </button>
                                        <button onClick={nextPreview}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                            </svg>
                                        </button>
                                    </ArrowButtons>
                                </CarouselLayout>
                            </BottomPosition>
                        </ProductData>
                        <ImageArea>
                            <img src={currentProduct?.image} alt="product_image"/>
                        </ImageArea>
                    </PreviewProductComponent>
                </SectionStyled>
            }
            <SectionStyled>
                <StrongNameSection>Testimonial</StrongNameSection>
                <TitleSection>What Our Customer says</TitleSection>
                <LayoutCards>
                    {CardComents.map( (item, index) => 
                        <OpinionCard key={index}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width={item.scale} height={item.scale} viewBox="0 0 24 24">
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                            </svg>
                            <OpinionText>{item.comment}</OpinionText>
                            <Profile>
                                <img src={item.pfp} alt="image_perfil" />
                                <ProfileDescription>
                                    <strong>{item.name}</strong>
                                    <span>{item.description}</span>
                                </ProfileDescription>
                            </Profile>
                        </OpinionCard>
                    )}
                </LayoutCards>
            </SectionStyled>
            <SectionStyled>
                <StrongNameSection>FAQ</StrongNameSection>
                <TitleSection>Frenquently Asked Question</TitleSection>
                <FaqList>
                    {FaqQuest.map((label, index) => 
                        <FaqItem key={index}>
                            <strong>{label}</strong>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                            </svg>
                        </FaqItem>
                    )}
                </FaqList>
            </SectionStyled>
        </>
    );
};