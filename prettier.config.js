module.exports = {
  $schema: 'http://json.schemastore.org/prettierrc',
  bracketSameLine: true,
  bracketSpacing: true,
  endOfLine: 'lf',
  overrides: [
    {
      files: ['*.html', '*.gotmpl', '*.tmpl.*'],
      options: {
        parser: 'go-template',
        bracketSameLine: true,
      },
    },
  ],
  plugins: ['prettier-plugin-toml', 'prettier-plugin-go-template'],
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
};
