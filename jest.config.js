module.exports = {
  roots: ["<rootDir>/src"],
  collectCovarageFrom: ["<rootDir>/src/**/*.ts"],
  covarageDirectory: "covarage",
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
}
