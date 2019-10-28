$(document).foundation();

 
$(document).foundation('reveal', {
    'animation': 'none'
});

$(document).on('open.fndtn.reveal', '[data-reveal]', function () {
   var modal = $(this);
    //$('.reveal-modal-bg').velocity(  {opacity: [ 0.7 ,0]});  
   var open = $(this).attr('data-easein');
     if(open == 'shake') {
                 $(this).velocity('callout.' + open);
            } else if(open == 'pulse') {
                 $(this).velocity('callout.' + open);
            } else if(open == 'tada') {
               $(this).velocity('callout.' + open);
            } else if(open == 'flash') {
                 $(this).velocity('callout.' + open);
            }  else if(open == 'bounce') {
                 $(this).velocity('callout.' + open);
            } else if(open == 'swing') {
                 $(this).velocity('callout.' + open);
            }else {
              $(this).velocity('transition.' + open);
                     
            }
 
});
