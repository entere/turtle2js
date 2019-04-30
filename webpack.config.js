const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    //__dirname是nodejs里的一个全局变量，它指向的是我们项目的根目录
    //入口文件的位置
    entry: {
        turtle:['./libs/skulpt.min.js','./libs/skulpt-stdlib.js'],//这两个文件把trutle转成js from: https://github.com/skulpt/skulpt
        main: './main.js',
    },
    mode: 'production',
    // devtool: 'source-map',
    output: {
        pathinfo: true,
        //打包后的文件名称
        filename: '[name].bundle.js',
        //打包后的文件存放位置
        path: path.resolve(__dirname, 'dist'),
        //`path.resolve()` 方法会把一个路径或路径片段的序列解析为一个绝对路径。
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader',
                query: {
                    presets: [['env', {
                        'targets': { 'browsers': ['last 2 versions', 'ie >= 10'] }
                    }]],

                }
            },
            {
                //用正则表达式匹配要用该Loader转换的文件
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            minimize:true,//高速Loader要开启Css压缩
                        }
                    }
                ],
            },
            {
                //用正则表达式匹配要用该Loader转换的文件
                test: /\.json$/,
                use: ['json-loader'],
            }
        ]
    },
    plugins: [


        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            /*当指定了chunks属性，webpack会按照这个属性定义的数组，
            将数组中所有片段完成打包，并用script标签将打包的js插入到生成的页面中，
            没有在数组中的片段，则不插入页面,数组定义为”entry“定义的数组名称！*/
            chunks:['turtle','main'],
            filename:'index.html',//生成的文件名称
            template:'src/Assets/Tpl/index-tpl.html', //html模板路径
            title:'turtle to js',
            hash: true,       // true | false。如果是true，会给所有包含的script和css添加一个唯一的webpack编译hash值。这对于缓存清除非常有用。
            inject: 'body',     // | 'head' | 'body' | false  ,注入所有的资源到特定的 template 或者 templateContent 中，如果设置为 true 或者 body，所有的 javascript 资源将被放置到 body 元素的底部，'head' 将放置到 head 元素中。

        })
    ],
    devServer:{
        contentBase:'./dist',//本地服务器加载的页面所在的目录
        inline:true,//设置实时刷新
    }
};