//对象属性
var a = {
    _year: 2015//属性以下划线打头表示只能通过对象方法访问
}
Object.defineProperty(a,"name",{
    configurable: true,
    enumerable: true,
    writable: true,
    value: "lili"
})

//一旦把属性设置为不可配置的，再修改属性的数据属性就会报错。

//访问器属性
Object.defineProperty(a, 'year', {
    get: function(){
        return this._year
    },
    set: function(y){
        this.counter++;
        this._yeat = y
    }
})

//批量定义属性
Object.defineProperties(a, {
    _year:{
        value: 2015
    },
    year: {
        get: function(){
            return this._year
        },
        set: function(y){
            this.counter++;
            this._yeat = y
        }
    }
})

//读取属性的特性
var descriptor = Object.getOwnPropertyDescriptor(a, '_year')
alert(descriptor.value)

//原型
/*

 每个函数都有一个prototype属性。
 prototype 指向一个对象，这个对象上包含特定类型的实例所可以共享的属性和方法。
 prototype是构造器模型创建出来的实例的“原型对象”
 protorype（即原型对象）会自动取得一个constructor属性，constructor指向构造器函数。
 实例内部会有一个指针【【—prototype】】/ __proto__指向构造器的原型对象，即构造器的prototype。
 用isPrototypeOf 来查看原型对象与实例的关系。

 Object.getPrototypeOf(实例)返回原型对象
 访问实例对象的属性时，会先查找实例对象，再查找原型对象。

 给实例设置属性不会覆盖原型对象上的属性，只是会阻止访问原型对象上的属性。只要使用delete操作实例对象的属性，则又能访问原型对象上的属性了。

 实例.hasOwnProperty() 用来检测属性是否取自实例对象。

 in 操作符 可单独使用或者在for in 中使用。
 Object.keys(对象/原型对象)返回所有可以枚举的属性。
 Object.getOwnPropertyNames() 得到所有实例属性，不论是否可以枚举。

 原型模式的简单语法：
 var a=new A()
 A.prototype = {
 a:1,
 b:2
 }
 上面这种方法会使得constructor指向Object的构造函数，可以在{}中定义constructor，这样对象就变成可枚举的了。


 原型的动态性
 先创建实例再修改原型上的方法，实例可以立即使用该方法。
 重写原型则不行，会切断实例与原型的联系。

 原生的引用类型否是通过原型模式创建的

 继承：原型链作为主要继承的方法，利用原型让一个引用类型继承另一个引用类型的方法和属性。

*/