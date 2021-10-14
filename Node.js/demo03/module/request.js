var obj = {
    get:function(){
        console.log('从服务器获取数据')
    },
    post:function(){
        console.log('提交数据')
    }
}
//暴露方式
//1.
//exports.xxxx = obj

//2.
module.exports = obj