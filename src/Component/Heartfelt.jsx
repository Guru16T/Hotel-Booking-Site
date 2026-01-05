import "./Heartfelt.css";
import tower from '../assets/tower.webp'
import Din from "../assets/2.webp"

function Heartfelt() {
  return (
    <>
    <div className="heartfelt-container my-5">
      <div className="heartfelt-image-container">
        <img
          src={Din}
          alt="Breakfast"
          className="heartfelt-image bed"
        />
        <div className="heartfelt-content mt-5">
          <div className="row justify-content-center align-items-center mt-5">
            <div className="col-md-6 text-center align-content-center">
          <h2 className="heartfelt-title style-font hot-color">Heartfelt breakfast<br /> every morning</h2>
          <div className="col-md-3 text-center d-inline-block">
          <p className="heartfelt-hours hot-color">
            Monday-Friday<br /> 07:30-09:30
          </p>
          </div>
          <div className="col-md-3 text-center d-inline-block">
          <p className="heartfelt-hours hot-color">
            Saturday-Sunday<br /> 08:00-10:00
          </p>
          </div><br />
          <button
            href="#"
            className="heartfelt-button salmon rounded"
          >
            Read More
          </button>
          </div>
          <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="heartfelt-container my-5">
      <div className="heartfelt-image-container">
        <img
          src={tower}
          alt="Breakfast"
          className="heartfelt-image bed"
        />

        <div className="heartfelt-content">
          <p className="text-center fs-5 hot-color">Erzscheidergården</p>
          <div className="container row">
            <div className="col-md-1"></div>
          <div className="col-md-6 text-center align-content-center">
          <p className="heartfelt-hours fs-1 style-font mt-5 hot-color">
            Your private retreat
          </p>
          <button
            href="#"
            className="heartfelt-button salmon rounded"
          >
            Read More
          </button>
          </div>
          </div>
        </div>
      </div>
    </div>
        </>
  );
}

export default Heartfelt;
