module.exports = {
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './',
      publicPath: '/dist/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        { 
          test: /\.scss$/,
          use: [ 
            'style-loader',
            'css-loader', 
            'sass-loader'
          ],
        },
        {
          test: /\.css$/,
          use: [ 
            'style-loader',
            'css-loader'
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          use: {
            loader: 'url-loader?limit=100000',
          },
        },
        {
          test: /\.(png|jpg)$/,
          use: {
            loader: 'url-loader',
          }
        }, 
        {
          test: /\.svg$/,
          use: [
            {
              loader: "babel-loader"
            },
            {
              loader: "react-svg-loader",
              options: {
                jsx: true // true outputs JSX tags
              }
            }
          ]
        }
      ]
    },
  };