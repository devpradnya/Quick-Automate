import React from "react";
import "./footer.css";
import { MdContactMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__logo">
        <h3>
          <strong> Quick </strong>Automate{" "}
        </h3>
        <p className="footer__info">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          distinctio assumenda nobis a sed repudiandae recusandae, optio natus
          voluptate mollitia nemo ipsam nesciunt voluptatum velit voluptates
          consequatur necessitatibus doloribus dicta sit non, amet quisquam
          vero?
        </p>
      </div>
      <ul className="footer__products">
        <h3>Products</h3>
        <li className="footer__list">SMart 16A Plug</li>
        <li className="footer__list">Smart Switch</li>
        <li className="footer__list">Smart Travel Adapter</li>
        <li className="footer__list">SX Smart IR</li>
        <li className="footer__list">Smart Motor Panel</li>
        <li className="footer__list">Smart Heavy Duty Switch</li>
        <li className="footer__list">Smart RGB</li>
        <li className="footer__list">Smart Light</li>
      </ul>
      <ul className="footer__company">
        <h3>Company</h3>
        <li className="footer__list">Faq's</li>
        <li className="footer__list">ABout Us</li>
        <li className="footer__list">Knowledge Base</li>
        <li className="footer__list">Solutions</li>
        <li className="footer__list">Home Automation</li>
        <li className="footer__list">Smart Building</li>
        <li className="footer__list">Smart Enterprises</li>
        <li className="footer__list">SMart Industry</li>
      </ul>
      <div className="footer__contact">
        <div className="support">
          <div className="support__heading">
            <span>
              <MdContactMail />
            </span>
            <h5>Customer Support</h5>
          </div>
          <p className="footer__info">support@qucikautomate.com</p>
        </div>
        <div className="support">
          <div className="support__heading">
            <span>
              <BiSupport />
            </span>
            <h5>Sales</h5>
          </div>
          <p className="footer__info">sales@qucikautomate.com</p>
        </div>
        <div className="support">
          <div className="support__heading">
            <span>
              <FiPhoneCall />
            </span>
            <h5>Helpine</h5>
          </div>
          <p className="footer__info">+91 79798 82508</p>
          <p className="footer__info">+91 99343 48558</p>
        </div>
      </div>
    </section>
  );
}
