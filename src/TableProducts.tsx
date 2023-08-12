import React from "react";

export interface Product {
    id: string,
    fotos: {titulo: string, src: string}[],
    nome: string,
    preco: string,
    descricao: string,
    vendido: boolean,
    usuario_id: string
}

const TableProducts = ({product}: {product: "tablet" | "smartphone" | "notebook"}) => {

    const [dados, setDados] = React.useState<Product | null>(null);

    React.useEffect(() => {
        if (product != null) {
            fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
                .then((response) => response.json())
                .then((json: Product) => setDados(json))
        }
    }, [product])

    return <>
        {dados &&
            <li key={dados.id}>
                <p>Nome: {dados.nome}</p>
                <p>Preço: {dados.preco}</p>
                <p>Descrição: {dados.descricao}</p>
                <p>Vendido: {dados.vendido ? "Sim" : "Não"}</p>
                {dados.fotos.map((foto) => {
                    return <img src={foto.src} alt={foto.titulo} style={
                        {width: "100px", height: "100px", objectFit: "cover"}
                    }/>
                })}
            </li>}
    </>
}

export default TableProducts