$=jQuery;
/*range*/
    /*jshint multistr:true, curly: false */
    /*global jQuery:false, define: false */
    /**
     * jRange - Awesome range control
     *
     * Written by
     * ----------
     * Nitin Hayaran (nitinhayaran@gmail.com)
     *
     * Licensed under the MIT (MIT-LICENSE.txt).
     *
     * @author Nitin Hayaran
     * @version 0.1-RELEASE
     *
     * Dependencies
     * ------------
     * jQuery (http://jquery.com)
     *
     **/
    ;
    (function($, window, document, undefined) {
        'use strict';

        var jRange = function() {
            return this.init.apply(this, arguments);
        };
        jRange.prototype = {
            defaults: {
                onstatechange: function() {},
                ondragend: function() {},
                onbarclicked: function() {},
                isRange: false,
                showLabels: true,
                showScale: true,
                step: 1,
                format: '%s',
                theme: 'theme-green',
                width: 300,
                disable: false,
                snap: false
            },
            template: '<div class="slider-container">\
                <div class="back-bar">\
                    <div class="selected-bar"></div>\
                    <div class="pointer low"></div><div class="pointer-label low">123456</div>\
                    <div class="pointer high"></div><div class="pointer-label high">456789</div>\
                    <div class="clickable-dummy"></div>\
                </div>\
                <div class="scale"></div>\
            </div>',
            init: function(node, options) {
                this.options       = $.extend({}, this.defaults, options);
                this.inputNode     = $(node);
                this.options.value = this.inputNode.val() || (this.options.isRange ? this.options.from + ',' + this.options.from : this.options.from);
                this.domNode       = $(this.template);
                this.domNode.addClass(this.options.theme);
                this.inputNode.after(this.domNode);
                this.domNode.on('change', this.onChange);
                this.pointers      = $('.pointer', this.domNode);
                this.lowPointer    = this.pointers.first();
                this.highPointer   = this.pointers.last();
                this.labels        = $('.pointer-label', this.domNode);
                this.lowLabel      = this.labels.first();
                this.highLabel     = this.labels.last();
                this.scale         = $('.scale', this.domNode);
                this.bar           = $('.selected-bar', this.domNode);
                this.clickableBar  = this.domNode.find('.clickable-dummy');
                this.interval      = this.options.to - this.options.from;
                this.render();
            },
            render: function() {
                // Check if inputNode is visible, and have some width, so that we can set slider width accordingly.
                if (this.inputNode.width() === 0 && !this.options.width) {
                    console.log('jRange : no width found, returning');
                    return;
                } else {
                    this.options.width = this.options.width || this.inputNode.width();
                    this.domNode.width(this.options.width);
                    this.inputNode.hide();
                }

                if (this.isSingle()) {
                    this.lowPointer.hide();
                    this.lowLabel.hide();
                }
                if (!this.options.showLabels) {
                    this.labels.hide();
                }
                this.attachEvents();
                if (this.options.showScale) {
                    this.renderScale();
                }
                this.setValue(this.options.value);
            },
            isSingle: function() {
                if (typeof(this.options.value) === 'number') {
                    return true;
                }
                return (this.options.value.indexOf(',') !== -1 || this.options.isRange) ?
                    false : true;
            },
            attachEvents: function() {
                this.clickableBar.click($.proxy(this.barClicked, this));
                this.pointers.on('mousedown touchstart', $.proxy(this.onDragStart, this));
                this.pointers.bind('dragstart', function(event) {
                    event.preventDefault();
                });
            },
            onDragStart: function(e) {
                if ( this.options.disable || (e.type === 'mousedown' && e.which !== 1)) {
                    return;
                }
                e.stopPropagation();
                e.preventDefault();
                var pointer = $(e.target);
                this.pointers.removeClass('last-active');
                pointer.addClass('focused last-active');
                this[(pointer.hasClass('low') ? 'low' : 'high') + 'Label'].addClass('focused');
                $(document).on('mousemove.slider touchmove.slider', $.proxy(this.onDrag, this, pointer));
                $(document).on('mouseup.slider touchend.slider touchcancel.slider', $.proxy(this.onDragEnd, this));
            },
            onDrag: function(pointer, e) {
                e.stopPropagation();
                e.preventDefault();

                if (e.originalEvent.touches && e.originalEvent.touches.length) {
                    e = e.originalEvent.touches[0];
                } else if (e.originalEvent.changedTouches && e.originalEvent.changedTouches.length) {
                    e = e.originalEvent.changedTouches[0];
                }

                var position = e.clientX - this.domNode.offset().left;
                this.domNode.trigger('change', [this, pointer, position]);
            },
            onDragEnd: function(e) {
                this.pointers.removeClass('focused')
                    .trigger('rangeslideend');
                this.labels.removeClass('focused');
                $(document).off('.slider');
                this.options.ondragend.call(this, this.options.value);
            },
            barClicked: function(e) {
                if(this.options.disable) return;
                var x = e.pageX - this.clickableBar.offset().left;
                if (this.isSingle())
                    this.setPosition(this.pointers.last(), x, true, true);
                else {
                    var firstLeft      	= Math.abs(parseFloat(this.pointers.first().css('left'), 10)),
                        firstHalfWidth 	= this.pointers.first().width() / 2,
                        lastLeft 			 	= Math.abs(parseFloat(this.pointers.last().css('left'), 10)),
                        lastHalfWidth  	= this.pointers.first().width() / 2,
                        leftSide        = Math.abs(firstLeft - x + firstHalfWidth),
                        rightSide       = Math.abs(lastLeft - x + lastHalfWidth),
                        pointer;

                    if(leftSide == rightSide) {
                        pointer = x < firstLeft ? this.pointers.first() : this.pointers.last();
                    } else {
                        pointer = leftSide < rightSide ? this.pointers.first() : this.pointers.last();
                    }
                    this.setPosition(pointer, x, true, true);
                }
                this.options.onbarclicked.call(this, this.options.value);
            },
            onChange: function(e, self, pointer, position) {
                var min, max;
                min = 0;
                max = self.domNode.width();

                if (!self.isSingle()) {
                    min = pointer.hasClass('high') ? parseFloat(self.lowPointer.css("left")) + (self.lowPointer.width() / 2) : 0;
                    max = pointer.hasClass('low') ? parseFloat(self.highPointer.css("left")) + (self.highPointer.width() / 2) : self.domNode.width();
                }

                var value = Math.min(Math.max(position, min), max);
                self.setPosition(pointer, value, true);
            },
            setPosition: function(pointer, position, isPx, animate) {
                var leftPos, rightPos,
                    lowPos = parseFloat(this.lowPointer.css("left")),
                    highPos = parseFloat(this.highPointer.css("left")) || 0,
                    circleWidth = this.highPointer.width() / 2;
                if (!isPx) {
                    position = this.prcToPx(position);
                }
                if(this.options.snap){
                    var expPos = this.correctPositionForSnap(position);
                    if(expPos === -1){
                        return;
                    }else{
                        position = expPos;
                    }
                }
                if (pointer[0] === this.highPointer[0]) {
                    highPos = Math.round(position - circleWidth);
                } else {
                    lowPos = Math.round(position - circleWidth);
                }
                pointer[animate ? 'animate' : 'css']({
                    'left': Math.round(position - circleWidth)
                });
                if (this.isSingle()) {
                    leftPos = 0;
                } else {
                    leftPos = lowPos + circleWidth;
                    rightPos = highPos + circleWidth;
                }
                var w = Math.round(highPos + circleWidth - leftPos);
                this.bar[animate ? 'animate' : 'css']({
                    'width': Math.abs(w),
                    'left': (w>0) ? leftPos : leftPos + w
                });
                this.showPointerValue(pointer, position, animate);
                this.isReadonly();
            },
            correctPositionForSnap: function(position){
                var currentValue = this.positionToValue(position) - this.options.from;
                var diff = this.options.width / (this.interval / this.options.step),
                    expectedPosition = (currentValue / this.options.step) * diff;
                if( position <= expectedPosition + diff / 2 && position >= expectedPosition - diff / 2){
                    return expectedPosition;
                }else{
                    return -1;
                }
            },
            // will be called from outside
            setValue: function(value) {
                var values = value.toString().split(',');
                values[0] = Math.min(Math.max(values[0], this.options.from), this.options.to) + '';
                if (values.length > 1){
                    values[1] = Math.min(Math.max(values[1], this.options.from), this.options.to) + '';
                }
                this.options.value = value;
                var prc = this.valuesToPrc(values.length === 2 ? values : [0, values[0]]);
                if (this.isSingle()) {
                    this.setPosition(this.highPointer, prc[1]);
                } else {
                    this.setPosition(this.lowPointer, prc[0]);
                    this.setPosition(this.highPointer, prc[1]);
                }
            },
            renderScale: function() {
                var s = this.options.scale || [this.options.from, this.options.to];
                var prc = Math.round((100 / (s.length - 1)) * 10) / 10;
                var str = '';
                for (var i = 0; i < s.length; i++) {
                    str += '<span style="left: ' + i * prc + '%">' + (s[i] != '|' ? '<ins>' + s[i] + '</ins>' : '') + '</span>';
                }
                this.scale.html(str);

                $('ins', this.scale).each(function() {
                    $(this).css({
                        marginLeft: -$(this).outerWidth() / 2
                    });
                });
            },
            getBarWidth: function() {
                var values = this.options.value.split(',');
                if (values.length > 1) {
                    return parseFloat(values[1]) - parseFloat(values[0]);
                } else {
                    return parseFloat(values[0]);
                }
            },
            showPointerValue: function(pointer, position, animate) {
                var label = $('.pointer-label', this.domNode)[pointer.hasClass('low') ? 'first' : 'last']();
                var text;
                var value = this.positionToValue(position);
                // Is it higer or lower than it should be?

                if ($.isFunction(this.options.format)) {
                    var type = this.isSingle() ? undefined : (pointer.hasClass('low') ? 'low' : 'high');
                    text = this.options.format(value, type);
                } else {
                    text = this.options.format.replace('%s', value);
                }

                var width = label.html(text).width(),
                    left = position - width / 2;
                left = Math.min(Math.max(left, 0), this.options.width - width);
                label[animate ? 'animate' : 'css']({
                    left: left
                });
                this.setInputValue(pointer, value);
            },
            valuesToPrc: function(values) {
                var lowPrc = ((parseFloat(values[0]) - parseFloat(this.options.from)) * 100 / this.interval),
                    highPrc = ((parseFloat(values[1]) - parseFloat(this.options.from)) * 100 / this.interval);
                return [lowPrc, highPrc];
            },
            prcToPx: function(prc) {
                return (this.domNode.width() * prc) / 100;
            },
            isDecimal: function() {
                return ((this.options.value + this.options.from + this.options.to).indexOf(".")===-1) ? false : true;
            },
            positionToValue: function(pos) {
                var value = (pos / this.domNode.width()) * this.interval;
                value = parseFloat(value, 10) + parseFloat(this.options.from, 10);
                if (this.isDecimal()) {
                    var final = Math.round(Math.round(value / this.options.step) * this.options.step *100)/100;
                    if (final!==0.0) {
                        final = '' + final;
                        if (final.indexOf(".")===-1) {
                            final = final + ".";
                        }
                        while (final.length - final.indexOf('.')<3) {
                            final = final + "0";
                        }
                    } else {
                        final = "0.00";
                    }
                    return final;
                } else {
                    return Math.round(value / this.options.step) * this.options.step;
                }
            },
            setInputValue: function(pointer, v) {
                // if(!isChanged) return;
                if (this.isSingle()) {
                    this.options.value = v.toString();
                } else {
                    var values = this.options.value.split(',');
                    if (pointer.hasClass('low')) {
                        this.options.value = v + ',' + values[1];
                    } else {
                        this.options.value = values[0] + ',' + v;
                    }
                }
                if (this.inputNode.val() !== this.options.value) {
                    this.inputNode.val(this.options.value)
                        .trigger('change');
                    this.options.onstatechange.call(this, this.options.value);
                }
            },
            getValue: function() {
                return this.options.value;
            },
            getOptions: function() {
                return this.options;
            },
            getRange: function() {
                return this.options.from + "," + this.options.to;
            },
            isReadonly: function(){
                this.domNode.toggleClass('slider-readonly', this.options.disable);
            },
            disable: function(){
                this.options.disable = true;
                this.isReadonly();
            },
            enable: function(){
                this.options.disable = false;
                this.isReadonly();
            },
            toggleDisable: function(){
                this.options.disable = !this.options.disable;
                this.isReadonly();
            },
            updateRange: function(range, value) {
                var values = range.toString().split(',');
                this.interval = parseInt(values[1]) - parseInt(values[0]);
                if(value){
                    this.setValue(value);
                }else{
                    this.setValue(this.getValue());
                }
            }
        };

        var pluginName = 'jRange';
        // A really lightweight plugin wrapper around the constructor,
        // preventing against multiple instantiations
        $.fn[pluginName] = function(option) {
            var args = arguments,
                result;

            this.each(function() {
                var $this = $(this),
                    data = $.data(this, 'plugin_' + pluginName),
                    options = typeof option === 'object' && option;
                if (!data) {
                    $this.data('plugin_' + pluginName, (data = new jRange(this, options)));
                    $(window).resize(function() {
                        data.setValue(data.getValue());
                    }); // Update slider position when window is resized to keep it in sync with scale
                }
                // if first argument is a string, call silimarly named function
                // this gives flexibility to call functions of the plugin e.g.
                //   - $('.dial').plugin('destroy');
                //   - $('.dial').plugin('render', $('.new-child'));
                if (typeof option === 'string') {
                    result = data[option].apply(data, Array.prototype.slice.call(args, 1));
                }
            });

            // To enable plugin returns values
            return result || this;
        };

    })(jQuery, window, document);


/* Как видит близоруйкий ребенок */
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

$(document).ready(function(){

    $(".note").on("click", function (event) {
        event.preventDefault(); //опустошим стандартную обработку
        let block = $('#warningBlock').offset().top; //определим высоту от начала страницы до якоря
    $('body,html').animate({scrollTop: block}, 2000); //сделаем прокрутку за 2 с
    });
});