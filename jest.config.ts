export default {
  roots: ['<rootDir>/src'],
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@repositories/(.*)$': '<rootDir>/src/domain/repositories/$1',
    '^@interfaces/(.*)$': '<rootDir>/src/domain/interfaces/$1',
    '^@helpers/(.*)$': '<rootDir>/src/domain/helpers/$1',
    '^@errors/(.*)$': '<rootDir>/src/domain/errors/$1',
    '^@schemas/(.*)$': '<rootDir>/src/domain/schemas/$1',
    '^@utils/(.*)$': '<rootDir>/src/domain/utils/$1',
    '^@log/(.*)$': '<rootDir>/src/domain/log/$1',
    '^@providers/(.*)$': '<rootDir>/src/domain/providers/$1',
    '^@entities/(.*)$': '<rootDir>/src/entities/$1',
  },
};
