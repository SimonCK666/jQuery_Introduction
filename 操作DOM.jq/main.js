// 获取元素的文字
var text = $('#a').text();
console.log("text:",text);

// 替换元素中的文字
$('#a').text('La');

// 返回html中的子内容
var html = $('#a').html();
console.log("html:",html);

$('#a').html('Hi');

// 在元素后/前追加内容
$('#a').append('<div>Append</div>');
$('#a').prepend('<div>Prepend</div>');

// 删除内容
$('.b span').remove();