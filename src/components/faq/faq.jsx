import React from "react";
import { useState } from "react";
import "./faq.css";
import styled, { keyframes } from "styled-components";

const Data = [
  {
    Question: "Does the event require any pre-requisites knowledge?",
    Answer:
      "No prior experience or knowledge in cybersecurity is required to attend HackerSpace. The event is designed to provide a comprehensive learning experience for participants at all levels, from beginners to advanced learners.",
  },
  {
    Question: "Can I collaborate with others during the CTF challenge?",
    Answer:
      "Yes, collaboration among participants is encouraged during the CTF challenge. You can form team of 1-3 participant(s) and work together to solve the challenges. It's a great opportunity to learn from each other and enhance your problem-solving skills."
  },
  {
    Question: "Is there a registration fee for HackerSpace?",
    Answer:
      "Yes, there is a registration fee of Rs.150/-  for HackerSpace. "
  },
  {
    Question: "Will certificates be provided to participants?",
    Answer:
      "Yes, certificates of participation will be provided to all attendees of HackerSpace. These certificates will serve as a recognition of your active participation and engagement in the event."
  },
  {
    Question: "What should I bring with me to HackerSpace?",
    Answer:
      "Participants are encouraged to bring their own laptops for the hands-on activities and challenges. Additionally, it is recommended to bring a notebook and pen for taking notes during the workshop sessions."
  },

];


const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;


const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-100px);
    ${'' /* transition: transform 1s ease-in-out; */}
  }
`;


const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const FunctionWrapper = (i) => {
    toggle(i);
    changeStyle();
  };
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
    console.log("i");
  };


  const Answer = styled.div`
  animation: ${({ showCard }) => (showCard ? fadeIn : fadeOut)} 0.5s ease-in-out;`;

  const changeStyle = () => {
    var Element = document.getElementsByClassName("item");
    const BoxShadow =
      "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px";
    Element.style.background = "rgba(194, 26, 26, 0.1)";
    // Element.style.box-shadow = "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px";
    Element.style.transition = "transform 0.3s ease-in-out 0s";
    Element.style.transform = "scale(1.02)";
    Element.style.border = "none";
    Element.style.borderRadius = "10px";
    Element.style.padding = "20px";
    Element.style.boxShadow = BoxShadow;
    console.log("Hello");
  };

  return (
    <div className="wrapper">
      <div className="head">
        <h1>Frequently asked Questions</h1>
      </div>

      <div className="accordion">
        {Data.map((item, i) => (
          <>
            <div className="item" key={i}>
              <div className="title" onClick={() => FunctionWrapper(i)}>
                <h2>{item.Question}</h2>
                <span className="circle">{selected === i ? "-" : ">"}</span>
              </div>
              <Answer showCard={setSelected} className={selected === i ? "content-show" : "content"}>
                <p>{item.Answer}</p>
              </Answer>
            </div>
            <br />
          </>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
