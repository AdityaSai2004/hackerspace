import React from "react";
import "./Speakers.css";
import speaker_subash from "./images/speaker-subash.jpeg";
import speaker_ranganthan from "./images/speaker-ranganathan.jpeg";
function Speakers() {
  return (
    <div id="container">
      <h1 id="headline">Meet Our Speaker</h1>
      <p id="intro-para">
        Renganathan P is a renowned cybersecurity expert with a proven track
        record of success. He has uncovered critical bugs in organizations such
        as the United Nations, the Government of India, and Apple, Lenovo, and
        The Walt Disney Company. He is a dynamic and accomplished ethical hacker
        and security researcher with an impressive track record of successfully
        safeguarding the digital infrastructure of more than 30 prominent
        organizations. His keen eye for identifying vulnerabilities has made him
        a valuable asset to organizations of all sizes.
      </p>
      <div className="profiles">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="details">
                <img src={speaker_ranganthan} width="150px"></img>
                <h2 className="speaker-name">Ranganthan P</h2>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="details-back">
                <h3 className="speaker-name">Ranganthan P</h3>
                <p className="speaker-name">
                  He is also the founder of R Protocols, a cybersecurity
                  startup. Recognized for his exceptional achievements,
                  Ranganathan P has been acknowledged by the esteemed IT
                  Minister of Tamil Nadu.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flip-card-inner">
                        <div className="flip-card-front">
                        <div className="details">
                            <img src={speaker_subash} width="150px"></img>
                            <h2 className="speaker-name">Subash Jaganathan</h2>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <div className="details-back">
                            <h3 className="speaker-name">Subash Jaganathan</h3>
                            <p className="speaker-name">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste architecto, sint obcaecati doloribus ullam et hic, magni quisquam debitis non totam adipisci distinctio, omnis vel quo aut nostrum blanditiis aliquam.</p>
                            </div>
                        </div>
                    </div> */}
      </div>
    </div>
  );
}

export default Speakers;
