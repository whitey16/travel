// function isScrolledIntoView($elem) {
//    var docViewTop = $(window).scrollTop();
//    var docViewBottom = docViewTop + $(window).height();
//
//    var elemTop = $elem.offset.top;
//    var elemMiddle = elemTop + $elem.height/2;
//    return docViewBottom >= elemMiddle && docViewTop <= elemMiddle;
// }
// $(window).scroll(function(){
//    $elem = $('.title-info::after'); //or what element you like
//    if(isScrolledIntoView($elem)){
//       $elem.css('background-image','url("../images/HK_flag.png")').fadeIn();
//    }
// });

$(document).ready(function() {
  window.sr = ScrollReveal({duration: 1000});
  sr.reveal('.text-container > p');



});
