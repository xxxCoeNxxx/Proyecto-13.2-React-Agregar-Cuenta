export type AccountType = "corriente" | "ahorro" | "nomina";

export interface CreateAccountVm {
  type: AccountType;
  alias: string;
}

export const createEmptyAccount = (): CreateAccountVm => ({
  alias: "",
  type: "corriente",
});
