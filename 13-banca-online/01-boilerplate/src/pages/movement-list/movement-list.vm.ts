export interface MovementVm {
  id: string;
  description: string;
  amount: string;
  transaction: Date;
  realTransaction: Date;
  balance: string;
  accountId: string;
}