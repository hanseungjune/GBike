import FourthSectionStyle from "./style/FourthSectionStyle.module.css";

const taskList = [
  {
    title: "Ideate a list of features based on the Sociocracy model",
    description:
      "We’re looking for someone interested in business theory and research that’ll help us bridge the gap between our s...",
    reward: 5,
    deadline: "May 15",
  },
  {
    title: "Update documentation with FAQs",
    description:
      "Review our community chat for the most frequently asked questions and document answers for our product docs.",
    reward: 10,
    deadline: "May 18",
  },
  {
    title: "Tutorial video series",
    description:
      "Create a series of video tutorials that cover everything from start to finish on using Open Enterprise.",
    reward: 40,
    deadline: "May 20",
  },
];

const FourthSection = () => {
  return (
    <section className={FourthSectionStyle.fourth}>
      <h1>Help us improve Open Enterprise</h1>
      <p>
        As an Open Enterprise ourselves, we are actively looking for new talent
        to join our mission of improving and delivering the Open Enterprise
        model to the world. Apply for open tasks and earn a stake in our
        success.
      </p>
      <div className={FourthSectionStyle["fourth-div"]}>
        {taskList.map((task, index) => (
          <div key={index}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <div>
              <button>{task.reward} AUT</button>
              <span>Apply by {task.deadline}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={FourthSectionStyle["fourth-btn"]}>
        <button>View more</button>
      </div>
    </section>
  );
};

export default FourthSection;
