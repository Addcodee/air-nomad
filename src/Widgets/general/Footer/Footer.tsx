import "./Footer.scss";
import logo from "../../../Shared/assets/logo-color.svg";
import facebook from "./assets/facebook.svg";
import vk from "./assets/basil_vk-outline.svg";
import insta from "./assets/ri_instagram-line.svg";
import twitter from "./assets/basil_twitter-outline.svg";
import { useNavigate } from "react-router";
import SendForm from "../../../Features/SendForm/SendForm";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer__information">
        <div className="footer__information_left">
          <div className="footer__information_top">
            <h3>Sie haben noch Fragen?</h3>
            <p>
              Schreiben Sie an unsere Spezialisten und lassen Sie sich kostenlos
              beraten
            </p>
          </div>
          <div className="footer__information_bottom">
            <ul>
              <li>Telefonnummer</li>
              <li>+49 157 123 456</li>
              <li>+49 176 789 012</li>
            </ul>
            <ul>
              <li>Adresse</li>
              <li>Frankfurt am Main, Goethestraße 9</li>
            </ul>
            <ul id="footer-work">
              <li>Zeitplan</li>

              <li>Mo-Fr: 10:00-19:00 Uhr</li>
              <li>Sa: 11:00-16:00 Uhr</li>
            </ul>
          </div>
        </div>
        <SendForm />

        <div className="footer__information_bottom-resp">
          <ul>
            <li>Telefonnummer</li>
            <li>+49 157 123 456</li>
            <li>+49 176 789 012</li>
          </ul>
          <ul>
            <li>Adresse</li>
            <li>Frankfurt am Main, Goethestraße 9</li>
          </ul>
          <ul id="footer-work">
            <li>Zeitplan</li>

            <li>Mo-Fr: 10:00-19:00 Uhr</li>
            <li>Sa: 11:00-16:00 Uhr</li>
          </ul>
        </div>
      </div>
      <div className="footer__border"></div>
      <div className="footer__links">
        <img onClick={() => navigate("/")} src={logo} alt="footer-logo" />
        <ul>
          <li>
            <button>Über das Unternehmen</button>
          </li>
          <li>
            <button>Lander</button>
          </li>
        </ul>
        <ul>
          <li>
            <button>Arten von Touren</button>
          </li>
          <li>
            <button>Heisse Touren</button>
          </li>
        </ul>
        <ul>
          <li>
            <button>Wir sind in sozialen Netzwerken</button>
          </li>
          <li>
            <ul>
              <li>
                <img src={facebook} alt="footer-social-net" />
              </li>
              <li>
                <img src={twitter} alt="footer-social-net" />
              </li>
              <li>
                <img src={insta} alt="footer-social-net" />
              </li>
              <li>
                <img src={vk} alt="footer-social-net" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
