import React from "react";
import "./sponsors.css";
import AECC from "./AECC.png";
const Sponsors = () => {
  return (
    <>
      <div className="sponsors">
        <div className="span" id="title">
          SPONSORS
        </div>
        <p>
          Our esteemed sponsors,who empower us to bring the world of
          cybersecurity to life at HackerSpace.
        </p>

        <h1 className="plat-spon">Platinum sponsors</h1>
        <div className="cards">
          <div className="box">
            <img src={AECC} alt="AECC" className="images" />
          </div>
          {/* <div className="box"> </div>
                    <div className="box"> </div> */}
        </div>
      </div>
    </>
  );
};

export default Sponsors;
