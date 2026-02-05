import React from "react";
import { AppLayout } from "@/layouts";
import { MovementVm } from "./movement-list.vm";
import { MovementListTableComponent } from "./components";
import classes from "./movement-list.page.module.css";
import { getAccountByAccountId, getMovements } from "./api/movement-list.api";
import { mapMovementListFromApiToVm } from "./movement-list-mapper";
import { useParams } from "react-router-dom";

export const MovementListPage: React.FC = () => {
  const { id: accountId } = useParams<{ id: string }>();
  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);

  React.useEffect(() => {
    console.log(accountId)
    if (!accountId) return

    getMovements(accountId).then((result) => {
      setMovementList(mapMovementListFromApiToVm(result)),
      console.log(result)
    });

    getAccountByAccountId(accountId).then((result) => {
      console.log(result)
    })
  }, []);
  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Mis Movimientos</h1>
        </div>
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
