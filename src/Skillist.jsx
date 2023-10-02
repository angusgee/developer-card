import PropTypes from "prop-types";

function SkillList() {
  return (
    <div className="skill-list">
      <Skill lang="React" emoji="💪" color="orange" />
      <Skill lang="Javascript" emoji="💪" color="yellow" />
      <Skill lang="HTML + CSS" emoji="💪" color="blue" />
      <Skill lang="Svelte" emoji="👶" color="red" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.lang}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

Skill.propTypes = {
  lang: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default SkillList;
