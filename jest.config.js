module.exports = {
  preset: 'react-native',
  modulePathIgnorePatterns: [
    '<rootDir>/example/node_modules',
    '<rootDir>/dist/',
  ],
  setupFilesAfterEnv: ['./jest.setup.ts'],
};
