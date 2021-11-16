import React, { useEffect } from "react";
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
  background-color: ${Colors.lightBlue};
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div = styled.div``;

type Inputs = {
  firstField: string;
  secondField: string;
};

export const Login: React.FC = ({}) => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = (data: any) => console.log(data);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <WindowWrapper>
      <FormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input defaultValue="c" {...register("firstField")} />
          </div>
          <div>
            {" "}
            <input {...register("secondField")} />
            {errors.secondField && <span>This field is required</span>}
          </div>

          <input type="submit"></input>
        </form>
      </FormWrapper>
    </WindowWrapper>
  );
};
