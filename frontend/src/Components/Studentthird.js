import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../Css/studentthird.css";
import axios from "axios";

const Studentthird = (props) => {
  console.log(props.userData);
  const location = useLocation();
  const { questionNumber, question } = location.state.item;
  const { item, code } = location.state;
  const [assign, setassign] = useState({
    fname: "",
    solution: ``,
  });
  const [report, setreport] = useState([]);
  const [sub, setsub] = useState(``);

  //Submitting solution
  const submitSoln = async (e) => {
    const res = await fetch("/submitsoln", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fname: assign.fname,
        solution: assign.solution,
        code,
        questionNumber,
      }),
    });
    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert(data.error);
    } else {
      window.alert(data.message);
    }
  };

  const showFile = async (e) => {
    var mf = document.getElementById("myfile");
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      console.log(text);
      alert(text);
      setassign({ fname: mf.files.item(0).name, solution: text });
      // addGuest()
    };
    reader.readAsText(e.target.files[0]);
  };
  const onUpload = async (e) => {
    submitSoln();
  };
  const fileData = () => {
    var mf = document.getElementById("myfile");
    if (mf) {
      return (
        <div class="details">
          <h2>File Details:</h2>

          <p>File Name: {mf.files.item(0).name}</p>

          <p>File Type: {mf.files.item(0).type}</p>

          <p>
            Last Modified: {mf.files.item(0).lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div class="details">
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };
  const printReportGramm = () => {
    return (
      <div class="report2">
        <h4>Grammar Report</h4>
        {report.join("\n")}
        {/* {reportGram.map(report => <div>{report.name}</div>)} */}
      </div>
    );
  };
  const grammReport = () => {
    axios
      .post("http://127.0.0.1:5000/studentgram", {
        code: code,
        questionNumber: questionNumber,
        roll_no: props.userData.roll_no,
      })
      .then(
        (response) => {
          var result = response.data;
          setreport(result);

          console.log(result);
          console.log(report);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  const printsub = () => {
    return (
      <div>
        <h4>Submission</h4>
        {sub}
      </div>
    );
  };
  const viewSub = async () => {
    axios
      .post("http://127.0.0.1:5000/studentsub", {
        code: code,
        questionNumber: questionNumber,
        roll_no: props.userData.roll_no,
      })
      .then(
        (response) => {
          var result = response.data;
          setsub(result);

          console.log(result);
          console.log(sub);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <section className="student-assignment">
      <div class="title2">
        <h1 class="first">{questionNumber}</h1>
        <h2 class="second">{code}</h2>
      </div>
      <div class="question">
        <h2>{question}</h2>
      </div>

      <button class="viewbutton" onClick={viewSub}>
        View Submission
      </button>
      {/* <input type="file" onChange={onFileChange()} class="myfile" id="myfile" name="myfile" /> */}
      <div class="choosefile2">
        <input
          type="file"
          onChange={(e) => showFile(e)}
          class="myfile2"
          id="myfile"
          name="myfile"
        />
        <button onClick={(e) => onUpload(e)} class="upload2">
          <div class="svg-wrapper-1">
            <div class="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Upload</span>
        </button>
        {/* {fileData()} */}
        <div class="details">{fileData()}</div>
      </div>
      <button class="scan3" onClick={grammReport}>
        Scan for gramatical errors
      </button>
      {/* {reportGram?.length!==0&&printReportGramm()} */}
      <div class="grammarreport">
        {report.length !== 0 && printReportGramm()}
      </div>
      <div class="viewsubmission">{sub.length !== 0 && printsub()}</div>
    </section>
  );
};

export default Studentthird;
