import React, { Component } from "react";
import "../Css/guest.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
class MyComponent extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      ginput: ``,
      report: [],
      reportGram: [],
    };
  }

  addGuest = () => {
    axios.post("http://127.0.0.1:5000/guest", {
      fname: this.state.fname,
      ginput: this.state.ginput,
    });
  };
  showdiv = () => {
    this.plagReport();
    // document.getElementById("report").style.display = 'auto';
  };
  plagReport = () => {
    axios.get("http://127.0.0.1:5000/guestreport").then(
      (response) => {
        var result = response.data;
        this.setState({ report: result });

        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );

    // document.getElementById("report").style.display = 'auto';
    // this.buildTable(this.state.report)
  };
  printReportGramm = () => {
    return (
      <div class="report2">
        <h4>Grammar Report</h4>
        {this.state.reportGram.join("\n")}
      </div>
    );
  };
  grammReport = () => {
    axios.get("http://127.0.0.1:5000/guestgram").then(
      (response) => {
        var result = response.data;
        this.setState({ reportGram: result });

        console.log(result.join("\n"));
      },
      (error) => {
        console.log(error);
      }
    );
  };
  deleteGuest = () => {
    axios.delete("http://127.0.0.1:5000/guest").then(
      (response) => {
        var result = response.data;
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
    this.props.navigate("/");
  };
  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };
  // File content to be displayed after
  // file upload is complete
  showFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      console.log(text);
      alert(text);
      this.setState({ fname: this.state.selectedFile.name });
      this.setState({ ginput: text });
      this.addGuest();
    };
    reader.readAsText(this.state.selectedFile);
  };

  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div class="details2">
          <h2>File Details:</h2>

          <p>File Name: {this.state.selectedFile.name}</p>

          <p>File Type: {this.state.selectedFile.type}</p>

          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div class="details2">
          <br />
          <h4>Choose file before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  render() {
    return (
      <div class="guest-home">
        {/* <img class="icon"  onClick={()=>{this.props.navigate("/")}} src={require('../Images_copy/Plag_Check.png')} height="150" ></img> */}
        {/* <img class="icon2" onClick={this.deleteGuest} src={require('../Images_copy/Plag_Check.png')} height="150" ></img>
        <h3 class="icon">Ｐｌａｇ Ｃｈｅｃｋ</h3> */}
        <button class="back" onClick={this.deleteGuest}>
          <svg
            class="back2"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1024 1024"
          >
            <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
          </svg>
          <span>Back</span>
        </button>

        {/* <input class="type-box" type="text" /> */}
        {/* <textarea class="type-box" placeholder="Enter Text or upload file ..." name="Text1" cols="40" rows="5"></textarea> */}
        <button class="scan1" onClick={this.showdiv}>
          Scan for plagiarism
        </button>
        {this?.state?.report.length !== 0 && (
          <div id="report" class="report">
            <h4>Plag Report</h4>
            <table class="table table-striped">
              <tr class="bg-info">
                <th>File1</th>
                <th>File2</th>
                <th>Simlarity_Score</th>
              </tr>

              <tbody id="myTable">
                {this?.state?.report.map((entries) => {
                  return (
                    <tr>
                      <th>{entries[0]}</th>
                      <th>{entries[1]}</th>
                      <th>{entries[2]}</th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        <button class="scan2" onClick={this.grammReport}>
          Scan for gramatical errors
        </button>
        <img
          class="guest-image"
          src={require("../Images_copy/plagiarism-concept-with-man-stealing-ideas_23-2148422590.png")}
          height="200"
          width="150"
        ></img>
        <div>
          {/* <label for="myfile" class="choose">Select a file:</label> */}
          <input
            type="file"
            onChange={this.onFileChange}
            class="myfile"
            id="myfile"
            name="myfile"
            multiple
          />
          {/* <input type="file" onChange={(e) => this.showFile(e)} id="myfile" name="myfile" multiple/> */}
          {/* <button onClick={this.onFileUpload} class="upload"></button> */}
          <button onClick={(e) => this.showFile(e)} class="upload">
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
          {/* <button onClick={this.addGuest()} >UPload!!!!</button> */}
          {/* {this.addGuest()} */}
        </div>
        {this.fileData()}
        {/* {this.printReportPlag()} */}
        {this?.state?.reportGram.length !== 0 && this.printReportGramm()}
      </div>
    );
  }
}

const Guest = (props) => {
  let navigate = useNavigate();
  return <MyComponent {...props} navigate={navigate} />;
};

export default Guest;
