import React from "react";

export default function About() {
  return (
    <div className="about">
      <div className="auto__container">
        <div className="about__inner">
          <div className="about__inner-content">
            <h2
              className="wow animate__fadeInLeft"
              data-wow-duration=".8s"
              data-wow-delay=".2s"
            >
              About Me:
            </h2>
            <p
              className="wow animate__fadeInLeft"
              data-wow-duration=".8s"
              data-wow-delay=".4s"
            >
              Alternative Singer/Songwriter jabroni artist Hutlet, has released
              his newest album "Grand Line" the Summer of 2023. With an avid
              following online on live-streaming sites such as
              <a className="uniq" target="_blank" href="https://www.twitch.tv/tommydime">
                Twitch.tv
              </a>{" "}
              the past few years, the news of new music coming out is something
              he is wanting to share with not only new and old listeners, but
              content creators pushing incredible communities like we haven't
              experienced before to use for their own curations without fear. "I
              want to make a record that aims to strike a moment with whoever is
              listening where they sit and go "WHAT IS THIS??". Hopefully in a
              good way (LUL). "I think it's important to have people feel a
              connection without searching for one sometimes, it sticks with you
              a little longer I think". On this new record, there might be TOO
              many stomps. But that's okay.
            </p>
            <p
              className="wow animate__fadeInLeft"
              data-wow-duration=".8s"
              data-wow-delay=".6s"
            >
              Contact:
              <a href="mailto:thomashutlet@gmail.com">thomashutlet@gmail.com</a>
            </p>
          </div>
          <div
            className="about__inner-image wow animate__fadeIn"
            data-wow-duration="1.6s"
            data-wow-delay=".4s"
          >
            <img
              src={process.env.PUBLIC_URL + "/images/about.jpg"}
              alt="about"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
