const data = {
  intro:
    "Hello my name is Gus, I'm a developer based in Malta, EU. My specialities are React.js with Next.js and Tailwind. I also love programming in Python, travelling, and training jiu-jitsu.",
  name: "Angus Girvan",
};

function Intro() {
  return (
    <>
      <h2 className="heading">{data.name}</h2>
      <p>{data.intro}</p>
    </>
  );
}

export default Intro;
