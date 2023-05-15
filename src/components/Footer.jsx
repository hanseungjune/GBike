import footer from "../assets/footer.svg";
import FooterStyle from './style/FooterStyle.module.css';

const Footer = () => {
  return (
    <footer className={FooterStyle.footer}>
      <div>
        <div>
          <h1>Start an Open Enterprise</h1>
          <p>
            If you can’t wait to run a new or existing organization on Open
            Enterprise and are willing to explore and navigate the beta, we’d
            love to get you started.
          </p>
          <div>
            <button>Request early access</button>
          </div>
        </div>
        <div>
          <img src={footer} alt="footer" />
        </div>
      </div>
      <div>
        <span>Gbike Product team</span>
        <span>한승준 01094000438</span>
      </div>
    </footer>
  );
};

export default Footer;
