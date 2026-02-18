import Axios from "axios";
import { AccountApi } from "./account.api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const saveAccount = (account: AccountApi): Promise<AccountApi> =>
  Axios.post<AccountApi>(url, account).then(({ data }) => data);
