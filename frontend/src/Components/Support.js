import React, { useState } from "react";
import "../Css/register.css";
import { useEffect } from "react";

const Support = () => {
  // const [userData, setUserData] = useState({});

  // const contactPage = async () => {
  //   try {
  //     const res = await fetch("/studenthome", {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include",
  //     });
  //     const data = await res.json();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   contactPage();
  // }, []);
  return (
    <>
      <div>
        <div className="col1">
          <div className="row">
            <div className="icon">
              <i class="zmdi zmdi-phone"></i>
            </div>
            <div className="data">
              <div className="heading">Phone </div>
              <div className="head-data">123456789</div>
            </div>
          </div>
          <div className="row">
            <div className="icon">
              <i class="zmdi zmdi-email"></i>
            </div>
            <div className="data">
              <div className="heading">Email</div>
              <div className="head-data">xyz@gmail.com</div>
            </div>
          </div>
          <div className="row">
            <div className="icon">
              <i class="zmdi zmdi-pin-drop"></i>
            </div>
            <div className="data">
              <div className="heading">Address</div>
              <div className="head-data">Guwahati, Assam</div>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="container">
            <h1>Get In Touch</h1>
            <div class="mb-4 d-flex ">
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
              />
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Number"
              />
            </div>
            <div class="mb-4">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="10"
                placeholder="Message"
              style={{height:"310px"}}></textarea>
            </div>
            <button type="button" class="btn btn-info mb-4">Send Message</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
