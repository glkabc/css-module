import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import htmlWebpackPlugin from 'html-webpack-plugin'
import { resolve } from 'path'

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration  = {
  entry: resolve(__dirname, './src/index.tsx'),
  mode: 'development',
  // devtool: 'inline-source-map',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name][hash:8].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                noEmit: false,
              },
            },
          },
        ]
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // modules: {
              //   localIdentName: '[path][name]__[local]--[hash:base64:5]'
              // },
            }
          },
        ]
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // modules: {
              //   localIdentName: '[path][name]-[local]-[hash:base64:8]'
              // },
            }
          },
          'sass-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  },
  resolve: {
    extensions: [".tsx",".ts", ".js", "jsx"]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: resolve(__dirname, './public/index.html'),
      title: '测试页面',
    })
  ],
  devServer: {
    port: 3333,
    hot: true
  },
}

export default config