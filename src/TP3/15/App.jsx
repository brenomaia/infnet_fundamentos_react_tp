import Product from "./components/Product"

export default function App() {
    return (
        <div>
            < Product name="Camisa do Botafogo" price={300} description="Camisa mais bonita do mundo"/>
            < Product name="Camisa do Flamengo" price={1} />
        </div>
    )
}