import React from "react";
import { CreateAccountVm, createEmptyAccount } from "../account.vm";

interface Props {
  handleAccount: (account: CreateAccountVm) => void;
}

export const CreateAccountFormComponent: React.FC<Props> = (props) => {
  const { handleAccount } = props;
  const [account, setAccount] =
    React.useState<CreateAccountVm>(createEmptyAccount());

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAccount(account);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select name="type" value={account.type} onChange={handleFieldChange}>
          <option value={1}>Cuenta corriente</option>
          <option value={2}>Cuenta ahorro</option>
          <option value={3}>Cuenta nómina</option>
        </select>
        <input
          type="string"
          name="alias"
          value={account.alias}
          onChange={handleFieldChange}
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};
