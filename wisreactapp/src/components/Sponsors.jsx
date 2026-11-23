const logoStyle = {
  width: "250px",
  height: "250px",
  objectFit: "cover",
  borderRadius: "50%",
};

export const Sponsors = () => {
  return (
    <div
      id="sponsors"
      className="text-center"
      style={{
        minHeight: "calc(100vh - 90px)",
        paddingTop: "120px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="section-title">
        <h2>Sponsors</h2>
      </div>
      <div
        className="container"
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        <img
          src="img/sponsors/sponsors.png"
          alt="Crumbl Cookies"
          style={logoStyle}
        />
        <img
          src="img/sponsors/sponsers1.png"
          alt="Booch"
          style={logoStyle}
        />
      </div>
      <p style={{ fontSize: "22px", margin: "40px 16px 60px" }}>
        Reach out to us at{" "}
        <a href="mailto:uwo.wis.events@gmail.com">uwo.wis.events@gmail.com</a>{" "}
        if you're interested in sponsoring the club!
      </p>
    </div>
  );
};

export default Sponsors;