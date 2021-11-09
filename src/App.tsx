import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { isJSDocParameterTag } from "typescript";
import { useParams } from "react-router-dom";

const WelcomeLabel = styled.h1`
  color: green;
`;

function App() {
  let navigate = useNavigate();

  function Home() {
    return (
      <div>
        <WelcomeLabel>HOME!</WelcomeLabel>
        <button onClick={() => navigate("/about:3")}>press</button>
      </div>
    );
  }

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
      <Route path="about" element={<About></About>}>
        <Route path=":aboutId" element={<About2></About2>} />
      </Route>
      <Route path="/" element={Home()}></Route>
    </Routes>
  );
}

export default App;
