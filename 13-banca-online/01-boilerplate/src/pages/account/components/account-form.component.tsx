import React from "react";
import {
  CreateAccountError,
  Account,
  createEmptyAccount,
  createEmptyAccountError,
} from "../account.vm";
import { validateForm } from "../validations";

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
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select name="type" value={account.type} onChange={handleFieldChange}>
          <option value="">Seleccionar</option>
          <option value="corriente">corriente</option>
          <option value="ahorro">ahorro</option>
          <option value="nomina">nómina</option>
        </select>
        <p /* className={classes.error} */>{errors.type}</p>
        <input
          type="string"
          name="alias"
          value={account.alias}
          onChange={handleFieldChange}
        />
        <p /* className={classes.error} */>{errors.alias}</p>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};
