var path = require('path')
var webpack = require('webpack')

module.exports = {
  cache: true
  , debug: true
  , devtool: 'source-map'
  , entry: {
    app: './resources/public/js/route.jsx'
  }
  , devServer: {
    contentBase: './public'
  }
  , output: {
    path: path.join(__dirname, 'resources/public/js/dist')
    , publicPath: '/js/dist'
    , filename: '[name].js'
    , chunkFilename: '[chunkhash].js'
    , sourceMapFilename: 'debugging/[file].map'
    , hotUpdateChunkFilename: 'hot/[id].[hash].hot-update.js'
    , hotUpdateMainFilename: 'hot/[hash].hot-update.json'
  }
  , module: {
    loaders: [
      {test: /\.js$/, exclude:[/node_modules/, /public\/components/], loader: 'babel-loader?optional=runtime'}
      , {test: /\.jsx$/, exclude:[/node_modules/, /public\/components/], loaders: [ 'react-hot', 'babel-loader?optional=runtime']}
      , {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
    , noParse: /\.min\.js/
  }
  , resolve: {
    modulesDirectories: ['public/components', 'node_modules']
    , extensions: ['', '.js', '.jsx', '.json']
  }
  , plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
