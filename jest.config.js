module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    // .vue文件用 vue3-jest 处理
    '^.+\\.vue$': '@vue/vue3-jest',
    // .js或者.jsx用 babel-jest处理
    '^.+\\.jsx?$': 'babel-jest',
    // .ts、.tsx 文件用 ts-jest 处理
    '^.+\\.tsx?$': 'ts-jest'
  },
  testMatch: ['**/?(*.)+(spec).[jt]s?(x)'],
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  moduleNameMapper: {
    '^/@/(.*)$': '<rootDir>/src/$1'
  }
};
