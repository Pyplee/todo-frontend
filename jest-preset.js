module.exports = {
  preset: 'react',
  transform: {
    '^.+\\.css$': 'jest-transform-css',
    '^.+\\.jsx?$': 'babel-jest',
  },
};