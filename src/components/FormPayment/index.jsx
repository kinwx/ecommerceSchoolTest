import { useNavigate } from "react-router-dom";
import { FormArea, FormStyled} from "./style";
import { useEffect, useState } from "react";
import axios from "axios";

export const FormPaymentComponent = ({setOpenForm, quantity, total}) => {
    const [ localData, setLocalData ] = useState({
        cep: "",
        logradouro: "",
        numero: "",
        bairro: "",
        localidade: "",
        uf: "",
    });
    const [ errorCep, setErrorCep ] = useState(false);

    const fetchCep = async () => {
        try {
            const { data } = await axios.get(`https://viacep.com.br/ws/${localData.cep}/json/`);
            if(data.erro) 
                return setErrorCep(prev => !prev);

            setLocalData(data);
            if(errorCep)
                setErrorCep(prev => !prev);
            
        } catch (error) {
            console.log(error);
        };
    };
    const handleChange = (e) => {
        setLocalData(prev => {
            return {...prev, [e.target.id]: e.target.value};
        });
    };

    useEffect(() => {
        if(localData.cep.length > 7) {
            fetchCep();
        };
    }, [localData.cep]);
    const toNavigate = useNavigate();

    const finishedFunc = (e) => {
        e.preventDefault();
        toNavigate('/finished', {
            state: {
                auth: true,
                quantity,
                total,
            }
        });
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
                    <label htmlFor="cep">CEP:</label>
                    <input type="text" placeholder="Cep" required autoComplete="off" id="cep" onChange={handleChange} value={localData.cep}/>
                    { errorCep && <span>CEP não encontrado.</span>}
                </div>
                <div>
                    <label htmlFor="rua">Rua/Logradouro:</label>
                    <input type="text" placeholder="Rua" required autoComplete="off" id="rua" onChange={handleChange} value={localData.logradouro} />
                </div>
                <div>
                    <label htmlFor="numero">N°:</label>
                    <input type="text" placeholder="N°" required autoComplete="off" id="numero" onChange={handleChange} value={localData.numero ? localData.numero : ""} />
                </div>
                <div>
                    <label htmlFor="bairro">Bairro:</label>
                    <input type="text" placeholder="Bairro" required autoComplete="off" id="bairro" onChange={handleChange} value={localData.bairro} />
                </div>
                <div>
                    <label htmlFor="localidade">Cidade:</label>
                    <input type="text" placeholder="Cidade" required autoComplete="off" id="localidade" onChange={handleChange} value={localData.localidade} />
                </div>
                <div>
                    <label htmlFor="uf">UF:</label>
                    <input type="text" placeholder="UF" required autoComplete="off" id="uf" onChange={handleChange} value={localData.uf} />
                </div>
                <button>Enviar</button>
            </FormStyled>
        </FormArea>
    );
};