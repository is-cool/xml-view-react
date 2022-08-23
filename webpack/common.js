const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const path = require('path');

const { NODE_ENV = 'development' } = process.env;

const pathTo = (p) => path.join(process.cwd(), p);
exports.pathTo = pathTo;


exports.loaders = {
  css: {
    test: /\.css$/,
    use: [require.resolve('style-loader'), require.resolve('css-loader')],
    include: [pathTo('src'), pathTo('example')],
  },
  babel: {
    // test: /\.tsx$/,
    test: /\.(js|jsx|ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          babelrc: false,
          presets: [require.resolve('@babel/preset-react'), [require.resolve('@babel/preset-env'), { modules: false }]],
          plugins: [
            require.resolve('@babel/plugin-proposal-object-rest-spread'),
            require.resolve('@babel/plugin-proposal-class-properties'),
          ],
        },
      },
      // require.resolve('ts-loader'),
    ],
    // loader: require.resolve("babel-loader"),
    include: [pathTo('src'), pathTo('example')],
  },
};

exports.plugins = {
  html: new HtmlWebpackPlugin(),
  include: (tags) => new HtmlWebpackTagsPlugin({ tags, append: false }),
  loaderOptions: new webpack.LoaderOptionsPlugin({ minimize: true }),
  
};

exports.mode = NODE_ENV;
