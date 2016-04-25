//全局变量和定义在window对象上的差别：
//全局变量不能使用delete操作符，而定义在window对象上的变量可以。

//框架：
//如果页面中包含frame标签，则每个frame都拥有一个自己的window对象，并且保存在frames集合中，
//top对象始终指向最外层的框架，也就是浏览器窗口。
//parent对象始终指向当前框架的外层框架
//self对象始终指向window对象

//ie opera safari chrome 可以使用screenLeft 和 screenTop来表示窗口距离屏幕的左边距和上边距
//firefox 使用 screenX 和screenY

window对象
window.innerHeight
window.innerWidth

window.resizeBy(x,y)//新窗口和原来窗口的高宽差
window.resizeTo(x,y)//高宽

window.open() //返回一个指向新窗口的引用，接受四个参数：第一个为url，第二个为 ，第三个是一个逗号分隔的设置字符串，表示在新窗口中都有哪些特性。
//弹出的窗口中有个指针指向打开它的原始窗口，
//将新标签页的opener设置为null，就是告诉浏览器新创建的标签页不需要与打开它的页面通信。

//间歇调用和超时调用
//用setTimeout来替换setInterval
var sum = i = 0;
function interval(count,delay){

    i++;
    sum = i*delay;
    console.log(i)
    var s = count*delay;
    if(sum < s){
        setTimeout(arguments.callee(count,delay),delay)
    }else{
        console.log('DONE')
    }
}

//location对象
//位置操作
//改变location的属性（hash除外）页面都会以新url重新加载

location.assign("")
location.href = ""
window.location = ""

location.reload()//重新加载（可能从缓存加载）
location.reload(true)//重新加载（从服务器加载）





