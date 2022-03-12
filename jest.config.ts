export default {
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@domain/(.*)$': '<rootDir>/src/$1',
    '^@repositories/(.*)$': '<rootDir>/src/domain/repositories/$1',
    '^@interfaces/(.*)$': '<rootDir>/src/domain/interfaces/$1',
    '^@helpers/(.*)$': '<rootDir>/src/domain/helpers/$1', 
    '^@controllers/(.*)$': '<rootDir>/src/domain/controllers/$1',   
    '^@errors/(.*)$': '<rootDir>/src/domain/errors/$1', 
  }

};
