import { ArrayClone } from ".";

const baseArray = [1, 2, 3];
let arrayClone = new ArrayClone(baseArray);

describe("Array Clone", () => {
  it("should the correct length", () => {
    expect(arrayClone.length).toBe(baseArray.length);
  });

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
