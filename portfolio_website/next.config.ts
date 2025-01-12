const path = require('path');

module.exports = {
  webpack(config: any, { isServer }: { isServer: boolean }) {
    
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/pdf/',
            outputPath: 'static/pdf/',
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },

};
