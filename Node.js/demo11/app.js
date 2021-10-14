// let app = () => {
//   console.log("app方法");
// };

// app.get = () => {
//   console.log("get方法");
// };

// app.post = () => {
//   console.log("post方法");
// };

// // app.post();
// app();

var G = {};

let app = () => {
  //   console.log("app方法");
  if (G["/login"]) {
    G["/login"]();
  }
};

app.get = (str, cb) => {
  //console.log("get方法");

  //注册方法
  G[str] = cb;
};

app.get("/login", (req, res) => {
  //   res.send("hello world");
  console.log("login 方法");
});

setTimeout(() => {
  app();
}, 1000);
