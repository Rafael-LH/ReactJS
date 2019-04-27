const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = env => {

    let mode = (env.NODE_ENV === 'production') ? 'production' : 'development';
    let plugins = []
    
    if(mode === 'production'){
        plugins = [
            new MiniCssExtractPlugin({
                filename: 'css/[name].css'
            })
        ]
    }

    return{
        mode: mode,
        entry: {
            index: path.resolve(__dirname, './src/index.js')
        },
        output:{
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        devServer:{
            contentBase: path.join(__dirname, '/'),
            compress: true,
            port: 9000
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
                    test: /\.(jpeg|png|jpg|svg|gif)$/i,
                    use:{
                        loader: 'url-loader',
                    }
                },

                //Sass loader
                {
                    test: /\.scss$/,
                    use:[
                        mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'   
                    ]
                }

            ]
        },
        plugins
    }
}