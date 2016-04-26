//try catch
try {

} catch(err){
    console.log(err.message)
} finally {

}

//Error
/*
 Error 基类型，其他错误类型都继承自Error类型
 EvalError 使用eval函数异常时抛出，即没有把eval()当成函数就会报错
 RangeError 数值超出相应范围时触发
 ReferenceError 找不到对象或者访问不存在的变量
 SyntaxError 把含有错误语法的字符串传入eval函数
 TypeError 在变量中保存着意外的类型时，或者在访问不存在的方法时
 URIError 在使用encodeURL 或者 decodeURL时，如果url格式不正确

*/

//throw 操作符
//遇到throw操作符时，代码会立即执行。仅当有try catch语句捕获到被抛出的值时，代码才会继续执行。
throw new Error('err msg')

//利用原型链创建自定义错误类型
function CustomError(msg){
  this.name = 'customError'
  this.message = msg
}

CustomError.prototype = new Error()

throw new CustomError('msg...')


//error事件
//任何没有通过try catch 处理的错误都会触发window对象的error事件。
window.onerr = function (message, url, line) {
 //do something...
 return false;//return false 可以阻止浏览器报告错误的默认行为。
}

//通信错误
//将数据发送给服务端时，需要将数据进行encodeRUIComponent编码，

function addQuery(url, key, value) {
 if (url.indexOf('?') == -1) {
  url += "?"
 } else {
  url += "&"
 }
 url += encodeURIComponent(key) + "=" + encodeURIComponent(value)
 return url
}





















