$=jQuery;
    /* Табы */
    var tabs0 = $('#tabs0');
    var tabs1 = $('#tabs1');
    var tabs2 = $('#tabs2');
    var tabs3 = $('#tabs3');
    var tabs4 = $('#tabs4');
    var tabs5 = $('#tabs5');
    var tabs6 = $('#tabs6');

    /* Мобильные Табы */
    var tabs0m = $('#tabs0m');
    var tabs1m = $('#tabs1m');
    var tabs2m = $('#tabs2m');
    var tabs3m = $('#tabs3m');
    var tabs4m = $('#tabs4m');
    var tabs5m = $('#tabs5m');
    var tabs6m = $('#tabs6m');

    /* события на клике по табам */
    $(tabs0).on('click', function () {
        console.log('1 вкладка');
        ga('send', 'event', 'vkladki_misight', 'click_main');
        ym(66929020, 'reachGoal', 'click_main');
    });
    $(tabs1).on('click', function () {
        console.log('2 вкладка');
        ga('send', 'event', 'vkladki_misight', 'click_myopia');
        ym(66929020, 'reachGoal', 'click_myopia');
    });
    $(tabs2).on('click', function () {
        console.log('3 вкладка');
        ga('send', 'event', 'vkladki_misight', 'click_methods');
            ym(66929020, 'reachGoal', 'click_methods');
    });
    $(tabs3).on('click', function () {
        console.log('4 вкладка');
        ga('send', 'event', 'vkladki_misight', 'click_program');
        ym(66929020, 'reachGoal', 'click_program');
    });
    $(tabs4).on('click', function () {

    });
    $(tabs5).on('click', function () {
        console.log('6 вкладка');
        ga('send', 'event', 'vkladki_misight', 'click_test');
        ym(66929020, 'reachGoal', 'click_test');
    });
    $(tabs6).on('click', function () {

    });

    /* Клик на мобильные табы */
    $(tabs0m).on('click', function (e) {
        $(tabs0).trigger('click');
    });
    $(tabs1m).on('click', function (e) {
        $(tabs1).trigger('click');
    });
    $(tabs2m).on('click', function (e) {
        $(tabs2).trigger('click');
    });
    $(tabs3m).on('click', function (e) {
        $(tabs3).trigger('click');
    });
    $(tabs4m).on('click', function (e) {
        $(tabs4).trigger('click');
    });
    $(tabs5m).on('click', function (e) {
        $(tabs5).trigger('click');
    });
    $(tabs6m).on('click', function (e) {
        $(tabs6).trigger('click');
    });
    $('.jsPdfBrochureProgram').on('click', function () {
        console.log('нажал на PDF Brochure Program');
        ym(66929020, 'reachGoal', 'pdf_znakomstvo_s_programmoy_yab_s_linzami_misight_1_day');
    });

$(document).ready(function(){

    $(".note").on("click", function (event) {
        event.preventDefault(); //опустошим стандартную обработку
        let block = $('#warningBlock').offset().top; //определим высоту от начала страницы до якоря
    $('body,html').animate({scrollTop: block}, 2000); //сделаем прокрутку за 2 с
    });
});