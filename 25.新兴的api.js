
// requestAnimationFrame
// why requestAnimationFrame rather than css3？
/*
1.js的向下兼容：如pc上ie89的淡入淡出
2.css3动画不能应用所有属性，比如scrollTop
3.css3支持的动画效果有限，贝塞尔曲线是一个标准3次方曲线，做不到back，bounce等缓动效果。
*/

var i = 100
function draw(){
    i--
    console.log(2)
    if(i>0){
        requestAnimationFrame(draw)
    }
}
requestAnimationFrame(draw)

/*
 mozRequestAnimationFrame()  解决了浏览器不知道js动画什么时候开始，不知道最佳循环间隔时间的问题，
 传入函数会接受一个参数，他是一个毫秒数，表示下一次重绘的实际发生时间。
 mozRequestAnimationStartTime表示上一次重绘的时间码。
 回调函数的时间码减去mozRequestAnimationStartTime就能计算出屏幕上下一次重绘需要经过多长时间
*/

/*
 webkitRequestAnimationFrame() 和 msRequestAnimationFrame() 的实现与 mozRequestAnimationFrame() 有些差异
 前者不会给回调函数传递时间码，Chrome 增加了第二个可选参数，即将要发生变化的DOM元素。将重绘限定在该区域中。
 Chrome还提供了 webkitCancelRequestAnimationFrame() 用于取消计划执行的重绘操作。
*/

(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // name has changed in Webkit
            window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}());


var start = null;
var element = document.getElementById("SomeElementYouWantToAnimate");
element.style.position = 'absolute';

function step(timestamp) {
    console.log('start')
    console.log("start",start)
    console.log("timestamp",timestamp)
    console.log('end----------')
    if (!start) start = timestamp;//这个start永远不会变的
    var progress = timestamp - start;
    element.style.left = Math.min(progress/10, 200) + "px";
    if (progress < 2000) {
        window.requestAnimationFrame(step);
    }
}

window.requestAnimationFrame(step);


//Page Visibility API 页面可见性API
/*
由下面三部分组成：
1.document.hidden: 表示页面是否隐藏的布尔值。
2.document.vidibilityState: 表示四个可能状态的值：
    页面在后台标签页中或者浏览器最小化；
    页面在前台标签页中；
    实际页面已经隐藏，但用户可以看到页面的预览；
    页面在屏幕外执行预渲染处理。
3.visibilitychange事件：当文档从可见变为不可见或从不可见变为可见时触发该事件。注意加前缀‘ms’或者‘webkit’
*/

//检查浏览器是否支持这个API：
function isHiddenSupport(){
    return typeof (document.hidden || document.msHidden || document.webKitHidden) != 'undefined'
}

//检测页面是否隐藏
if (document.hidden || document.msHidden || document.webKitHidden){
    //页面隐藏了
} else {

}

//Geolocation API 地理定位
/*
navigator.geolocation对象，包含三个方法：
1. navigator.geolocation.getCurrentPosition() 会触发请求用户共享地理定位信息的对话框
接受三个参数：
    1 成功回调函数、接受一个Position对象，该对象有coords和timestamp两个属性。
        其中，coords对象包含一些与位置相关的属性：latitude，longitude，accuracy
    2 可选的失败回调函数、接受一个对象，包含code和message两个属性，
        code表示错误类型：1-用户拒绝共享；2-位置无效；3-超时
    3 可选的选项对象，用于设定信息的类型

2.watchPosition 参数与上同 返回一个数值标识符 尅取消监控操作。

*/



//文件API
/*
 file api 基于表单中的文件输入。
 HTML5 在DOM中为文件输入元素添加了一个files集合。files集合中包含一组file对象，每个对象都有一些只读属性：
 name，size，type（字符串，文件的MIME类型），lastModifiedDate 上次被修改时间

 FileReader类型实现的是一种异步文件读取机制。

*/
var f = new FileReader()
f.readAsText(file, encoding) //以纯文本形式读取文件，将读取到的文本保存在result属性中。
f.readAsDataURL(file) //读取文件并将文件以数据uri的形式保存在result中。
//下面两个有兼容性问题
f.readAsBinaryString() //读取文件并将一个字符串保存在result属性中，字符串中的，每个字符表示一字节。
f.readAsArrayBuffer() //读取文件并将一个包含文件内筒的ArrayBuffer保存在result属性中。

//由于读取过程是异步的:FileReader 提供了几个事件：progress、error 、abort 和  onload、 loadend
//每过50ms左右，就会触发一次progress事件
//
//中断读取过程：
f.abort()

//读取部分内容
f.slice(startByte, length)


//对象url
//也被称为blob url，
//使用对象url的好处是可以不必把文件内容读取到js，而是直接使用文件内容。
//window.URL.createObjectURL || window.webkitURL.createObjectURL 返回一个字符串，指向一块内存的地址。

//页面会在卸载时自动释放对象URL占用的内存，手动释放内存：window.webkitURL.revokeObjectURL

//Web 计时
window.performance

//Web Workers
//可以异步运行js代码，避免阻塞用户界面。在执行复杂计算和数据处理时（如排序和图像处理），这个api非常有用。
/*
页面在worker对象上调用postMessage（）
页面中调用terminate可以让worker停止工作。

woeker所执行的js代码完全在另外一个作用域中，与页面中的代码不共享作用域。全局对象是worker本身。
worker 中的message事件被触发，使用onmessage来监听
worker 完成工作之后，通过调用postMessage 可以把数据再发回页面，调用postMessage会以异步方式触发页面中的Worker实例的message事件。
在worker中调用self.close方法可以停止工作。
worker内部允许使用importScript方法异步加载一个或多个js文件，且按顺序执行。


消息传递就是页面与worker互相通信的方式。

*/

















