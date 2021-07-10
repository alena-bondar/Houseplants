const path = require('path');

module.exports = {
    mode: 'development',
    entry: [
        __dirname + '/src/style/main.scss',
        __dirname + '/src/script/main.js'
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: 'file-loader',
                    options: { outputPath: '../style/', name: 'main.css'}
                },
                    'sass-loader',
                ]
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, '/public/script'),
        publicPath: "/",
        filename: 'bundle.js'

    },
};