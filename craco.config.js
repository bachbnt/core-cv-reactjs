const CracoAlias = require('craco-alias');

module.exports = {
  eslint: {
    enable: false,
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: 'src',
        aliases: {
          '@components': './components',
          '@core': './core',
          '@hooks': './hooks',
          '@locales': './locales',
          '@models': './models',
          '@pages': './pages',
          '@redux': './redux',
          '@routes': './routes',
          '@services': './services',
          '@themes': './themes',
        },
      },
    },
  ],
};
