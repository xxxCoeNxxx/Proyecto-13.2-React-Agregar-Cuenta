import Axios from "axios";
import { Account, Movement } from "./movement-list.api-model";

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;
const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getMovements = (accountId: string): Promise<Movement[]> =>
  Axios.get<Movement[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data,
  );

export const getAccountByAccountId = (accountId: string): Promise<Account> =>
  Axios.get<Account>(`${url}/${accountId}`).then(({ data }) => data);
