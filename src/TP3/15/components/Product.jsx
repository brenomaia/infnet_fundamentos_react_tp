const Product = ({ name, price, description = "Descrição não disponível" }) => {
    return (
        <div>
            <p>Nome: {name}</p>
            <p>Preço: {price}</p>
            <p>Descrição: {description}</p>
        </div>
    )
}

export default Product;