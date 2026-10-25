const logoStyle = {
  width: "250px",
  height: "250px",
  objectFit: "cover",
  borderRadius: "50%",
};

export const Sponsors = () => {
  return (
    <div id="sponsors" className="text-center">
      <div className="section-title">
        <h2>Sponsors</h2>
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
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
    </div>
  );
};

export default Sponsors;