import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ItemBag } from "../../components/ItemBag";
import { AsidePayment, BagItemsAndPaymentLayout, DataQuantityAndPayment, ItemsBagLayout, ItemsBagList, SectionBagStyled, Total } from "./style";
import { FormPaymentComponent } from "../../components/FormPayment";

export const Bag = () => {
    const { bag, setBag, setCurrentRoute } = useContext(DataContext);
    useEffect(() => {
        setCurrentRoute('Bag');
    }, []);

    const [openForm, setOpenForm] = useState(false);
    
    const [ data, setData ] = useState([]);
    useEffect(() => {
        if(bag.length > 0)
            setData(bag.map(item => {
                item.count = 1;
        
                return item;
            }));
    }, []);

    const setCount = (id, sinal) => {
        setData(prev => {
            return prev.map((item) => {
                if(id === item.id){
                    switch(sinal) {
                        case 1:
                            if(item.count != 0)
                                item.count--
                            break;
                        case 2:
                            item.count++
                            break;
                    }
                }
                return item;
            });
        });
    };

    const removeItem = (id) => {
        setData(prev => {
            const newList = prev.filter(item => item.id != id) || [];

            return [...newList];
        });
        setBag(prev => {
            const newList = prev.filter(item => item.id != id) || [];

            return [...newList];
        });
    };
    return (
        <>
            { bag.length == 0 && 
                <span>A lista está vazia</span>
            }
            { bag.length > 0 &&
                <SectionBagStyled>
                    <span>Bag ({data.length})</span>
                    <BagItemsAndPaymentLayout>
                        <ItemsBagLayout>
                            {data.map((item, index) => 
                                <ItemBag key={index} itemData={item} setCount={setCount} removeItem={removeItem} />
                            )}
                        </ItemsBagLayout>
                        <AsidePayment>
                            <DataQuantityAndPayment>
                                <span>Items ({data.length})</span>
                                <ItemsBagList>
                                    {data.map( (item, index) =>  
                                        item.count > 0 && 
                                            <li key={index}>
                                                <p>{item.title}</p>
                                                <div>
                                                    <span>x {item.count}</span>
                                                    <span>$ {(item.count * item.price).toFixed(2)}</span>
                                                </div>
                                            </li>
                                    )}
                                </ItemsBagList>
                                <Total>
                                    <span>Total ({data.reduce((el, it) => el + it.count, 0)})</span>
                                    <span>$ {data.reduce((el, item) => el + (item.count * item.price), 0).toFixed(2)}</span>
                                </Total>
                                <button onClick={() => setOpenForm(prev => !prev)}>Proceder e Pagar</button>
                            </DataQuantityAndPayment>
                            { openForm &&
                                <FormPaymentComponent setOpenForm={setOpenForm} />
                            }
                        </AsidePayment>
                    </BagItemsAndPaymentLayout>
                </SectionBagStyled>
            }
        </>
    );
};