import "../styles.css"

const Navigation = () => {
    return (
        <div className="navigation" id="home">
            <div className="navigation-item"><a href="#home">Home</a></div>
            <div className="navigation-item"><a href="#who">Quem Somos</a></div>
            <div className="navigation-item"><a href="#products">Produtos</a></div>
            <div className="navigation-item"><a href="#contact">Contato</a></div>
        </div>
    )
}

export default Navigation;