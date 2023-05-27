import React, { useEffect, useRef, useState } from "react";
import { pauseIcon, playIcon } from "../../../Base/SVG";
import { Link } from "react-router-dom";

export default function DiscoItem(props) {
  const [audio, setAudio] = useState({
    playing: false,
    currentTime: 0,
    duration: 0,
  });

  const audioRef = useRef(null);
  const handleAudio = () => {
    props.setPlayingNow(props.id);
    if (playing) {
      audioRef.current.pause();
      setAudio({ ...audio, playing: false });
    } else {
      audioRef.current.play();
      setAudio({ ...audio, playing: true });
    }
  };

  const handleTimeUpdate = () => {
    setAudio({
      ...audio,
      currentTime: audioRef.current.currentTime,
      duration: audioRef.current.duration,
    });
  };
  const { playing, currentTime, duration } = audio;

  useEffect(() => {
    if (props.playingNow !== props.id) {
      setAudio({ ...audio, playing: false });
      audioRef.current.pause();
    }
  }, [props.playingNow]);

  return (
    <div
      className="discoItem  wow animate__fadeIn"
      data-wow-duration=".8s"
      data-wow-delay={`.${2 * props.index}s`}
    >
      <div className="discoItem__image">
        <img src={process.env.PUBLIC_URL + props.image} alt="image" />
        <div className="audio">
          <audio
            ref={audioRef}
            src={process.env.PUBLIC_URL + props.music}
            onTimeUpdate={handleTimeUpdate}
          />
          <button className="audio__btn" onClick={handleAudio}>
            {playing ? pauseIcon : playIcon}
          </button>
          <div className="audio__bar">
            <p>
              {currentTime ? (
                <>
                  {Math.floor(currentTime / 60)}:
                  {Math.floor(currentTime % 60) < 10
                    ? "0" + Math.floor(currentTime % 60)
                    : Math.floor(currentTime % 60)}
                </>
              ) : (
                "0:00"
              )}
            </p>
            <div className="audio__progress">
              <input
                type="range"
                value={currentTime > 0 ? (currentTime * 100) / duration : 0}
                onChange={(e) => {
                  setAudio({
                    ...audio,
                    currentTime: Math.floor((duration * e.target.value) / 100),
                  });
                  audioRef.current.currentTime = Math.floor(
                    (duration * e.target.value) / 100
                  );
                }}
              />
              <span
                style={{
                  width: `${
                    currentTime > 0 && (currentTime * 100) / duration
                  }%`,
                }}
              ></span>
            </div>
            <p>
              {duration ? (
                <>
                  {Math.floor(duration / 60)}:
                  {Math.floor(duration % 60) < 10
                    ? "0" + Math.floor(duration % 60)
                    : Math.floor(duration % 60)}
                </>
              ) : (
                "0:00"
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="discoItem__content">
        <a href={props.link} target="_blank">
          <h4>{props.title}</h4>
        </a>
        <h6>{props.date}</h6>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}
