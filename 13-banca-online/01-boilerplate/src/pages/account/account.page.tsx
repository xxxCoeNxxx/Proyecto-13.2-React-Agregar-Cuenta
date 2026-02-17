import { AppLayout } from "@/layouts";
import React from "react";
import { CreateAccountFormComponent } from "./components/account.component";
import { CreateAccountVm } from "./account.vm";

export const AccountPage: React.FC = () => {
 
const handleAccount = (account: CreateAccountVm) => {
  console.log(account)
}

  return (
    <AppLayout>
      <CreateAccountFormComponent handleAccount={handleAccount}/>
      <div>Create or edit Account</div>
    </AppLayout>
  );
};