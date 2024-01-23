import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import { Link } from "react-router-dom";

export const Products = () => {
    const { values, setBag, setCurrentRoute } = useContext(DataContext);

    if(values.length < 1)
        return (
            <span>Carregando...</span>
        );

    const [ recentList, setRecentList ] = useState(values.filter( item => item.id <= 3));

    const addCart = (item) => {
        setBag(prev => {
            if(prev.includes(item))
                return [...prev]

            return [...prev, item]
        });
    };

    useEffect(() => {
        setCurrentRoute('Products');
    }, []);

    return (
        <div>
            <div>
                Bem vindo aos Produtos
            </div>
            <div>
                <div>
                    <h2>Recent shopping</h2>
                    <Link>See all</Link>
                </div>
                <div>
                    {recentList.map((item, index) => 
                        <div className="card" key={index}>
                            <img src={item.image} alt="image" />
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <div>
                                <span>{item.price}</span>
                                <button>heart</button>
                            </div>
                            <button onClick={() => addCart(item)}>addbag</button>
                        </div>
                    )}
                </div>
            </div>
        </div>      
    );
};