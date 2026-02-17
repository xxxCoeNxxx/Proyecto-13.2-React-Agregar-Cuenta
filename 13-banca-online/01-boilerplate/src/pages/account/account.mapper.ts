import * as apiModel from "./api";
import * as viewModel from "./account.vm";

const mapAccountTypeFromApiToVm = (type: string): viewModel.AccountType => {
  switch (type) {
    case "corriente":
    case "ahorro":
    case "nomina":
      return type;
    default:
      throw new Error(`Unknown account type: ${type}`);
  }
};
export const mapAccountFromApiToVm = (
  account: apiModel.Account,
): viewModel.CreateAccountVm => ({
  type: mapAccountTypeFromApiToVm(account.type),
  alias: account.alias,
});

/* validar los campos */
