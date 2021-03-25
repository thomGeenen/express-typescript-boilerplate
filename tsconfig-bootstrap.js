const config = require('./tsconfig.json');
const tsconfigPaths = require('tsconfig-paths');

tsconfigPaths.register({
    baseUrl: config.compilerOptions.baseUrl,
    paths: config.compilerOptions.paths
})