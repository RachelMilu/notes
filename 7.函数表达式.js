//闭包
/*
 前提：当某个函数被调用时，会创建一个执行环境（execution context）及作用域链。
 然后会使用arguments和其他命名参数的值来创建活动对象（activation Object）。

 作用域链是个指向活动对象链表的指针。

 每个执行环境都有一个变量对象，除了全局环境的变量对象会一直存在以外，局部环境的变量对象只在函数执行的时候存在。

 一般来说，函数执行完毕之后，他所创建的活动对象就会被销毁，但是由于闭包内，匿名函数将外部函数加入了它的作用域链，
 因此即使外部函数执行结束，匿名函数依然保有外部函数的活动对象，知道匿名函数被销毁。

 闭包会携带包含它函数的作用域，只能取得包含它的函数与的变量的最后一个值。
 */

//this对象
/*
 匿名函数的执行环境通常指向window对象，除非用call、apply改变执行环境。
 每个函数在被调用时都会自动取得两个特殊变量：this和arguments，内部函数在搜索这两个变量时只能搜索到自己的活动对象为止，
 不过，如果把外部作用域的this保存在闭包可以访问得到的变量里就可以让闭包访问了。

 内存泄露：
 如果闭包的作用域链中保存着一个html元素，那么就意味着改html元素无法被销毁。

 */

//匿名函数，也叫作拉姆达函数：没有名字的函数表达式

//闭包有权访问包含函数内部的所有变量，原理：
//后台执行环境中，闭包的作用域链包含着他自己的作用域，包含函数的作用域，。。。全局作用域。
//通常，函数的作用域及其所有变量会在含数据执行结束之后被销毁，
//但是，当一个函数返回了一个闭包时，这个函数的作用域将一直被闭包所持有，知道闭包被销毁为止。

//利用闭包可以模仿块级作用域和创建私有变量（反义词是全局变量）
//闭包和私有作用域的不足：
//多查找作用域链中的一个层次，就会在一定程度上影响查找速度。

//私有作用域
function test(count){
    (function(){
        for(var i=0;i<count;i++){
            console.log(i)
        }
    })()
    alert(i)//报错
}
test(10)

//特权方法
//有权访问私有变量和私有函数的共有方法被称为特权方法（privileged method），
//有两种在对象上创建特权方法的方式（为自定义类型创建私有变量和特权方法）：
//1.在构造函数中定义特权方法
//特点：必须使用构造函数模式来创建对象，私有变量在每一个对象中都不同；每次调用构造函数都会重新创建私有方法。
function Parent(age){
    var name = "lili"
    function sing(){
        alert('llll')
    }
    this.say = function(){
        return name;
    }
}

//2，使用静态私有变量
//这种方式创建的私有变量能被所有实例访问和修改

(function(){
    var name;
    Person = function(){

    }
    Person.prototype.setName = function(str){
        name = str
    }
    Person.prototype.getName = function(){
        return name
    }
})()



//模块模式
//为单例创建私有变量和特权方法
//惯例：js以对象字面量来创建单例对象

var single = function(){
    var arr = []//这里可以是一个任意对象
    //做一些增强
    arr.push({})

    //返回共用接口
    return {
        add: function(obj){
            arr.push(obj)
        },
        length: function(){
            return arr.length
        }

    }
}()









