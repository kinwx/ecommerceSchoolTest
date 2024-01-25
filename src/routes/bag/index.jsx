import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ItemBag } from "../../components/ItemBag";
import { BagItemsAndPaymentLayout, DataQuantityAndPayment, ItemsBagLayout, ItemsBagList, SectionBagStyled, Total } from "./style";

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

    const [ localData, setLocalData ] = useState({
        cep: "",
        logradouro: "",
        bairro: "",
        localidade: "",
        uf: "",
    });

    const fetchCep = async () => {
        try {
            const { data } = await axios.get(`https://viacep.com.br/ws/${localData.cep}/json/`);
            setLocalData(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if(localData.cep.length > 7) {
            fetchCep();
        };
    }, [localData.cep]);
    const toNavigate = useNavigate();

    const finishedFunc = (e) => {
        e.preventDefault();
        toNavigate('/finished');
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
                        <DataQuantityAndPayment>
                            <span>Items ({data.length})</span>
                            <ItemsBagList>
                                {data.map( (item, index) =>  
                                    item.count > 0 && 
                                        <li key={index}>
                                            <p>{item.title}</p>
                                            <div>
                                                <span>x {item.count}</span>
                                                <span>$ {item.count * item.price}</span>
                                            </div>
                                        </li>
                                )}
                            </ItemsBagList>
                            <Total>
                                <span>Total ({data.reduce((el, it) => el + it.count, 0)})</span>
                                <span>$ {data.reduce((el, item) => el + (item.count * item.price), 0)}</span>
                            </Total>
                            <button onClick={() => setOpenForm(prev => !prev)}>Proceder e Pagar</button>
                        </DataQuantityAndPayment>
                    </BagItemsAndPaymentLayout>
                    { openForm &&
                        <div>
                            <form onSubmit={finishedFunc}>
                                <div>
                                    <label htmlFor="">CEP:</label>
                                    <input type="text" required onChange={(e) => setLocalData(prev => {
                                        return {...prev, cep: e.target.value}
                                    })} value={localData.cep}/>
                                </div>
                                <div>
                                    <label htmlFor="">Rua/Logradouro:</label>
                                    <input type="text" required value={localData.logradouro} />
                                </div>
                                <div>
                                    <label htmlFor="">N°:</label>
                                    <input type="text" required />
                                </div>
                                <div>
                                    <label htmlFor="">Bairro:</label>
                                    <input type="text" required value={localData.bairro} />
                                </div>
                                <div>
                                    <label htmlFor="">Cidade:</label>
                                    <input type="text" required value={localData.localidade} />
                                </div>
                                <div>
                                    <label htmlFor="">UF:</label>
                                    <input type="text" required value={localData.uf} />
                                </div>
                                <button>Enviar</button>
                            </form>
                        </div>
                    }
                </SectionBagStyled>
            }
        </>
    );
};