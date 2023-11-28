import PropTypes from "prop-types";

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
  const skillList = skills.map((skill, index) => {
    return (
      <div className="skill-list" key={index}>
        <Skill
          skill={skill.skill}
          level={skill.level === "Advanced" ? "💪" : "👶"}
          color={skill.color}
        />
      </div>
    );
  });
  return <div>{skillList}</div>;
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.level}</span>
    </div>
  );
}

Skill.propTypes = {
  skill: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default SkillList;
