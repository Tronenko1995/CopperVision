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

        '43.018447, 44.658307': {
            Id_optika: '0008',
            balloonContent: 'Детский лечебно-диагностический цетрн DEAR KIDS',
            time: '10:00-19:00',
            time_weekend: '10:00-19:00',
           time_weekend_sun: 'выходной',
            phone: '+7(901) 497 77 69',
            oblast: 'Северная Осетия',
            city: 'Владикавказ',
            rayon: 'Затеречный',
            street: 'пр-т Доватора 17',
             doctor: 'Дарья Смольникова, Зарета Камболова'
        },

'55.680828, 37.535862': {
            Id_optika: '0034',
            balloonContent: 'Оптический уют',
            time: '10:00-20:00',
            time_weekend: '10:00-18:00',
           time_weekend_sun: '10:00-18:00',
            phone: '+7 499 783-52-23; +7 915 308 7774',
            oblast: 'Москва',
            city: 'Москва',
            rayon: 'Университет',
            street: 'пр-т Ленинский, 85',
             doctor: 'Елена  Ривкина, Елена Космачева'
        },

'55.696575, 37.561544': {
            Id_optika: '0035',
            balloonContent: 'Оптика "Академическая"',
            time: '10:00-20:00',
            time_weekend: '10:00-20:00',
           time_weekend_sun: '10:00-20:00',
            phone: '+7 (495) 743-27-05',
            oblast: 'Москва',
            city: 'Москва',
            rayon: '',
            street: 'пр-т Ленинский, 57',
             doctor: 'Светлана  Кондратова'
        },

'55.682245, 37.143451': {
            Id_optika: '0036',
            balloonContent: 'Семейная оптика "Лапино"',
            time: '10:00-20:00',
            time_weekend: '10:00-20:00',
           time_weekend_sun: '10:00-20:00',
            phone: '+7 (916) 058-88-98',
            oblast: 'Московская область',
            city: 'Одинцово (округ)',
            rayon: '',
            street: 'д. Лапино,1-е Успенское шоссе, стр.25',
             doctor: 'Анастасия  Стахеева'
        },

'54.197468, 37.611024': {
            Id_optika: '0037',
            balloonContent: 'СПАР',
            time: '09:00-21:00',
            time_weekend: '09:00-21:00',
           time_weekend_sun: '09:00-21:00',
            phone: '+7 4872 55-40-12, +7 4872 34-34-74',
            oblast: 'Тульская область',
            city: 'Тула',
            rayon: '',
            street: 'ул. Советская, 8',
             doctor: 'Олеся Кукушкина, Ольга Бракоренко, Анастасия Егорова, Елена Старикова'
        },

'55.426483, 37.501043': {
            Id_optika: '0039',
            balloonContent: 'Глаз Алмаз',
            time: '10:00-20:00',
            time_weekend: '10:00-20:00',
           time_weekend_sun: '10:00-20:00',
            phone: '+7 (915) 297-53-58',
            oblast: 'Московская область',
            city: 'Подольск',
            rayon: '',
            street: 'ул. Ленинградская, 7',
             doctor: 'Екатерина Сергеевна Малышева, Лариса Кислякова'
        },

'64.558939, 40.540178': {
            Id_optika: '0041',
            balloonContent: 'Точка Зрения',
            time: '09:00-21:00',
            time_weekend: '09:00-21:00',
           time_weekend_sun: 'выходной',
            phone: '+7 (8182) 24-04-02',
            oblast: 'Архангельская область',
            city: 'Архангельск',
            rayon: 'Октябрьский',
            street: 'ул. Комсомольская, 47',
             doctor: 'Оксана Макаровская'
        },

'59.702318, 30.381607': {
            Id_optika: '0042',
            balloonContent: 'Семейный центр охраны зрения "Глазастик"',
            time: '10:00-20:00',
            time_weekend: '10:00-19:00',
           time_weekend_sun: '10:00-19:00',
            phone: '+7 812 455 45 18',
            oblast: 'Ленинградская область',
            city: 'Пушкин',
            rayon: 'Пушкинский',
            street: 'ул.Полковая 1/25',
             doctor: 'Виктория  Рогутская'
        },

