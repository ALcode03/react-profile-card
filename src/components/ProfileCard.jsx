import { useState } from "react";
import "../styles/ProfileCard.css";

function ProfileCard(props) {

    const [available, setAvailable] = useState(true);

    const handleChangesStatus = () => {
        setAvailable(!available);
    };

    return (
        <div className="profile-card">

            <img
                className="profile-image"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Robert_Downey%2C_Jr._2012.jpg"
                alt="Software Developer"
            />

            <h2>{props.name}</h2>
            <p className="role">{props.role}</p>

            <div className="skills">
                <span className="skill">React.js</span>
                <span className="skill">Node.js</span>
                <span className="skill">HTML</span>
                <span className="skill">CSS</span>
            </div>

            <div className="status-container">
                <p>
                    Status:
                    <strong>
                        {available ? " Available" : " Busy"}
                    </strong>
                </p>
            </div>

            <button
                className="status-button"
                onClick={handleChangesStatus}
            >
                Change Status
            </button>
        </div>
    );
}

export default ProfileCard;