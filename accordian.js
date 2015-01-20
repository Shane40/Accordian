console.log("Accordian");

// $('.box1').on('click', function (x) {
// 	alert('hello');
// });
$('.container1').on('click', function () {
	$('.content1').addClass('open1');
});

$('.container2').on('click', function () {
	$('.content1').removeClass('open1');
	$('.content2').addClass('open2');
});

$('.container3').on('click', function () {
	$('.content2').removeClass('open2');
	$('.content3').addClass('open3');
	
});