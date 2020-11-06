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
    $(tabs5).on('click', function (e, x) {
            console.log('6 вкладка');
            ga('send', 'event', 'vkladki_misight', 'click_test');
            ym(66929020, 'reachGoal', 'click_test');
    });
    $(tabs6).on('click', function () {
        console.log('вкладка с локатором');
        ga('send', 'event', 'vkladki_misight', 'click_find');
        ym(66929020, 'reachGoal', 'click_find');
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
    $('.jsPdfPutLinzy').on('click', function () {
        console.log('нажал на PDF Put Linzy');
        ym(66929020, 'reachGoal', 'pdf_rekomendacii_kak_nadevat_i_snimat_linzy_misight_1_day');
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

});

ymaps.ready(init);
    //клик по кнопке в&nbsp;мобильной версии
    jQuery('.change-location-mobile-click').click(function () {
        jQuery('.mobile__map').attr('style', 'display: none !important')
        jQuery(this).attr('style', 'display: none !important');
        jQuery('.mobile__map').attr('style', 'display: none !important');
        jQuery('.map__control-for-select').attr('style', 'display: flex !important');
    })
    
    function init() {
        //лобальная переменная с&nbsp;картой
        var myMap = 0
        var myMap2 = 0
    
        //инициализируем карту с&nbsp;текущим положением
        function create_map(coord) {
            myMap = new ymaps.Map("map", {
                center: coord,
                controls: ['zoomControl', 'typeSelector'],
                zoom: 10
            }, {
                searchControlProvider: 'yandex#search'
            })
    
            myMap2 = new ymaps.Map("map_2", {
                center: coord,
                controls: ['zoomControl', 'typeSelector'],
                zoom: 10
            }, {
                searchControlProvider: 'yandex#search'
            })
        }
    
    //Определение местоположения
        async function find_me() {
            let promise = new Promise((resolve, reject) => {
                var location = ymaps.geolocation.get({
                    provider: 'yandex'
                });
    
                // Асинхронная обработка ответа.
                location.then(
                    function (result) {
                        // Добавление местоположения на&nbsp;карту.
                        console.log(result.geoObjects['position'])
    
    
                        get_city_optik(result.geoObjects['position'])
    
    
                        //Получаем название города по полученым координатам
                        async function get_city_optik(coord) {
                            var city_name = [];
    
                            let promise = new Promise((resolve, reject) => {
                                var myGeocoder = ymaps.geocode(coord[0] + ", " + coord[1], {kind: "locality"});
                                res = myGeocoder.then(
                                    function (result) {
                                        console.log(result.geoObjects.get(0))
                                        var name = result.geoObjects.get(0).properties.get('name');
                                        try {
                                            city_name.push(name)
                                            resolve(1);
                                        } catch (err) {
                                            console.log(err);
                                        }
    
                                    }
                                );
    
                            })
                            await promise
                            try {
                                check_city_optik(city_name[0], coord)
                            } catch (err) {
                                console.log(err)
                            }
                        }
    
    //проверяем есть ли в&nbsp;этом городк оптики
                        function check_city_optik(city_name, coord) {
                            var flag = 0;
                            for (var i = 0; i < Object.keys(clinic_mass).length; i++) {
                                if (city_name == clinic_mass[Object.keys(clinic_mass)[i]]['city']) {
                                    jQuery(".select-city").closest(".select").find(".select__head").text(city_name)
                                    if (city_name === 'Москва') {
                                        jQuery(".select-oblast").closest(".select").find(".select__head").text('Москва') 
                                    }
                                    create_map(coord)
                                    add_markers()
                                    show_opik_under_map(city_name, clinic_mass, 'city')
                                    findmetro(city_name)
                                    jQuery('.mobile-map-text').append('<span>' + city_name + '</span>');
                                    resolve(1);
                                    flag = 1;
                                    break;
                                }
                            }
                            if (!flag) {
                                //если нет ставим центр карты в&nbsp;городе Москва
                                jQuery(".select-city").closest(".select").find(".select__head").text('Москва')
                                jQuery(".select-oblast").closest(".select").find(".select__head").text('Москва')
                                create_map([55.76, 37.64])
                                add_markers()
                                show_opik_under_map("Москва", clinic_mass, 'city')
                                jQuery('.mobile-map-text').append('<span>Москва</span>');
                                findmetro("Москва")
                                resolve(1);
                            }
                        }
    
    
                    },
    
    
                    function (err) {
                        console.log('Ошибка: ' + err)
                        jQuery(".select-city").closest(".select").find(".select__head").text('Москва')
                        jQuery(".select-oblast").closest(".select").find(".select__head").text('Москва')
                        create_map([55.76, 37.64])
                        add_markers()
                        show_opik_under_map("Москва", clinic_mass, 'city')
                        jQuery('.mobile-map-text').append('<span>Москва</span>');
                        findmetro("Москва")
                        resolve(1);
                    }
                );
    
            })
            await promise
        }
    
        //запускаем инициализацию карты
        find_me()
    
    
        //массив с&nbsp;данными об оптиках
        var clinic_mass = {  

            "43.018447, 44.658307": {
                Id_optika: "id0008",
                balloonContent: "Детский лечебно-диагностический центр DEAR KIDS",
                time: "10:00-19:00",
                time_weekend: "10:00-19:00",
               time_weekend_sun: "выходной",
                phone: "+7(901) 497 77 69",
                oblast: "Северная Осетия",
                city: "Владикавказ",
                rayon: "Затеречный",
                street: "пр-т Доватора 17",
                 doctor: "Дарья Смольникова, Зарета Камболова"
            },
    "55.680828, 37.535862": {
                Id_optika: "id0034",
                balloonContent: "Оптический уют",
                time: "10:00-20:00",
                time_weekend: "10:00-18:00",
               time_weekend_sun: "10:00-18:00",
                phone: "+7 499 783-52-23; +7 915 308 7774",
                oblast: "Москва",
                city: "Москва",
                rayon: "м. Университет",
                street: "пр-т Ленинский, 85",
                 doctor: "Елена  Ривкина, Елена Космачева"
            },
    "55.696575, 37.561544": {
                Id_optika: "id0035",
                balloonContent: "Оптика «Академическая»",
                time: "10:00-20:00",
                time_weekend: "10:00-20:00",
               time_weekend_sun: "10:00-20:00",
                phone: "+7 (495) 743-27-05",
                oblast: "Москва",
                city: "Москва",
                rayon: "",
                street: "пр-т Ленинский, 57",
                 doctor: "Светлана  Кондратова"
            },
    "55.682245, 37.143451": {
                Id_optika: "id0036",
                balloonContent: "Семейная оптика «Лапино»",
                time: "10:00-20:00",
                time_weekend: "10:00-20:00",
               time_weekend_sun: "10:00-20:00",
                phone: "+7 (916) 058-88-98",
                oblast: "Московская область",
                city: "Одинцово (округ)",
                rayon: "",
                street: "д. Лапино,1-е Успенское шоссе, стр.25",
                 doctor: "Анастасия  Стахеева"
            },
    "54.197468, 37.611024": {
                Id_optika: "id0037",
                balloonContent: "СПАР",
                time: "09:00-21:00",
                time_weekend: "09:00-21:00",
               time_weekend_sun: "09:00-21:00",
                phone: "+7 4872 55-40-12, +7 4872 34-34-74",
                oblast: "Тульская область",
                city: "Тула",
                rayon: "-",
                street: "ул. Советская, 8",
                 doctor: "Олеся Кукушкина, Ольга Бракоренко, Анастасия Егорова, Елена Старикова"
            },
    "55.426483, 37.501043": {
                Id_optika: "id0039",
                balloonContent: "Глаз Алмаз",
                time: "10:00-20:00",
                time_weekend: "10:00-20:00",
               time_weekend_sun: "10:00-20:00",
                phone: "+7 (915) 297-53-58",
                oblast: "Московская область",
                city: "Подольск",
                rayon: "-",
                street: "ул. Ленинградская, 7",
                 doctor: "Екатерина Сергеевна Малышева, Лариса Кислякова"
            },
    "64.558939, 40.540178": {
                Id_optika: "id0041",
                balloonContent: "Точка Зрения",
                time: "09:00-21:00",
                time_weekend: "09:00-21:00",
               time_weekend_sun: "выходной",
                phone: "+7 (8182) 24-04-02",
                oblast: "Архангельская область",
                city: "Архангельск",
                rayon: "Октябрьский",
                street: "ул. Комсомольская, 47",
                 doctor: "Оксана Макаровская"
            },
    "59.702318, 30.381607": {
                Id_optika: "id0042",
                balloonContent: "Семейный центр охраны зрения «Глазастик»",
                time: "10:00-20:00",
                time_weekend: "10:00-19:00",
               time_weekend_sun: "10:00-19:00",
                phone: "+7 812 455 45 18",
                oblast: "Санкт-Петербург",
                city: "Пушкин",
                rayon: "Пушкинский",
                street: "ул.Полковая 1/25",
                 doctor: "Виктория  Рогутская"
            },
    "59.353893, 30.064685": {
                Id_optika: "id0043",
                balloonContent: "Наша Оптика",
                time: "10:00-19:00",
                time_weekend: "10:00-19:00",
               time_weekend_sun: "10:00-19:00",
                phone: "+7 812 455 45 18",
                oblast: "Ленинградская область",
                city: "Сиверский",
                rayon: "Гатчинский",
                street: "пер. Строителей, 5",
                 doctor: "Алексей Мордвов"
            },
    "55.771980, 37.596507": {
                Id_optika: "id0059",
                balloonContent: "Оптикалнэт( Заказ Линз)",
                time: "09:00-20:30",
                time_weekend: "09:00-20:30",
               time_weekend_sun: "10:00-19:00",
                phone: "+7 495 730 52 60",
                oblast: "Москва",
                city: "Москва",
                rayon: "м. Маяковская",
                street: "ул. 3-я Тверская-Ямская, 12, стр 1",
                 doctor: "Олег  Жуков"
            },
    "51.658775, 39.194601": {
                Id_optika: "id0087",
                balloonContent: "Визио",
                time: "09:00-20:00",
                time_weekend: "10:00-20:00",
               time_weekend_sun: "10:00-18:00",
                phone: "+7 (473) 277-55-44",
                oblast: "Воронежская область",
                city: "Воронеж",
                rayon: "",
                street: "ул. Кирова, 3",
                 doctor: "Ольга Маренкова"
            },
    "50.599142, 36.580593": {
                Id_optika: "id0089",
                balloonContent: "Новая Оптика",
                time: "09:00-19:00",
                time_weekend: "09:00-19:00",
               time_weekend_sun: "09:00-19:00",
                phone: "(4722) 32-34-90",
                oblast: "Белгородская область",
                city: "Белгород",
                rayon: "",
                street: "пр-т Богдана Хмельницкого, 38",
                 doctor: "Яна Лысенко"
            },
    "50.601549, 36.589819": {
                Id_optika: "id0090",
                balloonContent: "Новая Оптика",
                time: "09:00-19:00",
                time_weekend: "09:00-19:00",
               time_weekend_sun: "09:00-19:00",
                phone: "+7(951)154-29-95",
                oblast: "Белгородская область",
                city: "Белгород",
                rayon: "",
                street: "ул. Попова, 25",
                 doctor: "Лариса Сливченко"
            },
    "51.682006, 39.216286": {
                Id_optika: "id0091",
                balloonContent: "Новые Горизонты",
                time: "08:00-19:00",
                time_weekend: "08:00-17:00",
               time_weekend_sun: "выходной",
                phone: "+7 (473) 30-03-111",
                oblast: "Воронежская область",
                city: "Воронеж",
                rayon: "",
                street: "пр-т Революции, 1в",
                 doctor: "Татьяна Агеева"
            },
    "55.772760, 37.651762": {
                Id_optika: "id0098",
                balloonContent: "Доктор Визус ( Гост-Оптика)",
                time: "09:00-20:00",
                time_weekend: "09:00-18:00",
               time_weekend_sun: "выходной",
                phone: "+7(495)699 95 95",
                oblast: "Москва",
                city: "Москва",
                rayon: "м. Комсомольская",
                street: "ул. Каланчевская, 17 стр. 1",
                 doctor: "Гульнара Андриенко"
            },
    "51.663216, 39.193801": {
                Id_optika: "id0102",
                balloonContent: "МедИнвест",
                time: "08:00-20:00",
                time_weekend: "09:00-17:00",
               time_weekend_sun: "выходной",
                phone: "+7 (473) 212-12-22",
                oblast: "Воронежская область",
                city: "Воронеж",
                rayon: "",
                street: "ул. Куколкина, 11",
                 doctor: "Евгения Черных"
            },
    
    
    
        };
    
    
    //заполняем маркеры данными из&nbsp;массива и наносим на&nbsp;карту
        function add_markers() {
            //заполняем маркеры данными из&nbsp;массива и наносим на&nbsp;карту
            for (var i = 0; i < Object.keys(clinic_mass).length; i++) {
                myMap.geoObjects.add(new ymaps.Placemark(Object.keys(clinic_mass)[i].split(","), {
                    balloonContent: clinic_mass[Object.keys(clinic_mass)[i]]['balloonContent'] + "<br>" + "Время работы(пн-пт): " + clinic_mass[Object.keys(clinic_mass)[i]]['time'] + "<br>" + "Суббота: " + clinic_mass[Object.keys(clinic_mass)[i]]['time_weekend'] + "Воскресенье: " + clinic_mass[Object.keys(clinic_mass)[i]]['time_weekend_sun'] + "<br>" + "Телефон: " + clinic_mass[Object.keys(clinic_mass)[i]]['phone'],
                }, {
                    preset: 'islands#dotIcon',
                    iconColor: '#735184'
                }))
                myMap2.geoObjects.add(new ymaps.Placemark(Object.keys(clinic_mass)[i].split(","), {
                    balloonContent: clinic_mass[Object.keys(clinic_mass)[i]]['balloonContent'] + "<br>" + "Время работы(пн-пт): " + clinic_mass[Object.keys(clinic_mass)[i]]['time'] + "<br>" + "Суббота: " + clinic_mass[Object.keys(clinic_mass)[i]]['time_weekend'] + "Воскресенье: " + clinic_mass[Object.keys(clinic_mass)[i]]['time_weekend_sun'] + "<br>" + "Телефон: " + clinic_mass[Object.keys(clinic_mass)[i]]['phone'],
                }, {
                    preset: 'islands#dotIcon',
                    iconColor: '#735184'
                }))
            }
            f2()
        }
    
    //выпадающий список с&nbsp;областями
        function f2() {
            oblast_array = {
                'Москва': [55.753215, 37.622504],
                'Санкт-Петербург': [59.938951, 30.315635],
                /*'Адыгея': [44.429866, 40.252969],
                'Алтай': [49.725608, 84.274505],
                'Алтайский': [51.820766, 85.27733],
                'Амурская': [53.413341, 127.728064],*/
                'Архангельская область': [64.539911, 40.515753],
                /*'Астраханская': [46.851463, 47.466189],*/
                /*'Башкортостан': [54.2715, 56.525537],*/
                'Белгородская область': [50.595414, 36.587268],
                // 'Брянская область': [52.909192, 33.422197],
                /*'Бурятия': [54.544222, 112.348699],
                'Владимирская': [55.904195, 40.898894],*/
                // 'Волгоградская': [49.615821, 44.151406],
                /*'Вологодская': [60.138988, 44.049618],*/
                'Воронежская область': [51.660781, 39.200269],
                /*'Дагестан': [42.259793, 47.095742],
                'Еврейская': [48.522902, 132.257612],
                'Забайкальский': [52.847258, 116.200424],
                'Ивановская': [56.967836, 41.966406],
                'Ингушетия': [43.10359, 45.054581],
                'Иркутская': [57.100294, 106.363305],
                'Кабардино-Балкарская': [43.494396, 43.408274],
                'Калининградская': [54.56009, 21.218944],
                'Калмыкия': [46.414024, 45.325701],
                'Калужская': [54.3718, 35.445185],
                'Камчатский': [55.58902, 162.313597],
                'Карачаево-Черкесская': [43.770947, 41.753928],
                'Карелия': [63.621324, 33.232608],
                'Кемеровская область - Кузбасс': [54.373525, 85.858864],*/
                /*'Забайкальский край': [52.847258, 116.200424],
                'Кировская': [58.344108, 49.69543],
                /*'Коми': [64.125463, 54.789669],*/
                /*'Костромская': [58.456003, 43.788495],
                'Краснодарский край': [45.085538, 39.044609],
                'Красноярский': [53.602873, 50.392586],
                /*'Крым': [45.389194, 33.993751],
                'Курганская': [55.448347, 64.809405],
                'Курская': [44.042582, 44.462375],*/
                'Ленинградская область': [59.939095, 30.315868],
                /*'Липецкая': [52.864468, 39.147637],
                'Магаданская': [62.575815, 154.036835],*/
                'Московская область': [55.755814, 37.617635],/*
                'Марий Эл': [56.485739, 48.197858],
                'Мордовия': [54.205758, 44.319669],*/
                /*'Мурманская': [68.004154, 35.010051],
                'Ненецкий': [67.714212, 54.365062],*/
                /*'Нижегородская': [56.595648, 44.279559],
                /*'Новгородская': [58.307715, 32.490222],
                'Новосибирская': [55.582396, 79.264861],
                'Омская': [56.103472, 73.344416],*/
                /*'Оренбургская': [52.743528, 53.498682],
                /*'Орловская': [52.781455, 36.481042],
                'Пензенская': [53.240932, 43.946823],*/
                /*'Пермский край': [57.787124, 55.729001],/*
                'Приморский': [64.892408, 40.494077],
                'Псковская': [57.236486, 29.236911],
                'Ростовская': [47.728732, 41.268128],*/
                /*'Рязанская': [54.559725, 40.950331],/*
                'Самарская': [53.452932, 50.34431],
                'Саратовская': [51.578529, 46.797223],
                'Саха /Якутия/': [65.061073, 119.845652],
                'Сахалинская': [50.150926, 142.750797],
                'Свердловская': [58.586755, 61.530761],*/
                'Северная Осетия': [43.024616, 44.681762],
                /*'Смоленская': [54.956192, 32.998543],
                'Ставропольский край': [53.249564, 49.482359],/*
                'Тамбовская': [52.474699, 41.592249],
                'Татарстан': [55.350336, 50.911013],
                'Тверская': [57.093033, 34.706195],
                'Томская': [58.949193, 78.63728],*/
                'Тульская область': [54.193122, 37.617348],/*
                'Тыва': [51.584332, 94.793085],
                'Тюменская': [57.541821, 68.096045],
                'Удмуртская': [57.166784, 52.796972],
                'Ульяновская': [53.891057, 47.606533],
                'Хабаровский': [49.654217, 134.125955],
                'Хакасия': [53.386357, 89.897078],
                'Ханты-Мансийский Автономный округ - Югра': [61.588912, 65.897508],
                'Челябинская': [54.446199, 60.395641],
                'Чеченская': [43.305784, 45.747667],
                'Чувашская Республика': [55.492023, 47.086875],
                'Чукотский': [65.982613, 174.432311],
                'Ямало-Ненецкий': [67.808603, 75.199562],
                'Ярославская': [57.817361, 39.105138]*/
            };
            for (var i = 0; i < Object.keys(oblast_array).length; i++) {
                var temp_li = jQuery('<li class = "select__item" value = "' + oblast_array[Object.keys(oblast_array)[i]] + '">' + Object.keys(oblast_array)[i] + '</li>');
                jQuery(".select-oblast").append(temp_li);
            }
            jQuery(".select-oblast li").on('click', function () {
                jQuery(".select-metro").closest(".select").addClass("hide-class")
                jQuery(".select-city").closest(".select").find(".select__input").attr("value", "город")
                jQuery(".select-city").closest(".select").find(".select__head").text("Город")
                show_opik_under_map($(this).text(), clinic_mass, 'oblast')
                f3($(this).text())
                myMap.setCenter(
                    $(this).attr("value").split(','),
                    9
                );
                myMap2.setCenter(
                    $(this).attr("value").split(','),
                    9
                );
    
            });
        }
    
    
    //запрос к&nbsp;геокодеру на&nbsp;поиск центра городов из&nbsp;массива по выбранной области
        function f3(oblast) {
    
    
    
            var city_center = []
            var flag_dop_center = false
            var temp_oblast = 'test'
            //console.log(data_city[Object.keys(data_city)[0]][0])
            for (var i = 0; i < Object.keys(clinic_mass).length; i++) {
                
                // if(oblast == 'Москва'){
                //     try {
                //         f5([['Московская область, Москва', [55.753215, 37.622504]]], clinic_mass)
                //     }
                //     catch (err) {
                //         console.log(err);
                //     }
                //     flag_dop_center = true
                //     break
                // }
                // if(oblast == 'Санкт-Петербург'){
                //     try {
                //         f5([['Ленинградская область, Санкт-Петербург', [59.938951, 30.315635]]], clinic_mass)
                //     }
                //     catch (err) {
                //         console.log(err);
                //     }
                //     flag_dop_center = true
                //     break
                // }
                if (clinic_mass[Object.keys(clinic_mass)[i]]['oblast'] == oblast) {
                    flag_dop_center = false
                    temp_oblast = oblast.split(' ')[1]
        
                    if(typeof temp_oblast === 'undefined'){
                        temp_oblast = 'test'
                    }
                    console.log(temp_oblast)
                    if(temp_oblast.trim().toLowerCase() == 'край'.trim().toLowerCase() || temp_oblast.trim().toLowerCase() == 'республика'.trim().toLowerCase()){
                        city_center.push([clinic_mass[Object.keys(clinic_mass)[i]]['oblast'] + ', ' + clinic_mass[Object.keys(clinic_mass)[i]]['city']])
                    }
                    else{
                        city_center.push([clinic_mass[Object.keys(clinic_mass)[i]]['oblast'] + ' область, ' + clinic_mass[Object.keys(clinic_mass)[i]]['city']])
                    }
                }
            }
            if(!flag_dop_center){
                f(city_center)
            }
    
            async function f(city_center) {
    
                for (var i = 0; i < city_center.length; i++) {
    
                    let promise = new Promise((resolve, reject) => {
                        var myGeocoder = ymaps.geocode(city_center[i] + ' город', i);
                        res = myGeocoder.then(
                            function (result) {
                                var coordinates = result.geoObjects.get(0).geometry.getCoordinates();
                                try {
                                    city_center[i].push(coordinates)
                                    resolve(1);
                                } catch (err) {
                                    console.log(err);
                                }
    
                            }
                        );
    
                        //console.log(res)
                    })
                    await promise
                }
                f4(city_center, clinic_mass)
            }
    
            function f4(city_center, clinic_mass) {
                try {
                    console.log(city_center)
                    f5(city_center, clinic_mass)
                } catch (err) {
                    console.log(err)
                }
            }
        }
    
        function findUnique(a) {
            for (var q=1, i=1; q<a.length; ++q) {
                if (a[q][1][0] !== a[q-1][1][0] && a[q][1][1] !== a[q-1][1][1]) {
                a[i++] = a[q];
                }
            }
    
            a.length = i;
            return a;
            }
    
    //выпадающий список с&nbsp;городами
        function f5(city_center, clinic_mass) {
            console.log(city_center)
            if (jQuery(".select-city li").length) {
                jQuery(".select-city").html('')
            }
            if (city_center.length == 0) {
                jQuery(".select-city").closest(".select").addClass("hide-class")
            } else {
                jQuery(".select-city").closest(".select").removeClass("hide-class")
            }
            city_center = findUnique(city_center);
    
    
            for (var i = 0; i < city_center.length; i++) {
                var city_temp = city_center[i][0].split(',')
                var temp_li = jQuery('<li class = "select__item" value = "' + city_center[i][1] + '">' + city_temp[city_temp.length - 1] + '</li>');
                console.log(city_temp[city_temp.length - 1]);
                jQuery(".select-city").append(temp_li);
            }
    
            jQuery(".select-city li").on('click', function () {
                show_opik_under_map($(this).text(), clinic_mass, 'city')
                findmetro($(this).text())
                myMap.setCenter(
                    $(this).attr("value").split(','),
                    11
                );
                myMap2.setCenter(
                    $(this).attr("value").split(','),
                    11
                );
            });
        }
    
    //показываем список оптик под картой
        function show_opik_under_map(geolocation, clinic_mass, region_type) {
            var data = {optiks: []}
            for (var i = 0; i < Object.keys(clinic_mass).length; i++) {
    
                if (geolocation.toUpperCase().trim() == clinic_mass[Object.keys(clinic_mass)[i]][region_type].toUpperCase().trim()) {
                    if(Object.values(clinic_mass)[i]['oblast'] == 'Москва'  || Object.values(clinic_mass)[i]['oblast'] == 'Санкт-Петербург'){
                        data['optiks'].push({
                            title: Object.values(clinic_mass)[i]['balloonContent'],
                            adress: (Object.values(clinic_mass)[i]['city'] + ", " + Object.values(clinic_mass)[i]['street']),
                            time: 'Вемя работы(пн-пт): ' + Object.values(clinic_mass)[i]['time'],
                            time_weekend: 'Суббота: ' + Object.values(clinic_mass)[i]['time_weekend'],
     time_weekend_sun: 'Воскресенье: ' + Object.values(clinic_mass)[i]['time_weekend'],
                            phone: Object.values(clinic_mass)[i]['phone'],
                            doctor: `Специалист: ${Object.values(clinic_mass)[i]['doctor']}`,
                            Id_optika: `<input class="jsIdOptika" type="hidden" value="${Object.values(clinic_mass)[i]['Id_optika']}">`,
                            coord: Object.keys(clinic_mass)[i],
                        })
                    }
                    else{
                        data['optiks'].push({
                            title: Object.values(clinic_mass)[i]['balloonContent'],
                            adress: (Object.values(clinic_mass)[i]['oblast'] + ", " + Object.values(clinic_mass)[i]['city'] + ", " + Object.values(clinic_mass)[i]['street']),
                            time: 'Вемя работы(пн-пт): ' + Object.values(clinic_mass)[i]['time'],
                            time_weekend: 'Суббота: ' + Object.values(clinic_mass)[i]['time_weekend'],
     time_weekend_sun: 'Воскресенье: ' + Object.values(clinic_mass)[i]['time_weekend'],
                            phone: Object.values(clinic_mass)[i]['phone'],
                            doctor: `Специалист: ${Object.values(clinic_mass)[i]['doctor']}`,
                            Id_optika: `<input class="jsIdOptika" type="hidden" value="${Object.values(clinic_mass)[i]['Id_optika']}">`,
                            coord: Object.keys(clinic_mass)[i],
                        })
                    }
                }
            }
    
            if (data['optiks'].length != 0) {
                if (jQuery('.optik-wrapper').text().trim() == '') {
                    jQuery('.map__control-adress').removeClass('hide-class')
                    rivets.bind(
                        jQuery('.map__control-adress'),
                        {
                            data: data
                        });
                    jQuery('.click-optik').on("click", function () {
                        console.log($(this).attr('id'));
                        myMap.setCenter(
                            $(this).attr('id').split(','),
                            18
                        );
                        myMap2.setCenter(
                            $(this).attr('id').split(','),
                            18
                        );
                    });
                } else {
                    jQuery('.map__control-adress').html('\
                    <div class="map__control-adress-block" rv-each-optiks="data.optiks">\
                        <p class="map__control-adress-block-title" rv-text="optiks.title"></p>\
                        <p class="map__control-adress-block-text" rv-text="optiks.adress"></p>\
                        <p class="map__control-adress-block-text" rv-text="optiks.time"></p>\
                        <p class="map__control-adress-block-text" rv-text="optiks.time_weekend"></p>\
                        <p class="map__control-adress-block-text" rv-text="optiks.time_weekend_sun"></p>\
                        <p class="map__control-adress-block-text" rv-text="optiks.phone"></p>\
                        <p class="map__control-adress-block-text" rv-text="optiks.doctor"></p>\
                        <input class="jsIdOptika" type="hidden" value="optiks.Id_optika">\
                        <p rv-id = "optiks.coord" class="map__control-adress-block-link jsFindAdressMap click-optik">На карте</p>\
                        </div>');
                        /*click-optik">На карте</p>\
                        <a href="#" class="map__control-adress-block-button jsSignUp">Записаться</a>\
                        </div>');*/
                    jQuery('.map__control-adress').removeClass('hide-class')
                    rivets.bind(
                        jQuery('.map__control-adress'),
                        {
                            data: data
                        });
                    jQuery('.click-optik').on("click", function () {
                        console.log($(this).attr('id'));
                        myMap.setCenter(
                            $(this).attr('id').split(','),
                            18
                        );
                        myMap2.setCenter(
                            $(this).attr('id').split(','),
                            18
                        );
                    });
                }
            } else {
    
                jQuery('.map__control-adress').html('\
                <div class="map__control-adress-block" rv-each-optiks="data.optiks">\
                    <p class="map__control-adress-block-title" rv-text="optiks.title"></p>\
                    <p class="map__control-adress-block-text" rv-text="optiks.adress"></p>\
                    <p class="map__control-adress-block-text" rv-text="optiks.time"></p>\
                    <p class="map__control-adress-block-text" rv-text="optiks.time_weekend"></p>\
                    <p class="map__control-adress-block-text" rv-text="optiks.phone"></p>\
                    <p class="map__control-adress-block-text" rv-text="optiks.doctor"></p>\
                    <input class="jsIdOptika" type="hidden" value="optiks.Id_optika">\
                    <p rv-id = "optiks.coord" class="map__control-adress-block-link jsFindAdressMap click-optik">На карте</p>\
                    </div>');
                    /*
                    click-optik">На карте</p>\
                    <a href="#" class="map__control-adress-block-button jsSignUp">Записаться</a>\
                    </div>');
                    */
                jQuery('.map__control-adress').addClass('hide-class')
            }
        }
    
    //выборка станций метро для&nbsp;выбранного города
        function findmetro(city) {
            mass = JSON.parse(getmetro())
            mass_metro_coord = []
    
            for (var i = 0; i < mass.length; i++) {
                if (Object.values(mass)[i]['name'].toUpperCase().trim() == city.toUpperCase().trim()) {
    
                    for (var z = 0; z < Object.keys(mass[i]['lines']).length; z++) {
                        for (var x = 0; x < Object.keys(Object.values(mass[i]['lines'][z])[3]).length; x++) {
                            mass_metro_coord.push({
                                key: Object.values(mass[i]['lines'][z])[3][x]['name'],
                                value: [Object.values(mass[i]['lines'][z])[3][x]['lat'], Object.values(mass[i]['lines'][z])[3][x]['lng']]
                            });
                        }
                    }
                }
            }
            console.log(mass_metro_coord)
            if (mass_metro_coord.length != 0) {
                jQuery(".select-metro").closest(".select").find(".select__input").attr("value", "Метро")
                jQuery(".select-metro").closest(".select").find(".select__head").text("Метро")
                create_combox_metro(mass_metro_coord);
            } else {
                geocode_city_area(city.trim());
            }
        }
    
    //запрос списка метро по api
        function getmetro() {
            var jqXHR = $.ajax({
                type: "GET",
                url: "https://api.hh.ru/metro",
                async: false,
                crossOrigin: null,
            });
    
            return jqXHR.responseText;
        }
    
    //выпадающий список с&nbsp;метро
        function create_combox_metro(mass_metro_coord) {
            if (jQuery(".select-metro li").length) {
                jQuery(".select-metro").html('')
            }
    
            if (mass_metro_coord.length == 0) {
                jQuery(".select-metro").closest(".select").addClass("hide-class")
            } else {
                jQuery(".select-metro").closest(".select").removeClass("hide-class")
            }
    
            for (var i = 0; i < mass_metro_coord.length; i++) {
                var temp_li = jQuery('<li class = "select__item" value = "' + Object.values(mass_metro_coord[i])[1] + '">' + Object.values(mass_metro_coord[i])[0] + '</li>');
                jQuery(".select-metro").append(temp_li);
    
            }
    
            jQuery(".select-metro li").on('click', function () {
                myMap.setCenter(
                    $(this).attr("value").split(','),
                    15
                );
                myMap2.setCenter(
                    $(this).attr("value").split(','),
                    15
                );
    
            });
        }
    
        //запрос к&nbsp;геокодеру на&nbsp;поиск центра районов города, в&nbsp;которых есть оптики
        function geocode_city_area(city) {
    
            var area_center = []
            //console.log(data_city[Object.keys(data_city)[0]][0])
            for (var i = 0; i < Object.keys(clinic_mass).length; i++) {
                if (clinic_mass[Object.keys(clinic_mass)[i]]['city'] == city) {
                    if (clinic_mass[Object.keys(clinic_mass)[i]]['rayon'] != "") {
                        area_center.push([clinic_mass[Object.keys(clinic_mass)[i]]['oblast'] + " область, " + clinic_mass[Object.keys(clinic_mass)[i]]['city'] + ", " + clinic_mass[Object.keys(clinic_mass)[i]]['rayon']])
                    }
                }
            }
            get_area_coord(area_center)
    
    
            async function get_area_coord(area_center) {
    
                for (var i = 0; i < area_center.length; i++) {
    
                    let promise = new Promise((resolve, reject) => {
                        var myGeocoder = ymaps.geocode(area_center[i], i);
                        res = myGeocoder.then(
                            function (result) {
                                var coordinates = result.geoObjects.get(0).geometry.getCoordinates();
                                try {
                                    area_center[i].push(coordinates)
                                    resolve(1);
                                } catch (err) {
                                    console.log(err);
                                }
    
                            }
                        );
    
                        //console.log(res)
                    })
                    await promise
                }
                jQuery(".select-metro").closest(".select").find(".select__input").attr("value", "Район")
                jQuery(".select-metro").closest(".select").find(".select__head").text("Район")
                create_area_list(area_center, clinic_mass)
    
            }
    
        }
    
    
    //выпадающий список с&nbsp;районами (если нет метро)
        function create_area_list(area_center, clinic_mass) {
            if (jQuery(".select-metro li").length) {
                jQuery(".select-metro").html('')
            }
    
            if (area_center.length == 0) {
                jQuery(".select-metro").closest(".select").addClass("hide-class")
            } else {
                jQuery(".select-metro").closest(".select").removeClass("hide-class")
            }
    
    
            for (var i = 0; i < area_center.length; i++) {
                temp_area_name = Object.values(area_center[i])[0].split(',')
                var temp_li = jQuery('<li class = "select__item" value = "' + Object.values(area_center[i])[1] + '">' + temp_area_name[temp_area_name.length - 1] + '</li>');
                jQuery(".select-metro").append(temp_li);
    
            }
    
            jQuery(".select-metro li").on('click', function () {
                myMap.setCenter(
                    $(this).attr("value").split(','),
                    15
                );
                myMap2.setCenter(
                    $(this).attr("value").split(','),
                    15
                );
    
            });
    
        }
    
    
    }

        (function(){function t(t,s,i,h){return new e(t,s,i,h)}function e(t,e,i,h){this.options=h||{},this.options.adapters=this.options.adapters||{},this.obj=t,this.keypath=e,this.callback=i,this.objectPath=[],this.update=this.update.bind(this),this.parse(),s(this.target=this.realize())&&this.set(!0,this.key,this.target,this.callback)}function s(t){return"object"==typeof t&&null!==t}function i(t){throw new Error("[sightglass] "+t)}t.adapters={},e.tokenize=function(t,e,s){var i,h,a=[],o={i:s,path:""};for(i=0;i<t.length;i++)h=t.charAt(i),~e.indexOf(h)?(a.push(o),o={i:h,path:""}):o.path+=h;return a.push(o),a},e.prototype.parse=function(){var s,h,a=this.interfaces();a.length||i("Must define at least one adapter interface."),~a.indexOf(this.keypath[0])?(s=this.keypath[0],h=this.keypath.substr(1)):("undefined"==typeof(s=this.options.root||t.root)&&i("Must define a default root adapter."),h=this.keypath),this.tokens=e.tokenize(h,a,s),this.key=this.tokens.pop()},e.prototype.realize=function(){var t,e=this.obj,i=!1;return this.tokens.forEach(function(h,a){s(e)?("undefined"!=typeof this.objectPath[a]?e!==(t=this.objectPath[a])&&(this.set(!1,h,t,this.update),this.set(!0,h,e,this.update),this.objectPath[a]=e):(this.set(!0,h,e,this.update),this.objectPath[a]=e),e=this.get(h,e)):(i===!1&&(i=a),(t=this.objectPath[a])&&this.set(!1,h,t,this.update))},this),i!==!1&&this.objectPath.splice(i),e},e.prototype.update=function(){var t,e;(t=this.realize())!==this.target&&(s(this.target)&&this.set(!1,this.key,this.target,this.callback),s(t)&&this.set(!0,this.key,t,this.callback),e=this.value(),this.target=t,(this.value()instanceof Function||this.value()!==e)&&this.callback())},e.prototype.value=function(){return s(this.target)?this.get(this.key,this.target):void 0},e.prototype.setValue=function(t){s(this.target)&&this.adapter(this.key).set(this.target,this.key.path,t)},e.prototype.get=function(t,e){return this.adapter(t).get(e,t.path)},e.prototype.set=function(t,e,s,i){var h=t?"observe":"unobserve";this.adapter(e)[h](s,e.path,i)},e.prototype.interfaces=function(){var e=Object.keys(this.options.adapters);return Object.keys(t.adapters).forEach(function(t){~e.indexOf(t)||e.push(t)}),e},e.prototype.adapter=function(e){return this.options.adapters[e.i]||t.adapters[e.i]},e.prototype.unobserve=function(){var t;this.tokens.forEach(function(e,s){(t=this.objectPath[s])&&this.set(!1,e,t,this.update)},this),s(this.target)&&this.set(!1,this.key,this.target,this.callback)},"undefined"!=typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd?define([],function(){return this.sightglass=t}):this.sightglass=t}).call(this);
        (function(){var t,e,i,n,r,s=function(t,e){return function(){return t.apply(e,arguments)}},o=[].slice,u={}.hasOwnProperty,l=function(t,e){function i(){this.constructor=t}for(var n in e)u.call(e,n)&&(t[n]=e[n]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},h=[].indexOf||function(t){for(var e=0,i=this.length;i>e;e++)if(e in this&&this[e]===t)return e;return-1};t={options:["prefix","templateDelimiters","rootInterface","preloadData","handler","executeFunctions"],extensions:["binders","formatters","components","adapters"],"public":{binders:{},components:{},formatters:{},adapters:{},prefix:"rv",templateDelimiters:["{","}"],rootInterface:".",preloadData:!0,executeFunctions:!1,iterationAlias:function(t){return"%"+t+"%"},handler:function(t,e,i){return this.call(t,e,i.view.models)},configure:function(e){var i,n,r,s;null==e&&(e={});for(r in e)if(s=e[r],"binders"===r||"components"===r||"formatters"===r||"adapters"===r)for(n in s)i=s[n],t[r][n]=i;else t["public"][r]=s},bind:function(e,i,n){var r;return null==i&&(i={}),null==n&&(n={}),r=new t.View(e,i,n),r.bind(),r},init:function(e,i,n){var r,s,o;if(null==n&&(n={}),null==i&&(i=document.createElement("div")),e=t["public"].components[e],s=e.template.call(this,i),s instanceof HTMLElement){for(;i.firstChild;)i.removeChild(i.firstChild);i.appendChild(s)}else i.innerHTML=s;return r=e.initialize.call(this,i,n),o=new t.View(i,r),o.bind(),o}}},window.jQuery||window.$?(i=window.jQuery||window.$,r="on"in i.prototype?["on","off"]:["bind","unbind"],e=r[0],n=r[1],t.Util={bindEvent:function(t,n,r){return i(t)[e](n,r)},unbindEvent:function(t,e,r){return i(t)[n](e,r)},getInputValue:function(t){var e;return e=i(t),"checkbox"===e.attr("type")?e.is(":checked"):e.val()}}):t.Util={bindEvent:function(){return"addEventListener"in window?function(t,e,i){return t.addEventListener(e,i,!1)}:function(t,e,i){return t.attachEvent("on"+e,i)}}(),unbindEvent:function(){return"removeEventListener"in window?function(t,e,i){return t.removeEventListener(e,i,!1)}:function(t,e,i){return t.detachEvent("on"+e,i)}}(),getInputValue:function(t){var e,i,n,r;if("checkbox"===t.type)return t.checked;if("select-multiple"===t.type){for(r=[],i=0,n=t.length;n>i;i++)e=t[i],e.selected&&r.push(e.value);return r}return t.value}},t.TypeParser=function(){function t(){}return t.types={primitive:0,keypath:1},t.parse=function(t){return/^'.*'$|^".*"$/.test(t)?{type:this.types.primitive,value:t.slice(1,-1)}:"true"===t?{type:this.types.primitive,value:!0}:"false"===t?{type:this.types.primitive,value:!1}:"null"===t?{type:this.types.primitive,value:null}:"undefined"===t?{type:this.types.primitive,value:void 0}:""===t?{type:this.types.primitive,value:void 0}:isNaN(Number(t))===!1?{type:this.types.primitive,value:Number(t)}:{type:this.types.keypath,value:t}},t}(),t.TextTemplateParser=function(){function t(){}return t.types={text:0,binding:1},t.parse=function(t,e){var i,n,r,s,o,u,l;for(u=[],s=t.length,i=0,n=0;s>n;){if(i=t.indexOf(e[0],n),0>i){u.push({type:this.types.text,value:t.slice(n)});break}if(i>0&&i>n&&u.push({type:this.types.text,value:t.slice(n,i)}),n=i+e[0].length,i=t.indexOf(e[1],n),0>i){o=t.slice(n-e[1].length),r=u[u.length-1],(null!=r?r.type:void 0)===this.types.text?r.value+=o:u.push({type:this.types.text,value:o});break}l=t.slice(n,i).trim(),u.push({type:this.types.binding,value:l}),n=i+e[1].length}return u},t}(),t.View=function(){function e(e,i,n){var r,o,u,l,h,a,p,d,c,f,b,v,m;for(this.els=e,this.models=i,null==n&&(n={}),this.update=s(this.update,this),this.publish=s(this.publish,this),this.sync=s(this.sync,this),this.unbind=s(this.unbind,this),this.bind=s(this.bind,this),this.select=s(this.select,this),this.traverse=s(this.traverse,this),this.build=s(this.build,this),this.buildBinding=s(this.buildBinding,this),this.bindingRegExp=s(this.bindingRegExp,this),this.options=s(this.options,this),this.els.jquery||this.els instanceof Array||(this.els=[this.els]),c=t.extensions,h=0,p=c.length;p>h;h++){if(o=c[h],this[o]={},n[o]){f=n[o];for(r in f)u=f[r],this[o][r]=u}b=t["public"][o];for(r in b)u=b[r],null==(l=this[o])[r]&&(l[r]=u)}for(v=t.options,a=0,d=v.length;d>a;a++)o=v[a],this[o]=null!=(m=n[o])?m:t["public"][o];this.build()}return e.prototype.options=function(){var e,i,n,r,s;for(i={},s=t.extensions.concat(t.options),n=0,r=s.length;r>n;n++)e=s[n],i[e]=this[e];return i},e.prototype.bindingRegExp=function(){return new RegExp("^"+this.prefix+"-")},e.prototype.buildBinding=function(e,i,n,r){var s,o,u,l,h,a,p;return h={},p=function(){var t,e,i,n;for(i=r.match(/((?:'[^']*')*(?:(?:[^\|']*(?:'[^']*')+[^\|']*)+|[^\|]+))|^$/g),n=[],t=0,e=i.length;e>t;t++)a=i[t],n.push(a.trim());return n}(),s=function(){var t,e,i,n;for(i=p.shift().split("<"),n=[],t=0,e=i.length;e>t;t++)o=i[t],n.push(o.trim());return n}(),l=s.shift(),h.formatters=p,(u=s.shift())&&(h.dependencies=u.split(/\s+/)),this.bindings.push(new t[e](this,i,n,l,h))},e.prototype.build=function(){var e,i,n,r,s;for(this.bindings=[],i=function(e){return function(n){var r,s,o,u,l,h,a,p,d,c,f,b,v;if(3===n.nodeType){if(l=t.TextTemplateParser,(o=e.templateDelimiters)&&(p=l.parse(n.data,o)).length&&(1!==p.length||p[0].type!==l.types.text)){for(d=0,f=p.length;f>d;d++)a=p[d],h=document.createTextNode(a.value),n.parentNode.insertBefore(h,n),1===a.type&&e.buildBinding("TextBinding",h,null,a.value);n.parentNode.removeChild(n)}}else 1===n.nodeType&&(r=e.traverse(n));if(!r)for(v=function(){var t,e,i,r;for(i=n.childNodes,r=[],t=0,e=i.length;e>t;t++)u=i[t],r.push(u);return r}(),c=0,b=v.length;b>c;c++)s=v[c],i(s)}}(this),s=this.els,n=0,r=s.length;r>n;n++)e=s[n],i(e);this.bindings.sort(function(t,e){var i,n;return((null!=(i=e.binder)?i.priority:void 0)||0)-((null!=(n=t.binder)?n.priority:void 0)||0)})},e.prototype.traverse=function(e){var i,n,r,s,o,u,l,h,a,p,d,c,f,b,v,m;for(s=this.bindingRegExp(),o="SCRIPT"===e.nodeName||"STYLE"===e.nodeName,b=e.attributes,p=0,c=b.length;c>p;p++)if(i=b[p],s.test(i.name)){if(h=i.name.replace(s,""),!(r=this.binders[h])){v=this.binders;for(u in v)a=v[u],"*"!==u&&-1!==u.indexOf("*")&&(l=new RegExp("^"+u.replace(/\*/g,".+")+"$"),l.test(h)&&(r=a))}r||(r=this.binders["*"]),r.block&&(o=!0,n=[i])}for(m=n||e.attributes,d=0,f=m.length;f>d;d++)i=m[d],s.test(i.name)&&(h=i.name.replace(s,""),this.buildBinding("Binding",e,h,i.value));return o||(h=e.nodeName.toLowerCase(),this.components[h]&&!e._bound&&(this.bindings.push(new t.ComponentBinding(this,e,h)),o=!0)),o},e.prototype.select=function(t){var e,i,n,r,s;for(r=this.bindings,s=[],i=0,n=r.length;n>i;i++)e=r[i],t(e)&&s.push(e);return s},e.prototype.bind=function(){var t,e,i,n;for(n=this.bindings,e=0,i=n.length;i>e;e++)t=n[e],t.bind()},e.prototype.unbind=function(){var t,e,i,n;for(n=this.bindings,e=0,i=n.length;i>e;e++)t=n[e],t.unbind()},e.prototype.sync=function(){var t,e,i,n;for(n=this.bindings,e=0,i=n.length;i>e;e++)t=n[e],"function"==typeof t.sync&&t.sync()},e.prototype.publish=function(){var t,e,i,n;for(n=this.select(function(t){var e;return null!=(e=t.binder)?e.publishes:void 0}),e=0,i=n.length;i>e;e++)t=n[e],t.publish()},e.prototype.update=function(t){var e,i,n,r,s,o;null==t&&(t={});for(i in t)n=t[i],this.models[i]=n;for(o=this.bindings,r=0,s=o.length;s>r;r++)e=o[r],"function"==typeof e.update&&e.update(t)},e}(),t.Binding=function(){function e(t,e,i,n,r){this.view=t,this.el=e,this.type=i,this.keypath=n,this.options=null!=r?r:{},this.getValue=s(this.getValue,this),this.update=s(this.update,this),this.unbind=s(this.unbind,this),this.bind=s(this.bind,this),this.publish=s(this.publish,this),this.sync=s(this.sync,this),this.set=s(this.set,this),this.eventHandler=s(this.eventHandler,this),this.formattedValue=s(this.formattedValue,this),this.parseFormatterArguments=s(this.parseFormatterArguments,this),this.parseTarget=s(this.parseTarget,this),this.observe=s(this.observe,this),this.setBinder=s(this.setBinder,this),this.formatters=this.options.formatters||[],this.dependencies=[],this.formatterObservers={},this.model=void 0,this.setBinder()}return e.prototype.setBinder=function(){var t,e,i,n;if(!(this.binder=this.view.binders[this.type])){n=this.view.binders;for(t in n)i=n[t],"*"!==t&&-1!==t.indexOf("*")&&(e=new RegExp("^"+t.replace(/\*/g,".+")+"$"),e.test(this.type)&&(this.binder=i,this.args=new RegExp("^"+t.replace(/\*/g,"(.+)")+"$").exec(this.type),this.args.shift()))}return this.binder||(this.binder=this.view.binders["*"]),this.binder instanceof Function?this.binder={routine:this.binder}:void 0},e.prototype.observe=function(e,i,n){return t.sightglass(e,i,n,{root:this.view.rootInterface,adapters:this.view.adapters})},e.prototype.parseTarget=function(){var e;return e=t.TypeParser.parse(this.keypath),e.type===t.TypeParser.types.primitive?this.value=e.value:(this.observer=this.observe(this.view.models,this.keypath,this.sync),this.model=this.observer.target)},e.prototype.parseFormatterArguments=function(e,i){var n,r,s,o,u,l,h;for(e=function(){var i,n,s;for(s=[],i=0,n=e.length;n>i;i++)r=e[i],s.push(t.TypeParser.parse(r));return s}(),o=[],n=l=0,h=e.length;h>l;n=++l)r=e[n],o.push(r.type===t.TypeParser.types.primitive?r.value:((u=this.formatterObservers)[i]||(u[i]={}),(s=this.formatterObservers[i][n])?void 0:(s=this.observe(this.view.models,r.value,this.sync),this.formatterObservers[i][n]=s),s.value()));return o},e.prototype.formattedValue=function(t){var e,i,n,r,s,u,l,h,a;for(h=this.formatters,i=u=0,l=h.length;l>u;i=++u)n=h[i],e=n.match(/[^\s']+|'([^']|'[^\s])*'|"([^"]|"[^\s])*"/g),r=e.shift(),n=this.view.formatters[r],s=this.parseFormatterArguments(e,i),(null!=n?n.read:void 0)instanceof Function?t=(a=n.read).call.apply(a,[this.model,t].concat(o.call(s))):n instanceof Function&&(t=n.call.apply(n,[this.model,t].concat(o.call(s))));return t},e.prototype.eventHandler=function(t){var e,i;return i=(e=this).view.handler,function(n){return i.call(t,this,n,e)}},e.prototype.set=function(e){var i;return e=e instanceof Function&&!this.binder["function"]&&t["public"].executeFunctions?this.formattedValue(e.call(this.model)):this.formattedValue(e),null!=(i=this.binder.routine)?i.call(this,this.el,e):void 0},e.prototype.sync=function(){var t,e;return this.set(function(){var i,n,r,s,o,u,l;if(this.observer){if(this.model!==this.observer.target){for(o=this.dependencies,i=0,r=o.length;r>i;i++)e=o[i],e.unobserve();if(this.dependencies=[],null!=(this.model=this.observer.target)&&(null!=(u=this.options.dependencies)?u.length:void 0))for(l=this.options.dependencies,n=0,s=l.length;s>n;n++)t=l[n],e=this.observe(this.model,t,this.sync),this.dependencies.push(e)}return this.observer.value()}return this.value}.call(this))},e.prototype.publish=function(){var t,e,i,n,r,s,u,l,h,a,p,d,c;if(this.observer){for(l=this.getValue(this.el),s=this.formatters.length-1,p=this.formatters.slice(0).reverse(),i=h=0,a=p.length;a>h;i=++h)n=p[i],e=s-i,t=n.split(/\s+/),r=t.shift(),u=this.parseFormatterArguments(t,e),(null!=(d=this.view.formatters[r])?d.publish:void 0)&&(l=(c=this.view.formatters[r]).publish.apply(c,[l].concat(o.call(u))));return this.observer.setValue(l)}},e.prototype.bind=function(){var t,e,i,n,r,s,o;if(this.parseTarget(),null!=(r=this.binder.bind)&&r.call(this,this.el),null!=this.model&&(null!=(s=this.options.dependencies)?s.length:void 0))for(o=this.options.dependencies,i=0,n=o.length;n>i;i++)t=o[i],e=this.observe(this.model,t,this.sync),this.dependencies.push(e);return this.view.preloadData?this.sync():void 0},e.prototype.unbind=function(){var t,e,i,n,r,s,o,u,l,h;for(null!=(o=this.binder.unbind)&&o.call(this,this.el),null!=(u=this.observer)&&u.unobserve(),l=this.dependencies,r=0,s=l.length;s>r;r++)n=l[r],n.unobserve();this.dependencies=[],h=this.formatterObservers;for(i in h){e=h[i];for(t in e)n=e[t],n.unobserve()}return this.formatterObservers={}},e.prototype.update=function(t){var e,i;return null==t&&(t={}),this.model=null!=(e=this.observer)?e.target:void 0,null!=(i=this.binder.update)?i.call(this,t):void 0},e.prototype.getValue=function(e){return this.binder&&null!=this.binder.getValue?this.binder.getValue.call(this,e):t.Util.getInputValue(e)},e}(),t.ComponentBinding=function(e){function i(e,i,n){var r,o,u,l,a,p,d,c;for(this.view=e,this.el=i,this.type=n,this.unbind=s(this.unbind,this),this.bind=s(this.bind,this),this.locals=s(this.locals,this),this.component=this.view.components[this.type],this["static"]={},this.observers={},this.upstreamObservers={},o=e.bindingRegExp(),d=this.el.attributes||[],a=0,p=d.length;p>a;a++)r=d[a],o.test(r.name)||(u=this.camelCase(r.name),l=t.TypeParser.parse(r.value),h.call(null!=(c=this.component["static"])?c:[],u)>=0?this["static"][u]=r.value:l.type===t.TypeParser.types.primitive?this["static"][u]=l.value:this.observers[u]=r.value)}return l(i,e),i.prototype.sync=function(){},i.prototype.update=function(){},i.prototype.publish=function(){},i.prototype.locals=function(){var t,e,i,n,r,s;i={},r=this["static"];for(t in r)n=r[t],i[t]=n;s=this.observers;for(t in s)e=s[t],i[t]=e.value();return i},i.prototype.camelCase=function(t){return t.replace(/-([a-z])/g,function(t){return t[1].toUpperCase()})},i.prototype.bind=function(){var e,i,n,r,s,o,u,l,h,a,p,d,c,f,b,v,m,y,g,w;if(!this.bound){f=this.observers;for(i in f)n=f[i],this.observers[i]=this.observe(this.view.models,n,function(t){return function(e){return function(){return t.componentView.models[e]=t.observers[e].value()}}}(this).call(this,i));this.bound=!0}if(null!=this.componentView)this.componentView.bind();else{for(this.el.innerHTML=this.component.template.call(this),u=this.component.initialize.call(this,this.el,this.locals()),this.el._bound=!0,o={},b=t.extensions,a=0,d=b.length;d>a;a++){if(s=b[a],o[s]={},this.component[s]){v=this.component[s];for(e in v)l=v[e],o[s][e]=l}m=this.view[s];for(e in m)l=m[e],null==(h=o[s])[e]&&(h[e]=l)}for(y=t.options,p=0,c=y.length;c>p;p++)s=y[p],o[s]=null!=(g=this.component[s])?g:this.view[s];this.componentView=new t.View(Array.prototype.slice.call(this.el.childNodes),u,o),this.componentView.bind(),w=this.observers;for(i in w)r=w[i],this.upstreamObservers[i]=this.observe(this.componentView.models,i,function(t){return function(e,i){return function(){return i.setValue(t.componentView.models[e])}}}(this).call(this,i,r))}},i.prototype.unbind=function(){var t,e,i,n,r;i=this.upstreamObservers;for(t in i)e=i[t],e.unobserve();n=this.observers;for(t in n)e=n[t],e.unobserve();return null!=(r=this.componentView)?r.unbind.call(this):void 0},i}(t.Binding),t.TextBinding=function(t){function e(t,e,i,n,r){this.view=t,this.el=e,this.type=i,this.keypath=n,this.options=null!=r?r:{},this.sync=s(this.sync,this),this.formatters=this.options.formatters||[],this.dependencies=[],this.formatterObservers={}}return l(e,t),e.prototype.binder={routine:function(t,e){return t.data=null!=e?e:""}},e.prototype.sync=function(){return e.__super__.sync.apply(this,arguments)},e}(t.Binding),t["public"].binders.text=function(t,e){return null!=t.textContent?t.textContent=null!=e?e:"":t.innerText=null!=e?e:""},t["public"].binders.html=function(t,e){return t.innerHTML=null!=e?e:""},t["public"].binders.show=function(t,e){return t.style.display=e?"":"none"},t["public"].binders.hide=function(t,e){return t.style.display=e?"none":""},t["public"].binders.enabled=function(t,e){return t.disabled=!e},t["public"].binders.disabled=function(t,e){return t.disabled=!!e},t["public"].binders.checked={publishes:!0,priority:2e3,bind:function(e){return t.Util.bindEvent(e,"change",this.publish)},unbind:function(e){return t.Util.unbindEvent(e,"change",this.publish)},routine:function(t,e){var i;return t.checked="radio"===t.type?(null!=(i=t.value)?i.toString():void 0)===(null!=e?e.toString():void 0):!!e}},t["public"].binders.unchecked={publishes:!0,priority:2e3,bind:function(e){return t.Util.bindEvent(e,"change",this.publish)},unbind:function(e){return t.Util.unbindEvent(e,"change",this.publish)},routine:function(t,e){var i;return t.checked="radio"===t.type?(null!=(i=t.value)?i.toString():void 0)!==(null!=e?e.toString():void 0):!e}},t["public"].binders.value={publishes:!0,priority:3e3,bind:function(e){return"INPUT"!==e.tagName||"radio"!==e.type?(this.event="SELECT"===e.tagName?"change":"input",t.Util.bindEvent(e,this.event,this.publish)):void 0},unbind:function(e){return"INPUT"!==e.tagName||"radio"!==e.type?t.Util.unbindEvent(e,this.event,this.publish):void 0},routine:function(t,e){var n,r,s,o,u,l,a;if("INPUT"===t.tagName&&"radio"===t.type)return t.setAttribute("value",e);if(null!=window.jQuery){if(t=i(t),(null!=e?e.toString():void 0)!==(null!=(o=t.val())?o.toString():void 0))return t.val(null!=e?e:"")}else if("select-multiple"===t.type){if(null!=e){for(a=[],r=0,s=t.length;s>r;r++)n=t[r],a.push(n.selected=(u=n.value,h.call(e,u)>=0));return a}}else if((null!=e?e.toString():void 0)!==(null!=(l=t.value)?l.toString():void 0))return t.value=null!=e?e:""}},t["public"].binders["if"]={block:!0,priority:4e3,bind:function(t){var e,i;return null==this.marker?(e=[this.view.prefix,this.type].join("-").replace("--","-"),i=t.getAttribute(e),this.marker=document.createComment(" rivets: "+this.type+" "+i+" "),this.bound=!1,t.removeAttribute(e),t.parentNode.insertBefore(this.marker,t),t.parentNode.removeChild(t)):void 0},unbind:function(){return this.nested?(this.nested.unbind(),this.bound=!1):void 0},routine:function(e,i){var n,r,s,o;if(!!i==!this.bound){if(i){s={},o=this.view.models;for(n in o)r=o[n],s[n]=r;return(this.nested||(this.nested=new t.View(e,s,this.view.options()))).bind(),this.marker.parentNode.insertBefore(e,this.marker.nextSibling),this.bound=!0}return e.parentNode.removeChild(e),this.nested.unbind(),this.bound=!1}},update:function(t){var e;return null!=(e=this.nested)?e.update(t):void 0}},t["public"].binders.unless={block:!0,priority:4e3,bind:function(e){return t["public"].binders["if"].bind.call(this,e)},unbind:function(){return t["public"].binders["if"].unbind.call(this)},routine:function(e,i){return t["public"].binders["if"].routine.call(this,e,!i)},update:function(e){return t["public"].binders["if"].update.call(this,e)}},t["public"].binders["on-*"]={"function":!0,priority:1e3,unbind:function(e){return this.handler?t.Util.unbindEvent(e,this.args[0],this.handler):void 0},routine:function(e,i){return this.handler&&t.Util.unbindEvent(e,this.args[0],this.handler),t.Util.bindEvent(e,this.args[0],this.handler=this.eventHandler(i))}},t["public"].binders["each-*"]={block:!0,priority:4e3,bind:function(t){var e,i,n,r,s;if(null==this.marker)e=[this.view.prefix,this.type].join("-").replace("--","-"),this.marker=document.createComment(" rivets: "+this.type+" "),this.iterated=[],t.removeAttribute(e),t.parentNode.insertBefore(this.marker,t),t.parentNode.removeChild(t);else for(s=this.iterated,n=0,r=s.length;r>n;n++)i=s[n],i.bind()},unbind:function(){var t,e,i,n;if(null!=this.iterated)for(n=this.iterated,e=0,i=n.length;i>e;e++)t=n[e],t.unbind()},routine:function(e,i){var n,r,s,o,u,l,h,a,p,d,c,f,b,v,m,y,g,w,k,x;if(h=this.args[0],i=i||[],this.iterated.length>i.length)for(w=Array(this.iterated.length-i.length),f=0,m=w.length;m>f;f++)s=w[f],c=this.iterated.pop(),c.unbind(),this.marker.parentNode.removeChild(c.els[0]);for(o=b=0,y=i.length;y>b;o=++b)if(l=i[o],r={index:o},r[t["public"].iterationAlias(h)]=o,r[h]=l,null==this.iterated[o]){k=this.view.models;for(u in k)l=k[u],null==r[u]&&(r[u]=l);p=this.iterated.length?this.iterated[this.iterated.length-1].els[0]:this.marker,a=this.view.options(),a.preloadData=!0,d=e.cloneNode(!0),c=new t.View(d,r,a),c.bind(),this.iterated.push(c),this.marker.parentNode.insertBefore(d,p.nextSibling)}else this.iterated[o].models[h]!==l&&this.iterated[o].update(r);if("OPTION"===e.nodeName)for(x=this.view.bindings,v=0,g=x.length;g>v;v++)n=x[v],n.el===this.marker.parentNode&&"value"===n.type&&n.sync()},update:function(t){var e,i,n,r,s,o,u;e={};for(i in t)n=t[i],i!==this.args[0]&&(e[i]=n);for(u=this.iterated,s=0,o=u.length;o>s;s++)r=u[s],r.update(e)}},t["public"].binders["class-*"]=function(t,e){var i;return i=" "+t.className+" ",!e==(-1!==i.indexOf(" "+this.args[0]+" "))?t.className=e?""+t.className+" "+this.args[0]:i.replace(" "+this.args[0]+" "," ").trim():void 0},t["public"].binders["*"]=function(t,e){return null!=e?t.setAttribute(this.type,e):t.removeAttribute(this.type)},t["public"].formatters.call=function(){var t,e;return e=arguments[0],t=2<=arguments.length?o.call(arguments,1):[],e.call.apply(e,[this].concat(o.call(t)))},t["public"].adapters["."]={id:"_rv",counter:0,weakmap:{},weakReference:function(t){var e,i,n;return t.hasOwnProperty(this.id)||(e=this.counter++,Object.defineProperty(t,this.id,{value:e})),(i=this.weakmap)[n=t[this.id]]||(i[n]={callbacks:{}})},cleanupWeakReference:function(t,e){return Object.keys(t.callbacks).length||t.pointers&&Object.keys(t.pointers).length?void 0:delete this.weakmap[e]},stubFunction:function(t,e){var i,n,r;return n=t[e],i=this.weakReference(t),r=this.weakmap,t[e]=function(){var e,s,o,u,l,h,a,p,d,c;u=n.apply(t,arguments),a=i.pointers;for(o in a)for(s=a[o],c=null!=(p=null!=(d=r[o])?d.callbacks[s]:void 0)?p:[],l=0,h=c.length;h>l;l++)e=c[l],e();return u}},observeMutations:function(t,e,i){var n,r,s,o,u,l;if(Array.isArray(t)){if(s=this.weakReference(t),null==s.pointers)for(s.pointers={},r=["push","pop","shift","unshift","sort","reverse","splice"],u=0,l=r.length;l>u;u++)n=r[u],this.stubFunction(t,n);if(null==(o=s.pointers)[e]&&(o[e]=[]),h.call(s.pointers[e],i)<0)return s.pointers[e].push(i)}},unobserveMutations:function(t,e,i){var n,r,s;return Array.isArray(t)&&null!=t[this.id]&&(r=this.weakmap[t[this.id]])&&(s=r.pointers[e])?((n=s.indexOf(i))>=0&&s.splice(n,1),s.length||delete r.pointers[e],this.cleanupWeakReference(r,t[this.id])):void 0},observe:function(t,e,i){var n,r,s;return n=this.weakReference(t).callbacks,null==n[e]&&(n[e]=[],r=Object.getOwnPropertyDescriptor(t,e),(null!=r?r.get:void 0)||(null!=r?r.set:void 0)||(s=t[e],Object.defineProperty(t,e,{enumerable:!0,get:function(){return s},set:function(i){return function(r){var o,u,l,a,p;if(r!==s&&(i.unobserveMutations(s,t[i.id],e),s=r,u=i.weakmap[t[i.id]])){if(n=u.callbacks,n[e])for(p=n[e].slice(),l=0,a=p.length;a>l;l++)o=p[l],h.call(n[e],o)>=0&&o();return i.observeMutations(r,t[i.id],e)}}}(this)}))),h.call(n[e],i)<0&&n[e].push(i),this.observeMutations(t[e],t[this.id],e)},unobserve:function(t,e,i){var n,r,s;return(s=this.weakmap[t[this.id]])&&(n=s.callbacks[e])?((r=n.indexOf(i))>=0&&(n.splice(r,1),n.length||(delete s.callbacks[e],this.unobserveMutations(t[e],t[this.id],e))),this.cleanupWeakReference(s,t[this.id])):void 0},get:function(t,e){return t[e]},set:function(t,e,i){return t[e]=i}},t.factory=function(e){return t.sightglass=e,t["public"]._=t,t["public"]},"object"==typeof("undefined"!=typeof module&&null!==module?module.exports:void 0)?module.exports=t.factory(require("sightglass")):"function"==typeof define&&define.amd?define(["sightglass"],function(e){return this.rivets=t.factory(e)}):this.rivets=t.factory(sightglass)}).call(this);
