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
const app = express();

//引入login.js
var login = require("./routes/login");

//配置模版引擎
app.set("view engine", "ejs");

//配置静态web目录
app.use(express.static("static"));

//获取body的参数
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//cookie
app.use(cookieParser());
//session
app.use(
  session({
    secret: "this is session", //服务器端生成session的签名
    resave: false, //强制保存session 即使它没有变化
    saveUninitialized: true, //强制将未初始化的session 存储
    cookie: {
      //配置cookie的信息
      maxAge: 1000 * 60,
      secure: false, //true 表示只有https才能访问 cookie
    },
    rolling: true, //在每次请求时强行设置cookie，这将重置cookie 过期时间（默认：false）
  })
);

//应用级中间件
app.use((req, res, next) => {
  console.log(new Date());
  next();
});

app.get("/", function (req, res) {
  //设置cookie
  //多个域名共享cookie     aaa.baidu.com / bbb.baidu.com (只能在二级域名) domain:'.baidu.com'
  res.cookie("username", "zhangsan-cookie", { maxAge: 1000 * 60 * 60 });

  if (req.session.username) {
    res.send(req.session.username + "已经登录");
  } else {
    res.send("没有登录");
  }
  // var title = "你好ejs";
  // res.render("index", {
  //   title: title,
  // });
});

//挂载login模块
app.use("/login", login);

app.get("/tologin", function (req, res) {
  //设置session
  req.session.username = "章三";
  res.send("登录");
});

app.get("/tologin", function (req, res) {
  //设置session
  req.session.username = "章三";
  res.send("登录");
});

app.get("/logout", function (req, res) {
  //1.设置session的过期时间为0 (把所有的session都销毁)
  req.session.cookie.maxAge = 0;
  //2.销毁制定session
  req.session.username = "";
  //3.销毁所有的session destroy
  req.session.destroy();
  res.send("退出登录");
});

//获取post的参数
app.post("/login", function (req, res) {
  var body = req.body;
  console.log(body);
  res.send("提交成功:::" + body.username);
});

app.get("/news", function (req, res) {
  //获取cookie
  let username = req.cookies.username;
  var userinfo = {
    username: username,
    age: 20,
  };

  let article = "<h3>我是一个h3</h3>";

  let list = ["111", "222", "333"];

  let newsList = [
    {
      title: "新闻111",
    },
    {
      title: "新闻222",
    },
    {
      title: "新闻333",
    },
    {
      title: "新闻444",
    },
  ];
  res.render("news", {
    userinfo: userinfo,
    article: article,
    flag: true,
    score: 50,
    list: list,
    newsList: newsList,
  });
});

//错误处理中间件
app.use((req, res, next) => {
  res.status(404).send("404");
});

app.listen(3000);

// https://www.bilibili.com/video/BV11t411k79h?p=32&spm_id_from=pageDriver
