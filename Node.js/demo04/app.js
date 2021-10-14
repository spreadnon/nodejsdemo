

//安装第三方包

var md5 = require('md5')
console.log( md5('123456'))


var sd = require('silly-datetime');
console.log(sd.format(new Date(), 'YYYY-MM-DD HH:mm'));
// 2015-07-06 15:10
console.log(sd.fromNow(+new Date() - 2000));