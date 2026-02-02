import React from "react";
import { Credentials, CredentialsFormErrors, createEmptyCredentials, createEmptyCredentialsFormErrors } from "../login.vm";
import { validateform } from "../login.validation";

interface Props {
  onLogin: (credentials: Credentials) => void;
}

export const LoginFormComponent: React.FC<Props> = (props) => {
  const {onLogin} = props;
  const [credentials, setCredentials] = React.useState<Credentials>(
    createEmptyCredentials()
  );

  const [errors, setErrors] = React.useState<CredentialsFormErrors>(
    createEmptyCredentialsFormErrors()
  );

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials, [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationResult = validateform(credentials);
    setErrors(validationResult.errors);

    if (validationResult.succeeded) {
      onLogin(credentials);
    };
  };

  return (
  <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Usuario</label>
          <input type="text" id="username" name="user" onChange={handleFieldChange}
          ></input>
          {errors.user && <p>{errors.user}</p>}
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" onChange={handleFieldChange}
          ></input>
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">Acceder</button>
      </form>
  )}