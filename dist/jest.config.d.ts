declare const _default: {
    roots: string[];
    collectCoverage: boolean;
    collectCoverageFrom: string[];
    coverageDirectory: string;
    coverageProvider: string;
    transform: {
        '.+\\.ts$': string;
    };
    moduleNameMapper: {
        '^@domain/(.*)$': string;
        '^@repositories/(.*)$': string;
        '^@interfaces/(.*)$': string;
        '^@helpers/(.*)$': string;
        '^@errors/(.*)$': string;
        '^@schemas/(.*)$': string;
        '^@utils/(.*)$': string;
    };
};
export default _default;
