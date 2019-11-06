$(document).ready(main);
var contador = 1;

function main(){
    $('.menu-movil').click(function(){
        // $('.navegacion-p-movil').toggle();
        if(contador == 1){
            $('nav').animate({
                left: '55em',
                bottom: '-17px'
            });
            contador = 0;
        }else{
            contador = 1;
            $('nav').animate({
                left: '-132px',
                bottom: '-17px'
            });
        }
  });
};

$(document).ready(function() {
    $("a").click(function() {
      $("html, body").animate({scrollTop: $("#comenzar").offset().top}, 2000);});
  });