import Temperature from "./components/Temperature"

export default function App() {
    return (
        <div>
            <Temperature temp={26} />
            <Temperature temp={25} />
        </div>
    )
}