var path = require('path');
var common = [
    {
        test: /\.html$/,
        loader: 'raw'
    },
    {
        test: /\.(svg|gif|png|jpe?g|ttf|woff2?|eot)$/,
        loader: 'url-loader?limit=4096&name=./assets/[hash].[ext]'
    },
    {
        test: /\.css$/,
        loaders: [
            'style-loader',
            'css-loader?minimize&modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
            'postcss-loader'
        ]
    }
];

exports.dev = (rootPath) => {
    return [
    {
        test: /\.ts$/,
        loaders: ['ts'],
        exclude: [path.resolve(rootPath, 'node_modules'), /\.spec\.ts$/],
        include: path.join(rootPath, 'src')
    }
].concat(common);
}

exports.test = (rootPath) => {
    return [
    {
        test: /\.ts$/,
        loaders: ['ts'],
        exclude: path.resolve(rootPath, 'node_modules'),
        include: path.join(rootPath, 'src')
    }
].concat(common);
}