import { links, socials } from "./data.jsx";
import { FaBars } from "react-icons/fa";
import { useState, useRef } from "react";

const Navbar = () => {
  const [showLinks, setshowLinks] = useState(false);
  const ulRef = useRef();

  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src="logo.png" className="logo" alt="logo foreach" />
            <button
              className="nav-toggle"
              onClick={() => setshowLinks(!showLinks)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className="links-container"
            style={{
              height: showLinks
                ? ulRef.current.getBoundingClientRect().height
                : "0 px",
            }}
          >
            <ul className="links" ref={ulRef}>
              {links.map((link) => {
                const { id, url, text } = link;

                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
            <ul className="social-icons">
              {socials.map((social) => {
                const { id, url, icon } = social;
                return (
                  <li key={id}>
                    <a href={url}>{icon}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
