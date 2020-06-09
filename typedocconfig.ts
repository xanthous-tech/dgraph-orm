module.exports = {
  src: ['./src/index.ts'],
  mode: 'file',
  tsconfig: 'tsconfig.json',
  out: './docs',
  readme: 'README.md',
  name: 'dgraph-orm',
  plugin: 'none',
  theme: 'minimal',
  excludePrivate: true,
  excludeExternals: true,
  includeDeclarations: false,
  listInvalidSymbolLinks: true,
  ignoreCompilerErrors: true
};
