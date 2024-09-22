const StatusBadge = ({ status }) => {
    const getStyle = () => {
        if (status === "ativo") {
            return { backgroundColor: 'green', color: 'white'}
        } else if (status === "inativo") {
            return { backgroundColor: 'grey', color: 'white'}
        } else if (status === "pendente") {
            return { backgroundColor: 'orange', color: 'white'}
        }
    }

    return (
        <p style={getStyle()}>{status}</p>
    )
}

export default StatusBadge;