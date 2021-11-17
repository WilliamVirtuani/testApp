import React, { useEffect } from "react";
import styled from "styled-components";

interface IinputComponent {
  inError?: boolean;
}

const InputWrapper = styled.input<{ inError?: boolean }>`
  background-color: ${(props) => (props.inError ? "red" : "white")};
  height: 100px;
  font-size: 23px;
`;

const InputComponent: React.FC<IinputComponent> = ({ inError }) => {
  return <InputWrapper></InputWrapper>;
};

export default InputComponent;
