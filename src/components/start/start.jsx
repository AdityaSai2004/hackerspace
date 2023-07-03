const startPage = (props) => {
  const blackBackgroundStyle = {
    backgroundColor: "black",
  };
  const aboutStyle = {
    display: "flex",
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
  };

  const textStyle = {
    color: "white",
    fontSize: 18,
    fontFamily: "Poppins",
    fontWeight: "400",
    width: "70%",
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
      Here are some of the key points of the workshop:
      <br />
      <br />
      - Learn about Bug Bounty, OSINT, and Cyber Forensics
      <br />
      - Gain hands-on experience in these specialized domains
      <br />- Participate in a thrilling Capture-The-Flag (CTF) challenge
    </p>
  );

  return (
    <>
      <div className="App" style={blackBackgroundStyle}>
        <div className="about" style={aboutStyle}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "100px",
            }}
          ></div>
          <div>
            <div className="navbar">
              <div className="navbar__left">
                <a href="https://cyscomvit.com/">
                  <span className="navbar__logo">CY</span>
                  <span className="navbar__slogo">S</span>
                  <span className="navbar__logo">COM</span>
                </a>
              </div>
            </div>

            <p style={headStyle}>Hacker Space</p>
          </div>

          <div style={textStyle}>
            <span>{content}</span>
            <br />
            <a href="https://www.vitchennaievents.com/conf1/index.php?eventid=1522">
              <button>Register</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default startPage;
