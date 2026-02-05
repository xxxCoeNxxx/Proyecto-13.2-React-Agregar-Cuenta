export interface MovementVm {
  id: string;
  description: string;
  amount: string;
  transaction: Date;
  realTransaction: Date;
  balance: string;
  accountId: string;
}

export const DatosMock = [
  {
    "id": "1",
    "description": "Nómina noviembre",
    "amount": 900,
    "balance": 1490,
    "transaction": "2019-12-09T21:30:00",
    "realTransaction": "2019-12-09T21:30:00",
    "accountId": "1"
  },
  {
    "id": "2",
    "description": "Alquiler noviembre",
    "amount": -400,
    "balance": 590,
    "transaction": "2019-12-07T11:30:00",
    "realTransaction": "2019-12-08T20:00:10",
    "accountId": "1"
  },
  {
    "id": "3",
    "description": "Gastos móvil",
    "amount": -24,
    "balance": 990,
    "transaction": "2019-12-01T07:01:00",
    "realTransaction": "2019-12-02T12:00:10",
    "accountId": "1"
  },
]