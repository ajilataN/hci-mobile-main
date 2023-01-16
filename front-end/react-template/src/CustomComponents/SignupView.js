import mentor1 from "./public/mentor1.png";
import mentor2 from "./public/mentor2.png";
import tushan from "./public/tushan.png";

const TushanKoper = () => {
  const mystyle = {
    padding: "10px",
    fontFamily: "Arial",
  };
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div style={{ width: "100%" }}>
        <div style={{ float: "left" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </div>
      </div>
      <div className="text-center">
        <h1 style={mystyle} className="mt-5 ">
          <b>Mentoring at TUSHAN</b>
        </h1>
        <img
          src={tushan}
          className="img-responsive"
          alt=""
          style={{ maxWidth: "100px" }}
        ></img>{" "}
        <p>
          <span>&#8982;</span> Koper
        </p>
      </div>

      <div>
        <h3>
          <b>Owner </b>
          Maria Rodriguez
        </h3>
      </div>
      <div>
        <h3>
          <b>About Mentoring </b>
        </h3>
        In our community we constatntly seek for women that are ready to start
        something new. So far we have successfully become collegues with our
        prior mentees and we are happy to announce that our team is widening.
        Mentors at Tushan are ready to give you the proper basics for a good
        start.
        <div>
          <h4>
            <b>As a mentee...</b>
          </h4>
          A great opportunity to change your career path with a real
          professional by your side!
        </div>
        <h4>
          <b>Our mentors:</b>
        </h4>
        <div>
          <img
            src={mentor1}
            className="float-start rounded-circle w-25 img-responsive"
            alt=""
            style={{ maxWidth: "50px" }}
          ></img>
          <img
            src={mentor2}
            className="float-start rounded-circle w-25 img-responsive"
            alt=""
            style={{ maxWidth: "50px" }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default TushanKoper;
