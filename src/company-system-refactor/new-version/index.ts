import { WORKER_TYPES } from "./constants";
import { CompanySystemRepository, GetAllWokersOutput } from "./repository";

interface CompanySystemGetTotalOutput {
  hr: number;
  financial: number;
  it: number;
  dev: number;
  management: number;
}

export class CompanySystem {
  getTotal(): CompanySystemGetTotalOutput {
    const repository = new CompanySystemRepository();
    const workers = repository.getAllWokers();

    const total: CompanySystemGetTotalOutput = {
      hr: 0,
      financial: 0,
      it: 0,
      dev: 0,
      management: 0,
    };

    const workerTypes: Record<WORKER_TYPES, keyof CompanySystemGetTotalOutput> =
      {
        [WORKER_TYPES.HR]: "hr",
        [WORKER_TYPES.FINANCIAL]: "financial",
        [WORKER_TYPES.IT]: "it",
        [WORKER_TYPES.DEV]: "dev",
        [WORKER_TYPES.MANAGEMENT]: "management",
      };

    workers.forEach((worker: GetAllWokersOutput) => {
      const type = workerTypes[worker.department];
      total[type] += 1;
    });

    return total;
  }
}
