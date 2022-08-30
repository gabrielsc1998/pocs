import { ArrayCloneInterface } from "./contracts";

export class ArrayClone implements ArrayCloneInterface {
  private data: Array<unknown> = [];
  length = 0;

  constructor(data: Array<unknown>) {
    this.data = data;
    this.length = this.data.length;
  }

  findIndex(callback: (value: unknown, index?: number) => unknown): number {
    const NOT_FOUND_INDEX = -1;

    let foundIndex = NOT_FOUND_INDEX;

    for (let index = 0; index < this.length; index++) {
      const ret = callback(this.data[index], index);
      if (ret) {
        foundIndex = index;
        index = this.length;
      }
    }

    return foundIndex;
  }
}
