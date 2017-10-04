$(document).ready(function() {
  // various functions on window scroll
  $(window).scroll(function() {
    // add page title to navbar on scroll
    var titleText = $('.main-title > .container > h1');
    if (titleText.visible()){
      var titleDisplay = $('header h2');
      titleDisplay.fadeOut(200);
    } else {
      var titleDisplay = $('header h2');
      titleDisplay.fadeIn(600);
    }

    // causes opacity on images to fade in as they become visible
    $('.image-container').each(function(i){
      if($(this).visible()){
          $(this).animate({'opacity':'1'},500);
        }
    });
  });


  // hides / shows menu when menu links are clicked
  $('header a').click(function() {
    let menu = $('.menu')
    menu.toggle(700);
  });

});
