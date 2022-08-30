module.exports = {
  roots: ["<rootDir>/src/"],
  rootDir: "./",
  modulePaths: ["<rootDir>"],
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
};
