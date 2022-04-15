import React, { createContext, useReducer, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import TeacherHome from "./Components/TeacherHome";
import TeacherSecond from "./Components/TeacherSecond";
import Home from "./Components/Home";
// import StudentHome from "./Components/StudentHome";
import StudentSecond from "./Components/StudentSecond";
import Studentthird from "./Components/Studentthird";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Guest from "./Components/Guest";
import Support from "./Components/Support";
import Error from "./Components/Error";
import StudentHome from "./Components/StudentHome";
import { initialState, reducer } from "./reducer/UseReducer";
import Logout from "./Components/Logout";
import ClassS from "./Components/ClassS";
import ClassT from "./Components/ClassT";
import TeacherThird from "./Components/TeacherThird";

//1. Context API
export const UserContext = createContext();
function App() {
  // const [classD, setClassD] = useState({})
  const [state, dispatch] = useReducer(reducer, initialState);
  const [userData, setUserData] = useState({});
  // const path = userData.role === "student" ? `/studenthome` : `/teacherhome`;
  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={{ state, dispatch }}>
          <Navbar userData={userData} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setUserData={setUserData} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/guest" element={<Guest />} />
            <Route path="/support" element={<Support />} />
            <Route path="/studenthome" element={<StudentHome />} />
            <Route path="/teacherhome" element={<TeacherHome />} />
            <Route path="/teacherhome/classes" element={<ClassT userData={userData} />} />
            <Route path="/studenthome/classes" element={<ClassS userData={userData}/>} />
            <Route path="/teacherhome/classes/assignment" element={<TeacherSecond />} />
            <Route path="/teacherhome/classes/assignment/assignnum" element={<TeacherThird />} />
            <Route path="/studenthome/classes/assignment" element={<StudentSecond />} />
            <Route path="/studenthome/classes/assignment/assignnum" element={<Studentthird userData={userData}/>} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>

      {/* <StudentHome /> */}
      {/* <TeacherHome /> */}
      {/* <StudentSecond /> */}
      {/* <TeacherSecond /> */}
      {/* <TeacherThird /> */}
    </div>
  );
}

export default App;
