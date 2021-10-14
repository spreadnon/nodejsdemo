const { rejects } = require("assert");
const fs = require("fs");
var path = "./wwwroot";
var dirArr = [];

// fs.readdir(path,(err,data)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(data)

//     for(var i = 0; i<data.length; i++){
//         fs.stat(path+'/'+data[i], (err,stats)=>{
//             if(stats.isDirectory()){
//                 dirArr.push(data[i])
//             }
//         })
//     }
//     console.log(dirArr)
// })

// console.log(dirArr)

//打印出3个3
// for(var i = 0;i<3;i++){
//     setTimeout(function(){
//         console.log(i)
//     },100)
// }

// fs.readdir(path,(err,data)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(data)

//     //匿名函数
//     function getDir(i){
//         if(i==data.length){
//             console.log(dirArr)
//             return
//         }
//         fs.stat(path+'/'+data[i], (err,stats)=>{
//             if(stats.isDirectory()){
//                 dirArr.push(data[i])
//             }
//             getDir(i+1)
//         })
//     }(0)
// })

// function getData(resolve,reject){
//     setTimeout(function(){
//         var name = '章三'
//         resolve(name)
//     },1000)
// }

// var p = new Promise(getData)

// p.then(function(data){
//     console.log(data)
// })

//Promise
async function test() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      var name = "张三";
      resolve(name);
    }, 1000);
  });
}
async function main() {
  var data = await test();
  console.log(data);
}
main();
