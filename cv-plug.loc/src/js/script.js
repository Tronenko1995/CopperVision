var plugText = $('#plugText');
var plugPassword = $('#plugPassword');
var plugSvgEyeOpen = $('#plugSvgEyeOpen');
var plugSvgEyeClose = $('#plugSvgEyeClose');
var plugButton = $('#plugButton');

var show = 0;

$('.jsPasswordShow').on('click', function() {
    if (show == 0) {
        show = 1;
        $(plugPassword).attr('type','text');
        $(plugSvgEyeClose).removeClass('hide');
        $(plugSvgEyeOpen).addClass('hide');

    } else {
        show = 0;
        $(plugPassword).attr('type','password');
        $(plugSvgEyeClose).addClass('hide');
        $(plugSvgEyeOpen).removeClass('hide');
    }
});

$(plugButton).on('click', function(e) {
    e.preventDefault();
    pass = plugPassword.val();
    if (pass === 'a2d3hGS5Mf') {
        $(this).closest('.plug').addClass('hide');
        console.log('ACCESS GRANTED');
        $('.miopia-content').removeClass('hide');

        /* создаем куки на 30 дней*/
        document.cookie = "cooperMiopia=Webnauts; max-age=2592000";
        // console.log(document.cookie);
    }
    else {
        plugText.text('Неверный пароль, в доступе отказано. Попробуйте еще раз.').addClass('error-plug-text');
        $(plugPassword).addClass('error-plug-input');
        console.log('ACCESS DENIED');
    }
});


// function readCookie(name) {

// 	var name_cook = name+"=";
// 	var spl = document.cookie.split(";");
	
// 	for(var i=0; i<spl.length; i++) {
	
// 		var c = spl[i];
		
// 		while(c.charAt(0) == " ") {
		
// 			c = c.substring(1, c.length);
			
// 		}
		
// 		if(c.indexOf(name_cook) == 0) {
			
// 			return c.substring(name_cook.length, c.length);
			
// 		}
		
// 	}
	
// 	return null;
	
// }

// var value_cookie = readCookie("cooperMiopia");
// if (value_cookie === 'Webnauts') {
//     console.log('+++++++++++++')
// } else {
//     console.log('НЕТ')
// }
// console.log(value_cookie);