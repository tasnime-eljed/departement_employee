import { Departement } from "./departement.model";
export interface Employee {
  idEmployee?: number;
  nomComplet?: string;
  salaire?: number;
  dateEmbauche?: Date;
  departement?: Departement;
}
