import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import Colors from "../settings/colors";
import InputComponent from "../../components/InputComponent";
import jsonData from "../mock/account.json";

type Inputs = {
  firstField: string;
  secondField: string;
};

type Accounts = {
  email: string;
  password: string;
};

type AccountsList = {
  accounts: Accounts[];
};

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

const Div = styled.div`
  margin-top: 5%;
`;

export const Login: React.FC = ({}) => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<Inputs>();

  const accountsData: AccountsList = jsonData;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("data", data);
    accountsData.accounts.forEach((element) => {
      if (
        element.email === data.firstField &&
        element.password === data.secondField
      ) {
        console.log("trovato");
        return true;
      }
    });
  };

  useEffect(() => {
    console.log("Errors", errors);
    console.log(isValid);
  }, [errors, isValid]);

  return (
    <WindowWrapper>
      <FormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Div>
            <InputComponent
              register={register("firstField", { required: true })}
              inError={errors.firstField ? true : false}
            ></InputComponent>
          </Div>
          <Div>
            <InputComponent
              register={register("secondField", { required: true })}
              inError={errors.secondField ? true : false}
            ></InputComponent>
          </Div>
          <Div>
            <button type={"submit"}>Accedi</button>
          </Div>
        </form>
      </FormWrapper>
    </WindowWrapper>
  );
};
