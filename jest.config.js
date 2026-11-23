/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    testEnvironment: "node",
    // Bun-runtime tests live here and must not be run by jest.
    testPathIgnorePatterns: ["/node_modules/", "/tests/bun/"],
    transform: {
        // Also transpile ESM-only deps (e.g. @faker-js/faker >= 10) to CJS.
        "^.+\\.[tj]s$": [
            "ts-jest",
            { tsconfig: "tests/tsconfig.json", diagnostics: false },
        ],
    },
    transformIgnorePatterns: ["/node_modules/(?!@faker-js/faker/)"],
};
