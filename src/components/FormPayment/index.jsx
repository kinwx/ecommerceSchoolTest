import { useNavigate } from "react-router-dom";
import { FormArea, FormStyled} from "./style";
import { useEffect, useState } from "react";
import axios from "axios";

export const FormPaymentComponent = ({setOpenForm}) => {
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
        };
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
        <FormArea>
            <button onClick={() => setOpenForm(prev => !prev)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
            </button>
            <FormStyled onSubmit={finishedFunc}>
                <div>
                    <label htmlFor="">CEP:</label>
                    <input type="text" placeholder="Cep" required onChange={(e) => setLocalData(prev => {
                        return {...prev, cep: e.target.value}
                    })} value={localData.cep}/>
                </div>
                <div>
                    <label htmlFor="">Rua/Logradouro:</label>
                    <input type="text" placeholder="Rua" required value={localData.logradouro} />
                </div>
                <div>
                    <label htmlFor="">N°:</label>
                    <input type="text" placeholder="N°" required />
                </div>
                <div>
                    <label htmlFor="">Bairro:</label>
                    <input type="text" placeholder="Bairro" required value={localData.bairro} />
                </div>
                <div>
                    <label htmlFor="">Cidade:</label>
                    <input type="text" placeholder="Cidade" required value={localData.localidade} />
                </div>
                <div>
                    <label htmlFor="">UF:</label>
                    <input type="text" placeholder="UF" required value={localData.uf} />
                </div>
                <button>Enviar</button>
            </FormStyled>
        </FormArea>
    );
};