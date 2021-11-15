import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Colors from "../settings/colors";

const WindowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${Colors.blue};
`;

const WelcomeLabel = styled.h1`
  color: green;
`;

export const Login: React.FC = ({}) => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <WindowWrapper>
      <WelcomeLabel>HOME!</WelcomeLabel>
    </WindowWrapper>
  );
};