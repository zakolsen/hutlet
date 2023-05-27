import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (menu) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [menu]);
  const close = (e) => {
    if (e.target === e.currentTarget) setMenu(false);
  };

  useEffect(() => {
    setMenu(false);
    document.body.classList.remove("active");
  }, [location]);
  const start = 50;
  const onScroll = React.useCallback(() => {
    if (window.scrollY > start) {
      document.getElementById("header").classList.add("sticky");
    } else {
      document.getElementById("header").classList.remove("sticky");
    }
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="header" id="header">
      <div className="auto__container">
        <div className="header__inner">
          <Link to="" className="header__inner-logo">
            <img
              src={process.env.PUBLIC_URL + "/images/Hutlet.svg"}
              alt="logo"
            />
          </Link>
          <nav className={"nav " + (menu ? "active" : "")} onClick={close}>
            <div className="nav__inner">
              <a href="#top" className="nav__inner-link">
                home
              </a>
              <a href="#discography" className="nav__inner-link">
                Discography
              </a>
              <a href="#about" className="nav__inner-link">
                About
              </a>
              <a
                href="https://open.spotify.com/artist/57iFG9OVRZEFG1NV5vN9N6?si=ZUtfUCAuRumD-b0v7ln_iA"
                target="_blank"
                className="button white"
              >
                listen now
              </a>
            </div>
          </nav>
          <div
            className={"burger " + (menu ? "active" : "")}
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
