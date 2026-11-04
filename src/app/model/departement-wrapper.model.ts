import { Departement } from './departement.model';

export interface DepartementWrapper {
  _embedded: { //embedded c'est un objet qui contient les données de l'API , ici c'est un objet qui contient la liste des départements
    departements: Departement[];
  };
}
