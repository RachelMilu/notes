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









