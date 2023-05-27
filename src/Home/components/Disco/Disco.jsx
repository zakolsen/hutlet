import React, { useState } from "react";
import DiscoItem from "./DiscoItem";
const discoItems = [
  {
    id: "1",
    image: "/images/music/road.png",
    music: "/music/Grand Line.wav",
    title: "Grand Line",
    date: "2023",
    link: "https://google.com/",
    desc: "Tired of being frozen in place. Wanting to find something shiny.",
  },
  {
    id: "2",
    image: "/images/music/emeralds.png",
    music: "/music/Emeralds and Jade.wav",
    title: "Emeralds and Jade",
    date: "2021",
    link: "https://open.spotify.com/album/0ynjcwVJYoTLJbfOV5PZmy?si=tkZTYGGERSKLNe2V9yso8A",
    desc: "Sometimes we are hesitant to find beauty in something we're not used to. Give that idea a shot.",
  },
  {
    id: "3",
    music: "/music/Numb It.wav",
    image: "/images/music/numb.jpg",
    title: "Numb It",
    date: "2020",
    link: "https://open.spotify.com/album/7ift813WqAD6I9QFpKfNmL?si=IxRjCaAsSwup4UgZSGvERA",
    desc: "Bored of the same routine? Me too. Trying to find some switch-ups with life.",
  },
  {
    id: "4",
    image: "/images/music/marked.png",
    music: "/music/The Marked.mp3",
    title: "The Marked",
    date: "2019",
    link: "https://open.spotify.com/album/2STzCHjS49Qy2oAS8igREm?si=iyHqIuttQg6MBCMmTomYSQ",
    desc: "A story involving tragedy, weird tattoos and reaching your final form.",
  },
  {
    id: "5",
    image: "/images/music/introduction.png",
    title: "An Introduction",
    music: "/music/an introduction.mp3",
    date: "2019",
    link: "https://open.spotify.com/album/4Me3ige7bxWA2XWRoj5wpT?si=BMCNVcDaSdOmnBVRpNsY4g",
    desc: "Reuniting with someone that you never expected to. Maybe it'll be a good thing for both of you.",
  },
];
export default function Disco() {
  const [playingNow, setPlayingNow] = useState(null);
  return (
    <div className="disco">
      <div className="auto__container">
        <h2
          className=" wow animate__fadeInUp"
          data-wow-duration=".8s"
          data-wow-delay=".4s"
        >
          <span>Discography</span>
        </h2>

        <div className="disco__inner">
          {discoItems.map((item, index) => {
            return (
              <DiscoItem
                index={index}
                setPlayingNow={setPlayingNow}
                playingNow={playingNow}
                {...item}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
