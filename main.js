var colorClass='';

function main(){
  
}

$(document).ready(main);

$('.select-color').on('click',function(){
  var selectedColor=$(this).attr('class'); 
  
  switch(selectedColor){
    case 'select-color cyan not-selected':
      colorClass='cyan';  
      break;
    case 'select-color yellow not-selected':
      colorClass='yellow';  
      break;
    case 'select-color magenta not-selected':
      colorClass='magenta';  
      break;
  }
  $(this).removeClass('not-selected');
  $(this).siblings().addClass('not-selected');
});

$('.box').on('click',function(){
  $(this).toggleClass(colorClass);
});

$('.toggle-blink').on('click',function(){
  var i=0;
  
  if(colorClass){
    $('.toggle-blink').toggleClass('opacity');
    
    if (i===0){
      var ID=window.setInterval(function(){
        $('.box.magenta').toggleClass('blink');
        $('.box.yellow').toggleClass('blink');
        $('.box.cyan').toggleClass('blink');
      },500);
      i++;
    }else{
      window.clearInterval(ID);
      i--;
    }
  }
});


