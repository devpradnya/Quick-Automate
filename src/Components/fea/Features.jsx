import React from "react";
import { FeaturesData } from "./featuresData";
import "./features.css";

export default function Features() {
  return (
    <section className="features" id="about">
      <h2 className="heading">Features</h2>
      <div className="features__box">
        {FeaturesData.map((item) => {
          return (
            <div className="feature__deatil">
              <span className="feature__icon">{item.icon}</span>
              <div className="featureBox__deatil">
                <h5 className="feature__name">{item.feature}</h5>
                <p className="feature__desc">{item.describe}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
