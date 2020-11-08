import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'index.js',
  moduleName: "d3",
  output: {
    file: 'bundle.js',
    format: 'umd',
    name: 'd3',
  },
  plugins: [nodeResolve()],
};
