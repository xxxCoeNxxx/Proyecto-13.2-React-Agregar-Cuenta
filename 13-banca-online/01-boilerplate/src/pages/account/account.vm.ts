export type AccountType =
  | ""
  | "corriente"
  | "ahorro"
  | "nomina";

export interface Account {
  type: AccountType;
  alias: string;
}

export const createEmptyAccount = (): Account => ({
  type: "",
  alias: "",
});

export interface CreateAccountError {
  type?: string;
  alias?: string;
}
export const createEmptyAccountError = (): CreateAccountError => ({
  type: "",
  alias: "",
});