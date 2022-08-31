import { ArrayClone } from ".";

const baseArray = [1, 2, 3];
let arrayClone = new ArrayClone(baseArray);

describe("Array Clone", () => {
  it("should the correct length", () => {
    expect(arrayClone.length).toBe(baseArray.length);
  });

  describe('When call the "findIndex" method', () => {
    it("should get the correct the index", () => {
      const index = 1;
      const foundIndex = arrayClone.findIndex(
        (value) => value === baseArray[index]
      );
      expect(foundIndex).toEqual(index);
    });

    it("should'nt get the index", () => {
      const foundIndex = arrayClone.findIndex((value) => value === 10);
      expect(foundIndex).toEqual(-1);
    });
  });

  describe('When call the "find" method', () => {
    it("should find the value", () => {
      const valueToFind = baseArray[0];
      const output = arrayClone.find((value) => value === valueToFind);
      expect(output).toEqual(valueToFind);
    });

    it("should'nt find the value", () => {
      const output = arrayClone.find((value) => value === 1500);
      expect(output).toBeUndefined();
    });
  });

  describe('When call the "forEach" method', () => {
    it("should sum the values", () => {
      const sumValues = baseArray[0] + baseArray[1] + baseArray[2];
      let sumValuesForEach = 0;
      arrayClone.forEach((value) => (sumValuesForEach += Number(value)));
      expect(sumValuesForEach).toEqual(sumValues);
    });
  });

  describe('When call the "some" method', () => {
    it("should return true when found the value", () => {
      const output = arrayClone.some((value) => value === baseArray[0]);
      expect(output).toBe(true);
    });

    it("should return false when not found the value", () => {
      const output = arrayClone.some((value) => value === 1500);
      expect(output).toBe(false);
    });
  });

  describe('When call the "map" method', () => {
    it("should return new array with objects", () => {
      const output = arrayClone.map((value) => ({
        value,
      }));
      expect(output).toMatchObject([
        { value: baseArray[0] },
        { value: baseArray[1] },
        { value: baseArray[2] },
      ]);
    });

    it("should return new array equal base", () => {
      const output = arrayClone.map((value) => value);
      expect(output).toMatchObject(baseArray);
    });
  });

  describe('When call the "reduce" method', () => {
    it("should sum the values", () => {
      const sumValues = baseArray[0] + baseArray[1] + baseArray[2];
      const sumValuesReduce = arrayClone.reduce(
        (acc, value) => acc + Number(value)
      );
      expect(sumValuesReduce).toEqual(sumValues);
    });
  });
});
