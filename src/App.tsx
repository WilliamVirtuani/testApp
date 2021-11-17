import React from "react";
import logo from "./logo.svg";
import { Counter } from "./app/features/counter/Counter";
import "./App.css";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { isJSDocParameterTag } from "typescript";
import { useParams } from "react-router-dom";
import { Login } from "./app/features/pages/Login";

const WelcomeLabel = styled.h1`
  color: green;
`;

function App() {
  let navigate = useNavigate();

  function About() {
    let params = useParams();
    console.log("params", params.aboutId);
    return <WelcomeLabel>ABOUT:{params.aboutId}</WelcomeLabel>;
  }

  function About2() {
    let params = useParams();
    console.log("params", params.aboutId);
    return <WelcomeLabel>ABOUT:{params.aboutId}</WelcomeLabel>;
  }

  return (
    <Routes>
      <Route path="/home" element={Login({})}></Route>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="about" element={<About></About>}>
        <Route path=":aboutId" element={<About2></About2>} />
      </Route>
    </Routes>
  );
}

export default App;
