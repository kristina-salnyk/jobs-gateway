const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env.local files in your test environment
  dir: './',
})

const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@md-app/(.*)$': '<rootDir>/app/$1',
    '^@md-shared/(.*)$': '<rootDir>/app/shared/$1',
    '^@md-styles/(.*)$': '<rootDir>/app/shared/styles/$1',
    '^@md-utils/(.*)$': '<rootDir>/app/shared/utils/$1',
    '^@md-constants/(.*)$': '<rootDir>/app/shared/constants/$1',
    '^@md-types/(.*)$': '<rootDir>/app/shared/types/$1',
    '^@md-store/(.*)$': '<rootDir>/app/store/$1',
    '^@md-components/(.*)$': '<rootDir>/app/shared/components/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
}

module.exports = createJestConfig(config)
