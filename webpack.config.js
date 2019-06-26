//entry -> output

const path = require('path');

module.exports = (env) => {
    const isProduction = env === 'production';

    return {
        entry: './src/app.js', //where it should start
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js' //the babellified file
        },
        module: { //rule on how you want to use loader
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/, //check if file getting loaded ends w/ js
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [ //array of loaders
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }]
        },
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    };
}

//loader