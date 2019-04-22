const path = require('path')


module.exports = {
        mode: 'development',
        entry: {
            index: path.resolve(__dirname, './src/entries/index.js')
        },
        output:{
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },

        module:{
            rules:[

                // JS / JSX Loader
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules)/,
                    use:{
                        loader: 'babel-loader',
                        options:{
                            presets: ['@babel/preset-env','@babel/preset-react'],
                            plugins: ['@babel/plugin-proposal-class-properties']
                        }
                    }
                },

                // URL loader
                {
                    test: /\.(jpeg|png|jpg|svg|gif)$/,
                    use:{
                        loader: 'url-loader'
                    }
                }

            ]
        }
}