const path = require("path")

module.exports = {
    mode: "production",
    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
}