$(document).ready(function(){
    /* Открытие селекта */
    $('.select').on('click', function () {
        $(this).toggleClass('open');
    });
    /* Открытие селекта табом */
    $('.select').keypress(function(e) {
        if (e.which == 13) {
            $(this).toggleClass('open');
        }
    });

    /* Смена текста и значения по событию на итем селекта + закрытие селекта табом */
    $('.select__list').on('click keypress', '.select__item', function (e) {
        e.stopPropagation();

        let itemText = $(this).text();
        let itemValue = $(this).data('value');
        let select = $(this).closest('.select');

        select.find('.select__head').text(itemText);
        select.find('.select__input').val(itemValue).trigger("change");
        select.addClass('active').removeClass('open');
    });

    /* Закрытие всех селектов при клике вне блока селектов */
    $(document).on('click', function (e) {
        if ( !$('.select').is(e.target) && !$('.select').is(e.target) && $('.select').has(e.target).length === 0) {
            $('.select').removeClass('open');
        };
    });

    /* выбор радиокнопки табом */

    $('.radio__label').keypress(function(e) {
        if (e.which == 13) {
            const radioNum = $(this).attr('for');
            const radioName = $(`#${radioNum}`).attr('name');
            $(`input[name="${radioName}"]`).prop('checked', false);
            $(`#${radioNum}`).prop('checked', true);

            if ( radioName === 'quality' ) {
                /*  Появление TextArea При табе на jsTextArea */
                if ( $(`#${radioNum}`).hasClass('jsRadioTextArea') ) {
                    $('.jsTextArea').removeClass('hide');
                } else {
                    $('.jsTextArea').addClass('hide');
                }
            }
        }
    });

    /* Появление TextArea При клике на jsTextArea */
    $('input[name="quality"]').on('change', function() {
        console.log($(this));
        if(this.checked) {
            console.log($(this).hasClass('jsRadioTextArea'))
            if ( $(this).hasClass('jsRadioTextArea') ) {
                $('.jsTextArea').removeClass('hide');
            } else {
                $('.jsTextArea').addClass('hide');
            }
        }
    });

    /* плавный скролл*/
    function scrollGo(id) {
        let block = $(`#${id}`).offset().top;
        $("html, body").animate({ scrollTop: block}, 1000);
    }

    /* Действия при сабмите */
    $(document).on('submit','.main__form',function(e) {
        $('.msg-erorr').addClass('hide');
        var up = false;
        e.preventDefault();

        let fields = $(this).serialize();
        $.ajax({
            type: "POST",
            url: '/ajax/ajax.php',
            data: {action : 'submitform', formdata : fields},
            success: function(responce){
                let data = $.parseJSON(responce);
                if(data.error.length > 0) {
                    // alert('AAA');
                    data.error.forEach(
                        function findError( item ) {
                            if (item === 'bject') {
                                $('#msg-erorr-1').removeClass('hide');
                                if (up == false) {
                                    scrollGo('msg-erorr-1');
                                    up = true;
                                }
                            }
                            if (item === 'grade') {
                                $('#msg-erorr-2').removeClass('hide');
                                if (up == false) {
                                    scrollGo('msg-erorr-2');
                                    up = true;
                                }
                            }
                            if (item === 'quality') {
                                $('#msg-erorr-3').removeClass('hide');
                                if (up == false) {
                                    scrollGo('msg-erorr-3');
                                    up = true;
                                }
                            }
                        });
                } else {
                    /* Модалка */
                    $.magnificPopup.open({
                        items: {
                            src: '#thanks'
                        },
                        callbacks: {
                            open: function () {
                                if (document.body.clientWidth > 700) {
                                    $(this.container).find('.mfp-content').css({
                                        'width': '700px'
                                    });
                                } else {
                                    $(this.container).find('.mfp-content').css({
                                        'width': '300px'
                                    });
                                }
                                $(this.container).find('.mfp-close').addClass('new-close');
                            },
                            close: function () {
                                window.location.href = 'http://coopervision.ru/misight?utm_source=oprosnik_locator&utm_medium=after_interview/';
                            }
                        }
                    });
                }

            }
        });
    });

    let params =  (new URL(document.location)).searchParams;
    let id = params.get("optics")
    if (id !== null) {
        $.ajax({
            type: "POST",
            url: '/ajax/ajax.php',
            data: {action : 'getrefobject', id : id},
            success: function(responce){
                let data = $.parseJSON(responce);
                $('#ref-object').text(data.obj);
                $('#refobject-input').val(data.value);
            }
        });
    } else {
        $('#ref-object').text("данные отсутствуют");
        $('#refobject-input').val('');
    }



    getListEntity('getregion');

    $(document).on('change','.select__input',function(e) {
        let action = $(e.target).data('action');
        let value = $(e.target).val();
        getListEntity(action, value);
        if (action == 'getcity') {

            // ga('send', 'event', 'pro_optics', 'pick_region');
            ym(66929020, 'reachGoal', 'pick_region');
            console.log('выбор региона');

        } else if (action == 'getobject') {

            // ga('send', 'event', 'pro_optics', 'pick_city');
            ym(66929020, 'reachGoal', 'pick_city');
            console.log('выбор города');

        } else if (action == 'object') {

            // ga('send', 'event', 'pro_optics', 'pick_optics');
            ym(66929020, 'reachGoal', 'pick_optics');
            console.log('выбор оптики');

        }
    });

    $('.radio[name="grade"]').on('change', function(e) {
        let val = +$(this).val();
        switch (val) {
            case 5:
                // ga('send', 'event', 'pro_rating', 'pick_rating-5');
                ym(66929020, 'reachGoal', 'pick_rating-5');
                console.log('Оценка 5');
            break;
            case 4:
                // ga('send', 'event', 'pro_rating', 'pick_rating-4');
                ym(66929020, 'reachGoal', 'pick_rating-4');
                console.log('Оценка 4');
            break;
            case 3:
                // ga('send', 'event', 'pro_rating', 'pick_rating-3');
                ym(66929020, 'reachGoal', 'pick_rating-3');
                console.log('Оценка 3');
            break;
            case 2:
                // ga('send', 'event', 'pro_rating', 'pick_rating-2');
                ym(66929020, 'reachGoal', 'pick_rating-2');
                console.log('Оценка 2');
            break;
            case 1:
                // ga('send', 'event', 'pro_rating', 'pick_rating-1');
                ym(66929020, 'reachGoal', 'pick_rating-1');
                console.log('Оценка 1');
            break;
        }
    });

    $('.radio[name="quality"]').on('change', function(e) {
        let val = +$(this).val();
        switch (val) {
            case 1:
                // ga('send', 'event', 'pro_better', 'pick_communication);
                ym(66929020, 'reachGoal', 'pick_communication');
                console.log('Качество коммуникации');
            break;
            case 2:
                // ga('send', 'event', 'pro_better', 'pick_service-speed');
                ym(66929020, 'reachGoal', 'pick_service-speed');
                console.log('Скорость обслуживания');
            break;
            case 3:
                // ga('send', 'event', 'pro_better', 'pick_other');
                ym(66929020, 'reachGoal', 'pick_other');
                console.log('Другое (введите свой вариант)');
            break;
        }
    });

});

function getListEntity(action, id = '') {
    let sel;
    let selectobject;
    if(action == 'getregion') {
        sel = $('#region_list');
    } else if (action == 'getcity') {

        sel = $('#object_list');
        sel.empty();
        selectobject = sel.closest('.select');
        selectobject.find('.select__head').text('Выберите город из списка');
        selectobject.find('.select__input').val('');

        sel = $('#city_list');
        sel.empty();
        selectobject = sel.closest('.select');
        selectobject.find('.select__head').text('Выберите город из списка');
        selectobject.find('.select__input').val('');

    } else if (action == 'getobject') {
        sel = $('#object_list');
        sel.empty();
        selectobject = sel.closest('.select');
        selectobject.find('.select__head').text('Выберите город из списка');
        selectobject.find('.select__input').val('');
    } else {
        return false;
    }

    $.ajax({
        type: "POST",
        url: '/ajax/ajax.php',
        data: {action : action, id : id},
        success: function(responce){
            let list = $.parseJSON(responce);
            sel.find('li').unbind();
            sel.empty();
            list.forEach(function(element, idex){
                sel.append('<li class="select__item" tabindex="'+idex+'" data-value="'+element.value+'">'+element.name+'</li>');
            });
        }
    });
};