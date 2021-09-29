var links = {
    setColor:function(color){
  //  let alist = document.querySelectorAll('a');
  //  let i = 0;
  //  while( i < alist.length){
  //  alist[i].style.color = color;
  //  i = i + 1;
  //  }
  // 반복문을 jQuery로 처리할 수 있다.
  $('a').css('color', color);
  }
  }

var Body = {
setColor:function (color){
// document.querySelector('body').style.color = color;
$('body').css('color', color);
},
setBackgroundColor:function (color){
// document.querySelector('body').style.backgroundColor= color;
$('body').css('backgroundColor', color);
}
}
function nightDayHandler(self){
  let target =  document.querySelector('body');
if(self.value === 'night'){
Body.setBackgroundColor('black');
Body.setColor('white');
self.value = 'day';
links.setColor('powderblue');
}
else{
Body.setBackgroundColor('white');
Body.setColor('black');
self.value = 'night';
links.setColor('blue');
}
}
