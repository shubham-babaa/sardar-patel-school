import React from "react";

export default function Fotter() {
  return (
    <section>
      <div
        className="container-fluid mt-5"
        style={{
          background: "#00b09b",
          background: "-webkit-linear-gradient(to right, #00b09b, #96c93d)",
          background: "linear-gradient(to right, #00b09b, #96c93d)",
          padding: "0 30px 0 30px",
        }}
      >
        <div className="row  justify-content-center md:w-[50%] mx-auto">
          <div className="col-xl-3 p-5 d-flex justify-content-center">
            <div className="">
              <h3 id="footer_h"> Sardar Patel Convent School</h3>
              <p id="footer_p">Home</p>
              <p id="footer_p">About School</p>
              <p id="footer_p">Learning</p>
              <p id="footer_p">Prpole</p>
              <p id="footer_p">Register for Admission</p>
              <p id="footer_p">Our School</p>
              <p id="footer_p">Careers</p>
              <p id="footer_p">Countact Us</p>
            </div>
          </div>
        </div>
        <hr />
        <p id="information">
          Sardar Patel Convent School- Head Office&nbsp;{" "}
          <span style={{ fontSize: "15px" }}>
            In front of Govt Primary School Behind New Galla Mandi Adarsh Nagar,
            Contact Number: 0120- 4928550
          </span>
        </p>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-xl-4 d-flex justify-content-center text-center">
            <p id="d_h">
              &copy; Sardar Patel Convent School In front of Govt Primary School
              Behind New Galla Mandi Adarsh Nagar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
