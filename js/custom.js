$(document).ready(function(){
  $(window).resize(function() {
    $("body").css({ minHeight: '1080' + 'px' });
  });
  panelOpen = true;
  $('.panelbtn').click(function (e) { 
    e.preventDefault();
    if (panelOpen) {
      $(this).addClass('open');
      $('.bottomPanel').stop(true,true).animate({'bottom':'-20rem'},300,function(){        
        $('.content').addClass('short');
        panelOpen=false;
      });      
    } else {      
      $(this).removeClass('open');
      $('.bottomPanel').stop(true,true).animate({'bottom':'0px'},300,function(){        
        $('.content').removeClass('short');
        panelOpen=true;
      });
    }
  });  
});