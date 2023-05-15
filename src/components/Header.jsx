/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { useState } from "react";
import Logo from "../assets/Logo.svg";
import headerStyle from "./style/HeaderStyle.module.css";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 70) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <header
      className={`${headerStyle.header} ${isSticky ? headerStyle.sticky : ""}`}
    >
      <div>
        <img src={Logo} alt="로고" />
      </div>
      <ul className={headerStyle["header-menu"]}>
        <a href="#">
          <li>Why Open Enterprise</li>
        </a>
        <a href="#">
          <li>Features</li>
        </a>
        <a href="#">
          <li>Contribute</li>
        </a>
        <a href="#">
          <li>Request early access</li>
        </a>
      </ul>
    </header>
  );
};

export default Header;
