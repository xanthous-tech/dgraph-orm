module.exports = {
  roots: ["<rootDir>/."],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest"
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
};
