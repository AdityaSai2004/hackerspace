const AboutPage = (props) => {
  const blackBackgroundStyle = {
    backgroundColor: "black",
    display:"flex",
    flexDirection: "column",
    justifyContent: "center",
  };
  const aboutStyle = {
    display: "block",
    flexDirection: "column",
    height: "100vh",
    textAlign: "start",
    paddingLeft: "4rem",
    paddingRight: "4rem",
  };

  const headStyle = {
    color: "#FC0101",
    fontSize: "5rem",
    fontFamily: "MrRobot",
    fontWeight: "400",
    margin: "0",
    display:"block",
    paddingTop:'2rem'
  };

  const textStyle = {
    color: "white",
    fontSize: 18,
    fontFamily: "Poppins",
    fontWeight: "400",
    width: "70%",
    display:"block",
  };

  const pageno = {
    color: "white",
    fontSize: 48,
    fontFamily: "Poppins",
    fontWeight: "700",
  };
  let temp = props.name;
  // let content=props.content
  let content = (
    <p>
      HackerSpace is a one-day workshop that will teach you about Bug Bounty,
      OSINT, and Cyber Forensics. You will learn through interactive sessions,
      demonstrations, and hands-on exercises. The highlight of the workshop is
      the Capture-The-Flag (CTF) challenge, where you will test your hacking
      skills against other participants.
      <br />
      <br />
      Register Now!
      <br />
      <br />
    </p>
  );

  return (
    <>
      <div className="apps" style={blackBackgroundStyle}>
        <div className="about" style={aboutStyle}>
          <div
            style={{
              
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "100px",
              display:"block"
            }}
          ></div>
          <div style={{display:"block"}}>
            <p style={headStyle}>{temp}</p>
          </div>

          <div style={{display:"block"}}>
            <span style={textStyle}>{content}</span>
          </div>
          <a
            href="https://www.vitchennaievents.com/conf1/index.php?eventid=1522"
            style={{ paddingBottom: "10%" }}
          >
            <button className="register" style={{display:"block"}}>Register</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
