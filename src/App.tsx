import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { isJSDocParameterTag } from "typescript";

const WelcomeLabel = styled.h1`
  color: green;
`;

function App() {
  let navigate = useNavigate();

  function Home() {
    return (
      <div>
        <WelcomeLabel>HOME!</WelcomeLabel>
        <button onClick={() => navigate("/about")}>press</button>
      </div>
    );
  }

  function About() {
    return <WelcomeLabel>ABOUT</WelcomeLabel>;
  }

  return (
    <Routes>
      <Route path="/about" element={About()}></Route>
      <Route path="/" element={Home()}></Route>
    </Routes>
  );
}

export default App;
