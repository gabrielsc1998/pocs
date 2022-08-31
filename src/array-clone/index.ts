import { ArrayCloneInterface } from "./contracts";

export class ArrayClone implements ArrayCloneInterface {
  private data: Array<unknown> = [];
  length = 0;

  constructor(data: Array<unknown>) {
    this.data = data;
    this.length = this.data.length;
  }

  findIndex(callback: (value?: unknown, index?: number) => unknown): number {
    const NOT_FOUND_INDEX = -1;

    let foundIndex = NOT_FOUND_INDEX;

    for (let index = 0; index < this.length; index++) {
      const condition = callback(this.data[index], index);
      if (condition) {
        foundIndex = index;
        index = this.length;
      }
    }

    return foundIndex;
  }

  find(callback: (value?: unknown, index?: number) => unknown): unknown {
    let foundValue = undefined;
    for (let index = 0; index < this.length; index++) {
      const currentValue = this.data[index];
      const condition = callback(currentValue, index);
      if (condition) {
        index = this.length;
        foundValue = currentValue;
      }
    }
    return foundValue;
  }

  forEach(callback: (value?: unknown, index?: number) => unknown): void {
    for (let index = 0; index < this.length; index++) {
      callback(this.data[index], index);
    }
  }

  some(callback: (value?: unknown, index?: number) => unknown): boolean {
    for (let index = 0; index < this.length; index++) {
      const condition = callback(this.data[index], index);
      if (condition) {
        return true;
      }
    }
    return false;
  }

  map(callback: (value?: unknown, index?: number) => unknown): Array<unknown> {
    const newArray = [];
    for (let index = 0; index < this.length; index++) {
      const newValue = callback(this.data[index], index);
      newArray.push(newValue);
    }
    return newArray;
  }

  reduce(
    callback: (acc?: number, value?: unknown, index?: number) => number,
    initialValue?: number
  ): number {
    let acc = initialValue || 0;
    for (let index = 0; index < this.length; index++) {
      acc = callback(acc, this.data[index], index);
    }
    return acc;
  }
}
