import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="auto__container">
        <div className="footer__inner">
          <div className="footer__inner-logo">
            <img
              src={process.env.PUBLIC_URL + "/images/Hutlet.svg"}
              alt="logo"
            />
          </div>
          <div className="footer__inner-nav">
            <a href="#top" className="footer__inner-link">
              Home
            </a>
            <a href="#discography" className="footer__inner-link">
              Discography
            </a>
            <a href="#about" className="footer__inner-link">
              About
            </a>
          </div>
          <div className="footer__inner-socials">
            <a target="_blank" href="https://www.twitch.tv/tommydime">
              <img
                src={process.env.PUBLIC_URL + "/images/socials/Twitch.png"}
                alt="Twitch"
              />
            </a>
            <a target="_blank" href="https://www.instagram.com/tommydimegames/">
              <img
                src={process.env.PUBLIC_URL + "/images/socials/Instagram.png"}
                alt="Instagram"
              />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCsXPNnXLLJMlWLP5iLILqNA"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/socials/YouTube.png"}
                alt="YouTube"
              />
            </a>
            <a target="_blank" href="https://www.tiktok.com/@tommydime">
              <img
                src={process.env.PUBLIC_URL + "/images/socials/TikTok.png"}
                alt="TikTok"
              />
            </a>
            <a target="_blank" href="https://www.twitter.com/DimeTommy">
              <img
                src={process.env.PUBLIC_URL + "/images/socials/Twitter.png"}
                alt="Twitter"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
