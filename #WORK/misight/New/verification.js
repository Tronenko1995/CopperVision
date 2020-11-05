$=jQuery;

(function ($) {
    var url_string = window.location.href;
    var url = new URL(url_string);
    const ticketvalue = localStorage.ticketvalue

    if (!ticketvalue || ticketvalue !== url.searchParams.get("ticketvalue")) {
        localStorage.setItem('ticketvalue', url.searchParams.get("ticketvalue"));
        $.ajax({
            url: 'https://camera.webnauts.pro/emailConfirm.php',
            type: "POST",
            dataType: 'json',
            crossDomain: true,
            data: {
                useremail: url.searchParams.get("useremail"),
                ticketvalue: url.searchParams.get("ticketvalue"),
            },
            success: function (result) {
                console.log(result);
            },
            error: function (xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        })
    }
})
(jQuery);