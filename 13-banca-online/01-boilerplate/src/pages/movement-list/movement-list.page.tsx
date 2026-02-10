import React from "react";
import { AppLayout } from "@/layouts";
import { MovementVm } from "./movement-list.vm";
import { MovementListTableComponent } from "./components";
import classes from "./movement-list.page.module.css";
import { getAccountByAccountId, getMovements } from "./api/movement-list.api";
import { mapMovementListFromApiToVm } from "./movement-list-mapper";
import { useParams } from "react-router-dom";
import { AccountVm } from "../account-list/account-list.vm";
import { mapAccountFromApiToVm } from "../account-list/account-list.mapper";

export const MovementListPage: React.FC = () => {
  const { id: accountId } = useParams<{ id: string }>();
  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);
  const [account, setAccount] = React.useState<AccountVm | null>(null);

  React.useEffect(() => {
    if (!accountId) return;

    getMovements(accountId).then((result) => {
      setMovementList(mapMovementListFromApiToVm(result));
    });

    getAccountByAccountId(accountId).then((result) => {
      setAccount(mapAccountFromApiToVm(result));
    });
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos Movimientos</h1>
          <div className={classes.balanceInfo}>
            <h2>SALDO DISPONIBLE</h2>
            <p>{account?.balance} €</p>
          </div>
        </div>
        <div className={classes.accountInfo}>
          <h2 className={classes.alias}>Alias: {account?.name}</h2>
          <h2 className={classes.iban}>IBAN: {account?.iban}</h2>
        </div>
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
