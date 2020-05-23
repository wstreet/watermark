const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: 'none',
    entry: {
        'watermark': './src/index.js',
        'watermark.min': './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/lib',
        library: "WaterMark",
        libraryExport: 'default',
        libraryTarget: 'umd' // umd格式
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/ // 只有匹配到.min.js结尾的文件才会压缩
            })
        ]
    }
}