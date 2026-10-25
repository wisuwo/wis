export const Sponsors = () => {
  return (
    <div id="sponsors" className="text-center">
      <div className="section-title">
        <h2>Sponsors</h2>
      </div>
      <div className="container">
        <img
          src="img/sponsors/sponsors.png"
          alt="Our sponsors"
          style={{
            width: "250px",
            height: "250px",
            objectFit: "cover",
            borderRadius: "50%",
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>
    </div>
  );
};

export default Sponsors;