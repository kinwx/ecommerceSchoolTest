import { useContext, useEffect } from "react";
import { DataContext } from "../../App";

export const AllProducts = () => {
    const { values } = useContext(DataContext);
    if(values.length < 1)
        return(<span>Carregando...</span>)

    useEffect(() => {
        console.log(values);
    }, []);

    return (
        <div>
            <h1>Products</h1>      
            <div>
                {values.map((item, index) => 
                    <div className="card" key={index}>
                        <img src={item.image} alt="image" />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <div>
                            <span>{item.price}</span>
                            <button>heart</button>
                        </div>
                        <button>addbag</button>
                    </div>
                )}
            </div>
        </div>
    );
};