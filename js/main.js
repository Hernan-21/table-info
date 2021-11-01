var offset;			//Distancia a la que se activa el nav-pasos
var offsetNavPasos; //Distancia de activación de nav-pasos. 0:arriba - $(window).height():abajo . $(window).height()/2:media pantalla

const checkWindowHeight = (h) => {
    offset = h;
    if (h > 600) {
    offset = h * 0.8;
    }
    if (h > 800) {
    offset = h * 0.6;
    }
    if (h > 1000) {
    offset = h * 0.4;
    }
    if (h > 1200) {
    offset = h * 0.2;
    }
};

$( document ).ready(function() {
    const wheight = $(window).height();

    checkWindowHeight(wheight);

    $('body').scrollspy({ 
    	target: '#navbar-pasos',
    	offset: offset
     })

    //INIT TOOLTIPS
    $('[data-toggle="tooltip"]').tooltip({
    	boundary: 'window' 
    });

    //
    //Las siguientes líneas comentadas por aparente no uso
    //

    // if ($('#spy').length){
    //   const ps1 = new
    //     PerfectScrollbar('#spy', {
    //         wheelSpeed: 2,
    //         wheelPropagation: true,
    //         minScrollbarLength: 20
    // });
    
    // }
     
    // if ($('.scrollspy-example').length){
    // const ps2 = new
    //     PerfectScrollbar('.scrollspy-example', {
    //         wheelSpeed: 2,
    //         wheelPropagation: true,
    //         minScrollbarLength: 20
    // });
    // }
    
});



$(window).on('resize', function(){
//   var win = $(this);
//   var w = win.width();
  const wheight = $(this).height();
  checkWindowHeight(wheight);
});

//$(window).scroll(function fix_element() {
//	console.log(offsetNavPasos);
//	var parentw = $('#navbar-pasos').parent().width();
//	if($(window).scrollTop() > offsetNavPasos){
//		$('#navbar-pasos').addClass('fixed-top');
//		$('#navbar-pasos').css({'width': parentw, 'margin-left': 'calc((100% - ' + parentw + 'px)/2)', 'top': '70px'});
//	} else {
//		$('#navbar-pasos').removeClass('fixed-top');
//		$('#navbar-pasos').css({'width': 'auto', 'margin-left':	'auto', 'top': '0'});
//	}
//    return fix_element;
// }());

 $('img.svg').each(function() {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');
            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            // Replace image with new SVG
            $img.replaceWith($svg);
        }, 'xml');
    });



  $('.lst .nav-link').click(function () {
      
      if (screen.width < 400) {
        
      
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 170
        }, 1800);
}
else {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 230
        }, 1800);
}
 
        return false;
    });

 
 