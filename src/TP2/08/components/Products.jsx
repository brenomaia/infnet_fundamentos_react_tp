import "../styles.css"

const Products = () => {
    return (
        <div className="section" id="products">
            <h3>Nossos produtos</h3>
            <div className="products">
                <div className="product">
                    <img src="../../assets/img_ciclo_otto_0.jpg"></img>
                    <b>Ciclo Otto</b>
                    <p>Oferecemos uma linha completa de combustíveis (gasolinas e etanóis).</p>
                </div>
                <div className="product">
                    <img src="../../assets/img_renovaveis_0.jpg"></img>
                    <b>Renováveis</b>
                    <p>Temos soluções de combustíveis obtidos a partir de fontes limpas e renováveis, como o Vibra Diesel Renovável, Biogás e o Biometano.</p>
                </div>
            </div>
        </div>
    )
}

export default Products;