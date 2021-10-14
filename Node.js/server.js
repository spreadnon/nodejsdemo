const https = require('https')

https.get('https://baidu.com',(res) => {
    // console.log(res)
    let str = ''
    res.on('data',(chunk) => {
        str = chunk
    })

    res.on('end',() =>{
        console.log(res)
    })
})