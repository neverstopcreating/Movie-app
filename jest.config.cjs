module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/src/__mocks__/styleMock.js",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
};
