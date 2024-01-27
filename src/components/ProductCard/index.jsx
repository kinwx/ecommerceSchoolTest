import { useContext } from "react";
import { Price, Stars, StarsAndQuantity } from "../../routes/home/style";
import { ButtonHeart, ButtonsCard, CardLayout, PriceAndWish, ProductLabels } from "./style";
import { DataContext } from "../../App";
import { sleep } from "../../functions/sleep";

export const ProductCard = ({itemData}) => {
    const { setBag, setWishlist, setValues } = useContext(DataContext);
    const {id, image, title, description, price, wish, feedback, storage} = itemData;

    const addCart = (item) => {
        setBag(prev => {
            if(prev.includes(item))
                return [...prev];

            return [...prev, item];
        });
    };
    const addWishlist = async (item) => {
        setValues(prev => {
            return prev.map( (el) => {
                if(el.id == item.id)
                    el.wish = !el.wish

                return el;
            });
        });
        await sleep(500);
        setWishlist(prev => {
            if(item.wish)
                return [...prev, item]
            
            return prev.filter( el => el.id != item.id);
        });
    };
    return (
        <CardLayout>
            <img src={image} alt="product_image" />
            <ProductLabels>
                <strong>{title}</strong>
                <p>{description}</p>
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
                    <span>({feedback}k)</span>
                </Stars>
                <p>{`${storage} Stock Avaliable`}</p>
            </StarsAndQuantity>
            <PriceAndWish>
                <Price>$ {price.toFixed(2)}</Price>
                <ButtonHeart onClick={() => addWishlist(itemData)}>
                    {wish ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                        </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                        </svg>
                    }
                </ButtonHeart>
            </PriceAndWish>
            <ButtonsCard>
                <button onClick={() => addCart(itemData)}>Add Bag</button>
                <button>Details</button>
            </ButtonsCard>
        </CardLayout>
    );
};