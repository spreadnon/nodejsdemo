/**
 * 1.安装 npm install ejs --save
 * 2.配置模版引擎 app.set('view engine' ,'ejs')
 * 3.使用 (默认加载模版引擎的文件夹是views)
 * res.render('index',{
 *
 *  })
 */

const express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");

//引入 外部模块
var login = require("./routes/login");
var admin = require("./routes/admin");
var api = require("./routes/api");
var index = require("./routes/index");

const app = express();

//配置模版引擎
app.set("view engine", "ejs");
//配置静态web目录
app.use(express.static("static"));
//获取body的参数
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//挂载外部模块 路由
app.use("/login", login);
app.use("/admin", admin);
app.use("/api", api);
app.use("/", index);

app.listen(3000);

// https://www.bilibili.com/video/BV11t411k79h?p=32&spm_id_from=pageDriver
