$=jQuery;
$(document).ready(function () {
    $(document).on("click touchstart", ".MuiButton-root[type='submit']", function (e) {
        // var tmpArr = $(this).closest('form').serializeArray();
        // tmpArr.forEach(
        //     function sumNumber(item, index) {
        //         data[item.name] = item.value;
        //     }
        // );
        const step = $('.MuiStep-root.MuiStep-horizontal.MuiStep-completed').length + 1;
        
        switch(step) {
        
            case 1:
                console.log('--нажал на далее шаг-1');
                ga('send', 'event', 'test_misight', 'dalee_first');
                ym(66929020, 'reachGoal', 'dalee_first');
            break;
            case 2:
                console.log('--нажал на далее шаг-2');
                ga('send', 'event', 'test_misight', 'dalee_step_2');
                ym(66929020, 'reachGoal', 'dalee_step_2');
            break;
            case 3:
                console.log('--нажал на далее шаг-3');
                ga('send', 'event', 'test_misight', 'dalee_step_3');
                ym(66929020, 'reachGoal', 'dalee_step_3');
            break;
            case 4:
                console.log('--нажал на далее шаг-4');
                ga('send', 'event', 'test_misight', 'dalee_step_4');
                ym(66929020, 'reachGoal', 'dalee_step_4');
            break;
            case 5:
                console.log('--нажал на далее шаг-5');
                ga('send', 'event', 'test_misight', 'dalee_step_5');
                ym(66929020, 'reachGoal', 'dalee_step_5');
            break;
            case 6:
                console.log('--закончил тест');
                ga('send', 'event', 'test_misight', 'dalee_last');
                ym(66929020, 'reachGoal', 'dalee_last');
            break;
        }
    });

    $(document).on("click touchstart", "button[id='landing-button']", function (e) {

        console.log('--старт теста');
        ga('send', 'event', 'test_misight', 'pass_test');
        ym(66929020, 'reachGoal', 'pass_test');

    });

    $(document).on("change", "select[id='childAge']", function (e) {

        const selectVal = parseInt($(this).val());

        switch(true) {
        
            case (selectVal === 1):
                $('p.MuiTypography-colorTextSecondary').css("fontSize","0").html("<span style='font-size: 1.1rem !important;'>Год</span>");
            break;
            case (selectVal >= 2 && selectVal <= 4):
            $('p.MuiTypography-colorTextSecondary').css("font-size","0").html("<span style='font-size: 1.1rem !important;'>Года</span>");
            break;
            default:
            $('p.MuiTypography-colorTextSecondary').css("font-size","0").html("<span style='font-size: 1.1rem !important;'>Лет</span>");
            break;

        }
    });

    $(document).on("change", "select[id='childShortSightedAge']", function (e) {

        const selectVal = parseInt($(this).val());

        switch(true) {
        
            case (selectVal === 1):
                $('p.MuiTypography-colorTextSecondary').css("fontSize","0").html("<span style='font-size: 1.1rem !important;'>Год</span>");
            break;
            case (selectVal >= 2 && selectVal <= 4):
            $('p.MuiTypography-colorTextSecondary').css("font-size","0").html("<span style='font-size: 1.1rem !important;'>Года</span>");
            break;
            default:
            $('p.MuiTypography-colorTextSecondary').css("font-size","0").html("<span style='font-size: 1.1rem !important;'>Лет</span>");
            break;

        }
    });
});
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

    jQuery( document ).ready(function() {
        jQuery.ajax({
            url: "https://api-prod.konnektu.ru/login",
            type: "POST",
            crossDomain: true,
            data: {
                "request": {
                    "sourceId": "4dbb9971-fb36-4436-bfa8-5f49fb21e22c",
                    "sourceSecretKey": "zynDhCw3RcJ62Xnu",
                    "userData": {
                        "email": "email@email.ru",
                        "surname": "Фамилия",
                        "givenName": "Имя",
                        "middleName": "Отчество",
                        "Addresses": [
                            {
                                "city": "Москва"
                            }
                        ],
                        "userConsents": [
                            {
                                "consentId": "5ad9e44c-163d-42f7-bfcd-0c3ed4250da3",
                                "value": true
                            },
                            {
                                "consentId": "be878a4f-a4ee-499f-87de-bd7af17dbde8",
                                "value": true
                            }
                        ]
                    }
                }
            },
            success: function(){
                alert('Yahoo');
            }
        });
    });