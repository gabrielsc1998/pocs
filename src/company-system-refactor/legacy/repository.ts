import { randomUUID as uuidV4 } from "crypto";

export class CompanySystemRepository {
  getAllWokers(): any {
    // Departments: 0 - hr, 1 - financial, 2 - it, 3 - dev, 4 - management
    return [
      { id: uuidV4(), name: "João", department: 0 },
      { id: uuidV4(), name: "Maria", department: 1 },
      { id: uuidV4(), name: "Pedro", department: 3 },
      { id: uuidV4(), name: "Fabio", department: 2 },
      { id: uuidV4(), name: "Paula", department: 4 },
      { id: uuidV4(), name: "Diego", department: 3 },
      { id: uuidV4(), name: "Camila", department: 3 },
      { id: uuidV4(), name: "Wilian", department: 3 },
      { id: uuidV4(), name: "Gabriela", department: 1 },
      { id: uuidV4(), name: "Mariana", department: 1 },
      { id: uuidV4(), name: "Mateus", department: 2 },
      { id: uuidV4(), name: "Ricardo", department: 3 },
      { id: uuidV4(), name: "Joana", department: 3 },
      { id: uuidV4(), name: "Giuliano", department: 0 },
      { id: uuidV4(), name: "Túlio", department: 4 },
      { id: uuidV4(), name: "Monica", department: 3 },
      { id: uuidV4(), name: "Vitor", department: 3 },
      { id: uuidV4(), name: "Pablo", department: 2 },
      { id: uuidV4(), name: "Ellison", department: 3 },
      { id: uuidV4(), name: "Nicole", department: 3 },
      { id: uuidV4(), name: "Otavio", department: 3 },
      { id: uuidV4(), name: "Marina", department: 3 },
      { id: uuidV4(), name: "Bruno", department: 2 },
      { id: uuidV4(), name: "Bruna", department: 2 },
      { id: uuidV4(), name: "Daniele", department: 3 },
      { id: uuidV4(), name: "Vitoria", department: 0 },
    ];
  }
}
