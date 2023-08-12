export interface Product {
    id: string,
    fotos: {titulo: string, src: string}[],
    nome: string,
    preco: string,
    descricao: string,
    vendido: boolean,
    usuario_id: string
}

const TableProducts = ({product}: {product: Product}) => {
    return <>
        <ul>
            <li key={product.id}>Nome: {product.nome}</li>
            <li>Preço: {product.preco}</li>
            <li>Descrição: {product.descricao}</li>
            <li>Vendido: {product.vendido ? "Sim" : "Não"}</li>
            <div>
                {product.fotos && product.fotos.map((foto) => {
                    return <img src={foto.src} alt={foto.titulo} style={
                        {width: "100px", height: "100px", objectFit: "cover"}
                    }/>
                })}
            </div>
        </ul>
    </>
}

export default TableProducts