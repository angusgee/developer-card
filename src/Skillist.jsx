/* eslint-disable react/prop-types */

const skills = [
  {
    skill: "HTML + CSS",
    level: "Advanced",
    color: "#3498db",
  },
  { skill: "Javascript", level: "Advanced", color: "#f1c40f" },
  { skill: "React", level: "Advanced", color: "#e67e22" },
  { skill: "Svelte", level: "Beginner", color: "#e74c3c" },
];

function SkillList() {
  return (
    <div className="wrapper">
      <div className="skill-list">
        {skills.map((skill, index) => {
          return (
            <Skill
              key={index}
              skill={skill.skill}
              level={skill.level}
              color={skill.color}
            ></Skill>
          );
        })}
      </div>
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "Beginner" && "👶"}
        {level === "Intermediate" && "👍"}
        {level === "Advanced" && "🚀"}
      </span>
    </div>
  );
}

export default SkillList;
