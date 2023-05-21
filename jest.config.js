/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  moduleNameMapper: {
    "^\\(Base\\)/(.*)$": "<rootDir>/src/Base/$1",
  },
  roots: ["src"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testMatch: ["**/src/**/*.spec.ts", "**/src/**/*.spec.tsx"],
  testEnvironment: "jsdom",
};
