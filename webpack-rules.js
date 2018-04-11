exports.default = [
  { // Enables babel conversions for js code.
    test: /\.(js|jsx)$/,
    exclude: '/node_modules/',
    use:
    {
      loader: 'babel-loader',
      options:
      {
        presets: [['env',
          {
            targets:
            {
              browsers: ['ie >= 11'],
            },
          }],
        'stage-1', 'react'],
        plugins: ['transform-object-assign'],
      },
    },
  },
  { // Enables import './style.css' into the file that depends on that styling.
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader',
    ],
  },
  { // Enables import './image.svg' into the file that needs it.
    test: /\.svg$/,
    loader: 'url-loader?mimetype=image/svg+xml',
  },
  { // Enables import './image.npg' into the file that needs it.
    test: /\.png$/,
    use: [
      'url-loader?mimetype=image/png&limit=10000',
      'img-loader',
    ],
  },
  { // Enables sass usage in the project.
    test: /\.scss$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader',
    }, {
      loader: 'sass-loader',
    }],
  },
  { // Enables fonts usage in the project.
    test: /\.woff$/,
    loader: 'url-loader',
    options: {
      limit: 50000,
      mimetype: 'application/font-woff',
    },
  },
];

module.exports = exports.default;
