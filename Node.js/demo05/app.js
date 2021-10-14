/**
 * 1.   fs.stat 检测时文件还是目录
 * 2.   fs.mkdir 创建目录
 * 3.   fs.writeFile 创建写入文件
 * 4.   fs.appendFile 追加文件
 * 5.   fs.readFile 读取文件
 * 6.   fs.readdir 读取目录
 * 7.   fs.rename 重命名
 * 8.   fs.rmdir 删除目录
 * 9.   fs.unlink 删除文件
 * */

const fs = require('fs')

// fs.stat('./html',(err,data)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(`是文件:${data.isFile()}`)
//     console.log(`是目录:${data.isDirectory()}`)
// })


/**
 * path:将创建的目录路径 
 * mode:目录权限（读写权限）默认777
 * callback：回调，传递异常参数err
 * */
// fs.mkdir('./css',(err)=>{
//     if(err){
//         console.log('创建失败')
//         return
//     }
//     console.log('创建成功')
// })



/**
 * 1.filename (string) 文件名称
 * 2.data (string|buffer) 将要写入的内容，可以是字符串或者buffer数据
 * 3.options （objects）数组对象
 *  ` encoding (string) 可选值，默认‘utf-8’,当data是buffer时 该值为 buffer
 *  ` mode  （number）文件读写权限 ，默认值 438
 *  ` flag  （string）默认值 ‘w’
 * 4.callback {function} 回调，传递一个异常参数err
 * 
 */
// fs.writeFile('./html/index.html','你好nodejs',(err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('创建写入文件成功')
// })


// fs.writeFile('./html/index.html','2222',(err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('创建写入文件成功')
// })


// fs.appendFile('./css/base.css','body{color:red}',(err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('appendFile成功')
// })

// fs.appendFile('./css/base.css','h2{color:red}\n',(err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('appendFile成功')
// })


// fs.readFile('./html/index.html',(err,data)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(data)
//     console.log(data.toString())
// })


// fs.readdir('./html',(err,data)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(data[0])
// })


//rename 1.重命名 2.移动文件
// fs.rename('./css/aaa.css','./css/index.css',(err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('重命名成功')
// })

// fs.rename('./css/index.css','./html/index.css',(err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('移动文件成功')
// })


fs.rmdir('./aaa',(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('删除目录成功')
})

// fs.unlink('./aaa/index.html',(err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('删除文件成功')
// })