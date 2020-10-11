let path = require('path');
//style-resources-loader
module.exports = {
    productionSourceMap: false,//是否打包sourcemap
    outputDir: './myDist',//设置输出目录
    publicPath:process.env.NODE_ENV == 'production' ? 'http://www.duyiedu.com' : '/',
    assetsDir: 'assets',//设置打包的静态资源路径
    chainWebpack: config => {//webpack设置
        config.resolve.alias.set('_v', path.resolve(__dirname, 'src/views'))//给路径设置别名
    },
    configureWebpack: {//配置webpack
        // plugin:[],
    },
    devServer: {
        proxy: {//代理
            '/api/chat/sendMsg': {
                target: 'https://api.duyiedu.com'
            }
        }
    }
}  