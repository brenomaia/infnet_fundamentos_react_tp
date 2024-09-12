import "../styles.css"

const Skills = () => {
    return (
        <div className="section">
            <h3>Skills</h3>
            <div className="skills">
                <div className="skill">
                    <img src="../../assets/elixir.png" alt="elixir logo" />
                    <p>Elixir</p>
                </div>
                <div className="skill">
                    <img src="../../assets/postgres.svg" alt="postgres logo" />
                    <p>Postgres</p>
                </div>
                <div className="skill">
                    <img src="../../assets/python.svg" alt="python logo" />
                    <p>Python</p>
                </div>
                <div className="skill">
                    <img src="../../assets/sql.webp" alt="sql logo" />
                    <p>SQL</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;