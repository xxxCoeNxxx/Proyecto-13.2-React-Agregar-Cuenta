import React from "react";
import { Credentials } from "./login.vm";
import { LoginFormComponent } from "./components";
import { useNavigate } from "react-router-dom";
import { mapCredentialsFromVmToApi } from "./login.mapper";
import { isValidLogin } from "./api";
import { appRoutes } from "@/core/router";
import classes from "./login.page.module.css"

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (credentials: Credentials) => {
    const apiCredentials = mapCredentialsFromVmToApi(credentials);
    isValidLogin(apiCredentials).then((isValid) => {
      if(isValid) {
        navigate(appRoutes.accountList);
      } else {
        alert("el usuario es admin@email.com y el password test")
      }
    });
  };

  return (
    <>
      <header className={classes.header}>
        <img src="assets/logo_header.svg"/>
      </header>
      <LoginFormComponent onLogin={handleSubmit} />
    </>
  );
};