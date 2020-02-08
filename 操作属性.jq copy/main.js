// 改变属性
// attr为可见的属性
$('#a') 
    .attr('href','http://b.com');


// DOM中隐性的属性
$('#b')
    .prop('href','http://c.com');

$('#c')
    .removeAttr('href');