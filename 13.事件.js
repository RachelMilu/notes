//事件流
//“DOM2级事件”规定的事件流包括三个阶段：捕获阶段，处于目标阶段，事假冒泡阶段。

//事件处理程序
//为事假指定处理程序的方式有：

//1.HTML事件处理程序
//例如在html标签里面写上onclick事件

//2.DOM0级事件处理程序

var btn = document.getElementsByClassName('.btn')[0]
btn.onclick = function () {

}

//删除事件处理程序
btn.onclick = null

//3.DOM2级事件处理程序
//addEventListener() removeEventListener()

//IE事件处理程序
//attachEvent() detachEvent() 第一个参数多个“on”

//
//鼠标事件：
//事假坐标保存在事件对象的clientX和clientY中。
//
//页面坐标位置：事件是在页面中的什么位置发生的保存在事件对象的pageX和pageY属性中。
//在页面没有滚动的前提下，pageX和pageY的值与clientX和clientY的值是一样的。
//
//屏幕坐标位置：事假发生时相对于整个电脑屏幕的位置保存在screenX和screenY中。
//
//



