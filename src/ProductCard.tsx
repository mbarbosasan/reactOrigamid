const ProductCard = ({nome}: {nome: string}, ...props: string[]) => {
    return <div>
        <p>{nome}</p>
        <ul>
            {
                props.map((propriedade: string) => {
                    return <li>{propriedade}</li>
                })
            }
        </ul>
    </div>

}

export default ProductCard