import { AppLayout } from "@/layouts";
import React from "react";
import { CreateAccountFormComponent } from "./components/account-form.component";
import { Account } from "./account.vm";
import { saveAccount } from "./api";
import { mapAccountToApi } from "./account.mapper";

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
      <CreateAccountFormComponent
        handleAccount={handleAccount}
      />
    </AppLayout>
  );
};
