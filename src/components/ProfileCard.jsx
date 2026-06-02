import "../styles/ProfileCard.css";

function ProfileCard(props) {
    return (
        <div className="profile-card">

            <img
                className="profile-image"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Robert_Downey%2C_Jr._2012.jpg"
                alt="Software Developer"
            />

            <h2>{props.name}</h2>
            <p>{props.role}</p>

            <div className="skills">
                <span className="skill">React.js</span>
                <span className="skill">Node.js</span>
                <span className="skill">HTML</span>
                <span className="skill">CSS</span>
            </div>
        </div>
    );
}

export default ProfileCard;