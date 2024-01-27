import { useContext, useEffect } from "react";
import { SectionFooterBottom } from "../../components/SectionFooterBottom";
import { DataContext } from "../../App";
import { useLocation, useNavigate } from "react-router-dom";

export const Finished = () => {
    const { state } = useLocation();
    const errorNav = useNavigate()
    if(!state?.auth)
        errorNav("/error404");

    const { setCurrentRoute, setBag } = useContext(DataContext);

    useEffect(() => {
        setCurrentRoute('finished');
        setBag([]);
    }, []);

    return (
        <SectionFooterBottom>
            <h1>Compra finalizada com sucesso!</h1>
            <p>Você comprou {state?.quantity} {state?.quantity > 1 ? "itens" : "item"}, no valor total de $ {state?.total}</p>
        </SectionFooterBottom>      
    );
};