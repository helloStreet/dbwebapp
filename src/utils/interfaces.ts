import { ReactNode } from "react";

export interface iInvoices {
  invoices: iInvoice[];
}
export interface iLayout {
  children: ReactNode;
}

export interface iInvoice {
  id: string;
  company: string;
  amount: number;
  dateCreated: string;
  paid: boolean;
}
