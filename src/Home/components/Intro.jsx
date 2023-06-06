import React, { useEffect, useState } from "react";

export default function Intro() {
  const [over, setOver] = useState(true);
  useEffect(() => {
    if (over) {
      document.body.classList.add("over");
    } else {
      document.body.classList.remove("over");
    }
  }, [over]);

  return (
    <div className="intro">
      <div
        className="intro__bg  wow animate__fadeIn"
        data-wow-duration="2s"
        data-wow-delay=".6s"
      >
        <img src={process.env.PUBLIC_URL + "/images/intro.png"} alt="intro" />
      </div>
      {/* <a href="#" class="btnUniq">
        Demandez un devis
        <div class="btnUniq__arrow">
          <span></span>
        </div>
      </a> */}
      <a
        target="_blank"
        href="https://linktr.ee/tommydime?utm_source=linktree_admin_share"
        className="button bordered  wow animate__fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".4s"
        onClick={() => setOver(false)}
      >
        Check out my music here
      </a>
    </div>
  );
}
