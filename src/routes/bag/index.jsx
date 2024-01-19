import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Bag = () => {
    const { bag, setBag } = useContext(DataContext);
    if(bag.length < 1)
        return(<span>A lista está vazia</span>)

    const [payKey, setPayKey] = useState(false)
    const [ data, setData ] = useState([]);
    useEffect(() => {
        console.log(data);
    }, [data]);

    useEffect(() => {
        setData(bag.map(item => {
            item.count = 1;
    
            return item
        }));
    }, []);

    const setCount = (id, sinal) => {
        setData(prev => {
            return prev.map( (item) => {
                if(id === item.id){
                    switch(sinal) {
                        case 1:
                            if(item.count != 0)
                                item.count--
                            break
                        case 2:
                            item.count++
                            break
                    }
                }

                return item
            });
        });
    };

    const removeItem = (id) => {
        setBag(prev => {
            const newList = prev.filter(item => item.id != id)

            return [...newList];
        });
        setData(prev => {
            const newList = prev.filter(item => item.id != id)

            return [...newList];
        });
    };

    const toPay = () => {

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
        <section>
            <div>
                <p>Bag ({data.length})</p>
                {data.map((item, index) => 
                    <div className="card" key={index}>
                        <img src={item.image} alt="image" />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <div>
                            <span>{item.price}</span>
                            <button>heart</button>
                        </div>
                        <div>
                            <button onClick={() => setCount(item.id, 1)}>-</button>
                            <span>{item.count}</span>
                            <button onClick={() => setCount(item.id, 2)}>+</button>
                        </div>
                        <button onClick={() => removeItem(item.id)}>remove</button>
                    </div>
                )}
            </div>
            <div>
                <span>Items (data.length)</span>
                <div>{data.map( (item, index) =>  
                    item.count > 0 && 
                        <div key={index}>
                            <p>{item.title}</p>
                            <div>
                                <span>x {item.count}</span>
                                <span>$ {item.count * item.price}</span>
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    <span>Total ({data.reduce((el, it) => el + it.count, 0)})</span>
                    <span>$ {data.reduce((el, item) => el + (item.count * item.price), 0)}</span>
                </div>
                <button onClick={() => setPayKey(prev => !prev)}>Proceder e Pagar</button>
            </div>
            { payKey &&
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
        </section>
    );
};