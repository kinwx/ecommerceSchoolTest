import { useContext, useEffect } from "react";
import { DataContext } from "../../App";

export const Wishlist = () => {
    const { setCurrentRoute } = useContext(DataContext);

    useEffect(() => {
        setCurrentRoute('Wishlist');
    }, []);
    return (
        <h1>Wishlist</h1>      
    );
};