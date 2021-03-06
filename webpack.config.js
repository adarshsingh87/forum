const path = require('path')

const config = [{
  entry: {
    vendor: ['@babel/polyfill', 'react'],
    index: ['./src/components/entrypoints/index.jsx'],
    home: ['./src/components/entrypoints/home.jsx'],
    signUp: ['./src/components/entrypoints/signUp.jsx'],
    threadsblogs: ['./src/components/entrypoints/threadsblogs.jsx'],
    threads: ['./src/components/entrypoints/threads.jsx'],
    create: ['./src/components/entrypoints/create.jsx'],
    blog: ['./src/components/entrypoints/blog.jsx'],
    user: ['./src/components/entrypoints/user.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'src', 'public', 'js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          } 
        },
        exclude: [/node_modules/, /public/]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.wasm', '.mjs', '*']
  }
}]

module.exports = config
