import React, { useEffect } from "react";
import styled from "styled-components";
import { register } from "../../serviceWorker";

interface IinputComponent {
  register?: any;
  inError?: boolean;
}

const Input = styled.input<{ inError?: boolean }>`
  font-size: 20px;
  width: 100%;
  height: 100%;
  border: solid 2px ${(props) => (props.inError ? "red" : "white")};

  input:focus {
  }
`;

const InputComponent: React.FC<IinputComponent> = ({ inError, register }) => {
  return <Input {...register} inError={inError}></Input>;
};

export default InputComponent;