'59.353893, 30.064685': {
            Id_optika: '0043',
            balloonContent: 'Наша Оптика',
            time: '10:00-19:00',
            time_weekend: '10:00-19:00',
           time_weekend_sun: '10:00-19:00',
            phone: '+7 812 455 45 18',
            oblast: 'Ленинградская область',
            city: 'Сиверский',
            rayon: 'Гатчинский',
            street: 'пер. Строителей, 5',
             doctor: 'Алексей Мордвов'
        },

'55.771980, 37.596507': {
            Id_optika: '0059',
            balloonContent: 'Оптикалнэт( Заказ Линз)',
            time: '09:00-20:30',
            time_weekend: '09:00-20:30',
           time_weekend_sun: '10:00-19:00',
            phone: '+7 495 730 52 60',
            oblast: 'Москва',
            city: 'Москва',
            rayon: 'Маяковская',
            street: 'ул. 3-я Тверская-Ямская, 12, стр 1',
             doctor: 'Олег  Жуков'
        },

'51.658775, 39.194601': {
            Id_optika: '0087',
            balloonContent: 'Визио',
            time: '09:00-20:00',
            time_weekend: '10:00-20:00',
           time_weekend_sun: '10:00-18:00',
            phone: '+7 (473) 277-55-44',
            oblast: 'Воронежская область',
            city: 'Воронеж',
            rayon: '',
            street: 'ул. Кирова, 3',
             doctor: 'Ольга Маренкова'
        },

'50.599142, 36.580593': {
            Id_optika: '0089',
            balloonContent: 'Новая Оптика',
            time: '09:00-19:00',
            time_weekend: '09:00-19:00',
           time_weekend_sun: '09:00-19:00',
            phone: '(4722) 32-34-90',
            oblast: 'Белгородская область',
            city: 'Белгород',
            rayon: '',
            street: 'пр-т Богдана Хмельницкого, 38',
             doctor: 'Яна Лысенко'
        },

'50.601549, 36.589819': {
            Id_optika: '0090',
            balloonContent: 'Новая Оптика',
            time: '09:00-19:00',
            time_weekend: '09:00-19:00',
           time_weekend_sun: '09:00-19:00',
            phone: '+7(951)154-29-95',
            oblast: 'Белгородская область',
            city: 'Белгород',
            rayon: '',
            street: 'ул. Попова, 25',
             doctor: 'Лариса Сливченко'
        },

'51.682006, 39.216286': {
            Id_optika: '0091',
            balloonContent: 'Новые Горизонты',
            time: '08:00-19:00',
            time_weekend: '08:00-17:00',
           time_weekend_sun: 'выходной',
            phone: '+7 (473) 30-03-111',
            oblast: 'Воронежская область',
            city: 'Воронеж',
            rayon: '',
            street: 'пр-т Революции, 1в',
             doctor: 'Татьяна Агеева'
        },

'55.772760, 37.651762': {
            Id_optika: '0098',
            balloonContent: 'Доктор Визус ( Гост-Оптика)',
            time: '09:00-20:00',
            time_weekend: '09:00-18:00',
           time_weekend_sun: 'выходной',
            phone: '+7(495)699 95 95',
            oblast: 'Москва',
            city: 'Москва',
            rayon: 'Комсомольская',
            street: 'ул. Каланчевская, 17 стр. 1',
             doctor: 'Гульнара Анддриенко'
        },

