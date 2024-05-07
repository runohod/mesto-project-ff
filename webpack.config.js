const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // подключили плагин

const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 


module.exports = {
    entry: { main: './src/index.js' },
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
        publicPath: ''
  },
    mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
    open: true
  },
    module: {
        rules: [
            // правила для обработки js, html и других файлов
          
            // добавьте ещё одно правило:
            {
              // применять это правило только к CSS-файлам
              test: /\.css$/,
              // при обработке этих файлов нужно использовать
              // MiniCssExtractPlugin.loader и css-loader
              use: [MiniCssExtractPlugin.loader, {
                loader: 'css-loader'
              }]
            }
          ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin() // подключение плагина для объединения файлов
  ]
};