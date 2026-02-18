import { AppLayout } from "@/layouts";
import React from "react";
import { CreateAccountFormComponent } from "./components/account-form.component";
import { Account } from "./account.vm";
import { saveAccount } from "./api";
import { mapAccountToApi } from "./account.mapper";
import classes from "./account.page.module.css";

export const AccountPage: React.FC = () => {
  const handleAccount = (newAccount: Account) => {
    const accountToSave = mapAccountToApi(newAccount);

    saveAccount(accountToSave).then((result) => {
      if (result) {
        alert("Cuenta creada con éxito");
      } else {
        alert("Error al crear la cuenta");
      }
    });
  };

  return (
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Cuenta Bancaria</h1>
        <CreateAccountFormComponent handleAccount={handleAccount} />
      </div>
    </AppLayout>
  );
};
