//文件名 默认叫webpack.config.js ，就是一个配置文件
let path = require('path');
//可以将文件名 转化成当前路径下的绝对路径地址
console.log(path.resolve('dist'));
module.exports = {
    //打包 将内容 合并后打出一个文件
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',//打包出的文件名
        path:path.resolve('dist')//必须是一个绝对路径
    },
    //我们需要编译es6语法 ，babel
    module:{ //可以存放规则
        rules:[
            //需要告诉loader 翻译成什么样的类型，需要在当前根目录下建立一个文件，配上预设才可以 .babelrc
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
        ]
    }
};
//安装webpack 一般不采用-g安装 ，可能每个人的版本不同导致一些问题
//本地安装 项目依赖 开发依赖
// 1.先要初始化package.json
// 2.npm install webpack --save-dev
// 3.配置scripts 脚本
// 4.需要解析es6 babel-core babel-loader 不同的loader处理不同的文件
// npm install babel-core babel-loader --save-dev
// 5.第一个预设 转化es6
// npm install babel-preset-es2015 --save-dev