import * as apiModel from "./api";
import * as viewModel from "./account.vm";

const mapAccountTypeToApi = (type: viewModel.AccountType): apiModel.AccountTypeApi => {
  switch (type) {
    case "corriente":
      return "1";
    case "ahorro":
      return "2";
    case "nomina":
      return "3";
    default:
      throw new Error(`Unknown account type: ${type}`);
  }
};

export const mapAccountToApi = (
  account: viewModel.Account,
): apiModel.AccountApi => ({
  id: "",
  iban: "",
  type: mapAccountTypeToApi(account.type),
  name: account.alias,
  balance: 0,
  lastTransactions: "",
});
