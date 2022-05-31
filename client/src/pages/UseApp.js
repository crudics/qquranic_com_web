import React, { useState } from "react";
import "./UseApp.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import headerbg from "../assets/headerbg.webp";
import UseAppC from "../components/UseAppC";
const UseApp = () => {
  return (
    <>
      <Navbar />

      {/* page header start */}
      <div
        className="p-5 text-center bg-image"
        style={{
          // backgroundImage:
          //   "url('https://mdbootstrap.com/img/new/slides/041.webp')",
          backgroundImage: `url(${headerbg})`,
          height: 400,
        }}
      >
        <div className="d-flex page-header-title justify-content-center align-items-center h-100">
          <div className="page-header-text">
            <h1 className="mb-3 page-header-text">Why Choose Q Quranic</h1>
          </div>
        </div>
      </div>
      {/* page header end */}

      <UseAppC />
      <Footer />
    </>
  );
};

export default UseApp;
