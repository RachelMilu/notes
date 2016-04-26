//字符串方法：
var str = 'lllllliii'
str.charAt(3)//下标所指向的字符
str.charCodeAt(3)//下标3所指向的字符的编码

//字符串操作方法，一般小写
str.concat('ss','ff')

str.slice("开始坐标","结束坐标")
str.substring("开始坐标","结束坐标")
str.substr("开始坐标","长度")

//参数为负数时：
//slice（’负值+字符串的长度‘）
//substring（0，0）即返回“”
//substr（“负数+长度”，“负数变为0”）


//字符串位置方法： indexOf lastIndexOf
//
//trim删除前后所有的空格 返回新字符串
//
//字符串的模式匹配方法：

str.match()//参数是RegExp对象 or 正则表达式 返回一个数组

str.search() //参数同上 返回第一个匹配项的下标或者-1

str.replace()

str.split() //第一个参数：隔断符，第二个参数：数组长度

str.localeCompare()

//Global 对象
//encodeURI() encodeURIComponent()

//在没有给函数明确指定this时，this指向Global对象。


//Math对象
Math.max() //
Math.min() //
Math.ceil() // 向上进位
Math.floor() // 向下舍入
Math.round() // 四舍五入








