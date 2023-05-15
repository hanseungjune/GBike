import Kickstart from "../assets/Kickstart.svg";
import kkobi from "../assets/kkobi.svg";
import debbie from "../assets/debbie.svg";
import harry from "../assets/harry.svg";
import kyle from "../assets/kyle.svg";
import onboard from "../assets/onboard.svg";
import engage from "../assets/engage.svg";
import taylor from "../assets/taylor.svg";
import bo from "../assets/bo.svg";
import lilly from "../assets/lilly.svg";
import star from "../assets/star.svg";
import Alex from "../assets/Alex.svg";
import ThirdSectionStyle from "./style/ThirdSectionStyle.module.css";
import { useState } from "react";
import { useEffect } from "react";

const members = [
  {
    image: kkobi,
    name: "kkobi",
    shares: "100",
  },
  {
    image: debbie,
    name: "debbie",
    shares: "100",
  },
  {
    image: harry,
    name: "harry",
    shares: "100",
  },
];

const data = [
  { label: "COMMIT", value: "10,000 DAI" },
  { label: "SHARES", value: "20" },
];

const items = [
  { image: taylor, name: "taylor", rating: "4.8" },
  { image: bo, name: "bo", rating: "4.5" },
  { image: lilly, name: "lilly", rating: "4.2" },
];

const ThirdSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollingLeft, setIsScrollingLeft] = useState(false);
  const [isScrollingRight, setIsScrollingRight] = useState(false);
  const [isScrollingThird, setIsScrollingThird] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    console.log(position);
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 800) {
      setIsScrollingLeft(true);
    } else {
      setIsScrollingLeft(false);
    }
    console.log(scrollPosition);
  }, [scrollPosition]);

  useEffect(() => {
    if (scrollPosition > 1300) {
      setIsScrollingRight(true);
    } else {
      setIsScrollingRight(false);
    }
  }, [scrollPosition]);

  useEffect(() => {
    if (scrollPosition > 1850) {
      setIsScrollingThird(true);
    } else {
      setIsScrollingThird(false);
    }
  }, [scrollPosition]);

  return (
    <section className={ThirdSectionStyle.third}>
      {/* 첫번째 섹션 */}
      <article
        className={`${ThirdSectionStyle["article-first"]} ${
          isScrollingLeft ? ThirdSectionStyle["scroll-left"] : ""
        }`}
      >
        <div>
          <img src={Kickstart} alt="kickStart" />
          <h1>Kickstart an organization with your co-founders</h1>
          <p>
            It’s the early days, you just had a long conversation with two
            friends about a meaningful challenge that you’re all passionate
            about and have a potential solution for. You’re ready to embark the
            startup journey.
          </p>
        </div>
        <div>
          <h2>Members</h2>
          {members.map((member, index) => (
            <div key={index}>
              <div>
                <img src={member.image} alt={member.name} />
              </div>
              <div>
                <h3>{member.name}</h3>
                <p>{member.shares} SHARES</p>
              </div>
            </div>
          ))}
        </div>
      </article>
      {/* 두번째 섹션 */}
      <article
        className={`${ThirdSectionStyle["article-second"]}  ${
          isScrollingRight ? ThirdSectionStyle["scroll-right"] : ""
        }`}
      >
        <div>
          <div>
            <img src={kyle} alt="kyle" />
            <div>
              <h3>kyle</h3>
              <p>Pre-seed angel investor</p>
            </div>
          </div>
          <p>
            Hey guys, love what you’re doing and I’m convinced that together
            we’ll achieve amazing things.
          </p>
          <div>
          {data.map((item, index) => (
            <div key={index}>
              <p>{item.label}</p>
              <h3>{item.value}</h3>
            </div>
          ))}
          </div>
          <div>
            <button>Go to vote</button>
          </div>
        </div>
        <div>
          <img src={onboard} alt="onboard" />
          <h1>Onboard users, investors and advisors as you grow</h1>
          <p>
            You’ve bootstrapped and delivered an MVP, and some investors and
            advisors are interested in having a chat with you. As an Open
            Enterprise, you can onboard them seamlessly into your digital
            organization and align them with your success.
          </p>
        </div>
      </article>
      {/* 세번째 섹션 */}
      <article className={`${ThirdSectionStyle["article-third"]} ${
          isScrollingThird ? ThirdSectionStyle["scroll-left"] : ""
        }`}>
        <div>
          <img src={engage} alt="engage" />
          <h1>Engage highly committed contributors</h1>
          <p>
            You need talented people on-demand across various tasks that your
            full-time workforce can’t prioritize at the moment. As an Open
            Enterprise, you can easily fund tasks and have people apply to work
            on them in return for funds or shares.
          </p>
        </div>
        <div>
          <div>
            <h4>Write a how-to on Open Enterprise</h4>
            <p>
              Looking for an amazing copywriter using Open Enterprise to help us
              write an article on how to get started.
            </p>
            <button>1 SHARE</button>
          </div>

          <div>
            <div>
              <h3>3 applicants</h3>
              {items.map((item, index) => (
                <div key={index}>
                  <div>
                    <img src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                  </div>
                  <div>
                    <img src={star} alt="star" />
                    <span>{item.rating}</span>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <img src={Alex} alt="Alex" />
              <h3>Alex Rose</h3>
              <p>UX Writer</p>
              <div>
                <p>4 commits</p>
                <div>
                  <img src={star} alt="star" />
                  <span>4.5</span>
                </div>
              </div>
              <div>
                <button>View profile</button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ThirdSection;
