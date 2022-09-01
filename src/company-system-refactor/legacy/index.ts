import { CompanySystemRepository } from "./repository";

export class CompanySystem {
  getTotal(): any {
    const repository = new CompanySystemRepository();
    const workers = repository.getAllWokers();

    let totalHR = 0;
    let totalFinancial = 0;
    let totalIT = 0;
    let totalDev = 0;
    let totalManagement = 0;

    workers.forEach((worker: any) => {
      if (worker.department === 0) {
        totalHR += 1;
      }

      if (worker.department === 1) {
        totalFinancial += 1;
      }

      if (worker.department === 2) {
        totalIT += 1;
      }

      if (worker.department === 3) {
        totalDev += 1;
      }

      if (worker.department === 4) {
        totalManagement += 1;
      }
    });

    return {
      totalHR,
      totalFinancial,
      totalIT,
      totalDev,
      totalManagement,
    };
  }
}
