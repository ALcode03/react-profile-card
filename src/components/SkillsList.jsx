import { useState } from "react";
import "../styles/SkillsList.css";

function SkillsList() {
  const [showSkills, setShowSkills] = useState(true);

  const skills = [
    {
      id: 1,
      name: "React",
      level: "Advanced",
    },
    {
      id: 2,
      name: "Node.js",
      level: "Intermediate",
    },
    {
      id: 3,
      name: "Python",
      level: "Advanced",
    },
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-title">
        Developer Skills
      </h2>

      {showSkills &&
        skills.map((skill) => (
          <div
            key={skill.id}
            className="skill-item"
          >
            <span>{skill.name}</span>
            <span>{skill.level}</span>
          </div>
        ))}

      <button
        className="toggle-button"
        onClick={() =>
          setShowSkills(!showSkills)
        }
      >
        {showSkills
          ? "Hide Skills"
          : "Show Skills"}
      </button>
    </div>
  );
}

export default SkillsList;