import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const WelcomeLabel = styled.h1`
  color: green;
`;

function App() {
  return <WelcomeLabel>Hello World</WelcomeLabel>;
}

export default App;
