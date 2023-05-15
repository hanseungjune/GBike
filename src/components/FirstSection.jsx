import highFive from "../assets/highFive.svg";
import highFiveBack from "../assets/highFiveBack.svg";
import scrollDown from "../assets/scrollDown.svg";
import firstSectionStyle from "./style/FirstSectionStyle.module.css";

const FirstSection = () => {
  
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight + 10,
      behavior: "smooth"
    })
  }

  return (
    <section className={firstSectionStyle["first-section"]}>
      <div className={firstSectionStyle["first-section-div"]}>
        <div>
          <h1>A new model for open collaboration</h1>
          <p>
            Run an organization where members get rewarded for their contributions
            with fractional ownership.
          </p>
          <button>Request early access</button>
        </div>
        <div
          className={firstSectionStyle.highFiveBack}
          style={{
            backgroundImage: `url(${highFiveBack})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "right"
          }}
        >
          <img src={highFive} alt="FirstSectionImg" />
        </div>
      </div>
      <div className={firstSectionStyle["scroll-down"]}>
        <img src={scrollDown} alt="scroll-down" onClick={handleClick}/>
      </div>
    </section>
  );
};

export default FirstSection;
