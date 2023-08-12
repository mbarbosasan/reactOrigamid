import React from "react";
import TableProducts, {Product} from "./TableProducts.tsx";


const App = () => {

    const [products, setProducts] = React.useState<Product | null>(null);
    const [loading, setLoading] = React.useState<boolean | null>(null);
    const [ativo, setAtivo] = React.useState(false);

    React.useEffect(() => {
        getProducts("tablet")
    }, [])

    async function getProducts(product: "tablet" | "smartphone" | "notebook") {
        setLoading(true)
        const response = await fetch("https://ranekapi.origamid.dev/json/api/produto/" + product)
        const json: Product = await response.json();
        setProducts(json)
        setLoading(false)
    }

    return <>
        <button style={{marginBottom: "8px"}} onClick={() => setAtivo(!ativo)}>{ativo ? "Ativar" : "Desativar"}</button>
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "8px",
        }}>
            <button onClick={() => getProducts("tablet")}>Tablet</button>
            <button onClick={() => getProducts("smartphone")}>Smartphone</button>
            <button onClick={() => getProducts("notebook")}>Notebook</button>
        </div>
        {loading && <p>Carregando...</p>}
        {!loading && products && <TableProducts product={products}/>}
    </>;
};

export default App

