import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SignupC.css";
import axios from "axios";
import Navbar from "../components/Navbar";
import headerbg from "../assets/headerbg.webp";
import Footer from "../components/Footer";

const Signup = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const Signup = (e) => {
    e.preventDefault();
    const { name, email, phone, course, country } = user;
    if (name && email && phone && course && country) {
      axios.post("/signup", user).then((res) => {
        alert(res.data.message);
        history.push("/");
      });
    } else {
      alert("invlid input front end");
    }
  };

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
            <h1 className="mb-3 page-header-text">Sign Up</h1>
          </div>
        </div>
      </div>
      {/* page header end */}

      <section className="signup-section">
        <div className="container signup-container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="signup-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    New Here <br /> Sign Up.
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt eaque alias similique.
                  </p>
                  <figure>
                    <img
                      src="./images/hero1.png"
                      alt="contatUsImg"
                      className="img-fluid"
                    />
                  </figure>
                </div>

                {/* right side contact form  */}
                <div className="signup-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 signup-input-feild">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          autoComplete="off"
                          placeholder="Name"
                          value={user.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12 col-lg-6 signup-input-feild">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          autoComplete="off"
                          className="form-control"
                          placeholder="Email"
                          value={user.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 signup-input-feild">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="off"
                          className="form-control"
                          placeholder="WhatsApp Number "
                          value={user.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12 col-lg-6 signup-input-feild">
                        <select
                          name="course"
                          id="course"
                          class="form-select "
                          value={user.course}
                          onChange={handleChange}
                        >
                          <option selected>Select Course</option>
                          <option>Basic Qaida</option>
                          <option>Quran with Tajweed</option>
                          <option>Quran Memorization</option>
                          <option>Quran Translation</option>
                          <option>Quran Tafseer</option>
                          <option>Namaz, Kalma, Dua</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 signup-input-feild">
                        <input
                          type="text"
                          name="country"
                          id="country"
                          autoComplete="off"
                          className="form-control"
                          placeholder="Country"
                          value={user.country}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-style w-100 mt-5"
                      onClick={Signup}
                    >
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Signup;
