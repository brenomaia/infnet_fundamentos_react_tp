const ProfileCard = ({ name, age }) => {
    return (
        <div>
            <p>Nome: {name}</p>
            {age !== undefined ? <p>Idade: {age}</p> : <p>Idade: Idade não disponível</p>}
        </div>
    )
}

export default ProfileCard;