//函数绑定：
var handler= {
    message: "jjjjj",
    handleClick: function(){
        alert(this.message)
    }
}
var body = document.querySelector('body')
body.addEventListener('click',handler.handleClick)//这一行函数作为一个参数传递给别的函数了，但是没有保存这个函数的执行环境


//用闭包修正：
var handler= {
    message: "jjjjj",
    handleClick: function(){
        alert(this.message)
    }
}
var body = document.querySelector('body')
body.addEventListener('click',function(){//闭包
    handler.handleClick()
})


//bind（）方案的出现：
function bind(fn, context){
    return function(){
        return fn.apply(context, arguments)
    }
}

var handler= {
    message: "jjjjj",
    handleClick: function(){
        alert(this.message)
    }
}
var body = document.querySelector('body')
body.addEventListener('click',bind(handler.handleClick, handler))//这一行函数作为一个参数传递给别的函数了，但是没有保存这个函数的执行环境


//ECMA5给所有的函数实现了bind方法
var handler= {
    message: "jjjjj",
    handleClick: function(){
        alert(this.message)
    }
}
var body = document.querySelector('body')
body.addEventListener('click',handler.handleClick.bind(handler))//这一行函数作为一个参数传递给别的函数了，但是没有保存这个函数的执行环境



//函数科理化
//使用一个闭包，返回一个函数、
//科理化函数：调用一个函数，并为传入的函数设置必要参数。比绑定函数多了一点设置参数
/*
 function bind(fn, context){
     return function(){
     return fn.apply(context, arguments)
     }
 }
*/

function curry(fn,context){
    console.log('1',arguments)
    var args = Array.prototype.slice.call(arguments,2)
    return function(){
        console.log('2',arguments)
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs)
        return fn.apply(context, finalArgs)
    }
}

function bind(fn,context){
    var args = Array.prototype.slice.call(arguments,2)
    return function(){
        var innerArg = Array.prototype.slice.call(arguments)
        var finalAargs = innerArg.concat(args)
        return fn.apply(context,finalAargs )
    }

}

var handler= {
    message: "jjjjj",
    handleClick: function(event){
        console.log(arguments)
    }
}
var body = document.querySelector('body')
body.addEventListener('click',bind(handler.handleClick, handler,1,2,3,4))//这一行函数作为一个参数传递给别的函数了，但是没有保存这个函数的执行环境



//防篡改对象

// 不可拓展对象
var a = {name: "lill"}
Object.preventExtensions(a)
//用Object.isExtensible()来判断对象是否可拓展，它会放回布尔值。

//密封对象 configurable属性为false
//不可拓展，不可删除属性和方法
Object.seal(a)
//用Object.isSealed()判断对象是否被密封了

//冻结对象 configurable属性为false writable属性为false
//不可拓展，又是密封的，也不可写
Object.freeze(a)
Object.isFrozen()


//高级定时器
//重复的定时器：setInterval() 某些间隔会被跳过；多个定时器的代码执行之间的间隔可能会比预期小。
//解决办法：setTimeout()
var i = 0 ;
setTimeout(function(){
    i++;
    console.log("222",i)
    if(i<10){
        setTimeout(arguments.callee,100)
    }
}, 100)


//Yielding Processes
//处理循环量大的数据 避免长时间运行脚本产生错误
var arr=[1,2,3,4,5,6,7]//待办事项列表
var copyArr = arr.slice(0);

function chunk(copyArr, process, context){
    setTimeout(function(){
        var item = copyArr.shift()
        //do something here...
        process.call(context,item)
        console.log(item)
        if(copyArr.length > 0){
            setTimeout(arguments.callee,100)
        }
    }, 100)
}


//函数节流throttle
//连续尝试进行过多的DOM相关操作可能导致浏览器挂起
//某些代码不可以在没有间断的情况下连续重复执行。
//只要代码是周期性执行的，都应该使用节流。
/*
 原理：第一次调用函数时创建一个定时器，在指定的时间间隔之后运行代码。
 当第二次调用该函数时，它会清除前一次的定时器并设置另一个。
 如果迁移给定时器已经执行过了，这个操作就没有意义，如果前一个定时器尚未执行，其实就是将其替换成一个新的定时器。
 目的是只有在执行函数的请求停止了一段时间之后才执行，
*/
//节流在resize时间中是最常用的。如果基于改时间来改变页面布局的话，最好控制处理的频率，以确保浏览器不会在极短的时间内进行过多的计算。

var processor = {
    timeoutid: null,
    performProcessing: function(){
      console.log('...')
        //do something ...
    },
    process: function (){
        clearTimeout(this.timeoutid)

        var that = this
        this.timeoutid = setTimeout(function(){
            that.performProcessing()
        },100)
    }
}

processor.process()

//简化版
function throttle(method, context){
    clearTimeout(method.tId)
    method.tId = setTimeout(function(){
        method.call(context)
    },100)
}


//自定义事件：创建一个管理事假的对象，让其他对象监听哪些时间。
/*
 观察者模式：
 主体：发布事件，主体并不知道观察者的任何事；
 观察者：通过订阅时间来观察主体，知道主体并能注册事件的回调函数
*/

function EventTarget(){
    this.handlers = {}//
}

EventTarget.prototype = {
    constructor: EventTarget,
    addHandler: function(type, handler){
        if(typeof this.handlers[type] == 'undefined'){
            this.handlers[type] = []
        }
        this.handlers[type].push(handler)
    },

    fire: function(event){
        if(!event.target){
            event.target = this
        }
        if(this.handlers[event.type] instanceof Array){
            var handlers = this.handlers[event.type]
            for(var i = 0,len = handlers.length; i<len;i++){
                handlers[i](event)
            }
        }
    },

    removeHandler: function(type, handler){
        if(this.handlers[type] instanceof Array){
            var handlers = this.handlers[type]
            for(var i = 0,len = handlers.length; i<len;i++){
                if(handlers[i] === handler){
                    break
                }
            }
            handlers.splice(i,1)
        }
    }
}

function handleMessage(e){
    alert(e.message)
}

var target = new EventTarget()

//target.addHandler('message', handleMessage)
//
//target.fire({type:'message', message: 'kkkkk'})
//
//target.removeHandler('message',handleMessage)
//
//target.fire({type:'message', message: 'kkkkk'})

//这里观察者模式封装在了一个对象中，其他对象可以继承EventTarget获得这个功能：
function Person(name, age){
    EventTarget.call(this)
    this.name = name
    this.age = age
}

function inheritPrototype(sub, sup){
    var copy = Object.create(sup.prototype)
    copy.constructor = sub
    sub.prototype = copy;

}

inheritPrototype(Person,EventTarget);

Person.prototype.prepare = function(){
    this.addHandler('message', handleMessage)
}


Person.prototype.say = function(){
    this.fire({type:'message',message:'hi!'})
}
var a = new Person('lolo',33)

a.prepare()
a.say()



























