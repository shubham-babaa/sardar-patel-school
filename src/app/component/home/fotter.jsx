"use client";
import React from "react";
import Link from "next/link";
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
              <h3 id="footer_h"> Sardar Patel School</h3>
              <Link href="#home">
                <p id="footer_p">Home</p>
              </Link>
              <Link href="#home">
                <p id="footer_p">Shining Star</p>
              </Link>
              <Link href="#about">
                <p id="footer_p">About School</p>
              </Link>

              {/* <p id="footer_p">Register for Admission</p>
              <p id="footer_p">Our School</p> */}
              {/* <p id="footer_p">Careers</p> */}
              <p id="footer_p">Countact Number : +91 9907327147</p>
            </div>
          </div>
        </div>
        <hr />
        <p id="information">
          Sardar Patel Convent School- Head Office&nbsp;{" "}
          <span style={{ fontSize: "15px" }}>
            In front of Govt Primary School Behind New Galla Mandi Adarsh Nagar,
            Contact Number:+91 9907378338
          </span>
        </p>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className=" text-black d-flex justify-content-center text-center">
            <p id="">
              &copy; Sardar Patel Convent School In front of Govt Primary School
              Behind New Galla Mandi Adarsh Nagar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
