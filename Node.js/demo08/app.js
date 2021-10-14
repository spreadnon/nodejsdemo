const fs = require('fs')

//读取
// var readStream = fs.createReadStream('./input.txt')

// var count = 0
// var str = ''

// readStream.on('data',(data)=>{
//     str += data
//     count ++
// })

// readStream.on('end',()=>{
//    console.log(str)
//    console.log(count)
// })

// readStream.on('error',(error)=>{
//     console.log(error)
// })


//写入
// var str = ''
// for(var i = 0;i<1000;i++){
//     str += '东北限电原因曝光 考验还在后面 444\n'
// }

// var writeStream = fs.createWriteStream('./output.txt')
// writeStream.write(str)

// //标记写入完成
// writeStream.end()

// writeStream.on('finish',()=>{
//     console.log('写入完成')
// })


//管道流-主要是复制文件
var readStream = fs.createReadStream('./aaa.jpg')
var writeStream = fs.createWriteStream('./data/bbb.jpg')
readStream.pipe(writeStream)