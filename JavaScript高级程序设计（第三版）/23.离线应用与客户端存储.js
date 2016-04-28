//离线检测
if(navigator.onLine){

}else{

}

//事件：online offline
window.addEventListener('online', function(){})
window.addEventListener('offline', function(){})

//html5的应用缓存：application cache（appcache）就是从浏览器的缓存中分离出来的一块缓存区。
//使用manifest file 来列出下载和缓存的资源。
/*
 CACHE MANIFEST

 #Comment

 file.js
 file.css
 */

//要将描述文件与页面关联起来，可以在html中的manifest属性中指定这个文件的路径，
//这个文件的MIME类型必须是text/cache-可以在html中的manifest属性中指定这个文件的路径
//<html manifest="/offline.manifest">

/*
 JS API 之 applicationCache 对象
 applicationCache.status的取值：
 0：无缓存
 1：闲置，应用缓存未得到更新
 2：检查中，正在下载描述文件并检查更新
 3：下载中，应用缓存正在下载描述文件中的指定资源
 4:更新完成，已更新且资源都下载完毕，可以通过swapCache()来使用
 5:废弃，即应用缓存描述的文件已经不存在了，页面无法再访问应用缓存


事件：
checking
error
noupdate
downloading
progress
updateready
cached

手动调用update方法

applicationCache.update()

 */

//数据存储
//cookie localStorag sessionStorage webSql























