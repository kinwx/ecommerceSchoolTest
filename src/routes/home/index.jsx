import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";

export const Home = () => {
    const { setAtualRoute } = useContext(DataContext);

    useEffect(() => {
        setAtualRoute('Home')
    }, []);
    return (
        <h1>Home</h1>
    );
};