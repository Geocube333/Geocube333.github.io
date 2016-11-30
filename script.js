$(document).ready(function() {
    $('.menu').mouseenter(function() {
        $('.menu, .menu-top, menu-middle, menu-bottom').fadeTo('fast',.5);
    });
    $('.menu').mouseleave(function() {
        $('.menu, .menu-top, menu-middle, menu-bottom').fadeTo('fast',1);
        });
});

$(document).ready(function() {
    $('#list-1').mouseenter(function() {
        $('#list-1').fadeTo('fast',.75);
    });
    $('#list-1').mouseleave(function() {
        $('#list-1').fadeTo('fast',1);
        });
});

$(document).ready(function() {
    $('#list-2').mouseenter(function() {
        $('#list-2').fadeTo('fast',.75);
    });
    $('#list-2').mouseleave(function() {
        $('#list-2').fadeTo('fast',1);
        });
});

$(document).ready(function() {
    $('#list-3').mouseenter(function() {
        $('#list-3').fadeTo('fast',.75);
    });
    $('#list-3').mouseleave(function() {
        $('#list-3').fadeTo('fast',1);
        });
});

$(document).ready(function() {
    $('#X').mouseenter(function() {
        $('#X').fadeTo('fast',.75);
    });
    $('#X').mouseleave(function() {
        $('#X').fadeTo('fast',1);
        });
});

$(document).ready(function() {
	$('#actual-menu').hide();
});

$(document).ready(function(){
	$('.menu').click(function() {
		$('#actual-menu').fadeIn('slow');
	});
})

$(document).ready(function(){
	$('#X').click(function() {
		$('#actual-menu').fadeOut('slow');
	});
})