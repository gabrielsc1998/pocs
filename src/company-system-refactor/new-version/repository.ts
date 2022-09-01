import { randomUUID as uuidV4 } from "crypto";

import { WORKER_TYPES } from "./constants";

export interface GetAllWokersOutput {
  id: string;
  name: string;
  department: WORKER_TYPES;
}

export class CompanySystemRepository {
  public getAllWokers(): Array<GetAllWokersOutput> {
    return [
      { id: this.idGenerate(), name: "João", department: WORKER_TYPES.HR },
      {
        id: this.idGenerate(),
        name: "Maria",
        department: WORKER_TYPES.FINANCIAL,
      },
      { id: this.idGenerate(), name: "Pedro", department: WORKER_TYPES.DEV },
      { id: this.idGenerate(), name: "Fabio", department: WORKER_TYPES.IT },
      {
        id: this.idGenerate(),
        name: "Paula",
        department: WORKER_TYPES.MANAGEMENT,
      },
      { id: this.idGenerate(), name: "Diego", department: WORKER_TYPES.DEV },
      { id: this.idGenerate(), name: "Camila", department: WORKER_TYPES.DEV },
      { id: this.idGenerate(), name: "Wilian", department: WORKER_TYPES.DEV },
      {
        id: this.idGenerate(),
        name: "Gabriela",
        department: WORKER_TYPES.FINANCIAL,
      },
      {
        id: this.idGenerate(),
        name: "Mariana",
        department: WORKER_TYPES.FINANCIAL,
      },
      { id: this.idGenerate(), name: "Mateus", department: WORKER_TYPES.IT },
      { id: this.idGenerate(), name: "Ricardo", department: WORKER_TYPES.DEV },
      { id: this.idGenerate(), name: "Joana", department: WORKER_TYPES.DEV },
      { id: this.idGenerate(), name: "Giuliano", department: WORKER_TYPES.HR },
      {
        id: this.idGenerate(),
        name: "Túlio",
        department: WORKER_TYPES.MANAGEMENT,
      },
      { id: this.idGenerate(), name: "Monica", department: WORKER_TYPES.DEV },
      { id: this.idGenerate(), name: "Vitor", department: WORKER_TYPES.DEV },
      { id: this.idGenerate(), name: "Pablo", department: WORKER_TYPES.IT },
      { id: this.idGenerate(), name: "Ellison", department: WORKER_TYPES.DEV },
      { id: this.idGenerate(), name: "Nicole", department: WORKER_TYPES.DEV },
      { id: this.idGenerate(), name: "Otavio", department: WORKER_TYPES.DEV },
      { id: this.idGenerate(), name: "Marina", department: WORKER_TYPES.DEV },
      { id: this.idGenerate(), name: "Bruno", department: WORKER_TYPES.IT },
      { id: this.idGenerate(), name: "Bruna", department: WORKER_TYPES.IT },
      { id: this.idGenerate(), name: "Daniele", department: WORKER_TYPES.DEV },
      { id: this.idGenerate(), name: "Vitoria", department: WORKER_TYPES.HR },
    ];
  }

  private idGenerate(): string {
    return uuidV4();
  }
}
