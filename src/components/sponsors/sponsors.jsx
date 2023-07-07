import React from "react";
import "./sponsors.css";
import AECC from "./AECC.png";
import Sponsor from "./sponsor_new.jpg";
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

        <div className="cards">
          <h1 className="plat-spon">Platinum</h1>
          <div className="box">
            <img src={Sponsor} alt="AECC" className="images" />
          </div>
          {/* <div className="box"> </div>
                    <div className="box"> </div> */}
        </div>
      </div>
    </>
  );
};

export default Sponsors;
