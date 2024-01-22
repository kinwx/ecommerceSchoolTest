import { useContext, useEffect } from "react";
import { DataContext } from "../../App";

export const Wishlist = () => {
    const { setAtualRoute } = useContext(DataContext);

    useEffect(() => {
        setAtualRoute('Wishlist')
    }, []);
    return (
        <h1>Wishlist</h1>      
    );
};