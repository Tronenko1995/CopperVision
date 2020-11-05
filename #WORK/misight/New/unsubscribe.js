$=jQuery;

(function ($) {
    var url_string = window.location.href;
    var url = new URL(url_string);
    const userid = localStorage.userid

    if (!userid || userid !== url.searchParams.get("userid")) {
        localStorage.setItem('userid', url.searchParams.get("userid"));
        $.ajax({
            url: 'https://camera.webnauts.pro/emailUnConfirm.php',
            type: "POST",
            dataType: 'json',
            crossDomain: true,
            data: {
                useremail: url.searchParams.get("useremail"),
                userid: url.searchParams.get("userid"),
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