import useLocalStorage from "./Hooks/useLocalStorage.tsx";
import React from "react";
import useFetch from "./Hooks/useFetch.tsx";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;
import error = Simulate.error;

const App = () => {

    const [produto, setProduto] = useLocalStorage('produto', '')
    const {request, data, loading, error} = useFetch();

    React.useEffect(() => {
        async function fetchData() {
            const {json, response} = await request("https://ranekapi.origamid.dev/json/api/produto");
            console.log(json, response)
        }
        fetchData();
    }, [request])

    function handleClick({currentTarget}: React.MouseEvent<HTMLButtonElement>) {
        setProduto(currentTarget.innerText)
    }
    if (loading) return <p>Carregando...</p>
    if (!data) return null;
    return <>
        {produto && <p>Produto preferido: {produto}</p>}
        <button onClick={handleClick}>Notebook</button>
        <button onClick={handleClick}>Smartphone</button>
        {data.map((produto) => {
            return <div key={produto.id}>
                <h1>{produto.nome}</h1>
            </div>
        })}
    </>
};

export default App

