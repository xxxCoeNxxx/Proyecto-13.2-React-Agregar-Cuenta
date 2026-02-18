
export type AccountTypeApi = "1" | "2" | "3";

export interface ExpectedAccountModel {
  type: AccountTypeApi;
  name: string;
}

export interface AccountApi {
  id: string;
  iban: string;
  type: AccountTypeApi;
  name: string;
  balance: number;
  lastTransactions: string;
}