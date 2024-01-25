import { Price, Stars, StarsAndQuantity } from "../../routes/home/style";
import { ButtonHeart, CardLayout, PriceAndWish, ProductLabels } from "../ProductCard/style";
import { ButtonRemove, CountArea } from "./styled";

export const ItemBag = ({itemData, setCount, removeItem}) => {
    const {id, image, title, description, price, count} = itemData;

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
                    <span>(1.3k)</span>
                </Stars>
                <p>{id == 5 ? "12 Stock Avaliable" : "43 Stock Avaliable"}</p>
            </StarsAndQuantity>
            <PriceAndWish>
                <Price>$ {price}</Price>
                <ButtonHeart>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                    </svg>
                </ButtonHeart>
            </PriceAndWish>
            <CountArea>
                <button onClick={() => setCount(id, 1)}>-</button>
                <span>{count}</span>
                <button onClick={() => setCount(id, 2)}>+</button>
            </CountArea>
            <ButtonRemove onClick={() => removeItem(id)}>remove</ButtonRemove>
        </CardLayout>
    );
};