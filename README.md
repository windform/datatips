#ajax 模拟数据加载
###datatips.html基本界面
初始化界面是这样的：
![Alt text](./images/2.jpg)

在输入框发生keyup事件时，会从"ajaxdata.php"的文件里加载数据，并渲染到界面上。效果如下：
![Alt text](./images/1.jpg)

###ajaxdata.php数据格式
此文件存储的是json格式的字符串，如下所示：
```php
{
"data":["America","England","China","Mesi","Indeo","aido","Frech","Germen"]
}
```

###ajax.js数据处理
``` javascript
$(function() {

	//为class为shell的盒子定位
	$(".shell").css({
		left: ($(window).width() - 400) / 2,
		top: 300
	});

	//使用delegate事件为当前或未来的子元素增加click点击事件
	$(".shell").delegate("p", "click", function() {
		getValue();

	})

})

//getValue()：为输入框获取提示数据的值
function getValue() {
	var value = $(event.target).text();
	$(".search").val(value);
	$(".tips").remove();
}


//getData():使用ajax获取和渲染数据
function getData() {
	$.ajax({
		url: "ajaxdata.php?a=" + $("#search").val(),
		type: "GET",
		dataType: "JSON",
		success: function(result) {
			var data = result.data;
			var show = "<div class='tips'>";
			for (var i = 0; i < data.length; i++) {
				show += "<p>" + data[i] + "</p>";
			}
			show += "</div>";
			$(".shell").append(show);
		},
		error: function() {
			$(".shell").append("<div class='tips'><p>获取数据失败</p></div>");
			setTimeout(function() {
				$(".tips").remove();
			}, 1500)
		}
	})
}


```

