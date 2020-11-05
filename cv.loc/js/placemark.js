ymaps.ready(init);
//клик по кнопке в мобильной версии
$('.change-location-mobile-click').click(function(){
    $('.mobile__map').attr('style', 'display: none !important')
    $(this).attr('style', 'display: none !important');
    $('.mobile__map').attr('style', 'display: none !important');
    $('.map__control-for-select').attr('style', 'display: flex !important');
})

function init() {
    //лобальная переменная с картой
    var myMap = 0
    var myMap2 = 0
    //инициализируем карту с текущим положением
    function create_map(coord){
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
    async function find_me(){
        let promise = new Promise((resolve, reject) => {
    var location = ymaps.geolocation.get({
        provider: 'yandex'
    });

    // Асинхронная обработка ответа.
    location.then(
    function(result) {
        // Добавление местоположения на карту.
        console.log(result.geoObjects['position'])


        get_city_optik(result.geoObjects['position'])


        

        //Получаем название города по полученым координатам
        async function get_city_optik(coord){
            var city_name = [];
                
                let promise = new Promise((resolve, reject) => {
                    var myGeocoder = ymaps.geocode(coord[0] +", " + coord[1], { kind: "locality" } );
                    res = myGeocoder.then(
                        function (result) {
                            console.log(result.geoObjects.get(0))
                            var name = result.geoObjects.get(0).properties.get('name');
                            try{
                                city_name.push(name)
                                resolve(1);
                            }
                            catch(err){
                                console.log(err);
                            }
                            
                        }
                    );
                
            })
            await promise
        try{
            check_city_optik(city_name[0], coord)
        }
        catch(err){
            console.log(err)
        }
    }
//проверяем есть ли в этом городк оптики
    function check_city_optik(city_name, coord){
        var flag = 0;
        for(var i = 0; i < Object.keys(clinic_mass).length; i++){
            if(city_name == clinic_mass[Object.keys(clinic_mass)[i]]['city']){
                $(".select-city").closest(".select").find(".select__head").text(city_name)
                create_map(coord)
                add_markers()
                show_opik_under_map(city_name, clinic_mass, 'city')
                findmetro(city_name)
                $('.mobile-map-text').append('<span>' + city_name + '</span>');
                resolve(1);
                flag = 1;
                break;
            }
        }
        if(!flag){
            //если нет ставим центр карты в городе Москва
            $(".select-city").closest(".select").find(".select__head").text('Москва')
            create_map([55.76, 37.64])
            add_markers()
            show_opik_under_map("Москва", clinic_mass, 'city')
            $('.mobile-map-text').append('<span>Москва</span>');
            findmetro("Москва")
            resolve(1);
        }
    }
    
    
    },

    

    function(err) {
        console.log('Ошибка: ' + err)
        create_map([55.76, 37.64])
        add_markers()
        show_opik_under_map("Москва", clinic_mass, 'city')
        $('.mobile-map-text').append('<span>Москва</span>');
        findmetro("Москва")
        resolve(1);
    }
    );
    
    })
    await promise
    }

    //запускаем инициализацию карты
    find_me()
        

        //массив с данными об оптиках
        var clinic_mass = {
            "55.755565, 37.626661": {balloonContent: 'Глазко мастерская очков', time: '10:00-20:00', time_weekend: '11:00-19:00', phone: '+74954327478', oblast: "Московская", city: "Москва", rayon: "", street: "ул. Маросейка, 2/15с1"},
            "51.7759, 55.1984": {balloonContent: 'Оптик сити', time: '10:00-20:00', time_weekend: '11:00-19:00',  phone: '+74952582582', oblast: "Оренбургская", city: "Оренбург", rayon: "Нежинское шоссе", street: "Нежинское шоссе, 2А"},
            "59.2029, 39.8126": {balloonContent: 'Счастливый взгляд', time: '10:00-20:00', time_weekend: '11:00-19:00',  phone: '+78172580045', oblast: "Вологодская", city: "Вологда", rayon: "Окружное", street: "Окружное ш., д. 12"},
            "47.2262, 39.7167": {balloonContent: 'ЛЮМЕН ОПТИКА', time: '10:00-20:00', time_weekend: '11:00-19:00',  phone: '+78005006084', oblast: "Ростовская", city: "Ростов-на-Дону", rayon: "пр. Ворошиловский", street: "пр. Ворошиловский, 69"},
            "59.9860, 30.3044": {balloonContent: 'Невская оптика 4', time: '10:00-20:00', time_weekend: '11:00-19:00',  phone: '+78123109282', oblast: "Ленинградская", city: "Санкт-Петербург", rayon: "наб. р. Черной Речки", street: "наб. р. Черной Речки, 51"},
            "53.2071, 50.1330": {balloonContent: 'Оптика на Ленина', time: '10:00-20:00', time_weekend: '11:00-19:00',  phone: '88462014240', oblast: "Самарская", city:"Самара", rayon: "пр. Ленина", street: "пр. Ленина, д. 10"},
            "57.6225, 39.8909": {balloonContent: 'Алькор', time: '10:00-20:00', time_weekend: '11:00-19:00',  phone: '+84852307600', oblast: "Ярославская", city:"Ярославль", rayon: "Первомайская", street: "Первомайская, д.59"},
            "54.6171, 39.7297": {balloonContent: 'Панда оптика', time: '10:00-20:00', time_weekend: '11:00-19:00',  phone: '+74912559596', oblast: "Рязанская", city: "Рязань", rayon: "Гагарина", street: "Гагарина, 25"},
            "56.8422, 60.6201": {balloonContent: 'Очкофф', time: '10:00-20:00', time_weekend: '11:00-19:00',  phone: '+73433502379', oblast: "Екатеринбургская", city: "Екатеринбург", rayon: "Свердловская обл.", street: "просп. Ленина, 69к4"},
            "48.6960, 44.4987": {balloonContent: 'Мир Оптики', time: '10:00-20:00', time_weekend: '11:00-19:00',  phone: '+88442597433', oblast: "Волгоградская", city: "Волгоград", rayon: "Рабоче-Крестьянская ул", street: "Рабоче-Крестьянская ул. 13"},
            "51.7177, 39.1775": {balloonContent: 'VISIO', time: '10:00-20:00', time_weekend: '11:00-19:00',  phone: '+84732271418', oblast: "Воронежская", city: "Воронеж", rayon: "Московский проспект", street: "Московский просп.129/1"}
        };
        


//заполняем маркеры данными из массива и наносим на карту 
function add_markers(){
    //заполняем маркеры данными из массива и наносим на карту
    for(var i = 0; i < Object.keys(clinic_mass).length; i++){
        myMap.geoObjects.add(new ymaps.Placemark(Object.keys(clinic_mass)[i].split(","), {
            balloonContent: clinic_mass[Object.keys(clinic_mass)[i]]['balloonContent'] + "<br>" + "Время работы(пн-пт): " + clinic_mass[Object.keys(clinic_mass)[i]]['time'] + "<br>" + "сб-вс: " + clinic_mass[Object.keys(clinic_mass)[i]]['time_weekend'] + "<br>" + "Телефон: " + clinic_mass[Object.keys(clinic_mass)[i]]['phone'],
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#735184'
        }))
        myMap2.geoObjects.add(new ymaps.Placemark(Object.keys(clinic_mass)[i].split(","), {
            balloonContent: clinic_mass[Object.keys(clinic_mass)[i]]['balloonContent'] + "<br>" + "Время работы(пн-пт): " + clinic_mass[Object.keys(clinic_mass)[i]]['time'] + "<br>" + "сб-вс: " + clinic_mass[Object.keys(clinic_mass)[i]]['time_weekend'] + "<br>" + "Телефон: " + clinic_mass[Object.keys(clinic_mass)[i]]['phone'],
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#735184'
        }))
    }
    f2()
}

//выпадающий список с областями
function f2(){
    oblast_array = {'Адыгея': [44.429866, 40.252969],
    'Алтай': [49.725608, 84.274505],
    'Алтайский': [51.820766, 85.27733],
    'Амурская': [53.413341, 127.728064],
    'Архангельская': [63.637517, 43.336661],
    'Астраханская': [46.851463, 47.466189],
    'Башкортостан': [54.2715, 56.525537],
    'Белгородская': [50.872231, 37.303198],
    'Брянская': [52.909192, 33.422197],
    'Бурятия': [54.544222, 112.348699],
    'Владимирская': [55.904195, 40.898894],
    'Волгоградская': [49.615821, 44.151406],
    'Вологодская': [60.138988, 44.049618],
    'Воронежская': [50.970898, 40.233395],
    'Дагестан': [42.259793, 47.095742],
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
    'Кемеровская область - Кузбасс': [54.373525, 85.858864],
    'Кировская': [58.344108, 49.69543],
    'Коми': [64.125463, 54.789669],
    'Костромская': [58.456003, 43.788495],
    'Краснодарский': [45.085538, 39.044609],
    'Красноярский': [53.602873, 50.392586],
    'Крым': [45.389194, 33.993751],
    'Курганская': [55.448347, 64.809405],
    'Курская': [44.042582, 44.462375],
    'Ленинградская': [59.337013, 29.608975],
    'Липецкая': [52.864468, 39.147637],
    'Магаданская': [62.575815, 154.036835],
    'Марий Эл': [56.485739, 48.197858],
    'Мордовия': [54.205758, 44.319669],
    'Московская': [55.531127, 38.874756],
    'Мурманская': [68.004154, 35.010051],
    'Ненецкий': [67.714212, 54.365062],
    'Нижегородская': [56.595648, 44.279559],
    'Новгородская': [58.307715, 32.490222],
    'Новосибирская': [55.582396, 79.264861],
    'Омская': [56.103472, 73.344416],
    'Оренбургская': [52.743528, 53.498682],
    'Орловская': [52.781455, 36.481042],
    'Пензенская': [53.240932, 43.946823],
    'Пермский': [57.787124, 55.729001],
    'Приморский': [64.892408, 40.494077],
    'Псковская': [57.236486, 29.236911],
    'Ростовская': [47.728732, 41.268128],
    'Рязанская': [54.559725, 40.950331],
    'Самарская': [53.452932, 50.34431],
    'Саратовская': [51.578529, 46.797223],
    'Саха /Якутия/': [65.061073, 119.845652],
    'Сахалинская': [50.150926, 142.750797],
    'Свердловская': [58.586755, 61.530761],
    'Северная Осетия - Алания': [43.092669, 44.262033],
    'Смоленская': [54.956192, 32.998543],
    'Ставропольский': [53.249564, 49.482359],
    'Тамбовская': [52.474699, 41.592249],
    'Татарстан': [55.350336, 50.911013],
    'Тверская': [57.093033, 34.706195],
    'Томская': [58.949193, 78.63728],
    'Тульская': [53.888064, 37.575693],
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
    'Ярославская': [57.817361, 39.105138]};
    for(var i = 0; i < Object.keys(oblast_array).length; i++){
        var temp_li = $('<li class = "select__item" value = "' + oblast_array[Object.keys(oblast_array)[i]] + '">'+ Object.keys(oblast_array)[i] +'</li>');
        $(".select-oblast").append(temp_li);
    }
    $(".select-oblast li").on('click', function () {
            $(".select-metro").closest(".select").addClass("hide-class")
            $(".select-city").closest(".select").find(".select__input").attr("value", "город")
            $(".select-city").closest(".select").find(".select__head").text("Город")
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




//запрос к геокодеру на поиск центра городов из массива по выбранной области
function f3(oblast){

    var city_center = []
    //console.log(data_city[Object.keys(data_city)[0]][0])
    for(var i = 0; i < Object.keys(clinic_mass).length; i++){
        if(clinic_mass[Object.keys(clinic_mass)[i]]['oblast'] == oblast){
            city_center.push([clinic_mass[Object.keys(clinic_mass)[i]]['oblast'] + ' область, ' + clinic_mass[Object.keys(clinic_mass)[i]]['city']])
        }
    }
    f(city_center)


    async function f(city_center){
            
        for(var i = 0; i < city_center.length; i++){
            
            let promise = new Promise((resolve, reject) => {
                var myGeocoder = ymaps.geocode(city_center[i] + ' город', i);
                res = myGeocoder.then(
                    function (result) {
                        var coordinates = result.geoObjects.get(0).geometry.getCoordinates();
                        try{
                            city_center[i].push(coordinates)
                            resolve(1);
                        }
                        catch(err){
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

    function f4(city_center, clinic_mass){
        try{
            console.log(city_center)
            f5(city_center, clinic_mass)
        }
        catch(err){
            console.log(err)
        }
    }
       
}




//выпадающий список с городами
function f5(city_center, clinic_mass){
    if($(".select-city li").length){
        $(".select-city").html('')
    }
    if(city_center.length == 0){
        $(".select-city").closest(".select").addClass("hide-class")
    }
    else{
        $(".select-city").closest(".select").removeClass("hide-class")
    }
    
   for(var i = 0; i < city_center.length; i++){
       var city_temp = city_center[i][0].split(',')
       var temp_li = $('<li class = "select__item" value = "' + city_center[i][1] + '">'+ city_temp[city_temp.length - 1] +'</li>');
        $(".select-city").append(temp_li);
     
   }
    
   $(".select-city li").on('click', function () {
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
function show_opik_under_map(geolocation, clinic_mass, region_type){
    var data = {optiks: []}
    for(var i = 0; i < Object.keys(clinic_mass).length; i++){
        
        if(geolocation.toUpperCase().trim() == clinic_mass[Object.keys(clinic_mass)[i]][region_type].toUpperCase().trim()){
            data['optiks'].push({title: Object.values(clinic_mass)[i]['balloonContent'], adress: (Object.values(clinic_mass)[i]['oblast'] +" область, " + Object.values(clinic_mass)[i]['city'] + ", " + Object.values(clinic_mass)[i]['street']), time: 'Вемя работы(пн-пт): ' + Object.values(clinic_mass)[i]['time'], time_weekend: 'сб-вс: ' + Object.values(clinic_mass)[i]['time_weekend'], phone: Object.values(clinic_mass)[i]['phone'], coord: Object.keys(clinic_mass)[i], })
        }
    }
    

    if(data['optiks'].length !=0){
        if($('.optik-wrapper').text().trim() == ''){
            $('.map__control-adress').removeClass('hide-class')
        rivets.bind(
            $('.map__control-adress'), 
            {
            data: data 
            });
            $('.click-optik').on( "click", function() {
                console.log( $( this ).attr('id') );
                myMap.setCenter(
                    $( this ).attr('id').split(','),
                    18
                );
                myMap2.setCenter(
                    $( this ).attr('id').split(','),
                    18
                );
              });
    }
    else{
        $('.map__control-adress').html('<div class="map__control-adress-block" rv-each-optiks="data.optiks"><p class="map__control-adress-block-title" rv-text="optiks.title"></p><p class="map__control-adress-block-text" rv-text="optiks.adress"></p><p class="map__control-adress-block-text" rv-text="optiks.time"></p><p class="map__control-adress-block-text" rv-text="optiks.time_weekend"></p><p class="map__control-adress-block-text" rv-text="optiks.phone"></p><p rv-id = "optiks.coord" class="map__control-adress-block-link jsFindAdressMap click-optik">На карте</p><a href="#" class="map__control-adress-block-button jsSignUp">Записаться</a></div>')
        $('.map__control-adress').removeClass('hide-class')
        rivets.bind(
            $('.map__control-adress'), 
        {
            data: data 
        });
        $('.click-optik').on( "click", function() {
            console.log( $( this ).attr('id') );
            myMap.setCenter(
                $( this ).attr('id').split(','),
                18
            );
            myMap2.setCenter(
                $( this ).attr('id').split(','),
                18
            );
        });

    }
    }
    else{
        
        $('.map__control-adress').html('<div class="map__control-adress-block" rv-each-optiks="data.optiks"><p class="map__control-adress-block-title" rv-text="optiks.title"></p><p class="map__control-adress-block-text" rv-text="optiks.adress"></p><p class="map__control-adress-block-text" rv-text="optiks.time"></p><p class="map__control-adress-block-text" rv-text="optiks.time_weekend"></p><p class="map__control-adress-block-text" rv-text="optiks.phone"></p><p rv-id = "optiks.coord" class="map__control-adress-block-link jsFindAdressMap click-optik">На карте</p><a href="#" class="map__control-adress-block-button jsSignUp">Записаться</a></div>')
        $('.map__control-adress').addClass('hide-class')
    }
    }

//выборка станций метро для выбранного города
function findmetro(city){
    mass = JSON.parse(getmetro())
    mass_metro_coord = []
    
    for(var i =0; i < mass.length; i++){
        if(Object.values(mass)[i]['name'].toUpperCase().trim() == city.toUpperCase().trim()){
            
                for(var z = 0; z< Object.keys(mass[i]['lines']).length; z++){
                    for(var x = 0; x < Object.keys(Object.values(mass[i]['lines'][z])[3]).length; x++){
                        mass_metro_coord.push({
                            key:   Object.values(mass[i]['lines'][z])[3][x]['name'],
                            value: [Object.values(mass[i]['lines'][z])[3][x]['lat'], Object.values(mass[i]['lines'][z])[3][x]['lng']]
                        });

                    }
                }
            
        }
    }
    console.log(mass_metro_coord)
    if(mass_metro_coord.length != 0){
        $(".select-metro").closest(".select").find(".select__input").attr("value", "Метро")
        $(".select-metro").closest(".select").find(".select__head").text("Метро")
        create_combox_metro(mass_metro_coord);
    }
    else{
        geocode_city_area(city.trim());
    }
}
//запрос списка метро по api
function getmetro(){
    var jqXHR = $.ajax({
        type: "GET",
        url: "https://api.hh.ru/metro",
        async: false,
        crossOrigin: null,
    });

    return jqXHR.responseText;
}




//выпадающий список с метро
function create_combox_metro(mass_metro_coord){
    if($(".select-metro li").length){
        $(".select-metro").html('')
    }

    if(mass_metro_coord.length == 0){
        $(".select-metro").closest(".select").addClass("hide-class")
    }
    else{
        $(".select-metro").closest(".select").removeClass("hide-class")
    }
    
   for(var i = 0; i < mass_metro_coord.length; i++){
       var temp_li = $('<li class = "select__item" value = "' + Object.values(mass_metro_coord[i])[1] + '">'+ Object.values(mass_metro_coord[i])[0] +'</li>');
        $(".select-metro").append(temp_li);
     
   }
    
   $(".select-metro li").on('click', function () { 
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





    //запрос к геокодеру на поиск центра районов города, в которых есть оптики
function geocode_city_area(city){

    var area_center = []
    //console.log(data_city[Object.keys(data_city)[0]][0])
    for(var i = 0; i < Object.keys(clinic_mass).length; i++){
        if(clinic_mass[Object.keys(clinic_mass)[i]]['city'] == city){
            if(clinic_mass[Object.keys(clinic_mass)[i]]['rayon'] != ""){
                area_center.push([clinic_mass[Object.keys(clinic_mass)[i]]['oblast'] + " область, " + clinic_mass[Object.keys(clinic_mass)[i]]['city'] +", " + clinic_mass[Object.keys(clinic_mass)[i]]['rayon']])
            }
        }
    }
    get_area_coord(area_center)


    async function get_area_coord(area_center){
            
        for(var i = 0; i < area_center.length; i++){
            
            let promise = new Promise((resolve, reject) => {
                var myGeocoder = ymaps.geocode(area_center[i], i);
                res = myGeocoder.then(
                    function (result) {
                        var coordinates = result.geoObjects.get(0).geometry.getCoordinates();
                        try{
                            area_center[i].push(coordinates)
                            resolve(1);
                        }
                        catch(err){
                            console.log(err);
                        }
                        
                    }
                );
            
            //console.log(res)
        })
        await promise
    }
    $(".select-metro").closest(".select").find(".select__input").attr("value", "Район")
    $(".select-metro").closest(".select").find(".select__head").text("Район")
    create_area_list(area_center, clinic_mass)
    
    }

}


//выпадающий список с районами (если нет метро)
function create_area_list(area_center, clinic_mass){
    if($(".select-metro li").length){
        $(".select-metro").html('')
    }

    if(area_center.length == 0){
        $(".select-metro").closest(".select").addClass("hide-class")
    }
    else{
        $(".select-metro").closest(".select").removeClass("hide-class")
    }
    
    
   for(var i = 0; i < area_center.length; i++){
    temp_area_name = Object.values(area_center[i])[0].split(',')
       var temp_li = $('<li class = "select__item" value = "' + Object.values(area_center[i])[1] + '">'+ temp_area_name[temp_area_name.length - 1] +'</li>');
        $(".select-metro").append(temp_li);
     
   }
    
   $(".select-metro li").on('click', function () { 
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

