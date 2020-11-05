$(document).ready(function () {

    /* инпуты */
    var modalName1 = $('#modalName1');
    var modalPhone1 = $('#modalPhone1');
    var modalMail1 = $('#modalMail1');
    var modalCheckBox1 = $('#modalCheckBox1');
    var modalCheckBox1Label = $('#modalCheckBox1Label');
    var modalCheckBox1_2 = $('#modalCheckBox1_2');
    var modalCheckBox1_2Label = $('#modalCheckBox1_2Label');
    var modalButton1 = $('#modalButton1');
    var reg = new RegExp('@');
    var nearsightednessBread = $('#nearsightednessBread');

    /* Маска для интпута с почтой*/
    $(".jsPhone").inputmask({
        mask: "+7 (999) 999-99-99",
        clearIncomplete: true,
        showMaskOnHover: false,
    });

    function validate() {
        if ($(modalName1).val() !== '' && $(modalPhone1).val() !== '' && reg.test($(modalMail1).val()) && modalCheckBox1.is(":checked") && modalCheckBox1_2.is(":checked")) {
            // console.log('Все поля заполнены, проверка полей');
            if (modalName1.hasClass('success-text') && modalPhone1.hasClass('success-text') && modalMail1.hasClass('success-text') && modalCheckBox1.hasClass('success-check') && modalCheckBox1Label.hasClass('success-check-before') && modalCheckBox1_2.hasClass('success-check') && modalCheckBox1_2Label.hasClass('success-check-before')) {
                //   console.log('Все поля проверенны');
                $(modalButton1).removeClass('hide');
            } else {
                //   console.log('Неизвестная ошибка, пропускаю');
                modalName1.addClass('success-text').removeClass('error-text');
                modalPhone1.addClass('success-text').removeClass('error-text');
                modalMail1.addClass('success-text').removeClass('error-text');
                modalCheckBox1.addClass('success-check').removeClass('error-check');
                modalCheckBox1Label.addClass('success-check-before').removeClass('error-check-before');
                modalCheckBox1_2.addClass('success-check').removeClass('error-check');
                modalCheckBox1_2Label.addClass('success-check-before').removeClass('error-check-before');
            }
        } else {
            $(modalButton1).addClass('hide');
        }
    }

    $('.jsMail').on("input change paste", function () {
        var newVal = $(this).val().replace(/[^a-zA-Z@\.\-\_0-9]/g, '');
        $(this).val(newVal);
    });

    $(modalName1).on("input change paste", function () {
        var text1 = $(this).val();
        if (text1 !== '') {
            $(this).addClass('success-text');
            $(this).removeClass('error-text');
            validate();
        } else {
            $(this).addClass('error-text');
            $(this).removeClass('success-text');
            validate();
        }
    });
    $(modalPhone1).on("input change paste", function () {
        var text2 = $(this).val();
        if (text2 !== '') {
            $(this).addClass('success-text');
            $(this).removeClass('error-text');
            console.log(text2);
            validate();
        } else {
            $(this).addClass('error-text');
            $(this).removeClass('success-text');
            console.log(text2);
            validate();
        }
    });
    $(modalMail1).on("input change paste", function () {
        var text3 = $(this).val();
        if (reg.test(text3)) {
            $(this).addClass('success-text');
            $(this).removeClass('error-text');
            validate();
        } else {
            $(this).addClass('error-text');
            $(this).removeClass('success-text');
            validate();
        }
    });

    $(modalCheckBox1).click(function () {
        if ($(this).is(":checked")) {
            $(this).addClass('success-check');
            $(this).siblings('#modalCheckBox1Label').addClass('success-check-before');
            $(this).removeClass('error-check');
            $(this).siblings('#modalCheckBox1Label').removeClass('error-check-before');
            validate();
        } else if ($(this).is(":not(:checked)")) {
            $(this).addClass('error-check');
            $(this).siblings('#modalCheckBox1Label').addClass('error-check-before');
            $(this).removeClass('success-check');
            $(this).siblings('#modalCheckBox1Label').removeClass('success-check-before');
            validate();
        }
    });

    $(modalCheckBox1_2).click(function () {
        if ($(this).is(":checked")) {
            $(this).addClass('success-check');
            $(this).siblings('#modalCheckBox1_2Label').addClass('success-check-before');
            $(this).removeClass('error-check');
            $(this).siblings('#modalCheckBox1_2Label').removeClass('error-check-before');
            validate();
        } else if ($(this).is(":not(:checked)")) {
            $(this).addClass('error-check');
            $(this).siblings('#modalCheckBox1_2Label').addClass('error-check-before');
            $(this).removeClass('success-check');
            $(this).siblings('#modalCheckBox1_2Label').removeClass('success-check-before');
            validate();
        }
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

    /* Страницы */
    var page1 = $('#page1');
    var page1_2 = $('#page1_2');
    var page2 = $('#page2');
    var page2_2 = $('#page2_2');
    var page3 = $('#page3');
    var page4 = $('#page4');
    var page4_2 = $('#page4_2');
    var page5 = $('#page5');
    var page6 = $('#page6');
    var page6_2 = $('#page6_2');

    /* блок со сносками */
    var warningBlock = $('#warningBlock');

    var closeMobi = $('#closeMobi');

    /* Мобильное меню*/
    var menu = 0;

    $('.js-mobile-button').on('click', function () {
        if (menu == 0) {
            menu = 1;
            $('.mobile-menu').css('left', '0');
            // $('body').addClass('darkness');
            $('.mobile-darkness').css('right', '0');
        } else {
            menu = 0;
            $('.mobile-menu').css('left', '-86%');
            $('.mobile-darkness').css('right', '-100%');
        }
    });


    /* Слайдер */
    $('.slider__slider').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: false,
        responsive: [{
                breakpoint: 1181,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 861,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /* События при нажатии на табы */
    $(tabs0).on('click', function (e, x) {
        $('.nearsightedness__menu-nav-item--active').removeClass('nearsightedness__menu-nav-item--active');
        $(tabs0).addClass('nearsightedness__menu-nav-item--active');
        $('.header__link').removeClass('active');
        $(tabs0m).addClass('active');
        $('.nearsightedness__page').addClass('hide');
        $(page1).removeClass('hide');
        $(page2).removeClass('hide');
        $(page3).removeClass('hide');
        $(page5).removeClass('hide');
        $('.block-warning-for').addClass('hide');
        $('.block-warning-for--0').removeClass('hide');
        $(nearsightednessBread).html("<span class='breadcrumb__link'><a href='https://coopervision.ru/'>Home</a></span><span class='breadcrumb__separator'> &gt; </span><span class='breadcrumb__link'>Близорукость у детей</span>");
        if (x === 'hash') {
            console.log('Перешел на главную через хеш');
        } else {
            console.log('Перешел на главную через кнопку');
            ga('send', 'event', 'vkladki_misight', 'click_main');
            ym(66929020, 'reachGoal', 'click_main');
        }
    });
    $(tabs1).on('click', function (e, x) {
        $('.nearsightedness__menu-nav-item--active').removeClass('nearsightedness__menu-nav-item--active');
        $(tabs1).addClass('nearsightedness__menu-nav-item--active');
        $('.header__link').removeClass('active');
        $(tabs1m).addClass('active');
        $('.nearsightedness__page').addClass('hide');
        $(page1_2).removeClass('hide');
        $('.block-warning-for').addClass('hide');
        $('.block-warning-for--1').removeClass('hide');
        $(nearsightednessBread).html("<span class='breadcrumb__link'><a href='https://coopervision.ru/'>Home</a></span><span class='breadcrumb__separator'> &gt; </span><span class='breadcrumb__link'><a href='https://coopervision.ru/misight'>Близорукость у детей</a></span><span class='breadcrumb__separator'> &gt; </span><span class='breadcrumb__link'>Что такое близорукость?</span>");
        if (x === 'hash') {
            console.log('Перешел на myopia через хеш');
        } else {
            console.log('Перешел на myopia через кнопку');
            ga('send', 'event', 'vkladki_misight', 'click_myopia');
            ym(66929020, 'reachGoal', 'click_myopia');
        }
    });
    $(tabs2).on('click', function (e, x) {
        $('.nearsightedness__menu-nav-item--active').removeClass('nearsightedness__menu-nav-item--active');
        $(tabs2).addClass('nearsightedness__menu-nav-item--active');
        $('.header__link').removeClass('active');
        $(tabs2m).addClass('active');
        $('.nearsightedness__page').addClass('hide');
        $(page2_2).removeClass('hide');
        window.scrollTo(0, 0);
        $('.block-warning-for').addClass('hide');
        $('.block-warning-for--2').removeClass('hide');
        $(nearsightednessBread).html("<span class='breadcrumb__link'><a href='https://coopervision.ru/'>Home</a></span><span class='breadcrumb__separator'> &gt; </span><span class='breadcrumb__link'><a href='https://coopervision.ru/misight'>Близорукость у детей</a></span><span class='breadcrumb__separator'> &gt; </span><span class='breadcrumb__link'>Методы замедления прогрессирования близорукости</span>");
        if (x === 'hash') {
            console.log('Перешел на methods через хеш');
        } else {
            console.log('Перешел на methods через кнопку');
            ga('send', 'event', 'vkladki_misight', 'click_methods');
            ym(66929020, 'reachGoal', 'click_methods');
        }
    });
    $(tabs3).on('click', function (e, x) {
        $('.nearsightedness__menu-nav-item--active').removeClass('nearsightedness__menu-nav-item--active');
        $(tabs3).addClass('nearsightedness__menu-nav-item--active');
        $('.header__link').removeClass('active');
        $(tabs3m).addClass('active');
        $('.nearsightedness__page').addClass('hide');
        $(page3_2).removeClass('hide');
        window.scrollTo(0, 0);
        $('.block-warning-for').addClass('hide');
        $('.block-warning-for--3').removeClass('hide');
        $(nearsightednessBread).html("<span class='breadcrumb__link'><a href='https://coopervision.ru/'>Home</a></span><span class='breadcrumb__separator'> &gt; </span><span class='breadcrumb__link'><a href='https://coopervision.ru/misight'>Близорукость у детей</a></span><span class='breadcrumb__separator'> &gt; </span><span class='breadcrumb__link'>Программа «Яркое Будущее™» с линзами MiSight® 1 day</span>");
        if (x === 'hash') {
            console.log('Перешел на program через хеш');
        } else {
            console.log('Перешел на program через кнопку');
            ga('send', 'event', 'vkladki_misight', 'click_program');
            ym(66929020, 'reachGoal', 'click_program');
        }
    });
    $(tabs4).on('click', function () {
        // if(!$(this).hasClass('nearsightedness__menu-nav-item--active')) {
        console.log(4);
        $('.nearsightedness__menu-nav-item--active').removeClass('nearsightedness__menu-nav-item--active');
        $(tabs4).addClass('nearsightedness__menu-nav-item--active');
        $('.header__link').removeClass('active');
        $(tabs4m).addClass('active');
        $('.nearsightedness__page').addClass('hide');
        $(page4_2).removeClass('hide');
        window.scrollTo(0, 0);
        $('.block-warning-for').addClass('hide');
        $('.block-warning-for--4').removeClass('hide');
        $(nearsightednessBread).html("<span class='breadcrumb__link'><a href='https://coopervision.ru/'>Home</a></span><span class='breadcrumb__separator'> &gt; </span><span class='breadcrumb__link'><a href='https://coopervision.ru/misight'>Близорукость у детей</a></span><span class='breadcrumb__separator'> &gt; </span><span class='breadcrumb__link'>???</span>");
        // }
    });
    $(tabs5).on('click', function (e, x) {
        if (!$(this).hasClass('nearsightedness__menu-nav-item--active')) {
            $('.nearsightedness__menu-nav-item--active').removeClass('nearsightedness__menu-nav-item--active');
            $(this).addClass('nearsightedness__menu-nav-item--active');
            $('.header__link').removeClass('active');
            $(tabs5m).addClass('active');
            $('.nearsightedness__page').addClass('hide');
            $(page5_2).removeClass('hide');
            window.scrollTo(0, 0);
            $('.block-warning-for').addClass('hide');
            $('.block-warning-for--5').removeClass('hide');
            $(nearsightednessBread).html("<span class='breadcrumb__link'><a href='https://coopervision.ru/'>Home</a></span><span class='breadcrumb__separator'> &gt; </span><span class='breadcrumb__link'><a href='https://coopervision.ru/misight'>Близорукость у детей</a></span><span class='breadcrumb__separator'> &gt; </span><span class='breadcrumb__link'>Оцените риск близорукости</span>");
            if (x === 'hash') {
                console.log('Перешел на test через хеш');
            } else {
                console.log('Перешел на test через кнопку');
                ga('send', 'event', 'vkladki_misight', 'click_test');
                ym(66929020, 'reachGoal', 'click_test');
            }
        }
    });
    $(tabs6).on('click', function () {
        console.log(6);
        $('.nearsightedness__menu-nav-item--active').removeClass('nearsightedness__menu-nav-item--active');
        $(tabs6).addClass('nearsightedness__menu-nav-item--active');
        $('.header__link').removeClass('active');
        $(tabs6m).addClass('active');
        $('.nearsightedness__page').addClass('hide');
        $(page6_2).removeClass('hide');
        window.scrollTo(0, 0);
        $('.block-warning-for').addClass('hide');
        $('.block-warning-for--6').removeClass('hide');
        $(nearsightednessBread).html("<span class='breadcrumb__link'><a href='https://coopervision.ru/'>Home</a></span><span class='breadcrumb__separator'> &gt; </span><span class='breadcrumb__link'><a href='https://coopervision.ru/misight'>Близорукость у детей</a></span><span class='breadcrumb__separator'> &gt; </span><span class='breadcrumb__link'>???/span>");

        function toggleDone2(event) {
            console.log(event.target);
            event.preventDefault();
            if (!event.target.matches('.jsSignUp')) return;
            $.magnificPopup.open({
                items: {
                    src: '#modalReception'
                },
                callbacks: {
                    open: function () {
                        if (document.body.clientWidth > 780) {
                            $(this.container).find('.mfp-content').css({
                                'width': '650px',
                                'border-radius': '20px'
                            });
                        } else {
                            $(this.container).find('.mfp-content').css({
                                'width': '300px',
                                'border-radius': '20px'
                            });
                        }
                        $(this.container).find('.mfp-close').addClass('new-close');
                    }
                }
            });

        }
        var characterList = document.querySelector('#optik-list_2');
        characterList.addEventListener('click', toggleDone2);
    });



    if (document.location.hash == '#myopia') {
        $(tabs1).trigger('click', 'hash');
    } else if (document.location.hash == '#methods') {
        $(tabs2).trigger('click', 'hash');
    } else if (document.location.hash == '#program') {
        $(tabs3).trigger('click', 'hash');
    } else if (document.location.hash == '#test') {
        $(tabs5).trigger('click', 'hash');
    }

    // /* отзывы, клик на показать отзыв в слайдере */
    // $('.jsWatchR').on('click', function(e) {
    //     e.preventDefault();
    //     $('.nearsightedness__page').addClass('hide');
    //     $(page4_2).removeClass('hide');
    // })

    /* отзывы, клик на показать отзыв во 2й странице */
    $('.jsWatchRlink').on('click', function (e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {
            $(this).siblings('.comment__block-text--min').hide();
            $(this).siblings('.comment__block-text--full').show();
            $(this).text('Скрыть отзыв').addClass('active');
        } else {
            $(this).siblings('.comment__block-text--min').show();
            $(this).siblings('.comment__block-text--full').hide();
            $(this).text('Показать отзыв').removeClass('active');
        }
    });
    /* Подробнее 1 */
    $('.jsOpenPage1').on('click', function (e) {
        e.preventDefault();
        $(tabs1).trigger('click');
    });
    /* Подробнее 2 */
    $('.jsOpenPage2').on('click', function (e) {
        e.preventDefault();
        $(tabs2).trigger('click');
    });
    /* Подробнее 3 */
    $('.jsOpenPage3').on('click', function (e) {
        e.preventDefault();
        $(tabs3).trigger('click');
    });
    /* Подробнее 4 */
    $('.jsOpenPage4').on('click', function (e) {
        e.preventDefault();
        $(tabs4).trigger('click');
    });
    /* Подробнее 5 */
    $('.jsOpenPage5').on('click', function (e) {
        e.preventDefault();
        $(tabs5).trigger('click');
    });
    /* Подробнее 6*/
    $('.jsOpenPage6').on('click', function (e) {
        e.preventDefault();
        $(tabs6).trigger('click');
    });

    /* Клик на мобильные табы */
    $(tabs0m).on('click', function (e) {
        e.preventDefault();
        $(tabs0).trigger('click');
        // $(closeMobi).trigger('click');
    });
    $(tabs1m).on('click', function (e) {
        e.preventDefault();
        $(tabs1).trigger('click');
        // $(closeMobi).trigger('click');
    });
    $(tabs2m).on('click', function (e) {
        e.preventDefault();
        $(tabs2).trigger('click');
        // $(closeMobi).trigger('click');
    });
    $(tabs3m).on('click', function (e) {
        e.preventDefault();
        $(tabs3).trigger('click');
        // $(closeMobi).trigger('click');
    });
    $(tabs4m).on('click', function (e) {
        e.preventDefault();
        $(tabs4).trigger('click');
        // $(closeMobi).trigger('click');
    });
    $(tabs5m).on('click', function (e) {
        e.preventDefault();
        $(tabs5).trigger('click');
        // $(closeMobi).trigger('click');
    });
    $(tabs6m).on('click', function (e) {
        e.preventDefault();
        $(tabs6).trigger('click');
        // $(closeMobi).trigger('click');
    });

    $('.jsPdfPutLinzy').on('click', function () {
        console.log('нажал на PDF Put Linzy');
        ym(66929020, 'reachGoal', 'pdf_rekomendacii_kak_nadevat_i_snimat_linzy_misight_1_day');
    });

    $('.jsPdfBrochureProgram').on('click', function () {
        console.log('нажал на PDF Brochure Program');
        ym(66929020, 'reachGoal', 'pdf_znakomstvo_s_programmoy_yab_s_linzami_misight_1_day');
    });

    /* Селект */
    $('.select').on('click', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
        } else {
            $(this).addClass('open');
        }
    });

    $('.select').on('click', '.select__item', function (event) {
        event.stopPropagation();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
        $(this).closest('.select').removeClass('open');
    });

    /* Попап */
    $('.jsRecommendation').on('click', function (event) {
        event.preventDefault();
        $.magnificPopup.open({
            items: {
                src: '#modalRecommendation'
            },
            callbacks: {
                open: function () {
                    if (document.body.clientWidth > 780) {
                        $(this.container).find('.mfp-content').css({
                            'width': '650px',
                            'border-radius': '20px'
                        });
                    } else {
                        $(this.container).find('.mfp-content').css({
                            'width': '300px',
                            'border-radius': '20px'
                        });
                    }
                    $(this.container).find('.mfp-close').addClass('new-close');
                }
            }
        });
    });

    /* Делегирование */
    function toggleDone(event) {
        console.log(event.target);
        event.preventDefault();
        if (!event.target.matches('.jsSignUp')) return;
        $.magnificPopup.open({
            items: {
                src: '#modalReception'
            },
            callbacks: {
                open: function () {
                    if (document.body.clientWidth > 780) {
                        $(this.container).find('.mfp-content').css({
                            'width': '650px',
                            'border-radius': '20px'
                        });
                    } else {
                        $(this.container).find('.mfp-content').css({
                            'width': '300px',
                            'border-radius': '20px'
                        });
                    }

                    $(this.container).find('.mfp-close').addClass('new-close');
                }
            }
        });

    }
    var characterList = document.querySelector('.map__control-adress');
    characterList.addEventListener('click', toggleDone);

});

/* Как видит близоруйкий ребенок (код динозавров) */
jQuery(document).ready(function () {
    jQuery('.range-slider-cvi').jRange({
        from: 0,
        to: 6,
        step: 1,
        scale: [0, -1.00, -2.00, -3.00, -4.00, -5.00, -6.00],
        format: '%s',
        width: 500,
        showLabels: true,
        isRange: false
    });
});

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    document.getElementById("classroom").style.display = "block";
    document.getElementById("sciencelab").style.display = "none";
    document.getElementById("sportshall").style.display = "none";
}

function classroomClick() {
    var element;
    //jQuery(".classroom")[0];
    element = jQuery(".classroom")[0];
    activateElement(element);
    element = document.getElementsByClassName("classDetail")[0];
    activateElement(element);
    var removeElement;
    removeElement = document.getElementsByClassName("sciencelab")[0];
    removeElement.className = removeElement.className.replace("active", "");
    removeElement = document.getElementsByClassName("sportshall")[0];
    removeElement.className = removeElement.className.replace("active", "");
    removeElement = document.getElementsByClassName("scienceDetail")[0];
    removeElement.className = removeElement.className.replace("active", "");
    removeElement = document.getElementsByClassName("sportsDetail")[0];
    removeElement.className = removeElement.className.replace("active", "");

    document.getElementById("classroom").style.display = "block";
    document.getElementById("sciencelab").style.display = "none";
    document.getElementById("sportshall").style.display = "none";
    document.getElementById("scenarioHolder").style.display = "none";
}

function sciencelabClick() {
    var element;
    element = document.getElementsByClassName("sciencelab")[0];
    activateElement(element);
    element = document.getElementsByClassName("scienceDetail")[0];
    activateElement(element);
    var removeElement;
    removeElement = document.getElementsByClassName("classroom")[0];
    removeElement.className = removeElement.className.replace("active", "");
    removeElement = document.getElementsByClassName("sportshall")[0];
    removeElement.className = removeElement.className.replace("active", "");
    removeElement = document.getElementsByClassName("classDetail")[0];
    removeElement.className = removeElement.className.replace("active", "");
    removeElement = document.getElementsByClassName("sportsDetail")[0];
    removeElement.className = removeElement.className.replace("active", "");

    document.getElementById("sciencelab").style.display = "block";
    document.getElementById("classroom").style.display = "none";
    document.getElementById("sportshall").style.display = "none";
    document.getElementById("scenarioHolder").style.display = "none";
}

function sportshallClick() {
    var element;
    element = document.getElementsByClassName("sportshall")[0];
    activateElement(element);
    element = document.getElementsByClassName("sportsDetail")[0];
    activateElement(element);
    var removeElement;
    removeElement = document.getElementsByClassName("classroom")[0];
    removeElement.className = removeElement.className.replace("active", "");
    removeElement = document.getElementsByClassName("sciencelab")[0];
    removeElement.className = removeElement.className.replace("active", "");
    removeElement = document.getElementsByClassName("classDetail")[0];
    removeElement.className = removeElement.className.replace("active", "");
    removeElement = document.getElementsByClassName("scienceDetail")[0];
    removeElement.className = removeElement.className.replace("active", "");

    document.getElementById("sportshall").style.display = "block";
    document.getElementById("classroom").style.display = "none";
    document.getElementById("sciencelab").style.display = "none";
    document.getElementById("scenarioHolder").style.display = "none";
}

function activateElement(element) {
    var name = "active";
    var arr = element.className.split(" ");
    if (arr.indexOf(name) == -1) {
        element.className += " " + name;
    }
}

function classroomClickScenario() {
    var element;
    element = document.getElementsByClassName("classroomScenario")[0];
    activateElement(element);
    element = document.getElementsByClassName("classDetailScenario")[0];
    activateElement(element);
    var removeElement;
    removeElement = document.getElementsByClassName("sciencelabScenario")[0];
    removeElement.className = removeElement.className.replace("active", "");
    removeElement = document.getElementsByClassName("sportshallScenario")[0];
    removeElement.className = removeElement.className.replace("active", "");
    removeElement = document.getElementsByClassName("scienceDetailScenario")[0];
    removeElement.className = removeElement.className.replace("active", "");
    removeElement = document.getElementsByClassName("sportshallDetailScenario")[0];
    removeElement.className = removeElement.className.replace("active", "");

    document.getElementById("classDetailScenario").style.display = "none";
    document.getElementById("scenarioHolderScenario").style.display = "block";
    document.getElementById("scienceDetailScenario").style.display = "none";
    document.getElementById("sportshallDetailScenario").style.display = "none";
}

function sciencelabClickScenario() {
    var element;
    element = document.getElementsByClassName("sciencelabScenario")[0];
    activateElement(element);
    element = document.getElementsByClassName("scienceDetailScenario")[0];
    activateElement(element);
    var removeElement;
    removeElement = document.getElementsByClassName("classroomScenario")[0];
    removeElement.className = removeElement.className.replace("active", "");
    removeElement = document.getElementsByClassName("sportshallScenario")[0];
    removeElement.className = removeElement.className.replace("active", "");
    removeElement = document.getElementsByClassName("classDetailScenario")[0];
    removeElement.className = removeElement.className.replace("active", "");
    removeElement = document.getElementsByClassName("sportshallDetailScenario")[0];
    removeElement.className = removeElement.className.replace("active", "");

    document.getElementById("scienceDetailScenario").style.display = "block";
    document.getElementById("classDetailScenario").style.display = "none";
    document.getElementById("sportshallDetailScenario").style.display = "none";
    document.getElementById("scenarioHolderScenario").style.display = "none";
}

function sportshallClickScenario() {
    var element;
    element = document.getElementsByClassName("sportshallScenario")[0];
    activateElement(element);
    element = document.getElementsByClassName("sportshallDetailScenario")[0];
    activateElement(element);
    var removeElement;
    removeElement = document.getElementsByClassName("classroomScenario")[0];
    removeElement.className = removeElement.className.replace("active", "");
    removeElement = document.getElementsByClassName("sciencelabScenario")[0];
    removeElement.className = removeElement.className.replace("active", "");
    removeElement = document.getElementsByClassName("classDetailScenario")[0];
    removeElement.className = removeElement.className.replace("active", "");
    removeElement = document.getElementsByClassName("scienceDetailScenario")[0];
    removeElement.className = removeElement.className.replace("active", "");

    document.getElementById("sportshallDetailScenario").style.display = "block";
    document.getElementById("classDetailScenario").style.display = "none";
    document.getElementById("scienceDetailScenario").style.display = "none";
    document.getElementById("scenarioHolderScenario").style.display = "none";
}

$('.classroomScenario').on('click', function () {
    classroomClickScenario();
});
$('.sciencelabScenario').on('click', function () {
    sciencelabClickScenario();
});
$('.sportshallScenario').on('click', function () {
    sportshallClickScenario();
});