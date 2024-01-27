import { useContext, useEffect } from "react";
import { SectionFooterBottom } from "../../components/SectionFooterBottom";
import { DataContext } from "../../App";

export const NotFound = () => {
    const { setCurrentRoute } = useContext(DataContext);

    useEffect(() => {
        setCurrentRoute('Error');
    }, []);

    return (
        <SectionFooterBottom>
            <h2>Error 404. Página não encontrada.</h2>
        </SectionFooterBottom>
    );
};