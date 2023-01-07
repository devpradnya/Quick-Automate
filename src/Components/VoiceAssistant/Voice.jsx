import React from "react";
import "./voice.css";

export default function Voice() {
  return (
    <section className=" Voice">
      <div className="voice__box">
        <p className="small">“Alexa, Set temperature to 18”</p>
        <p className="middle">“Alexa, Increase volume on TV”</p>
        <h3 className="voice__heading">“Okay Google, Turn on Bed Light”</h3>
      </div>
      <div className="video">
        <img
          className="voice__gif"
          src="/images/voice-assistant.gif"
          alt=""
        ></img>
      </div>
      <div className="voice__box">
        <h3 className="voice__heading">
          “Alexa, Change channel to STAR MOVIES”
        </h3>
        <p className="middle">“Alexa, Set temperature to 18”</p>
        <p className="small">“Alexa, Increase volume on TV” </p>
      </div>
    </section>
  );
}