'51.663216, 39.193801': {
            Id_optika: '0102',
            balloonContent: 'МедИнвест',
            time: '08:00-20:00',
            time_weekend: '09:00-17:00',
           time_weekend_sun: 'выходной',
            phone: '+7 (473) 212-12-22',
            oblast: 'Воронежская область',
            city: 'Воронеж',
            rayon: '',
            street: 'ул. Куколкина, 11',
             doctor: 'Евгения Черных'
        }




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
        oblast_array_curent = {};
        oblast_array_main = {
            'Москва': [55.753215, 37.622504],
            'Санкт-Петербург': [59.938951, 30.315635],
            'Адыгея': [44.429866, 40.252969],
            'Алтай': [49.725608, 84.274505],
            'Алтайский': [51.820766, 85.27733],
            'Амурская область': [53.413341, 127.728064],
            'Архангельская область': [64.539911, 40.515753],
            'Астраханская область': [46.851463, 47.466189],
            'Башкортостан': [54.2715, 56.525537],
            'Белгородская область': [50.595414, 36.587268],
            'Брянская область': [52.909192, 33.422197],
            'Бурятия': [54.544222, 112.348699],
            'Владимирская область': [55.904195, 40.898894],
            'Волгоградская область': [49.615821, 44.151406],
            'Вологодская область': [60.138988, 44.049618],
            'Воронежская область': [51.660781, 39.200269],
            'Дагестан': [42.259793, 47.095742],
            'Еврейская область': [48.522902, 132.257612],
            'Забайкальский': [52.847258, 116.200424],
            'Ивановская область': [56.967836, 41.966406],
            'Ингушетия': [43.10359, 45.054581],
            'Иркутская область': [57.100294, 106.363305],
            'Кабардино-Балкарская область': [43.494396, 43.408274],
            'Калининградская область': [54.56009, 21.218944],
            'Калмыкия': [46.414024, 45.325701],
            'Калужская область': [54.3718, 35.445185],
            'Камчатский': [55.58902, 162.313597],
            'Карачаево-Черкесская область': [43.770947, 41.753928],
            'Карелия': [63.621324, 33.232608],
            'Кемеровская область - Кузбасс': [54.373525, 85.858864],
            'Забайкальский край': [52.847258, 116.200424],
            'Кировская область': [58.344108, 49.69543],
            'Коми': [64.125463, 54.789669],
            'Костромская область': [58.456003, 43.788495],
            'Краснодарский край': [45.085538, 39.044609],
            'Красноярский область': [53.602873, 50.392586],
            'Крым': [45.389194, 33.993751],
            'Курганская область': [55.448347, 64.809405],
            'Курская область': [44.042582, 44.462375],
            'Ленинградская область': [59.939095, 30.315868],
            'Липецкая область': [52.864468, 39.147637],
            'Магаданская область': [62.575815, 154.036835],
            'Московская область': [55.755814, 37.617635],
            'Марий Эл': [56.485739, 48.197858],
            'Мордовия': [54.205758, 44.319669],
            'Мурманская область': [68.004154, 35.010051],
            'Ненецкий': [67.714212, 54.365062],
            'Нижегородская область': [56.595648, 44.279559],
            'Новгородская область': [58.307715, 32.490222],
            'Новосибирская область': [55.582396, 79.264861],
            'Омская область': [56.103472, 73.344416],
            'Оренбургская область': [52.743528, 53.498682],
            'Орловская область': [52.781455, 36.481042],
            'Пензенская область': [53.240932, 43.946823],
            'Пермский край': [57.787124, 55.729001],
            'Приморский': [64.892408, 40.494077],
            'Псковская область': [57.236486, 29.236911],
            'Ростовская область': [47.728732, 41.268128],
            'Рязанская область': [54.559725, 40.950331],
            'Самарская область': [53.452932, 50.34431],
            'Саратовская область': [51.578529, 46.797223],
            'Саха /Якутия/': [65.061073, 119.845652],
            'Сахалинская область': [50.150926, 142.750797],
            'Свердловская область': [58.586755, 61.530761],
            'Северная Осетия': [43.024616, 44.681762],
            'Смоленская область': [54.956192, 32.998543],
            'Ставропольский край': [53.249564, 49.482359],
            'Тамбовская область': [52.474699, 41.592249],
            'Татарстан': [55.350336, 50.911013],
            'Тверская область': [57.093033, 34.706195],
            'Томская область': [58.949193, 78.63728],
            'Тульская область': [54.193122, 37.617348],
            'Тыва': [51.584332, 94.793085],
            'Тюменская область': [57.541821, 68.096045],
            'Удмуртская': [57.166784, 52.796972],
            'Ульяновская область': [53.891057, 47.606533],
            'Хабаровский область': [49.654217, 134.125955],
            'Хакасия': [53.386357, 89.897078],
            'Ханты-Мансийский Автономный округ - Югра': [61.588912, 65.897508],
            'Челябинская  область': [54.446199, 60.395641],
            'Чеченская  область': [43.305784, 45.747667],
            'Чувашская Республика': [55.492023, 47.086875],
            'Чукотский': [65.982613, 174.432311],
            'Ямало-Ненецкий': [67.808603, 75.199562],
            'Ярославская  область': [57.817361, 39.105138]
        };
        /*заполняем массив областями в которых есть оптики*/
        for (var i = 0; i < Object.keys(clinic_mass).length; i++) {
            var temp = check_oblast_array(oblast_array_main, clinic_mass[Object.keys(clinic_mass)[i]]['oblast']) 
            if(temp != null) {
                oblast_array_curent[temp] = oblast_array_main[temp]
            }
            
        }

        function check_oblast_array(oblast_array_main, value){
            for (var i = 0; i < Object.keys(oblast_array_main).length; i++) {
                if(Object.keys(oblast_array_main)[i] == value){
                    return value
                }
        }
        return null
        }


        for (var i = 0; i < Object.keys(oblast_array_curent).length; i++) {
            var temp_li = jQuery('<li class = "select__item" value = "' + oblast_array_curent[Object.keys(oblast_array_curent)[i]] + '">' + Object.keys(oblast_array_curent)[i] + '</li>');
            if(Object.keys(oblast_array_curent)[i] == 'Москва' || Object.keys(oblast_array_curent)[i] == 'Санкт-Петербург'){
                jQuery(".select-oblast").prepend(temp_li);
            }
            else{
                jQuery(".select-oblast").append(temp_li);
            }
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
            
             if(oblast == 'Москва'){
                 try {
                     f5([['Московская область, Москва', [55.753215, 37.622504]]], clinic_mass)
                 }
                catch (err) {
                     console.log(err);
                 }
                 flag_dop_center = true
                 break
             }
             if(oblast == 'Санкт-Петербург'){
                 try {
                     f5([['Ленинградская область, Санкт-Петербург', [59.938951, 30.315635]]], clinic_mass)
                 }
                 catch (err) {
                     console.log(err);
                 }
                 flag_dop_center = true
                break
             }
            if (clinic_mass[Object.keys(clinic_mass)[i]]['oblast'] == oblast) {
                flag_dop_center = false
                temp_oblast = oblast.split(' ')[1]
    
                if(typeof temp_oblast === 'undefined'){
                    temp_oblast = 'test'
                }
                console.log(temp_oblast)
                //if(temp_oblast.trim().toLowerCase() == 'край'.trim().toLowerCase() || temp_oblast.trim().toLowerCase() == 'республика'.trim().toLowerCase()){
                    city_center.push([clinic_mass[Object.keys(clinic_mass)[i]]['oblast'] + ', ' + clinic_mass[Object.keys(clinic_mass)[i]]['city']])
                //}
                //else{
                //    city_center.push([clinic_mass[Object.keys(clinic_mass)[i]]['oblast'] + ' область, ' + clinic_mass[Object.keys(clinic_mass)[i]]['city']])
                //}
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
                        for(var n = 0; n < Object.keys(clinic_mass).length; n++){
                            if(Object.values(mass[i]['lines'][z])[3][x]['name'] == clinic_mass[Object.keys(clinic_mass)[n]]['rayon']){
                                mass_metro_coord.push({
                                    key: Object.values(mass[i]['lines'][z])[3][x]['name'],
                                    value: [Object.values(mass[i]['lines'][z])[3][x]['lat'], Object.values(mass[i]['lines'][z])[3][x]['lng']]
                                });
                            }
                    }
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