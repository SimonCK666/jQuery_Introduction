var a = $('.a')
    .css('color','red')
    .css('background','black');

var b = $('.b')
    .css({
        color: 'red',
        backgroundColor: 'yellow',       //or 'background-color': 'yellow',
        border: '15px solid gray'
    });

var c = $('.c')
    .addClass('black')
    .removeClass('d')
    ;

console.log(a.hasClass('black'));
console.log(c.hasClass('black'));


// 显示和隐藏元素
var d = $('.d')
    d.hide();
    d.show();
    // 缓慢消失(单位：ms)
    d.fadeOut(2000);
    d.fadeIn();
    // 从上/下方隐藏
    d.slideUp();
    d.sildeDown();