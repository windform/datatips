$(function() {
	$(".shell").css({
		left: ($(window).width() - 400) / 2,
		top: 300
	});
	$(".shell").delegate("p", "click", function() {
		getValue();

	})

})


function show() {
	var list = "<div class='tips'>";
	var data = ['comsmos', 'justice', 'ace', 'zero', 'sebu', 'sudo'];
	for (var i = 0; i < data.length; i++) {
		list += "<p>" + data[i] + "</p>";
	};
	list += "</diV>";
	$(".shell").append(list);
}


function getValue() {
	var value = $(event.target).text();
	//alert("hello");
	$(".search").val(value);
	$(".tips").remove();
}


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