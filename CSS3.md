HTML5与CSS 3 权威指南 下册 学习笔记
## 选择器
## css3提倡使用选择器开将样式与元素直接绑定起来。
* `E[属性名='value']` 
  例如

````
div[id='div_id'] { //id为div_id的元素
  background: #fff;
}
````

*  通配符的使用，能大大提高书写样式表的效率
*  ^ 表示开头字符匹配
*  ？结尾字符匹配
*  "*"表示包含字符匹配 
         例如 

````
div[id$='v'] { //表示id以“v”结尾的div标签
  background: #fff;
}
````

### 属性选择器
css2的属性选择器`[att=val]`在css3中增加了通配符的概念。
* `[att*=val]`
  如果元素的att属性值`包含`val指定的字符串，则应用该样式。

* `[att^=val]`
  如果元素的att属性以val指定的字符串`开头`，则应用该样式。

* `[att$=val]`
  如果元素的att属性以val指定的字符串`结尾`，则应用该样式。

### 结构性伪类选择器
* css中的类选择器与伪类选择器的区别就在于类选择器可以随便起名，伪类选择器是已经定义好的选择器，不能随便起名。
  `：link，：visited，：hover，：active`
* 伪元素选择器：css中已经定义好的伪元素使用的选择器。
  `选择器：伪元素 {}`

* css中的四个伪元素选择器
  * first-line 向某个元素的第一行文字使用样式
  * first-letter 向某个元素中的文字的首字母或者第一个字使用样式
  * before 在某个元素前插入一些内容
  * after 在某个元素后插入一些内容
####  css 3的结构性伪元素，允许开发者根据文档树中的结构来指定元素的样式。
* root 将样式绑定到页面的根元素中

````
：root {
  //...
}
````

* not 排除

````
body *：not(h1) { //body下所有元素但不包括h1
  
}
````

* empty 指定当元素内容为空白式使用样式

````
:empty {
  //...
}
````

* target 用户点击了页面中的超链接，并条转到了这个target元素后应用样式

````
:targer {
  //...
}
````

#### 选择器 first-child、last-child、ntn-child、nth-last-child
对列表元素适用，其他元素存在问题：计算顺序时，是按照父元素的所有子元素数量进行计算的。

* 列表项：对指定序号的子元素使用样式 ntn-child、nth-last-child(倒数)
````
li:nth-child(3){//第三个子元素应用样式
  
}
li:nth-last-child(3){//倒数第三个子元素应用样式
  
}
li:nth-child(odd){//偶数个子元素
  
}
li:nth-child(even){//奇数个子元素
  
}
````
* nth-of-type nth-last-of-type
css 3在使用这两个伪元素选择器时，会只按照同类型的子元素进行计算。
````
h2:nth-child(odd){//偶数个子元素
  
}
h2:nth-child(even){//奇数个子元素
  
}
````
#### 循环使用样式 
* nth-child (n) 把参数n改成可循环的an+b即可。 an的a表示每次循环中包含几种样式，b表示所处的位置。











