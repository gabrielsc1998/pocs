export interface ArrayCloneInterface {
  findIndex: (callback: Callback) => number;
  find: (callback: Callback) => unknown;
  forEach: (callback: Callback) => void;
  some: (callback: Callback) => boolean;
  map: (callback: Callback) => Array<unknown>;
  reduce: (
    callback: (acc?: number, value?: unknown, index?: number) => number,
    initialValue?: number
  ) => number;
}

type Callback = (value?: unknown, index?: number) => unknown;
