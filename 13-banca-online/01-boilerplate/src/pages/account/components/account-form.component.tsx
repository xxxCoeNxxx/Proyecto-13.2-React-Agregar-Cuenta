import React from "react";
import {
  CreateAccountError,
  Account,
  createEmptyAccount,
  createEmptyAccountError,
} from "../account.vm";
import { validateForm } from "../validations";
import classes from "./account-form.component.module.css";

interface Props {
  handleAccount: (account: Account) => void;
}

export const CreateAccountFormComponent: React.FC<Props> = (props) => {
  const { handleAccount } = props;
  const [account, setAccount] = React.useState<Account>(createEmptyAccount());

  const [errors, setErrors] = React.useState<CreateAccountError>(
    createEmptyAccountError(),
  );

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm(account);
    setErrors(validationErrors.errors);

    if (validationErrors.succeeded) {
      handleAccount(account);
      setAccount(createEmptyAccount());
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label>Tipo de cuenta:</label>
            <select
              name="type"
              value={account.type}
              onChange={handleFieldChange}
              className={classes.medium}
            >
              <option value="">Seleccionar</option>
              <option value="corriente">corriente</option>
              <option value="ahorro">ahorro</option>
              <option value="nomina">nómina</option>
            </select>
            <p className={classes.error}>{errors.type}</p>
          </div>
          <div>
            <label>Alias:</label>
            <input
              type="string"
              name="alias"
              value={account.alias}
              onChange={handleFieldChange}
              className={classes.medium}
            />
            <p className={classes.error}>{errors.alias}</p>
          </div>
        </div>
        <button type="submit" className={classes.button}>
          Guardar
        </button>
      </form>
    </div>
  );
};
