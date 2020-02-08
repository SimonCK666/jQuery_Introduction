// 从上向下找
$('.grandpa')
    .find('.child')
    .css('border', '2px solid #999');

// 从下向上找
$('#child1') 
    .parent()
    .css('border','2px solid #666');

// 选择上一级所有class
$('#child1') 
    .parents('grandpa')
    .css('border','2px solid #333');

// 过滤
$('.child')
    .filter('.not-gay')
    .css('background','red');