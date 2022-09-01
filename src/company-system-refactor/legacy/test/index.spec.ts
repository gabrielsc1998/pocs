import { CompanySystem } from "..";

describe("Company System", () => {
  it("should return the totals", () => {
    const companySystem = new CompanySystem();
    console.log(companySystem.getTotal());
  });
});
