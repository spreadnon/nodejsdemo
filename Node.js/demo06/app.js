const fs = require("fs");
var path = "./upload";

fs.stat(path, (err, data) => {
  if (err) {
    //创建目录
    mkdir(path);
    return;
  }
  if (data.isDirectory()) {
    console.log("upload目录存在");
  } else {
    //先删除 再创建目录
    fs.unlink(path, (err) => {
      if (!err) {
        mkdir(path);
        return;
      } else {
        console.log("请检查传入数据是否正确");
      }
    });
  }
});

function mkdir(dir) {
  fs.mkdir(dir, (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
}
