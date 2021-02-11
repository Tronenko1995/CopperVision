window.addEventListener("load", () => {
    let analitic = false,
        metric = false;

    function test1() {
        if (typeof ga === 'undefined') {
            console.log('%c CooperVision: Аналитика не подключена!', 'color: red');
        } else {
            console.log('%c CooperVision: Аналитика успешно подключена!', 'color: green');
            analitic = true;
        }
        if (typeof ym === 'undefined') {
            console.log('%c CooperVision: Метрика не подключена!', 'color: red');
        } else {
            console.log('%c CooperVision: Метрика успешно подключена!', 'color: green');
            metric = true;
        }
    }
    function googleSend(event, type, category, name) {
        if (analitic === true) {
            ga(event, type, category, name);
        } else {
            console.log('%c CooperVision: Аналитика не подключена!', 'color: red');
        }
    }
    function yandexSend(number, event, name) {
        if (metric === true) {
            ym(number, event, name);
        } else {
            console.log('%c CooperVision: Метрика не подключена!', 'color: red');
        }
    }
    test1();

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});

/*inputmask*/
/*!
 * dist/jquery.inputmask.min
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2020 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.6-beta.15
 */
!function webpackUniversalModuleDefinition(root,factory){if("object"==typeof exports&&"object"==typeof module)module.exports=factory(require("jquery"));else if("function"==typeof define&&define.amd)define(["jquery"],factory);else{var a="object"==typeof exports?factory(require("jquery")):factory(root.jQuery);for(var i in a)("object"==typeof exports?exports:root)[i]=a[i]}}(window,function(__WEBPACK_EXTERNAL_MODULE__8__){return modules=[function(module){module.exports=JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"CONTROL":17,"KEY_229":229}')},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__(16),__webpack_require__(17);var _mask=__webpack_require__(9),_inputmask=_interopRequireDefault(__webpack_require__(11)),_window=_interopRequireDefault(__webpack_require__(12)),_maskLexer=__webpack_require__(18),_validationTests=__webpack_require__(3),_positioning=__webpack_require__(2),_validation=__webpack_require__(4),_inputHandling=__webpack_require__(5),_eventruler=__webpack_require__(10),_definitions=_interopRequireDefault(__webpack_require__(19)),_defaults=_interopRequireDefault(__webpack_require__(20));function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var document=_window.default.document,dataKey="_inputmask_opts";function Inputmask(alias,options,internal){if(!(this instanceof Inputmask))return new Inputmask(alias,options,internal);this.dependencyLib=_inputmask.default,this.el=void 0,this.events={},this.maskset=void 0,!0!==internal&&("[object Object]"===Object.prototype.toString.call(alias)?options=alias:(options=options||{},alias&&(options.alias=alias)),this.opts=_inputmask.default.extend(!0,{},this.defaults,options),this.noMasksCache=options&&void 0!==options.definitions,this.userOptions=options||{},resolveAlias(this.opts.alias,options,this.opts)),this.refreshValue=!1,this.undoValue=void 0,this.$el=void 0,this.skipKeyPressEvent=!1,this.skipInputEvent=!1,this.validationEvent=!1,this.ignorable=!1,this.maxLength,this.mouseEnter=!1,this.originalPlaceholder=void 0,this.isComposing=!1}function resolveAlias(aliasStr,options,opts){var aliasDefinition=Inputmask.prototype.aliases[aliasStr];return aliasDefinition?(aliasDefinition.alias&&resolveAlias(aliasDefinition.alias,void 0,opts),_inputmask.default.extend(!0,opts,aliasDefinition),_inputmask.default.extend(!0,opts,options),!0):(null===opts.mask&&(opts.mask=aliasStr),!1)}function importAttributeOptions(npt,opts,userOptions,dataAttribute){function importOption(option,optionData){var attrOption=""===dataAttribute?option:dataAttribute+"-"+option;optionData=void 0!==optionData?optionData:npt.getAttribute(attrOption),null!==optionData&&("string"==typeof optionData&&(0===option.indexOf("on")?optionData=_window.default[optionData]:"false"===optionData?optionData=!1:"true"===optionData&&(optionData=!0)),userOptions[option]=optionData)}if(!0===opts.importDataAttributes){var attrOptions=npt.getAttribute(dataAttribute),option,dataoptions,optionData,p;if(attrOptions&&""!==attrOptions&&(attrOptions=attrOptions.replace(/'/g,'"'),dataoptions=JSON.parse("{"+attrOptions+"}")),dataoptions)for(p in optionData=void 0,dataoptions)if("alias"===p.toLowerCase()){optionData=dataoptions[p];break}for(option in importOption("alias",optionData),userOptions.alias&&resolveAlias(userOptions.alias,userOptions,opts),opts){if(dataoptions)for(p in optionData=void 0,dataoptions)if(p.toLowerCase()===option.toLowerCase()){optionData=dataoptions[p];break}importOption(option,optionData)}}return _inputmask.default.extend(!0,opts,userOptions),"rtl"!==npt.dir&&!opts.rightAlign||(npt.style.textAlign="right"),"rtl"!==npt.dir&&!opts.numericInput||(npt.dir="ltr",npt.removeAttribute("dir"),opts.isRTL=!0),Object.keys(userOptions).length}Inputmask.prototype={dataAttribute:"data-inputmask",defaults:_defaults.default,definitions:_definitions.default,aliases:{},masksCache:{},get isRTL(){return this.opts.isRTL||this.opts.numericInput},mask:function mask(elems){var that=this;return"string"==typeof elems&&(elems=document.getElementById(elems)||document.querySelectorAll(elems)),elems=elems.nodeName?[elems]:Array.isArray(elems)?elems:Array.from(elems),elems.forEach(function(el,ndx){var scopedOpts=_inputmask.default.extend(!0,{},that.opts);if(importAttributeOptions(el,scopedOpts,_inputmask.default.extend(!0,{},that.userOptions),that.dataAttribute)){var maskset=(0,_maskLexer.generateMaskSet)(scopedOpts,that.noMasksCache);void 0!==maskset&&(void 0!==el.inputmask&&(el.inputmask.opts.autoUnmask=!0,el.inputmask.remove()),el.inputmask=new Inputmask(void 0,void 0,!0),el.inputmask.opts=scopedOpts,el.inputmask.noMasksCache=that.noMasksCache,el.inputmask.userOptions=_inputmask.default.extend(!0,{},that.userOptions),el.inputmask.el=el,el.inputmask.$el=(0,_inputmask.default)(el),el.inputmask.maskset=maskset,_inputmask.default.data(el,dataKey,that.userOptions),_mask.mask.call(el.inputmask))}}),elems&&elems[0]&&elems[0].inputmask||this},option:function option(options,noremask){return"string"==typeof options?this.opts[options]:"object"===_typeof(options)?(_inputmask.default.extend(this.userOptions,options),this.el&&!0!==noremask&&this.mask(this.el),this):void 0},unmaskedvalue:function unmaskedvalue(value){if(this.maskset=this.maskset||(0,_maskLexer.generateMaskSet)(this.opts,this.noMasksCache),void 0===this.el||void 0!==value){var valueBuffer=("function"==typeof this.opts.onBeforeMask&&this.opts.onBeforeMask.call(this,value,this.opts)||value).split("");_inputHandling.checkVal.call(this,void 0,!1,!1,valueBuffer),"function"==typeof this.opts.onBeforeWrite&&this.opts.onBeforeWrite.call(this,void 0,_positioning.getBuffer.call(this),0,this.opts)}return _inputHandling.unmaskedvalue.call(this,this.el)},remove:function remove(){if(this.el){_inputmask.default.data(this.el,dataKey,null);var cv=this.opts.autoUnmask?(0,_inputHandling.unmaskedvalue)(this.el):this._valueGet(this.opts.autoUnmask),valueProperty;cv!==_positioning.getBufferTemplate.call(this).join("")?this._valueSet(cv,this.opts.autoUnmask):this._valueSet(""),_eventruler.EventRuler.off(this.el),Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?(valueProperty=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el),"value"),valueProperty&&this.__valueGet&&Object.defineProperty(this.el,"value",{get:this.__valueGet,set:this.__valueSet,configurable:!0})):document.__lookupGetter__&&this.el.__lookupGetter__("value")&&this.__valueGet&&(this.el.__defineGetter__("value",this.__valueGet),this.el.__defineSetter__("value",this.__valueSet)),this.el.inputmask=void 0}return this.el},getemptymask:function getemptymask(){return this.maskset=this.maskset||(0,_maskLexer.generateMaskSet)(this.opts,this.noMasksCache),_positioning.getBufferTemplate.call(this).join("")},hasMaskedValue:function hasMaskedValue(){return!this.opts.autoUnmask},isComplete:function isComplete(){return this.maskset=this.maskset||(0,_maskLexer.generateMaskSet)(this.opts,this.noMasksCache),_validation.isComplete.call(this,_positioning.getBuffer.call(this))},getmetadata:function getmetadata(){if(this.maskset=this.maskset||(0,_maskLexer.generateMaskSet)(this.opts,this.noMasksCache),Array.isArray(this.maskset.metadata)){var maskTarget=_validationTests.getMaskTemplate.call(this,!0,0,!1).join("");return this.maskset.metadata.forEach(function(mtdt){return mtdt.mask!==maskTarget||(maskTarget=mtdt,!1)}),maskTarget}return this.maskset.metadata},isValid:function isValid(value){if(this.maskset=this.maskset||(0,_maskLexer.generateMaskSet)(this.opts,this.noMasksCache),value){var valueBuffer=("function"==typeof this.opts.onBeforeMask&&this.opts.onBeforeMask.call(this,value,this.opts)||value).split("");_inputHandling.checkVal.call(this,void 0,!0,!1,valueBuffer)}else value=this.isRTL?_positioning.getBuffer.call(this).slice().reverse().join(""):_positioning.getBuffer.call(this).join("");for(var buffer=_positioning.getBuffer.call(this),rl=_positioning.determineLastRequiredPosition.call(this),lmib=buffer.length-1;rl<lmib&&!_positioning.isMask.call(this,lmib);lmib--);return buffer.splice(rl,lmib+1-rl),_validation.isComplete.call(this,buffer)&&value===(this.isRTL?_positioning.getBuffer.call(this).slice().reverse().join(""):_positioning.getBuffer.call(this).join(""))},format:function format(value,metadata){this.maskset=this.maskset||(0,_maskLexer.generateMaskSet)(this.opts,this.noMasksCache);var valueBuffer=("function"==typeof this.opts.onBeforeMask&&this.opts.onBeforeMask.call(this,value,this.opts)||value).split("");_inputHandling.checkVal.call(this,void 0,!0,!1,valueBuffer);var formattedValue=this.isRTL?_positioning.getBuffer.call(this).slice().reverse().join(""):_positioning.getBuffer.call(this).join("");return metadata?{value:formattedValue,metadata:this.getmetadata()}:formattedValue},setValue:function setValue(value){this.el&&(0,_inputmask.default)(this.el).trigger("setvalue",[value])},analyseMask:_maskLexer.analyseMask},Inputmask.extendDefaults=function(options){_inputmask.default.extend(!0,Inputmask.prototype.defaults,options)},Inputmask.extendDefinitions=function(definition){_inputmask.default.extend(!0,Inputmask.prototype.definitions,definition)},Inputmask.extendAliases=function(alias){_inputmask.default.extend(!0,Inputmask.prototype.aliases,alias)},Inputmask.format=function(value,options,metadata){return Inputmask(options).format(value,metadata)},Inputmask.unmask=function(value,options){return Inputmask(options).unmaskedvalue(value)},Inputmask.isValid=function(value,options){return Inputmask(options).isValid(value)},Inputmask.remove=function(elems){"string"==typeof elems&&(elems=document.getElementById(elems)||document.querySelectorAll(elems)),elems=elems.nodeName?[elems]:elems,elems.forEach(function(el){el.inputmask&&el.inputmask.remove()})},Inputmask.setValue=function(elems,value){"string"==typeof elems&&(elems=document.getElementById(elems)||document.querySelectorAll(elems)),elems=elems.nodeName?[elems]:elems,elems.forEach(function(el){el.inputmask?el.inputmask.setValue(value):(0,_inputmask.default)(el).trigger("setvalue",[value])})},Inputmask.dependencyLib=_inputmask.default,_window.default.Inputmask=Inputmask;var _default=Inputmask;exports.default=_default},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.caret=caret,exports.determineLastRequiredPosition=determineLastRequiredPosition,exports.determineNewCaretPosition=determineNewCaretPosition,exports.getBuffer=getBuffer,exports.getBufferTemplate=getBufferTemplate,exports.getLastValidPosition=getLastValidPosition,exports.isMask=isMask,exports.resetMaskSet=resetMaskSet,exports.seekNext=seekNext,exports.seekPrevious=seekPrevious,exports.translatePosition=translatePosition;var _validationTests=__webpack_require__(3),_validation=__webpack_require__(4),_mask=__webpack_require__(9);function caret(input,begin,end,notranslate,isDelete){var inputmask=this,opts=this.opts,range;if(void 0===begin)return"selectionStart"in input&&"selectionEnd"in input?(begin=input.selectionStart,end=input.selectionEnd):window.getSelection?(range=window.getSelection().getRangeAt(0),range.commonAncestorContainer.parentNode!==input&&range.commonAncestorContainer!==input||(begin=range.startOffset,end=range.endOffset)):document.selection&&document.selection.createRange&&(range=document.selection.createRange(),begin=0-range.duplicate().moveStart("character",-input.inputmask._valueGet().length),end=begin+range.text.length),{begin:notranslate?begin:translatePosition.call(this,begin),end:notranslate?end:translatePosition.call(this,end)};if(Array.isArray(begin)&&(end=this.isRTL?begin[0]:begin[1],begin=this.isRTL?begin[1]:begin[0]),void 0!==begin.begin&&(end=this.isRTL?begin.begin:begin.end,begin=this.isRTL?begin.end:begin.begin),"number"==typeof begin){begin=notranslate?begin:translatePosition.call(this,begin),end=notranslate?end:translatePosition.call(this,end),end="number"==typeof end?end:begin;var scrollCalc=parseInt(((input.ownerDocument.defaultView||window).getComputedStyle?(input.ownerDocument.defaultView||window).getComputedStyle(input,null):input.currentStyle).fontSize)*end;if(input.scrollLeft=scrollCalc>input.scrollWidth?scrollCalc:0,input.inputmask.caretPos={begin:begin,end:end},opts.insertModeVisual&&!1===opts.insertMode&&begin===end&&(isDelete||end++),input===(input.inputmask.shadowRoot||document).activeElement)if("setSelectionRange"in input)input.setSelectionRange(begin,end);else if(window.getSelection){if(range=document.createRange(),void 0===input.firstChild||null===input.firstChild){var textNode=document.createTextNode("");input.appendChild(textNode)}range.setStart(input.firstChild,begin<input.inputmask._valueGet().length?begin:input.inputmask._valueGet().length),range.setEnd(input.firstChild,end<input.inputmask._valueGet().length?end:input.inputmask._valueGet().length),range.collapse(!0);var sel=window.getSelection();sel.removeAllRanges(),sel.addRange(range)}else input.createTextRange&&(range=input.createTextRange(),range.collapse(!0),range.moveEnd("character",end),range.moveStart("character",begin),range.select())}}function determineLastRequiredPosition(returnDefinition){var inputmask=this,maskset=this.maskset,$=this.dependencyLib,buffer=_validationTests.getMaskTemplate.call(this,!0,getLastValidPosition.call(this),!0,!0),bl=buffer.length,pos,lvp=getLastValidPosition.call(this),positions={},lvTest=maskset.validPositions[lvp],ndxIntlzr=void 0!==lvTest?lvTest.locator.slice():void 0,testPos;for(pos=lvp+1;pos<buffer.length;pos++)testPos=_validationTests.getTestTemplate.call(this,pos,ndxIntlzr,pos-1),ndxIntlzr=testPos.locator.slice(),positions[pos]=$.extend(!0,{},testPos);var lvTestAlt=lvTest&&void 0!==lvTest.alternation?lvTest.locator[lvTest.alternation]:void 0;for(pos=bl-1;lvp<pos&&(testPos=positions[pos],(testPos.match.optionality||testPos.match.optionalQuantifier&&testPos.match.newBlockMarker||lvTestAlt&&(lvTestAlt!==positions[pos].locator[lvTest.alternation]&&1!=testPos.match.static||!0===testPos.match.static&&testPos.locator[lvTest.alternation]&&_validation.checkAlternationMatch.call(this,testPos.locator[lvTest.alternation].toString().split(","),lvTestAlt.toString().split(","))&&""!==_validationTests.getTests.call(this,pos)[0].def))&&buffer[pos]===_validationTests.getPlaceholder.call(this,pos,testPos.match));pos--)bl--;return returnDefinition?{l:bl,def:positions[bl]?positions[bl].match:void 0}:bl}function determineNewCaretPosition(selectedCaret,tabbed){var inputmask=this,maskset=this.maskset,opts=this.opts;function doRadixFocus(clickPos){if(""!==opts.radixPoint&&0!==opts.digits){var vps=maskset.validPositions;if(void 0===vps[clickPos]||vps[clickPos].input===_validationTests.getPlaceholder.call(inputmask,clickPos)){if(clickPos<seekNext.call(inputmask,-1))return!0;var radixPos=getBuffer.call(inputmask).indexOf(opts.radixPoint);if(-1!==radixPos){for(var vp in vps)if(vps[vp]&&radixPos<vp&&vps[vp].input!==_validationTests.getPlaceholder.call(inputmask,vp))return!1;return!0}}}return!1}if(tabbed&&(inputmask.isRTL?selectedCaret.end=selectedCaret.begin:selectedCaret.begin=selectedCaret.end),selectedCaret.begin===selectedCaret.end){switch(opts.positionCaretOnClick){case"none":break;case"select":selectedCaret={begin:0,end:getBuffer.call(inputmask).length};break;case"ignore":selectedCaret.end=selectedCaret.begin=seekNext.call(inputmask,getLastValidPosition.call(inputmask));break;case"radixFocus":if(doRadixFocus(selectedCaret.begin)){var radixPos=getBuffer.call(inputmask).join("").indexOf(opts.radixPoint);selectedCaret.end=selectedCaret.begin=opts.numericInput?seekNext.call(inputmask,radixPos):radixPos;break}default:var clickPosition=selectedCaret.begin,lvclickPosition=getLastValidPosition.call(inputmask,clickPosition,!0),lastPosition=seekNext.call(inputmask,-1!==lvclickPosition||isMask.call(inputmask,0)?lvclickPosition:-1);if(clickPosition<=lastPosition)selectedCaret.end=selectedCaret.begin=isMask.call(inputmask,clickPosition,!1,!0)?clickPosition:seekNext.call(inputmask,clickPosition);else{var lvp=maskset.validPositions[lvclickPosition],tt=_validationTests.getTestTemplate.call(inputmask,lastPosition,lvp?lvp.match.locator:void 0,lvp),placeholder=_validationTests.getPlaceholder.call(inputmask,lastPosition,tt.match);if(""!==placeholder&&getBuffer.call(inputmask)[lastPosition]!==placeholder&&!0!==tt.match.optionalQuantifier&&!0!==tt.match.newBlockMarker||!isMask.call(inputmask,lastPosition,opts.keepStatic,!0)&&tt.match.def===placeholder){var newPos=seekNext.call(inputmask,lastPosition);(newPos<=clickPosition||clickPosition===lastPosition)&&(lastPosition=newPos)}selectedCaret.end=selectedCaret.begin=lastPosition}}return selectedCaret}}function getBuffer(noCache){var inputmask=this,maskset=this.maskset;return void 0!==maskset.buffer&&!0!==noCache||(maskset.buffer=_validationTests.getMaskTemplate.call(this,!0,getLastValidPosition.call(this),!0),void 0===maskset._buffer&&(maskset._buffer=maskset.buffer.slice())),maskset.buffer}function getBufferTemplate(){var inputmask=this,maskset=this.maskset;return void 0===maskset._buffer&&(maskset._buffer=_validationTests.getMaskTemplate.call(this,!1,1),void 0===maskset.buffer&&(maskset.buffer=maskset._buffer.slice())),maskset._buffer}function getLastValidPosition(closestTo,strict,validPositions){var maskset=this.maskset,before=-1,after=-1,valids=validPositions||maskset.validPositions;for(var posNdx in void 0===closestTo&&(closestTo=-1),valids){var psNdx=parseInt(posNdx);valids[psNdx]&&(strict||!0!==valids[psNdx].generatedInput)&&(psNdx<=closestTo&&(before=psNdx),closestTo<=psNdx&&(after=psNdx))}return-1===before||before==closestTo?after:-1==after?before:closestTo-before<after-closestTo?before:after}function isMask(pos,strict,fuzzy){var inputmask=this,maskset=this.maskset,test=_validationTests.getTestTemplate.call(this,pos).match;if(""===test.def&&(test=_validationTests.getTest.call(this,pos).match),!0!==test.static)return test.fn;if(!0===fuzzy&&void 0!==maskset.validPositions[pos]&&!0!==maskset.validPositions[pos].generatedInput)return!0;if(!0!==strict&&-1<pos){if(fuzzy){var tests=_validationTests.getTests.call(this,pos);return tests.length>1+(""===tests[tests.length-1].match.def?1:0)}var testTemplate=_validationTests.determineTestTemplate.call(this,pos,_validationTests.getTests.call(this,pos)),testPlaceHolder=_validationTests.getPlaceholder.call(this,pos,testTemplate.match);return testTemplate.match.def!==testPlaceHolder}return!1}function resetMaskSet(soft){var maskset=this.maskset;maskset.buffer=void 0,!0!==soft&&(maskset.validPositions={},maskset.p=0)}function seekNext(pos,newBlock,fuzzy){var inputmask=this;void 0===fuzzy&&(fuzzy=!0);for(var position=pos+1;""!==_validationTests.getTest.call(this,position).match.def&&(!0===newBlock&&(!0!==_validationTests.getTest.call(this,position).match.newBlockMarker||!isMask.call(this,position,void 0,!0))||!0!==newBlock&&!isMask.call(this,position,void 0,fuzzy));)position++;return position}function seekPrevious(pos,newBlock){var inputmask=this,position=pos-1;if(pos<=0)return 0;for(;0<position&&(!0===newBlock&&(!0!==_validationTests.getTest.call(this,position).match.newBlockMarker||!isMask.call(this,position,void 0,!0))||!0!==newBlock&&!isMask.call(this,position,void 0,!0));)position--;return position}function translatePosition(pos){var inputmask=this,opts=this.opts,el=this.el;return!this.isRTL||"number"!=typeof pos||opts.greedy&&""===opts.placeholder||!el||(pos=this._valueGet().length-pos),pos}},function(module,exports,__webpack_require__){"use strict";function getLocator(tst,align){var locator=(null!=tst.alternation?tst.mloc[getDecisionTaker(tst)]:tst.locator).join("");if(""!==locator)for(;locator.length<align;)locator+="0";return locator}function getDecisionTaker(tst){var decisionTaker=tst.locator[tst.alternation];return"string"==typeof decisionTaker&&0<decisionTaker.length&&(decisionTaker=decisionTaker.split(",")[0]),void 0!==decisionTaker?decisionTaker.toString():""}function getPlaceholder(pos,test,returnPL){var inputmask=this,opts=this.opts,maskset=this.maskset;if(test=test||getTest.call(this,pos).match,void 0!==test.placeholder||!0===returnPL)return"function"==typeof test.placeholder?test.placeholder(opts):test.placeholder;if(!0!==test.static)return opts.placeholder.charAt(pos%opts.placeholder.length);if(-1<pos&&void 0===maskset.validPositions[pos]){var tests=getTests.call(this,pos),staticAlternations=[],prevTest;if(tests.length>1+(""===tests[tests.length-1].match.def?1:0))for(var i=0;i<tests.length;i++)if(""!==tests[i].match.def&&!0!==tests[i].match.optionality&&!0!==tests[i].match.optionalQuantifier&&(!0===tests[i].match.static||void 0===prevTest||!1!==tests[i].match.fn.test(prevTest.match.def,maskset,pos,!0,opts))&&(staticAlternations.push(tests[i]),!0===tests[i].match.static&&(prevTest=tests[i]),1<staticAlternations.length&&/[0-9a-bA-Z]/.test(staticAlternations[0].match.def)))return opts.placeholder.charAt(pos%opts.placeholder.length)}return test.def}function getMaskTemplate(baseOnInput,minimalPos,includeMode,noJit,clearOptionalTail){var inputmask=this,opts=this.opts,maskset=this.maskset,greedy=opts.greedy;clearOptionalTail&&(opts.greedy=!1),minimalPos=minimalPos||0;var maskTemplate=[],ndxIntlzr,pos=0,test,testPos,jitRenderStatic;do{if(!0===baseOnInput&&maskset.validPositions[pos])testPos=clearOptionalTail&&!0===maskset.validPositions[pos].match.optionality&&void 0===maskset.validPositions[pos+1]&&(!0===maskset.validPositions[pos].generatedInput||maskset.validPositions[pos].input==opts.skipOptionalPartCharacter&&0<pos)?determineTestTemplate.call(this,pos,getTests.call(this,pos,ndxIntlzr,pos-1)):maskset.validPositions[pos],test=testPos.match,ndxIntlzr=testPos.locator.slice(),maskTemplate.push(!0===includeMode?testPos.input:!1===includeMode?test.nativeDef:getPlaceholder.call(this,pos,test));else{testPos=getTestTemplate.call(this,pos,ndxIntlzr,pos-1),test=testPos.match,ndxIntlzr=testPos.locator.slice();var jitMasking=!0!==noJit&&(!1!==opts.jitMasking?opts.jitMasking:test.jit);jitRenderStatic=jitRenderStatic&&test.static&&test.def!==opts.groupSeparator&&null===test.fn||maskset.validPositions[pos-1]&&test.static&&test.def!==opts.groupSeparator&&null===test.fn,jitRenderStatic||!1===jitMasking||void 0===jitMasking||"number"==typeof jitMasking&&isFinite(jitMasking)&&pos<jitMasking?maskTemplate.push(!1===includeMode?test.nativeDef:getPlaceholder.call(this,pos,test)):jitRenderStatic=!1}pos++}while((void 0===this.maxLength||pos<this.maxLength)&&(!0!==test.static||""!==test.def)||pos<minimalPos);return""===maskTemplate[maskTemplate.length-1]&&maskTemplate.pop(),!1===includeMode&&void 0!==maskset.maskLength||(maskset.maskLength=pos-1),opts.greedy=greedy,maskTemplate}function getTestTemplate(pos,ndxIntlzr,tstPs){var inputmask=this,maskset=this.maskset;return maskset.validPositions[pos]||determineTestTemplate.call(this,pos,getTests.call(this,pos,ndxIntlzr?ndxIntlzr.slice():ndxIntlzr,tstPs))}function determineTestTemplate(pos,tests){var inputmask=this,opts=this.opts;pos=0<pos?pos-1:0;for(var altTest=getTest.call(this,pos),targetLocator=getLocator(altTest),tstLocator,closest,bestMatch,ndx=0;ndx<tests.length;ndx++){var tst=tests[ndx];tstLocator=getLocator(tst,targetLocator.length);var distance=Math.abs(tstLocator-targetLocator);(void 0===closest||""!==tstLocator&&distance<closest||bestMatch&&!opts.greedy&&bestMatch.match.optionality&&"master"===bestMatch.match.newBlockMarker&&(!tst.match.optionality||!tst.match.newBlockMarker)||bestMatch&&bestMatch.match.optionalQuantifier&&!tst.match.optionalQuantifier)&&(closest=distance,bestMatch=tst)}return bestMatch}function getTest(pos,tests){var inputmask=this,maskset=this.maskset;return maskset.validPositions[pos]?maskset.validPositions[pos]:(tests||getTests.call(this,pos))[0]}function getTests(pos,ndxIntlzr,tstPs){var inputmask=this,$=this.dependencyLib,maskset=this.maskset,opts=this.opts,el=this.el,maskTokens=maskset.maskToken,testPos=ndxIntlzr?tstPs:0,ndxInitializer=ndxIntlzr?ndxIntlzr.slice():[0],matches=[],insertStop=!1,latestMatch,cacheDependency=ndxIntlzr?ndxIntlzr.join(""):"";function resolveTestFromToken(maskToken,ndxInitializer,loopNdx,quantifierRecurse){function handleMatch(match,loopNdx,quantifierRecurse){function isFirstMatch(latestMatch,tokenGroup){var firstMatch=0===tokenGroup.matches.indexOf(latestMatch);return firstMatch||tokenGroup.matches.every(function(match,ndx){return!0===match.isQuantifier?firstMatch=isFirstMatch(latestMatch,tokenGroup.matches[ndx-1]):Object.prototype.hasOwnProperty.call(match,"matches")&&(firstMatch=isFirstMatch(latestMatch,match)),!firstMatch}),firstMatch}function resolveNdxInitializer(pos,alternateNdx,targetAlternation){var bestMatch,indexPos;if((maskset.tests[pos]||maskset.validPositions[pos])&&(maskset.tests[pos]||[maskset.validPositions[pos]]).every(function(lmnt,ndx){if(lmnt.mloc[alternateNdx])return bestMatch=lmnt,!1;var alternation=void 0!==targetAlternation?targetAlternation:lmnt.alternation,ndxPos=void 0!==lmnt.locator[alternation]?lmnt.locator[alternation].toString().indexOf(alternateNdx):-1;return(void 0===indexPos||ndxPos<indexPos)&&-1!==ndxPos&&(bestMatch=lmnt,indexPos=ndxPos),!0}),bestMatch){var bestMatchAltIndex=bestMatch.locator[bestMatch.alternation],locator=bestMatch.mloc[alternateNdx]||bestMatch.mloc[bestMatchAltIndex]||bestMatch.locator;return locator.slice((void 0!==targetAlternation?targetAlternation:bestMatch.alternation)+1)}return void 0!==targetAlternation?resolveNdxInitializer(pos,alternateNdx):void 0}function isSubsetOf(source,target){function expand(pattern){for(var expanded=[],start=-1,end,i=0,l=pattern.length;i<l;i++)if("-"===pattern.charAt(i))for(end=pattern.charCodeAt(i+1);++start<end;)expanded.push(String.fromCharCode(start));else start=pattern.charCodeAt(i),expanded.push(pattern.charAt(i));return expanded.join("")}return source.match.def===target.match.nativeDef||!(!(opts.regex||source.match.fn instanceof RegExp&&target.match.fn instanceof RegExp)||!0===source.match.static||!0===target.match.static)&&-1!==expand(target.match.fn.toString().replace(/[[\]/]/g,"")).indexOf(expand(source.match.fn.toString().replace(/[[\]/]/g,"")))}function staticCanMatchDefinition(source,target){return!0===source.match.static&&!0!==target.match.static&&target.match.fn.test(source.match.def,maskset,pos,!1,opts,!1)}function setMergeLocators(targetMatch,altMatch){var alternationNdx=targetMatch.alternation,shouldMerge=void 0===altMatch||alternationNdx===altMatch.alternation&&-1===targetMatch.locator[alternationNdx].toString().indexOf(altMatch.locator[alternationNdx]);if(!shouldMerge&&alternationNdx>altMatch.alternation)for(var i=altMatch.alternation;i<alternationNdx;i++)if(targetMatch.locator[i]!==altMatch.locator[i]){alternationNdx=i,shouldMerge=!0;break}if(shouldMerge){targetMatch.mloc=targetMatch.mloc||{};var locNdx=targetMatch.locator[alternationNdx];if(void 0!==locNdx){if("string"==typeof locNdx&&(locNdx=locNdx.split(",")[0]),void 0===targetMatch.mloc[locNdx]&&(targetMatch.mloc[locNdx]=targetMatch.locator.slice()),void 0!==altMatch){for(var ndx in altMatch.mloc)"string"==typeof ndx&&(ndx=ndx.split(",")[0]),void 0===targetMatch.mloc[ndx]&&(targetMatch.mloc[ndx]=altMatch.mloc[ndx]);targetMatch.locator[alternationNdx]=Object.keys(targetMatch.mloc).join(",")}return!0}targetMatch.alternation=void 0}return!1}function isSameLevel(targetMatch,altMatch){if(targetMatch.locator.length!==altMatch.locator.length)return!1;for(var locNdx=targetMatch.alternation+1;locNdx<targetMatch.locator.length;locNdx++)if(targetMatch.locator[locNdx]!==altMatch.locator[locNdx])return!1;return!0}if(testPos>pos+opts._maxTestPos)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+maskset.mask;if(testPos===pos&&void 0===match.matches)return matches.push({match:match,locator:loopNdx.reverse(),cd:cacheDependency,mloc:{}}),!0;if(void 0!==match.matches){if(match.isGroup&&quantifierRecurse!==match){if(match=handleMatch(maskToken.matches[maskToken.matches.indexOf(match)+1],loopNdx,quantifierRecurse),match)return!0}else if(match.isOptional){var optionalToken=match,mtchsNdx=matches.length;if(match=resolveTestFromToken(match,ndxInitializer,loopNdx,quantifierRecurse),match){if(matches.forEach(function(mtch,ndx){mtchsNdx<=ndx&&(mtch.match.optionality=!0)}),latestMatch=matches[matches.length-1].match,void 0!==quantifierRecurse||!isFirstMatch(latestMatch,optionalToken))return!0;insertStop=!0,testPos=pos}}else if(match.isAlternator){var alternateToken=match,malternateMatches=[],maltMatches,currentMatches=matches.slice(),loopNdxCnt=loopNdx.length,altIndex=0<ndxInitializer.length?ndxInitializer.shift():-1;if(-1===altIndex||"string"==typeof altIndex){var currentPos=testPos,ndxInitializerClone=ndxInitializer.slice(),altIndexArr=[],amndx;if("string"==typeof altIndex)altIndexArr=altIndex.split(",");else for(amndx=0;amndx<alternateToken.matches.length;amndx++)altIndexArr.push(amndx.toString());if(void 0!==maskset.excludes[pos]){for(var altIndexArrClone=altIndexArr.slice(),i=0,exl=maskset.excludes[pos].length;i<exl;i++){var excludeSet=maskset.excludes[pos][i].toString().split(":");loopNdx.length==excludeSet[1]&&altIndexArr.splice(altIndexArr.indexOf(excludeSet[0]),1)}0===altIndexArr.length&&(delete maskset.excludes[pos],altIndexArr=altIndexArrClone)}(!0===opts.keepStatic||isFinite(parseInt(opts.keepStatic))&&currentPos>=opts.keepStatic)&&(altIndexArr=altIndexArr.slice(0,1));for(var unMatchedAlternation=!1,ndx=0;ndx<altIndexArr.length;ndx++){amndx=parseInt(altIndexArr[ndx]),matches=[],ndxInitializer="string"==typeof altIndex&&resolveNdxInitializer(testPos,amndx,loopNdxCnt)||ndxInitializerClone.slice(),alternateToken.matches[amndx]&&handleMatch(alternateToken.matches[amndx],[amndx].concat(loopNdx),quantifierRecurse)?match=!0:0===ndx&&(unMatchedAlternation=!0),maltMatches=matches.slice(),testPos=currentPos,matches=[];for(var ndx1=0;ndx1<maltMatches.length;ndx1++){var altMatch=maltMatches[ndx1],dropMatch=!1;altMatch.match.jit=altMatch.match.jit||unMatchedAlternation,altMatch.alternation=altMatch.alternation||loopNdxCnt,setMergeLocators(altMatch);for(var ndx2=0;ndx2<malternateMatches.length;ndx2++){var altMatch2=malternateMatches[ndx2];if("string"!=typeof altIndex||void 0!==altMatch.alternation&&altIndexArr.includes(altMatch.locator[altMatch.alternation].toString())){if(altMatch.match.nativeDef===altMatch2.match.nativeDef){dropMatch=!0,setMergeLocators(altMatch2,altMatch);break}if(isSubsetOf(altMatch,altMatch2)){setMergeLocators(altMatch,altMatch2)&&(dropMatch=!0,malternateMatches.splice(malternateMatches.indexOf(altMatch2),0,altMatch));break}if(isSubsetOf(altMatch2,altMatch)){setMergeLocators(altMatch2,altMatch);break}if(staticCanMatchDefinition(altMatch,altMatch2)){isSameLevel(altMatch,altMatch2)||void 0!==el.inputmask.userOptions.keepStatic?setMergeLocators(altMatch,altMatch2)&&(dropMatch=!0,malternateMatches.splice(malternateMatches.indexOf(altMatch2),0,altMatch)):opts.keepStatic=!0;break}}}dropMatch||malternateMatches.push(altMatch)}}matches=currentMatches.concat(malternateMatches),testPos=pos,insertStop=0<matches.length,match=0<malternateMatches.length,ndxInitializer=ndxInitializerClone.slice()}else match=handleMatch(alternateToken.matches[altIndex]||maskToken.matches[altIndex],[altIndex].concat(loopNdx),quantifierRecurse);if(match)return!0}else if(match.isQuantifier&&quantifierRecurse!==maskToken.matches[maskToken.matches.indexOf(match)-1])for(var qt=match,qndx=0<ndxInitializer.length?ndxInitializer.shift():0;qndx<(isNaN(qt.quantifier.max)?qndx+1:qt.quantifier.max)&&testPos<=pos;qndx++){var tokenGroup=maskToken.matches[maskToken.matches.indexOf(qt)-1];if(match=handleMatch(tokenGroup,[qndx].concat(loopNdx),tokenGroup),match){if(latestMatch=matches[matches.length-1].match,latestMatch.optionalQuantifier=qndx>=qt.quantifier.min,latestMatch.jit=(qndx||1)*tokenGroup.matches.indexOf(latestMatch)>=qt.quantifier.jit,latestMatch.optionalQuantifier&&isFirstMatch(latestMatch,tokenGroup)){insertStop=!0,testPos=pos;break}return latestMatch.jit&&(maskset.jitOffset[pos]=tokenGroup.matches.length-tokenGroup.matches.indexOf(latestMatch)),!0}}else if(match=resolveTestFromToken(match,ndxInitializer,loopNdx,quantifierRecurse),match)return!0}else testPos++}for(var tndx=0<ndxInitializer.length?ndxInitializer.shift():0;tndx<maskToken.matches.length;tndx++)if(!0!==maskToken.matches[tndx].isQuantifier){var match=handleMatch(maskToken.matches[tndx],[tndx].concat(loopNdx),quantifierRecurse);if(match&&testPos===pos)return match;if(pos<testPos)break}}function mergeLocators(pos,tests){var locator=[],alternation;return Array.isArray(tests)||(tests=[tests]),0<tests.length&&(void 0===tests[0].alternation||!0===opts.keepStatic?(locator=determineTestTemplate.call(inputmask,pos,tests.slice()).locator.slice(),0===locator.length&&(locator=tests[0].locator.slice())):tests.forEach(function(tst){""!==tst.def&&(0===locator.length?(alternation=tst.alternation,locator=tst.locator.slice()):tst.locator[alternation]&&-1===locator[alternation].toString().indexOf(tst.locator[alternation])&&(locator[alternation]+=","+tst.locator[alternation]))})),locator}if(-1<pos&&(void 0===inputmask.maxLength||pos<inputmask.maxLength)){if(void 0===ndxIntlzr){for(var previousPos=pos-1,test;void 0===(test=maskset.validPositions[previousPos]||maskset.tests[previousPos])&&-1<previousPos;)previousPos--;void 0!==test&&-1<previousPos&&(ndxInitializer=mergeLocators(previousPos,test),cacheDependency=ndxInitializer.join(""),testPos=previousPos)}if(maskset.tests[pos]&&maskset.tests[pos][0].cd===cacheDependency)return maskset.tests[pos];for(var mtndx=ndxInitializer.shift();mtndx<maskTokens.length;mtndx++){var match=resolveTestFromToken(maskTokens[mtndx],ndxInitializer,[mtndx]);if(match&&testPos===pos||pos<testPos)break}}return 0!==matches.length&&!insertStop||matches.push({match:{fn:null,static:!0,optionality:!1,casing:null,def:"",placeholder:""},locator:[],mloc:{},cd:cacheDependency}),void 0!==ndxIntlzr&&maskset.tests[pos]?$.extend(!0,[],matches):(maskset.tests[pos]=$.extend(!0,[],matches),maskset.tests[pos])}Object.defineProperty(exports,"__esModule",{value:!0}),exports.determineTestTemplate=determineTestTemplate,exports.getDecisionTaker=getDecisionTaker,exports.getMaskTemplate=getMaskTemplate,exports.getPlaceholder=getPlaceholder,exports.getTest=getTest,exports.getTests=getTests,exports.getTestTemplate=getTestTemplate},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.alternate=alternate,exports.checkAlternationMatch=checkAlternationMatch,exports.isComplete=isComplete,exports.isValid=isValid,exports.refreshFromBuffer=refreshFromBuffer,exports.revalidateMask=revalidateMask,exports.handleRemove=handleRemove;var _validationTests=__webpack_require__(3),_keycode=_interopRequireDefault(__webpack_require__(0)),_positioning=__webpack_require__(2),_eventhandlers=__webpack_require__(6);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function alternate(maskPos,c,strict,fromIsValid,rAltPos,selection){var inputmask=this,$=this.dependencyLib,opts=this.opts,maskset=this.maskset,validPsClone=$.extend(!0,{},maskset.validPositions),tstClone=$.extend(!0,{},maskset.tests),lastAlt,alternation,isValidRslt=!1,returnRslt=!1,altPos,prevAltPos,i,validPos,decisionPos,lAltPos=void 0!==rAltPos?rAltPos:_positioning.getLastValidPosition.call(this),nextPos,input,begin,end;if(selection&&(begin=selection.begin,end=selection.end,selection.begin>selection.end&&(begin=selection.end,end=selection.begin)),-1===lAltPos&&void 0===rAltPos)lastAlt=0,prevAltPos=_validationTests.getTest.call(this,lastAlt),alternation=prevAltPos.alternation;else for(;0<=lAltPos;lAltPos--)if(altPos=maskset.validPositions[lAltPos],altPos&&void 0!==altPos.alternation){if(prevAltPos&&prevAltPos.locator[altPos.alternation]!==altPos.locator[altPos.alternation])break;lastAlt=lAltPos,alternation=maskset.validPositions[lastAlt].alternation,prevAltPos=altPos}if(void 0!==alternation){decisionPos=parseInt(lastAlt),maskset.excludes[decisionPos]=maskset.excludes[decisionPos]||[],!0!==maskPos&&maskset.excludes[decisionPos].push((0,_validationTests.getDecisionTaker)(prevAltPos)+":"+prevAltPos.alternation);var validInputs=[],resultPos=-1;for(i=decisionPos;i<_positioning.getLastValidPosition.call(this,void 0,!0)+1;i++)-1===resultPos&&maskPos<=i&&void 0!==c&&(validInputs.push(c),resultPos=validInputs.length-1),validPos=maskset.validPositions[i],validPos&&!0!==validPos.generatedInput&&(void 0===selection||i<begin||end<=i)&&validInputs.push(validPos.input),delete maskset.validPositions[i];for(-1===resultPos&&void 0!==c&&(validInputs.push(c),resultPos=validInputs.length-1);void 0!==maskset.excludes[decisionPos]&&maskset.excludes[decisionPos].length<10;){for(maskset.tests={},_positioning.resetMaskSet.call(this,!0),isValidRslt=!0,i=0;i<validInputs.length&&(nextPos=isValidRslt.caret||_positioning.getLastValidPosition.call(this,void 0,!0)+1,input=validInputs[i],isValidRslt=isValid.call(this,nextPos,input,!1,fromIsValid,!0));i++)i===resultPos&&(returnRslt=isValidRslt),1==maskPos&&isValidRslt&&(returnRslt={caretPos:i});if(isValidRslt)break;if(_positioning.resetMaskSet.call(this),prevAltPos=_validationTests.getTest.call(this,decisionPos),maskset.validPositions=$.extend(!0,{},validPsClone),maskset.tests=$.extend(!0,{},tstClone),!maskset.excludes[decisionPos]){returnRslt=alternate.call(this,maskPos,c,strict,fromIsValid,decisionPos-1,selection);break}var decisionTaker=(0,_validationTests.getDecisionTaker)(prevAltPos);if(-1!==maskset.excludes[decisionPos].indexOf(decisionTaker+":"+prevAltPos.alternation)){returnRslt=alternate.call(this,maskPos,c,strict,fromIsValid,decisionPos-1,selection);break}for(maskset.excludes[decisionPos].push(decisionTaker+":"+prevAltPos.alternation),i=decisionPos;i<_positioning.getLastValidPosition.call(this,void 0,!0)+1;i++)delete maskset.validPositions[i]}}return returnRslt&&!1===opts.keepStatic||delete maskset.excludes[decisionPos],returnRslt}function casing(elem,test,pos){var opts=this.opts,maskset=this.maskset;switch(opts.casing||test.casing){case"upper":elem=elem.toUpperCase();break;case"lower":elem=elem.toLowerCase();break;case"title":var posBefore=maskset.validPositions[pos-1];elem=0===pos||posBefore&&posBefore.input===String.fromCharCode(_keycode.default.SPACE)?elem.toUpperCase():elem.toLowerCase();break;default:if("function"==typeof opts.casing){var args=Array.prototype.slice.call(arguments);args.push(maskset.validPositions),elem=opts.casing.apply(this,args)}}return elem}function checkAlternationMatch(altArr1,altArr2,na){for(var opts=this.opts,altArrC=opts.greedy?altArr2:altArr2.slice(0,1),isMatch=!1,naArr=void 0!==na?na.split(","):[],naNdx,i=0;i<naArr.length;i++)-1!==(naNdx=altArr1.indexOf(naArr[i]))&&altArr1.splice(naNdx,1);for(var alndx=0;alndx<altArr1.length;alndx++)if(altArrC.includes(altArr1[alndx])){isMatch=!0;break}return isMatch}function handleRemove(input,k,pos,strict,fromIsValid){var inputmask=this,maskset=this.maskset,opts=this.opts;if((opts.numericInput||this.isRTL)&&(k===_keycode.default.BACKSPACE?k=_keycode.default.DELETE:k===_keycode.default.DELETE&&(k=_keycode.default.BACKSPACE),this.isRTL)){var pend=pos.end;pos.end=pos.begin,pos.begin=pend}var lvp=_positioning.getLastValidPosition.call(this,void 0,!0),offset;if(pos.end>=_positioning.getBuffer.call(this).length&&lvp>=pos.end&&(pos.end=lvp+1),k===_keycode.default.BACKSPACE?pos.end-pos.begin<1&&(pos.begin=_positioning.seekPrevious.call(this,pos.begin)):k===_keycode.default.DELETE&&pos.begin===pos.end&&(pos.end=_positioning.isMask.call(this,pos.end,!0,!0)?pos.end+1:_positioning.seekNext.call(this,pos.end)+1),!1!==(offset=revalidateMask.call(this,pos))){if(!0!==strict&&!1!==opts.keepStatic||null!==opts.regex&&-1!==_validationTests.getTest.call(this,pos.begin).match.def.indexOf("|")){var result=alternate.call(this,!0);if(result){var newPos=void 0!==result.caret?result.caret:result.pos?_positioning.seekNext.call(this,result.pos.begin?result.pos.begin:result.pos):_positioning.getLastValidPosition.call(this,-1,!0);(k!==_keycode.default.DELETE||pos.begin>newPos)&&pos.begin}}!0!==strict&&(maskset.p=k===_keycode.default.DELETE?pos.begin+offset:pos.begin)}}function isComplete(buffer){var inputmask=this,opts=this.opts,maskset=this.maskset;if("function"==typeof opts.isComplete)return opts.isComplete(buffer,opts);if("*"!==opts.repeat){var complete=!1,lrp=_positioning.determineLastRequiredPosition.call(this,!0),aml=_positioning.seekPrevious.call(this,lrp.l);if(void 0===lrp.def||lrp.def.newBlockMarker||lrp.def.optionality||lrp.def.optionalQuantifier){complete=!0;for(var i=0;i<=aml;i++){var test=_validationTests.getTestTemplate.call(this,i).match;if(!0!==test.static&&void 0===maskset.validPositions[i]&&!0!==test.optionality&&!0!==test.optionalQuantifier||!0===test.static&&buffer[i]!==_validationTests.getPlaceholder.call(this,i,test)){complete=!1;break}}}return complete}}function isValid(pos,c,strict,fromIsValid,fromAlternate,validateOnly,fromCheckval){var inputmask=this,$=this.dependencyLib,opts=this.opts,el=inputmask.el,maskset=inputmask.maskset;function isSelection(posObj){return inputmask.isRTL?1<posObj.begin-posObj.end||posObj.begin-posObj.end==1:1<posObj.end-posObj.begin||posObj.end-posObj.begin==1}strict=!0===strict;var maskPos=pos;function processCommandObject(commandObj){if(void 0!==commandObj){if(void 0!==commandObj.remove&&(Array.isArray(commandObj.remove)||(commandObj.remove=[commandObj.remove]),commandObj.remove.sort(function(a,b){return b.pos-a.pos}).forEach(function(lmnt){revalidateMask.call(inputmask,{begin:lmnt,end:lmnt+1})}),commandObj.remove=void 0),void 0!==commandObj.insert&&(Array.isArray(commandObj.insert)||(commandObj.insert=[commandObj.insert]),commandObj.insert.sort(function(a,b){return a.pos-b.pos}).forEach(function(lmnt){""!==lmnt.c&&isValid.call(inputmask,lmnt.pos,lmnt.c,void 0===lmnt.strict||lmnt.strict,void 0!==lmnt.fromIsValid?lmnt.fromIsValid:fromIsValid)}),commandObj.insert=void 0),commandObj.refreshFromBuffer&&commandObj.buffer){var refresh=commandObj.refreshFromBuffer;refreshFromBuffer.call(inputmask,!0===refresh?refresh:refresh.start,refresh.end,commandObj.buffer),commandObj.refreshFromBuffer=void 0}void 0!==commandObj.rewritePosition&&(maskPos=commandObj.rewritePosition,commandObj=!0)}return commandObj}function _isValid(position,c,strict){var rslt=!1;return _validationTests.getTests.call(inputmask,position).every(function(tst,ndx){var test=tst.match;if(_positioning.getBuffer.call(inputmask,!0),rslt=null!=test.fn?test.fn.test(c,maskset,position,strict,opts,isSelection(pos)):(c===test.def||c===opts.skipOptionalPartCharacter)&&""!==test.def&&{c:_validationTests.getPlaceholder.call(inputmask,position,test,!0)||test.def,pos:position},!1===rslt)return!0;var elem=void 0!==rslt.c?rslt.c:c,validatedPos=position;return elem=elem===opts.skipOptionalPartCharacter&&!0===test.static?_validationTests.getPlaceholder.call(inputmask,position,test,!0)||test.def:elem,rslt=processCommandObject(rslt),!0!==rslt&&void 0!==rslt.pos&&rslt.pos!==position&&(validatedPos=rslt.pos),!0!==rslt&&void 0===rslt.pos&&void 0===rslt.c||!1===revalidateMask.call(inputmask,pos,$.extend({},tst,{input:casing.call(inputmask,elem,test,validatedPos)}),fromIsValid,validatedPos)&&(rslt=!1),!1}),rslt}void 0!==pos.begin&&(maskPos=inputmask.isRTL?pos.end:pos.begin);var result=!0,positionsClone=$.extend(!0,{},maskset.validPositions);if(!1===opts.keepStatic&&void 0!==maskset.excludes[maskPos]&&!0!==fromAlternate&&!0!==fromIsValid)for(var i=maskPos;i<(inputmask.isRTL?pos.begin:pos.end);i++)void 0!==maskset.excludes[i]&&(maskset.excludes[i]=void 0,delete maskset.tests[i]);if("function"==typeof opts.preValidation&&!0!==fromIsValid&&!0!==validateOnly&&(result=opts.preValidation.call(inputmask,_positioning.getBuffer.call(inputmask),maskPos,c,isSelection(pos),opts,maskset,pos,strict||fromAlternate),result=processCommandObject(result)),!0===result){if(void 0===inputmask.maxLength||maskPos<inputmask.maxLength){if(result=_isValid(maskPos,c,strict),(!strict||!0===fromIsValid)&&!1===result&&!0!==validateOnly){var currentPosValid=maskset.validPositions[maskPos];if(!currentPosValid||!0!==currentPosValid.match.static||currentPosValid.match.def!==c&&c!==opts.skipOptionalPartCharacter){if(opts.insertMode||void 0===maskset.validPositions[_positioning.seekNext.call(inputmask,maskPos)]||pos.end>maskPos){var skip=!1;if(maskset.jitOffset[maskPos]&&void 0===maskset.validPositions[_positioning.seekNext.call(inputmask,maskPos)]&&(result=isValid.call(inputmask,maskPos+maskset.jitOffset[maskPos],c,!0),!1!==result&&(!0!==fromAlternate&&(result.caret=maskPos),skip=!0)),pos.end>maskPos&&(maskset.validPositions[maskPos]=void 0),!skip&&!_positioning.isMask.call(inputmask,maskPos,opts.keepStatic&&0===maskPos))for(var nPos=maskPos+1,snPos=_positioning.seekNext.call(inputmask,maskPos,!1,0!==maskPos);nPos<=snPos;nPos++)if(result=_isValid(nPos,c,strict),!1!==result){result=trackbackPositions.call(inputmask,maskPos,void 0!==result.pos?result.pos:nPos)||result,maskPos=nPos;break}}}else result={caret:_positioning.seekNext.call(inputmask,maskPos)}}}else result=!1;!1!==result||!opts.keepStatic||!isComplete.call(inputmask,_positioning.getBuffer.call(inputmask))&&0!==maskPos||strict||!0===fromAlternate?isSelection(pos)&&maskset.tests[maskPos]&&1<maskset.tests[maskPos].length&&opts.keepStatic&&!strict&&!0!==fromAlternate&&(result=alternate.call(inputmask,!0)):result=alternate.call(inputmask,maskPos,c,strict,fromIsValid,void 0,pos),!0===result&&(result={pos:maskPos})}if("function"==typeof opts.postValidation&&!0!==fromIsValid&&!0!==validateOnly){var postResult=opts.postValidation.call(inputmask,_positioning.getBuffer.call(inputmask,!0),void 0!==pos.begin?inputmask.isRTL?pos.end:pos.begin:pos,c,result,opts,maskset,strict,fromCheckval);void 0!==postResult&&(result=!0===postResult?result:postResult)}result&&void 0===result.pos&&(result.pos=maskPos),!1===result||!0===validateOnly?(_positioning.resetMaskSet.call(inputmask,!0),maskset.validPositions=$.extend(!0,{},positionsClone)):trackbackPositions.call(inputmask,void 0,maskPos,!0);var endResult=processCommandObject(result);return endResult}function positionCanMatchDefinition(pos,testDefinition,opts){for(var inputmask=this,maskset=this.maskset,valid=!1,tests=_validationTests.getTests.call(this,pos),tndx=0;tndx<tests.length;tndx++){if(tests[tndx].match&&(!(tests[tndx].match.nativeDef!==testDefinition.match[opts.shiftPositions?"def":"nativeDef"]||opts.shiftPositions&&testDefinition.match.static)||tests[tndx].match.nativeDef===testDefinition.match.nativeDef)){valid=!0;break}if(tests[tndx].match&&tests[tndx].match.def===testDefinition.match.nativeDef){valid=void 0;break}}return!1===valid&&void 0!==maskset.jitOffset[pos]&&(valid=positionCanMatchDefinition.call(this,pos+maskset.jitOffset[pos],testDefinition,opts)),valid}function refreshFromBuffer(start,end,buffer){var inputmask=this,maskset=this.maskset,opts=this.opts,$=this.dependencyLib,el=this.el,i,p,skipOptionalPartCharacter=opts.skipOptionalPartCharacter,bffr=this.isRTL?buffer.slice().reverse():buffer;if(opts.skipOptionalPartCharacter="",!0===start)_positioning.resetMaskSet.call(this),maskset.tests={},start=0,end=buffer.length,p=_positioning.determineNewCaretPosition.call(this,{begin:0,end:0},!1).begin;else{for(i=start;i<end;i++)delete maskset.validPositions[i];p=start}var keypress=new $.Event("keypress");for(i=start;i<end;i++){keypress.which=bffr[i].toString().charCodeAt(0),this.ignorable=!1;var valResult=_eventhandlers.EventHandlers.keypressEvent.call(el,keypress,!0,!1,!1,p);!1!==valResult&&(p=valResult.forwardPosition)}opts.skipOptionalPartCharacter=skipOptionalPartCharacter}function trackbackPositions(originalPos,newPos,fillOnly){var inputmask=this,maskset=this.maskset,$=this.dependencyLib;if(void 0===originalPos)for(originalPos=newPos-1;0<originalPos&&!maskset.validPositions[originalPos];originalPos--);for(var ps=originalPos;ps<newPos;ps++)if(void 0===maskset.validPositions[ps]&&!_positioning.isMask.call(this,ps,!0)){var vp=0==ps?_validationTests.getTest.call(this,ps):maskset.validPositions[ps-1];if(vp){var tests=_validationTests.getTests.call(this,ps).slice();""===tests[tests.length-1].match.def&&tests.pop();var bestMatch=_validationTests.determineTestTemplate.call(this,ps,tests),np;if(bestMatch&&(!0!==bestMatch.match.jit||"master"===bestMatch.match.newBlockMarker&&(np=maskset.validPositions[ps+1])&&!0===np.match.optionalQuantifier)&&(bestMatch=$.extend({},bestMatch,{input:_validationTests.getPlaceholder.call(this,ps,bestMatch.match,!0)||bestMatch.match.def}),bestMatch.generatedInput=!0,revalidateMask.call(this,ps,bestMatch,!0),!0!==fillOnly)){var cvpInput=maskset.validPositions[newPos].input;return maskset.validPositions[newPos]=void 0,isValid.call(this,newPos,cvpInput,!0,!0)}}}}function revalidateMask(pos,validTest,fromIsValid,validatedPos){var inputmask=this,maskset=this.maskset,opts=this.opts,$=this.dependencyLib;function IsEnclosedStatic(pos,valids,selection){var posMatch=valids[pos];if(void 0===posMatch||!0!==posMatch.match.static||!0===posMatch.match.optionality||void 0!==valids[0]&&void 0!==valids[0].alternation)return!1;var prevMatch=selection.begin<=pos-1?valids[pos-1]&&!0===valids[pos-1].match.static&&valids[pos-1]:valids[pos-1],nextMatch=selection.end>pos+1?valids[pos+1]&&!0===valids[pos+1].match.static&&valids[pos+1]:valids[pos+1];return prevMatch&&nextMatch}var offset=0,begin=void 0!==pos.begin?pos.begin:pos,end=void 0!==pos.end?pos.end:pos;if(pos.begin>pos.end&&(begin=pos.end,end=pos.begin),validatedPos=void 0!==validatedPos?validatedPos:begin,begin!==end||opts.insertMode&&void 0!==maskset.validPositions[validatedPos]&&void 0===fromIsValid||void 0===validTest){var positionsClone=$.extend(!0,{},maskset.validPositions),lvp=_positioning.getLastValidPosition.call(this,void 0,!0),i;for(maskset.p=begin,i=lvp;begin<=i;i--)delete maskset.validPositions[i],void 0===validTest&&delete maskset.tests[i+1];var valid=!0,j=validatedPos,posMatch=j,t,canMatch;for(validTest&&(maskset.validPositions[validatedPos]=$.extend(!0,{},validTest),posMatch++,j++),i=validTest?end:end-1;i<=lvp;i++){if(void 0!==(t=positionsClone[i])&&!0!==t.generatedInput&&(end<=i||begin<=i&&IsEnclosedStatic(i,positionsClone,{begin:begin,end:end}))){for(;""!==_validationTests.getTest.call(this,posMatch).match.def;){if(!1!==(canMatch=positionCanMatchDefinition.call(this,posMatch,t,opts))||"+"===t.match.def){"+"===t.match.def&&_positioning.getBuffer.call(this,!0);var result=isValid.call(this,posMatch,t.input,"+"!==t.match.def,"+"!==t.match.def);if(valid=!1!==result,j=(result.pos||posMatch)+1,!valid&&canMatch)break}else valid=!1;if(valid){void 0===validTest&&t.match.static&&i===pos.begin&&offset++;break}if(!valid&&posMatch>maskset.maskLength)break;posMatch++}""==_validationTests.getTest.call(this,posMatch).match.def&&(valid=!1),posMatch=j}if(!valid)break}if(!valid)return maskset.validPositions=$.extend(!0,{},positionsClone),_positioning.resetMaskSet.call(this,!0),!1}else validTest&&_validationTests.getTest.call(this,validatedPos).match.cd===validTest.match.cd&&(maskset.validPositions[validatedPos]=$.extend(!0,{},validTest));return _positioning.resetMaskSet.call(this,!0),offset}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.applyInputValue=applyInputValue,exports.clearOptionalTail=clearOptionalTail,exports.checkVal=checkVal,exports.HandleNativePlaceholder=HandleNativePlaceholder,exports.unmaskedvalue=unmaskedvalue,exports.writeBuffer=writeBuffer;var _keycode=_interopRequireDefault(__webpack_require__(0)),_validationTests=__webpack_require__(3),_positioning=__webpack_require__(2),_validation=__webpack_require__(4),_environment=__webpack_require__(7),_eventhandlers=__webpack_require__(6);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function applyInputValue(input,value){var inputmask=input?input.inputmask:this,opts=inputmask.opts;input.inputmask.refreshValue=!1,"function"==typeof opts.onBeforeMask&&(value=opts.onBeforeMask.call(inputmask,value,opts)||value),value=value.toString().split(""),checkVal(input,!0,!1,value),inputmask.undoValue=_positioning.getBuffer.call(inputmask).join(""),(opts.clearMaskOnLostFocus||opts.clearIncomplete)&&input.inputmask._valueGet()===_positioning.getBufferTemplate.call(inputmask).join("")&&-1===_positioning.getLastValidPosition.call(inputmask)&&input.inputmask._valueSet("")}function clearOptionalTail(buffer){var inputmask=this;buffer.length=0;for(var template=_validationTests.getMaskTemplate.call(this,!0,0,!0,void 0,!0),lmnt;void 0!==(lmnt=template.shift());)buffer.push(lmnt);return buffer}function checkVal(input,writeOut,strict,nptvl,initiatingEvent){var inputmask=input?input.inputmask:this,maskset=inputmask.maskset,opts=inputmask.opts,$=inputmask.dependencyLib,inputValue=nptvl.slice(),charCodes="",initialNdx=-1,result=void 0,skipOptionalPartCharacter=opts.skipOptionalPartCharacter;function isTemplateMatch(ndx,charCodes){for(var targetTemplate=_validationTests.getMaskTemplate.call(inputmask,!0,0).slice(ndx,_positioning.seekNext.call(inputmask,ndx,!1,!1)).join("").replace(/'/g,""),charCodeNdx=targetTemplate.indexOf(charCodes);0<charCodeNdx&&" "===targetTemplate[charCodeNdx-1];)charCodeNdx--;var match=0===charCodeNdx&&!_positioning.isMask.call(inputmask,ndx)&&(_validationTests.getTest.call(inputmask,ndx).match.nativeDef===charCodes.charAt(0)||!0===_validationTests.getTest.call(inputmask,ndx).match.static&&_validationTests.getTest.call(inputmask,ndx).match.nativeDef==="'"+charCodes.charAt(0)||" "===_validationTests.getTest.call(inputmask,ndx).match.nativeDef&&(_validationTests.getTest.call(inputmask,ndx+1).match.nativeDef===charCodes.charAt(0)||!0===_validationTests.getTest.call(inputmask,ndx+1).match.static&&_validationTests.getTest.call(inputmask,ndx+1).match.nativeDef==="'"+charCodes.charAt(0)));if(!match&&0<charCodeNdx&&!_positioning.isMask.call(inputmask,ndx,!1,!0)){var nextPos=_positioning.seekNext.call(inputmask,ndx);inputmask.caretPos.begin<nextPos&&(inputmask.caretPos={begin:nextPos})}return match}opts.skipOptionalPartCharacter="",_positioning.resetMaskSet.call(inputmask),maskset.tests={},initialNdx=opts.radixPoint?_positioning.determineNewCaretPosition.call(inputmask,{begin:0,end:0}).begin:0,maskset.p=initialNdx,inputmask.caretPos={begin:initialNdx};var staticMatches=[],prevCaretPos=inputmask.caretPos;if(inputValue.forEach(function(charCode,ndx){if(void 0!==charCode)if(void 0===maskset.validPositions[ndx]&&inputValue[ndx]===_validationTests.getPlaceholder.call(inputmask,ndx)&&_positioning.isMask.call(inputmask,ndx,!0)&&!1===_validation.isValid.call(inputmask,ndx,inputValue[ndx],!0,void 0,void 0,!0))maskset.p++;else{var keypress=new $.Event("_checkval");keypress.which=charCode.toString().charCodeAt(0),charCodes+=charCode;var lvp=_positioning.getLastValidPosition.call(inputmask,void 0,!0);isTemplateMatch(initialNdx,charCodes)?result=_eventhandlers.EventHandlers.keypressEvent.call(inputmask,keypress,!0,!1,strict,lvp+1):(result=_eventhandlers.EventHandlers.keypressEvent.call(inputmask,keypress,!0,!1,strict,inputmask.caretPos.begin),result&&(initialNdx=inputmask.caretPos.begin+1,charCodes="")),result?(void 0!==result.pos&&maskset.validPositions[result.pos]&&!0===maskset.validPositions[result.pos].match.static&&void 0===maskset.validPositions[result.pos].alternation&&(staticMatches.push(result.pos),inputmask.isRTL||(result.forwardPosition=result.pos+1)),writeBuffer.call(inputmask,void 0,_positioning.getBuffer.call(inputmask),result.forwardPosition,keypress,!1),inputmask.caretPos={begin:result.forwardPosition,end:result.forwardPosition},prevCaretPos=inputmask.caretPos):inputmask.caretPos=prevCaretPos}}),0<staticMatches.length){var sndx,validPos,nextValid=_positioning.seekNext.call(inputmask,-1,void 0,!1);if(!_validation.isComplete.call(inputmask,_positioning.getBuffer.call(inputmask))&&staticMatches.length<=nextValid||_validation.isComplete.call(inputmask,_positioning.getBuffer.call(inputmask))&&0<staticMatches.length&&staticMatches.length!==nextValid&&0===staticMatches[0])for(var nextSndx=nextValid;void 0!==(sndx=staticMatches.shift());){var keypress=new $.Event("_checkval");if(validPos=maskset.validPositions[sndx],validPos.generatedInput=!0,keypress.which=validPos.input.charCodeAt(0),result=_eventhandlers.EventHandlers.keypressEvent.call(inputmask,keypress,!0,!1,strict,nextSndx),result&&void 0!==result.pos&&result.pos!==sndx&&maskset.validPositions[result.pos]&&!0===maskset.validPositions[result.pos].match.static)staticMatches.push(result.pos);else if(!result)break;nextSndx++}}writeOut&&writeBuffer.call(inputmask,input,_positioning.getBuffer.call(inputmask),result?result.forwardPosition:inputmask.caretPos.begin,initiatingEvent||new $.Event("checkval"),initiatingEvent&&"input"===initiatingEvent.type&&inputmask.undoValue!==_positioning.getBuffer.call(inputmask).join("")),opts.skipOptionalPartCharacter=skipOptionalPartCharacter}function HandleNativePlaceholder(npt,value){var inputmask=npt?npt.inputmask:this;if(_environment.ie){if(npt.inputmask._valueGet()!==value&&(npt.placeholder!==value||""===npt.placeholder)){var buffer=_positioning.getBuffer.call(inputmask).slice(),nptValue=npt.inputmask._valueGet();if(nptValue!==value){var lvp=_positioning.getLastValidPosition.call(inputmask);-1===lvp&&nptValue===_positioning.getBufferTemplate.call(inputmask).join("")?buffer=[]:-1!==lvp&&clearOptionalTail.call(inputmask,buffer),writeBuffer(npt,buffer)}}}else npt.placeholder!==value&&(npt.placeholder=value,""===npt.placeholder&&npt.removeAttribute("placeholder"))}function unmaskedvalue(input){var inputmask=input?input.inputmask:this,opts=inputmask.opts,maskset=inputmask.maskset;if(input){if(void 0===input.inputmask)return input.value;input.inputmask&&input.inputmask.refreshValue&&applyInputValue(input,input.inputmask._valueGet(!0))}var umValue=[],vps=maskset.validPositions;for(var pndx in vps)vps[pndx]&&vps[pndx].match&&(1!=vps[pndx].match.static||Array.isArray(maskset.metadata)&&!0!==vps[pndx].generatedInput)&&umValue.push(vps[pndx].input);var unmaskedValue=0===umValue.length?"":(inputmask.isRTL?umValue.reverse():umValue).join("");if("function"==typeof opts.onUnMask){var bufferValue=(inputmask.isRTL?_positioning.getBuffer.call(inputmask).slice().reverse():_positioning.getBuffer.call(inputmask)).join("");unmaskedValue=opts.onUnMask.call(inputmask,bufferValue,unmaskedValue,opts)}return unmaskedValue}function writeBuffer(input,buffer,caretPos,event,triggerEvents){var inputmask=input?input.inputmask:this,opts=inputmask.opts,$=inputmask.dependencyLib;if(event&&"function"==typeof opts.onBeforeWrite){var result=opts.onBeforeWrite.call(inputmask,event,buffer,caretPos,opts);if(result){if(result.refreshFromBuffer){var refresh=result.refreshFromBuffer;_validation.refreshFromBuffer.call(inputmask,!0===refresh?refresh:refresh.start,refresh.end,result.buffer||buffer),buffer=_positioning.getBuffer.call(inputmask,!0)}void 0!==caretPos&&(caretPos=void 0!==result.caret?result.caret:caretPos)}}if(void 0!==input&&(input.inputmask._valueSet(buffer.join("")),void 0===caretPos||void 0!==event&&"blur"===event.type||_positioning.caret.call(inputmask,input,caretPos,void 0,void 0,void 0!==event&&"keydown"===event.type&&(event.keyCode===_keycode.default.DELETE||event.keyCode===_keycode.default.BACKSPACE)),!0===triggerEvents)){var $input=$(input),nptVal=input.inputmask._valueGet();input.inputmask.skipInputEvent=!0,$input.trigger("input"),setTimeout(function(){nptVal===_positioning.getBufferTemplate.call(inputmask).join("")?$input.trigger("cleared"):!0===_validation.isComplete.call(inputmask,buffer)&&$input.trigger("complete")},0)}}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.EventHandlers=void 0;var _positioning=__webpack_require__(2),_keycode=_interopRequireDefault(__webpack_require__(0)),_environment=__webpack_require__(7),_validation=__webpack_require__(4),_inputHandling=__webpack_require__(5),_validationTests=__webpack_require__(3);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var EventHandlers={keydownEvent:function keydownEvent(e){var inputmask=this.inputmask,opts=inputmask.opts,$=inputmask.dependencyLib,maskset=inputmask.maskset,input=this,$input=$(input),k=e.keyCode,pos=_positioning.caret.call(inputmask,input),kdResult=opts.onKeyDown.call(this,e,_positioning.getBuffer.call(inputmask),pos,opts);if(void 0!==kdResult)return kdResult;if(k===_keycode.default.BACKSPACE||k===_keycode.default.DELETE||_environment.iphone&&k===_keycode.default.BACKSPACE_SAFARI||e.ctrlKey&&k===_keycode.default.X&&!("oncut"in input))e.preventDefault(),_validation.handleRemove.call(inputmask,input,k,pos),(0,_inputHandling.writeBuffer)(input,_positioning.getBuffer.call(inputmask,!0),maskset.p,e,input.inputmask._valueGet()!==_positioning.getBuffer.call(inputmask).join(""));else if(k===_keycode.default.END||k===_keycode.default.PAGE_DOWN){e.preventDefault();var caretPos=_positioning.seekNext.call(inputmask,_positioning.getLastValidPosition.call(inputmask));_positioning.caret.call(inputmask,input,e.shiftKey?pos.begin:caretPos,caretPos,!0)}else k===_keycode.default.HOME&&!e.shiftKey||k===_keycode.default.PAGE_UP?(e.preventDefault(),_positioning.caret.call(inputmask,input,0,e.shiftKey?pos.begin:0,!0)):(opts.undoOnEscape&&k===_keycode.default.ESCAPE||90===k&&e.ctrlKey)&&!0!==e.altKey?((0,_inputHandling.checkVal)(input,!0,!1,inputmask.undoValue.split("")),$input.trigger("click")):!0===opts.tabThrough&&k===_keycode.default.TAB?!0===e.shiftKey?(pos.end=_positioning.seekPrevious.call(inputmask,pos.end,!0),!0===_validationTests.getTest.call(inputmask,pos.end-1).match.static&&pos.end--,pos.begin=_positioning.seekPrevious.call(inputmask,pos.end,!0),0<=pos.begin&&0<pos.end&&(e.preventDefault(),_positioning.caret.call(inputmask,input,pos.begin,pos.end))):(pos.begin=_positioning.seekNext.call(inputmask,pos.begin,!0),pos.end=_positioning.seekNext.call(inputmask,pos.begin,!0),pos.end<maskset.maskLength&&pos.end--,pos.begin<=maskset.maskLength&&(e.preventDefault(),_positioning.caret.call(inputmask,input,pos.begin,pos.end))):e.shiftKey||opts.insertModeVisual&&!1===opts.insertMode&&(k===_keycode.default.RIGHT?setTimeout(function(){var caretPos=_positioning.caret.call(inputmask,input);_positioning.caret.call(inputmask,input,caretPos.begin)},0):k===_keycode.default.LEFT&&setTimeout(function(){var caretPos_begin=_positioning.translatePosition.call(inputmask,input.inputmask.caretPos.begin),caretPos_end=_positioning.translatePosition.call(inputmask,input.inputmask.caretPos.end);inputmask.isRTL?_positioning.caret.call(inputmask,input,caretPos_begin+(caretPos_begin===maskset.maskLength?0:1)):_positioning.caret.call(inputmask,input,caretPos_begin-(0===caretPos_begin?0:1))},0));inputmask.ignorable=opts.ignorables.includes(k)},keypressEvent:function keypressEvent(e,checkval,writeOut,strict,ndx){var inputmask=this.inputmask||this,opts=inputmask.opts,$=inputmask.dependencyLib,maskset=inputmask.maskset,input=inputmask.el,$input=$(input),k=e.which||e.charCode||e.keyCode;if(!(!0===checkval||e.ctrlKey&&e.altKey)&&(e.ctrlKey||e.metaKey||inputmask.ignorable))return k===_keycode.default.ENTER&&inputmask.undoValue!==_positioning.getBuffer.call(inputmask).join("")&&(inputmask.undoValue=_positioning.getBuffer.call(inputmask).join(""),setTimeout(function(){$input.trigger("change")},0)),inputmask.skipInputEvent=!0,!0;if(k){44!==k&&46!==k||3!==e.location||""===opts.radixPoint||(k=opts.radixPoint.charCodeAt(0));var pos=checkval?{begin:ndx,end:ndx}:_positioning.caret.call(inputmask,input),forwardPosition,c=String.fromCharCode(k);maskset.writeOutBuffer=!0;var valResult=_validation.isValid.call(inputmask,pos,c,strict,void 0,void 0,void 0,checkval);if(!1!==valResult&&(_positioning.resetMaskSet.call(inputmask,!0),forwardPosition=void 0!==valResult.caret?valResult.caret:_positioning.seekNext.call(inputmask,valResult.pos.begin?valResult.pos.begin:valResult.pos),maskset.p=forwardPosition),forwardPosition=opts.numericInput&&void 0===valResult.caret?_positioning.seekPrevious.call(inputmask,forwardPosition):forwardPosition,!1!==writeOut&&(setTimeout(function(){opts.onKeyValidation.call(input,k,valResult)},0),maskset.writeOutBuffer&&!1!==valResult)){var buffer=_positioning.getBuffer.call(inputmask);(0,_inputHandling.writeBuffer)(input,buffer,forwardPosition,e,!0!==checkval)}if(e.preventDefault(),checkval)return!1!==valResult&&(valResult.forwardPosition=forwardPosition),valResult}},keyupEvent:function keyupEvent(e){var inputmask=this.inputmask;!inputmask.isComposing||e.keyCode!==_keycode.default.KEY_229&&e.keyCode!==_keycode.default.ENTER||inputmask.$el.trigger("input")},pasteEvent:function pasteEvent(e){var inputmask=this.inputmask,opts=inputmask.opts,input=this,inputValue=inputmask._valueGet(!0),caretPos=_positioning.caret.call(inputmask,this),tempValue;inputmask.isRTL&&(tempValue=caretPos.end,caretPos.end=caretPos.begin,caretPos.begin=tempValue);var valueBeforeCaret=inputValue.substr(0,caretPos.begin),valueAfterCaret=inputValue.substr(caretPos.end,inputValue.length);if(valueBeforeCaret==(inputmask.isRTL?_positioning.getBufferTemplate.call(inputmask).slice().reverse():_positioning.getBufferTemplate.call(inputmask)).slice(0,caretPos.begin).join("")&&(valueBeforeCaret=""),valueAfterCaret==(inputmask.isRTL?_positioning.getBufferTemplate.call(inputmask).slice().reverse():_positioning.getBufferTemplate.call(inputmask)).slice(caretPos.end).join("")&&(valueAfterCaret=""),window.clipboardData&&window.clipboardData.getData)inputValue=valueBeforeCaret+window.clipboardData.getData("Text")+valueAfterCaret;else{if(!e.clipboardData||!e.clipboardData.getData)return!0;inputValue=valueBeforeCaret+e.clipboardData.getData("text/plain")+valueAfterCaret}var pasteValue=inputValue;if("function"==typeof opts.onBeforePaste){if(pasteValue=opts.onBeforePaste.call(inputmask,inputValue,opts),!1===pasteValue)return e.preventDefault();pasteValue=pasteValue||inputValue}return(0,_inputHandling.checkVal)(this,!0,!1,pasteValue.toString().split(""),e),e.preventDefault()},inputFallBackEvent:function inputFallBackEvent(e){var inputmask=this.inputmask,opts=inputmask.opts,$=inputmask.dependencyLib;function ieMobileHandler(input,inputValue,caretPos){if(_environment.iemobile){var inputChar=inputValue.replace(_positioning.getBuffer.call(inputmask).join(""),"");if(1===inputChar.length){var iv=inputValue.split("");iv.splice(caretPos.begin,0,inputChar),inputValue=iv.join("")}}return inputValue}function analyseChanges(inputValue,buffer,caretPos){for(var frontPart=inputValue.substr(0,caretPos.begin).split(""),backPart=inputValue.substr(caretPos.begin).split(""),frontBufferPart=buffer.substr(0,caretPos.begin).split(""),backBufferPart=buffer.substr(caretPos.begin).split(""),fpl=frontPart.length>=frontBufferPart.length?frontPart.length:frontBufferPart.length,bpl=backPart.length>=backBufferPart.length?backPart.length:backBufferPart.length,bl,i,action="",data=[],marker="~",placeholder;frontPart.length<fpl;)frontPart.push("~");for(;frontBufferPart.length<fpl;)frontBufferPart.push("~");for(;backPart.length<bpl;)backPart.unshift("~");for(;backBufferPart.length<bpl;)backBufferPart.unshift("~");var newBuffer=frontPart.concat(backPart),oldBuffer=frontBufferPart.concat(backBufferPart);for(i=0,bl=newBuffer.length;i<bl;i++)switch(placeholder=_validationTests.getPlaceholder.call(inputmask,_positioning.translatePosition.call(inputmask,i)),action){case"insertText":oldBuffer[i-1]===newBuffer[i]&&caretPos.begin==newBuffer.length-1&&data.push(newBuffer[i]),i=bl;break;case"insertReplacementText":"~"===newBuffer[i]?caretPos.end++:i=bl;break;case"deleteContentBackward":"~"===newBuffer[i]?caretPos.end++:i=bl;break;default:newBuffer[i]!==oldBuffer[i]&&("~"!==newBuffer[i+1]&&newBuffer[i+1]!==placeholder&&void 0!==newBuffer[i+1]||(oldBuffer[i]!==placeholder||"~"!==oldBuffer[i+1])&&"~"!==oldBuffer[i]?"~"===oldBuffer[i+1]&&oldBuffer[i]===newBuffer[i+1]?(action="insertText",data.push(newBuffer[i]),caretPos.begin--,caretPos.end--):newBuffer[i]!==placeholder&&"~"!==newBuffer[i]&&("~"===newBuffer[i+1]||oldBuffer[i]!==newBuffer[i]&&oldBuffer[i+1]===newBuffer[i+1])?(action="insertReplacementText",data.push(newBuffer[i]),caretPos.begin--):"~"===newBuffer[i]?(action="deleteContentBackward",!_positioning.isMask.call(inputmask,_positioning.translatePosition.call(inputmask,i),!0)&&oldBuffer[i]!==opts.radixPoint||caretPos.end++):i=bl:(action="insertText",data.push(newBuffer[i]),caretPos.begin--,caretPos.end--));break}return{action:action,data:data,caret:caretPos}}var input=this,inputValue=input.inputmask._valueGet(!0),buffer=(inputmask.isRTL?_positioning.getBuffer.call(inputmask).slice().reverse():_positioning.getBuffer.call(inputmask)).join(""),caretPos=_positioning.caret.call(inputmask,input,void 0,void 0,!0);if(buffer!==inputValue){inputValue=ieMobileHandler(input,inputValue,caretPos);var changes=analyseChanges(inputValue,buffer,caretPos);switch((input.inputmask.shadowRoot||document).activeElement!==input&&input.focus(),(0,_inputHandling.writeBuffer)(input,_positioning.getBuffer.call(inputmask)),_positioning.caret.call(inputmask,input,caretPos.begin,caretPos.end,!0),changes.action){case"insertText":case"insertReplacementText":changes.data.forEach(function(entry,ndx){var keypress=new $.Event("keypress");keypress.which=entry.charCodeAt(0),inputmask.ignorable=!1,EventHandlers.keypressEvent.call(input,keypress)}),setTimeout(function(){inputmask.$el.trigger("keyup")},0);break;case"deleteContentBackward":var keydown=new $.Event("keydown");keydown.keyCode=_keycode.default.BACKSPACE,EventHandlers.keydownEvent.call(input,keydown);break;default:(0,_inputHandling.applyInputValue)(input,inputValue);break}e.preventDefault()}},compositionendEvent:function compositionendEvent(e){var inputmask=this.inputmask;inputmask.isComposing=!1,inputmask.$el.trigger("input")},setValueEvent:function setValueEvent(e,argument_1,argument_2){var inputmask=this.inputmask,input=this,value=e&&e.detail?e.detail[0]:argument_1;void 0===value&&(value=this.inputmask._valueGet(!0)),(0,_inputHandling.applyInputValue)(this,value),(e.detail&&void 0!==e.detail[1]||void 0!==argument_2)&&_positioning.caret.call(inputmask,this,e.detail?e.detail[1]:argument_2)},focusEvent:function focusEvent(e){var inputmask=this.inputmask,opts=inputmask.opts,input=this,nptValue=this.inputmask._valueGet();opts.showMaskOnFocus&&nptValue!==_positioning.getBuffer.call(inputmask).join("")&&(0,_inputHandling.writeBuffer)(this,_positioning.getBuffer.call(inputmask),_positioning.seekNext.call(inputmask,_positioning.getLastValidPosition.call(inputmask))),!0!==opts.positionCaretOnTab||!1!==inputmask.mouseEnter||_validation.isComplete.call(inputmask,_positioning.getBuffer.call(inputmask))&&-1!==_positioning.getLastValidPosition.call(inputmask)||EventHandlers.clickEvent.apply(this,[e,!0]),inputmask.undoValue=_positioning.getBuffer.call(inputmask).join("")},invalidEvent:function invalidEvent(e){this.inputmask.validationEvent=!0},mouseleaveEvent:function mouseleaveEvent(){var inputmask=this.inputmask,opts=inputmask.opts,input=this;inputmask.mouseEnter=!1,opts.clearMaskOnLostFocus&&(this.inputmask.shadowRoot||document).activeElement!==this&&(0,_inputHandling.HandleNativePlaceholder)(this,inputmask.originalPlaceholder)},clickEvent:function clickEvent(e,tabbed){var inputmask=this.inputmask,input=this;if((this.inputmask.shadowRoot||document).activeElement===this){var newCaretPosition=_positioning.determineNewCaretPosition.call(inputmask,_positioning.caret.call(inputmask,this),tabbed);void 0!==newCaretPosition&&_positioning.caret.call(inputmask,this,newCaretPosition)}},cutEvent:function cutEvent(e){var inputmask=this.inputmask,maskset=inputmask.maskset,input=this,pos=_positioning.caret.call(inputmask,this),clipboardData=window.clipboardData||e.clipboardData,clipData=inputmask.isRTL?_positioning.getBuffer.call(inputmask).slice(pos.end,pos.begin):_positioning.getBuffer.call(inputmask).slice(pos.begin,pos.end);clipboardData.setData("text",inputmask.isRTL?clipData.reverse().join(""):clipData.join("")),document.execCommand&&document.execCommand("copy"),_validation.handleRemove.call(inputmask,this,_keycode.default.DELETE,pos),(0,_inputHandling.writeBuffer)(this,_positioning.getBuffer.call(inputmask),maskset.p,e,inputmask.undoValue!==_positioning.getBuffer.call(inputmask).join(""))},blurEvent:function blurEvent(e){var inputmask=this.inputmask,opts=inputmask.opts,$=inputmask.dependencyLib,$input=$(this),input=this;if(this.inputmask){(0,_inputHandling.HandleNativePlaceholder)(this,inputmask.originalPlaceholder);var nptValue=this.inputmask._valueGet(),buffer=_positioning.getBuffer.call(inputmask).slice();""!==nptValue&&(opts.clearMaskOnLostFocus&&(-1===_positioning.getLastValidPosition.call(inputmask)&&nptValue===_positioning.getBufferTemplate.call(inputmask).join("")?buffer=[]:_inputHandling.clearOptionalTail.call(inputmask,buffer)),!1===_validation.isComplete.call(inputmask,buffer)&&(setTimeout(function(){$input.trigger("incomplete")},0),opts.clearIncomplete&&(_positioning.resetMaskSet.call(inputmask),buffer=opts.clearMaskOnLostFocus?[]:_positioning.getBufferTemplate.call(inputmask).slice())),(0,_inputHandling.writeBuffer)(this,buffer,void 0,e)),inputmask.undoValue!==_positioning.getBuffer.call(inputmask).join("")&&(inputmask.undoValue=_positioning.getBuffer.call(inputmask).join(""),$input.trigger("change"))}},mouseenterEvent:function mouseenterEvent(){var inputmask=this.inputmask,opts=inputmask.opts,input=this;inputmask.mouseEnter=!0,(this.inputmask.shadowRoot||document).activeElement!==this&&(null==inputmask.originalPlaceholder&&this.placeholder!==inputmask.originalPlaceholder&&(inputmask.originalPlaceholder=this.placeholder),opts.showMaskOnHover&&(0,_inputHandling.HandleNativePlaceholder)(this,(inputmask.isRTL?_positioning.getBufferTemplate.call(inputmask).slice().reverse():_positioning.getBufferTemplate.call(inputmask)).join("")))},submitEvent:function submitEvent(){var inputmask=this.inputmask,opts=inputmask.opts;inputmask.undoValue!==_positioning.getBuffer.call(inputmask).join("")&&inputmask.$el.trigger("change"),opts.clearMaskOnLostFocus&&-1===_positioning.getLastValidPosition.call(inputmask)&&inputmask._valueGet&&inputmask._valueGet()===_positioning.getBufferTemplate.call(inputmask).join("")&&inputmask._valueSet(""),opts.clearIncomplete&&!1===_validation.isComplete.call(inputmask,_positioning.getBuffer.call(inputmask))&&inputmask._valueSet(""),opts.removeMaskOnSubmit&&(inputmask._valueSet(inputmask.unmaskedvalue(),!0),setTimeout(function(){(0,_inputHandling.writeBuffer)(inputmask.el,_positioning.getBuffer.call(inputmask))},0))},resetEvent:function resetEvent(){var inputmask=this.inputmask;inputmask.refreshValue=!0,setTimeout(function(){(0,_inputHandling.applyInputValue)(inputmask.el,inputmask._valueGet(!0))},0)}};exports.EventHandlers=EventHandlers},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.iphone=exports.iemobile=exports.mobile=exports.ie=exports.ua=void 0;var ua=window.navigator&&window.navigator.userAgent||"",ie=0<ua.indexOf("MSIE ")||0<ua.indexOf("Trident/"),mobile="ontouchstart"in window,iemobile=/iemobile/i.test(ua),iphone=/iphone/i.test(ua)&&!iemobile;exports.iphone=iphone,exports.iemobile=iemobile,exports.mobile=mobile,exports.ie=ie,exports.ua=ua},function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE__8__},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.mask=mask;var _keycode=_interopRequireDefault(__webpack_require__(0)),_positioning=__webpack_require__(2),_inputHandling=__webpack_require__(5),_eventruler=__webpack_require__(10),_environment=__webpack_require__(7),_validation=__webpack_require__(4),_eventhandlers=__webpack_require__(6);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function mask(){var inputmask=this,opts=this.opts,el=this.el,$=this.dependencyLib;function isElementTypeSupported(input,opts){function patchValueProperty(npt){var valueGet,valueSet;function patchValhook(type){if($.valHooks&&(void 0===$.valHooks[type]||!0!==$.valHooks[type].inputmaskpatch)){var valhookGet=$.valHooks[type]&&$.valHooks[type].get?$.valHooks[type].get:function(elem){return elem.value},valhookSet=$.valHooks[type]&&$.valHooks[type].set?$.valHooks[type].set:function(elem,value){return elem.value=value,elem};$.valHooks[type]={get:function get(elem){if(elem.inputmask){if(elem.inputmask.opts.autoUnmask)return elem.inputmask.unmaskedvalue();var result=valhookGet(elem);return-1!==_positioning.getLastValidPosition.call(inputmask,void 0,void 0,elem.inputmask.maskset.validPositions)||!0!==opts.nullable?result:""}return valhookGet(elem)},set:function set(elem,value){var result=valhookSet(elem,value);return elem.inputmask&&(0,_inputHandling.applyInputValue)(elem,value),result},inputmaskpatch:!0}}}function getter(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==_positioning.getLastValidPosition.call(inputmask)||!0!==opts.nullable?(this.inputmask.shadowRoot||document.activeElement)===this&&opts.clearMaskOnLostFocus?(inputmask.isRTL?_inputHandling.clearOptionalTail.call(inputmask,_positioning.getBuffer.call(inputmask).slice()).reverse():_inputHandling.clearOptionalTail.call(inputmask,_positioning.getBuffer.call(inputmask).slice())).join(""):valueGet.call(this):"":valueGet.call(this)}function setter(value){valueSet.call(this,value),this.inputmask&&(0,_inputHandling.applyInputValue)(this,value)}function installNativeValueSetFallback(npt){_eventruler.EventRuler.on(npt,"mouseenter",function(){var input=this,value=this.inputmask._valueGet(!0);value!==(inputmask.isRTL?_positioning.getBuffer.call(inputmask).reverse():_positioning.getBuffer.call(inputmask)).join("")&&(0,_inputHandling.applyInputValue)(this,value)})}if(!npt.inputmask.__valueGet){if(!0!==opts.noValuePatching){if(Object.getOwnPropertyDescriptor){var valueProperty=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt),"value"):void 0;valueProperty&&valueProperty.get&&valueProperty.set?(valueGet=valueProperty.get,valueSet=valueProperty.set,Object.defineProperty(npt,"value",{get:getter,set:setter,configurable:!0})):"input"!==npt.tagName.toLowerCase()&&(valueGet=function valueGet(){return this.textContent},valueSet=function valueSet(value){this.textContent=value},Object.defineProperty(npt,"value",{get:getter,set:setter,configurable:!0}))}else document.__lookupGetter__&&npt.__lookupGetter__("value")&&(valueGet=npt.__lookupGetter__("value"),valueSet=npt.__lookupSetter__("value"),npt.__defineGetter__("value",getter),npt.__defineSetter__("value",setter));npt.inputmask.__valueGet=valueGet,npt.inputmask.__valueSet=valueSet}npt.inputmask._valueGet=function(overruleRTL){return inputmask.isRTL&&!0!==overruleRTL?valueGet.call(this.el).split("").reverse().join(""):valueGet.call(this.el)},npt.inputmask._valueSet=function(value,overruleRTL){valueSet.call(this.el,null==value?"":!0!==overruleRTL&&inputmask.isRTL?value.split("").reverse().join(""):value)},void 0===valueGet&&(valueGet=function valueGet(){return this.value},valueSet=function valueSet(value){this.value=value},patchValhook(npt.type),installNativeValueSetFallback(npt))}}"textarea"!==input.tagName.toLowerCase()&&opts.ignorables.push(_keycode.default.ENTER);var elementType=input.getAttribute("type"),isSupported="input"===input.tagName.toLowerCase()&&opts.supportsInputType.includes(elementType)||input.isContentEditable||"textarea"===input.tagName.toLowerCase();if(!isSupported)if("input"===input.tagName.toLowerCase()){var el=document.createElement("input");el.setAttribute("type",elementType),isSupported="text"===el.type,el=null}else isSupported="partial";return!1!==isSupported?patchValueProperty(input):input.inputmask=void 0,isSupported}_eventruler.EventRuler.off(el);var isSupported=isElementTypeSupported(el,opts);if(!1!==isSupported){inputmask.originalPlaceholder=el.placeholder,inputmask.maxLength=void 0!==el?el.maxLength:void 0,-1===inputmask.maxLength&&(inputmask.maxLength=void 0),"inputMode"in el&&null===el.getAttribute("inputmode")&&(el.inputMode=opts.inputmode,el.setAttribute("inputmode",opts.inputmode)),!0===isSupported&&(opts.showMaskOnFocus=opts.showMaskOnFocus&&-1===["cc-number","cc-exp"].indexOf(el.autocomplete),_environment.iphone&&(opts.insertModeVisual=!1),_eventruler.EventRuler.on(el,"submit",_eventhandlers.EventHandlers.submitEvent),_eventruler.EventRuler.on(el,"reset",_eventhandlers.EventHandlers.resetEvent),_eventruler.EventRuler.on(el,"blur",_eventhandlers.EventHandlers.blurEvent),_eventruler.EventRuler.on(el,"focus",_eventhandlers.EventHandlers.focusEvent),_eventruler.EventRuler.on(el,"invalid",_eventhandlers.EventHandlers.invalidEvent),_eventruler.EventRuler.on(el,"click",_eventhandlers.EventHandlers.clickEvent),_eventruler.EventRuler.on(el,"mouseleave",_eventhandlers.EventHandlers.mouseleaveEvent),_eventruler.EventRuler.on(el,"mouseenter",_eventhandlers.EventHandlers.mouseenterEvent),_eventruler.EventRuler.on(el,"paste",_eventhandlers.EventHandlers.pasteEvent),_eventruler.EventRuler.on(el,"cut",_eventhandlers.EventHandlers.cutEvent),_eventruler.EventRuler.on(el,"complete",opts.oncomplete),_eventruler.EventRuler.on(el,"incomplete",opts.onincomplete),_eventruler.EventRuler.on(el,"cleared",opts.oncleared),!0!==opts.inputEventOnly&&(_eventruler.EventRuler.on(el,"keydown",_eventhandlers.EventHandlers.keydownEvent),_eventruler.EventRuler.on(el,"keypress",_eventhandlers.EventHandlers.keypressEvent),_eventruler.EventRuler.on(el,"keyup",_eventhandlers.EventHandlers.keyupEvent)),(_environment.mobile||opts.inputEventOnly)&&el.removeAttribute("maxLength"),_eventruler.EventRuler.on(el,"input",_eventhandlers.EventHandlers.inputFallBackEvent),_eventruler.EventRuler.on(el,"compositionend",_eventhandlers.EventHandlers.compositionendEvent)),_eventruler.EventRuler.on(el,"setvalue",_eventhandlers.EventHandlers.setValueEvent),inputmask.undoValue=_positioning.getBufferTemplate.call(inputmask).join("");var activeElement=(el.inputmask.shadowRoot||document).activeElement;if(""!==el.inputmask._valueGet(!0)||!1===opts.clearMaskOnLostFocus||activeElement===el){(0,_inputHandling.applyInputValue)(el,el.inputmask._valueGet(!0),opts);var buffer=_positioning.getBuffer.call(inputmask).slice();!1===_validation.isComplete.call(inputmask,buffer)&&opts.clearIncomplete&&_positioning.resetMaskSet.call(inputmask),opts.clearMaskOnLostFocus&&activeElement!==el&&(-1===_positioning.getLastValidPosition.call(inputmask)?buffer=[]:_inputHandling.clearOptionalTail.call(inputmask,buffer)),(!1===opts.clearMaskOnLostFocus||opts.showMaskOnFocus&&activeElement===el||""!==el.inputmask._valueGet(!0))&&(0,_inputHandling.writeBuffer)(el,buffer),activeElement===el&&_positioning.caret.call(inputmask,el,_positioning.seekNext.call(inputmask,_positioning.getLastValidPosition.call(inputmask)))}}}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.EventRuler=void 0;var _inputmask=_interopRequireDefault(__webpack_require__(1)),_keycode=_interopRequireDefault(__webpack_require__(0)),_positioning=__webpack_require__(2),_inputHandling=__webpack_require__(5);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var EventRuler={on:function on(input,eventName,eventHandler){var $=input.inputmask.dependencyLib,ev=function ev(e){e.originalEvent&&(e=e.originalEvent||e,arguments[0]=e);var that=this,args,inputmask=that.inputmask,opts=inputmask?inputmask.opts:void 0;if(void 0===inputmask&&"FORM"!==this.nodeName){var imOpts=$.data(that,"_inputmask_opts");$(that).off(),imOpts&&new _inputmask.default(imOpts).mask(that)}else{if(["submit","reset","setvalue"].includes(e.type)||"FORM"===this.nodeName||!(that.disabled||that.readOnly&&!("keydown"===e.type&&e.ctrlKey&&67===e.keyCode||!1===opts.tabThrough&&e.keyCode===_keycode.default.TAB))){switch(e.type){case"input":if(!0===inputmask.skipInputEvent||e.inputType&&"insertCompositionText"===e.inputType)return inputmask.skipInputEvent=!1,e.preventDefault();break;case"keydown":inputmask.skipKeyPressEvent=!1,inputmask.skipInputEvent=inputmask.isComposing=e.keyCode===_keycode.default.KEY_229;break;case"keyup":case"compositionend":inputmask.isComposing&&(inputmask.skipInputEvent=!1);break;case"keypress":if(!0===inputmask.skipKeyPressEvent)return e.preventDefault();inputmask.skipKeyPressEvent=!0;break;case"click":case"focus":return inputmask.validationEvent?(inputmask.validationEvent=!1,input.blur(),(0,_inputHandling.HandleNativePlaceholder)(input,(inputmask.isRTL?_positioning.getBufferTemplate.call(inputmask).slice().reverse():_positioning.getBufferTemplate.call(inputmask)).join("")),setTimeout(function(){input.focus()},3e3)):(args=arguments,setTimeout(function(){input.inputmask&&eventHandler.apply(that,args)},0)),!1}var returnVal=eventHandler.apply(that,arguments);return!1===returnVal&&(e.preventDefault(),e.stopPropagation()),returnVal}e.preventDefault()}};input.inputmask.events[eventName]=input.inputmask.events[eventName]||[],input.inputmask.events[eventName].push(ev),["submit","reset"].includes(eventName)?null!==input.form&&$(input.form).on(eventName,ev.bind(input)):$(input).on(eventName,ev)},off:function off(input,event){if(input.inputmask&&input.inputmask.events){var $=input.inputmask.dependencyLib,events=input.inputmask.events;for(var eventName in event&&(events=[],events[event]=input.inputmask.events[event]),events){for(var evArr=events[eventName];0<evArr.length;){var ev=evArr.pop();["submit","reset"].includes(eventName)?null!==input.form&&$(input.form).off(eventName,ev):$(input).off(eventName,ev)}delete input.inputmask.events[eventName]}}}};exports.EventRuler=EventRuler},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _jquery=_interopRequireDefault(__webpack_require__(8));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}if(void 0===_jquery.default)throw"jQuery not loaded!";var _default=_jquery.default;exports.default=_default},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _default="undefined"!=typeof window?window:new(eval("require('jsdom').JSDOM"))("").window;exports.default=_default},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=_default;var escapeRegexRegex=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"].join("|\\")+")","gim");function _default(str){return str.replace(escapeRegexRegex,"\\$1")}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__(15),__webpack_require__(21),__webpack_require__(22),__webpack_require__(23);var _inputmask2=_interopRequireDefault(__webpack_require__(1));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _default=_inputmask2.default;exports.default=_default},function(module,exports,__webpack_require__){"use strict";var _inputmask=_interopRequireDefault(__webpack_require__(1));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}_inputmask.default.extendDefinitions({A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"&":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"#":{validator:"[0-9A-Fa-f]",casing:"upper"}});var ipValidatorRegex=new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");function ipValidator(chrs,maskset,pos,strict,opts){return chrs=-1<pos-1&&"."!==maskset.buffer[pos-1]?(chrs=maskset.buffer[pos-1]+chrs,-1<pos-2&&"."!==maskset.buffer[pos-2]?maskset.buffer[pos-2]+chrs:"0"+chrs):"00"+chrs,ipValidatorRegex.test(chrs)}_inputmask.default.extendAliases({cssunit:{regex:"[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"},url:{regex:"(https?|ftp)://.*",autoUnmask:!1,keepStatic:!1,tabThrough:!0},ip:{mask:"i[i[i]].j[j[j]].k[k[k]].l[l[l]]",definitions:{i:{validator:ipValidator},j:{validator:ipValidator},k:{validator:ipValidator},l:{validator:ipValidator}},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){return maskedValue},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,casing:"lower",onBeforePaste:function onBeforePaste(pastedValue,opts){return pastedValue=pastedValue.toLowerCase(),pastedValue.replace("mailto:","")},definitions:{"*":{validator:"[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"},"-":{validator:"[0-9A-Za-z-]"}},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){return maskedValue},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",casing:"upper"}},clearIncomplete:!0,autoUnmask:!0},ssn:{mask:"999-99-9999",postValidation:function postValidation(buffer,pos,c,currentResult,opts,maskset,strict){return/^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(buffer.join(""))}}})},function(module,exports,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"===_typeof("test".__proto__)?function(object){return object.__proto__}:function(object){return object.constructor.prototype})},function(module,exports,__webpack_require__){"use strict";Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function value(searchElement,fromIndex){if(null==this)throw new TypeError('"this" is null or not defined');var o=Object(this),len=o.length>>>0;if(0==len)return!1;for(var n=0|fromIndex,k=Math.max(0<=n?n:len-Math.abs(n),0);k<len;){if(o[k]===searchElement)return!0;k++}return!1}})},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateMaskSet=generateMaskSet,exports.analyseMask=analyseMask;var _inputmask=_interopRequireDefault(__webpack_require__(11));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function generateMaskSet(opts,nocache){var ms;function generateMask(mask,metadata,opts){var regexMask=!1,masksetDefinition,maskdefKey;if(null!==mask&&""!==mask||(regexMask=null!==opts.regex,mask=regexMask?(mask=opts.regex,mask.replace(/^(\^)(.*)(\$)$/,"$2")):(regexMask=!0,".*")),1===mask.length&&!1===opts.greedy&&0!==opts.repeat&&(opts.placeholder=""),0<opts.repeat||"*"===opts.repeat||"+"===opts.repeat){var repeatStart="*"===opts.repeat?0:"+"===opts.repeat?1:opts.repeat;mask=opts.groupmarker[0]+mask+opts.groupmarker[1]+opts.quantifiermarker[0]+repeatStart+","+opts.repeat+opts.quantifiermarker[1]}return maskdefKey=regexMask?"regex_"+opts.regex:opts.numericInput?mask.split("").reverse().join(""):mask,!1!==opts.keepStatic&&(maskdefKey="ks_"+maskdefKey),void 0===Inputmask.prototype.masksCache[maskdefKey]||!0===nocache?(masksetDefinition={mask:mask,maskToken:Inputmask.prototype.analyseMask(mask,regexMask,opts),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},excludes:{},metadata:metadata,maskLength:void 0,jitOffset:{}},!0!==nocache&&(Inputmask.prototype.masksCache[maskdefKey]=masksetDefinition,masksetDefinition=_inputmask.default.extend(!0,{},Inputmask.prototype.masksCache[maskdefKey]))):masksetDefinition=_inputmask.default.extend(!0,{},Inputmask.prototype.masksCache[maskdefKey]),masksetDefinition}if("function"==typeof opts.mask&&(opts.mask=opts.mask(opts)),Array.isArray(opts.mask)){if(1<opts.mask.length){null===opts.keepStatic&&(opts.keepStatic=!0);var altMask=opts.groupmarker[0];return(opts.isRTL?opts.mask.reverse():opts.mask).forEach(function(msk){1<altMask.length&&(altMask+=opts.groupmarker[1]+opts.alternatormarker+opts.groupmarker[0]),void 0!==msk.mask&&"function"!=typeof msk.mask?altMask+=msk.mask:altMask+=msk}),altMask+=opts.groupmarker[1],generateMask(altMask,opts.mask,opts)}opts.mask=opts.mask.pop()}return null===opts.keepStatic&&(opts.keepStatic=!1),ms=opts.mask&&void 0!==opts.mask.mask&&"function"!=typeof opts.mask.mask?generateMask(opts.mask.mask,opts.mask,opts):generateMask(opts.mask,opts.mask,opts),ms}function analyseMask(mask,regexMask,opts){var tokenizer=/(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,regexTokenizer=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,escaped=!1,currentToken=new MaskToken,match,m,openenings=[],maskTokens=[],openingToken,currentOpeningToken,alternator,lastMatch,closeRegexGroup=!1;function MaskToken(isGroup,isOptional,isQuantifier,isAlternator){this.matches=[],this.openGroup=isGroup||!1,this.alternatorGroup=!1,this.isGroup=isGroup||!1,this.isOptional=isOptional||!1,this.isQuantifier=isQuantifier||!1,this.isAlternator=isAlternator||!1,this.quantifier={min:1,max:1}}function insertTestDefinition(mtoken,element,position){position=void 0!==position?position:mtoken.matches.length;var prevMatch=mtoken.matches[position-1];if(regexMask)0===element.indexOf("[")||escaped&&/\\d|\\s|\\w]/i.test(element)||"."===element?mtoken.matches.splice(position++,0,{fn:new RegExp(element,opts.casing?"i":""),static:!1,optionality:!1,newBlockMarker:void 0===prevMatch?"master":prevMatch.def!==element,casing:null,def:element,placeholder:void 0,nativeDef:element}):(escaped&&(element=element[element.length-1]),element.split("").forEach(function(lmnt,ndx){prevMatch=mtoken.matches[position-1],mtoken.matches.splice(position++,0,{fn:/[a-z]/i.test(opts.staticDefinitionSymbol||lmnt)?new RegExp("["+(opts.staticDefinitionSymbol||lmnt)+"]",opts.casing?"i":""):null,static:!0,optionality:!1,newBlockMarker:void 0===prevMatch?"master":prevMatch.def!==lmnt&&!0!==prevMatch.static,casing:null,def:opts.staticDefinitionSymbol||lmnt,placeholder:void 0!==opts.staticDefinitionSymbol?lmnt:void 0,nativeDef:(escaped?"'":"")+lmnt})})),escaped=!1;else{var maskdef=opts.definitions&&opts.definitions[element]||opts.usePrototypeDefinitions&&Inputmask.prototype.definitions[element];maskdef&&!escaped?mtoken.matches.splice(position++,0,{fn:maskdef.validator?"string"==typeof maskdef.validator?new RegExp(maskdef.validator,opts.casing?"i":""):new function(){this.test=maskdef.validator}:new RegExp("."),static:maskdef.static||!1,optionality:!1,newBlockMarker:void 0===prevMatch?"master":prevMatch.def!==(maskdef.definitionSymbol||element),casing:maskdef.casing,def:maskdef.definitionSymbol||element,placeholder:maskdef.placeholder,nativeDef:element,generated:maskdef.generated}):(mtoken.matches.splice(position++,0,{fn:/[a-z]/i.test(opts.staticDefinitionSymbol||element)?new RegExp("["+(opts.staticDefinitionSymbol||element)+"]",opts.casing?"i":""):null,static:!0,optionality:!1,newBlockMarker:void 0===prevMatch?"master":prevMatch.def!==element&&!0!==prevMatch.static,casing:null,def:opts.staticDefinitionSymbol||element,placeholder:void 0!==opts.staticDefinitionSymbol?element:void 0,nativeDef:(escaped?"'":"")+element}),escaped=!1)}}function verifyGroupMarker(maskToken){maskToken&&maskToken.matches&&maskToken.matches.forEach(function(token,ndx){var nextToken=maskToken.matches[ndx+1];(void 0===nextToken||void 0===nextToken.matches||!1===nextToken.isQuantifier)&&token&&token.isGroup&&(token.isGroup=!1,regexMask||(insertTestDefinition(token,opts.groupmarker[0],0),!0!==token.openGroup&&insertTestDefinition(token,opts.groupmarker[1]))),verifyGroupMarker(token)})}function defaultCase(){if(0<openenings.length){if(currentOpeningToken=openenings[openenings.length-1],insertTestDefinition(currentOpeningToken,m),currentOpeningToken.isAlternator){alternator=openenings.pop();for(var mndx=0;mndx<alternator.matches.length;mndx++)alternator.matches[mndx].isGroup&&(alternator.matches[mndx].isGroup=!1);0<openenings.length?(currentOpeningToken=openenings[openenings.length-1],currentOpeningToken.matches.push(alternator)):currentToken.matches.push(alternator)}}else insertTestDefinition(currentToken,m)}function reverseTokens(maskToken){function reverseStatic(st){return st===opts.optionalmarker[0]?st=opts.optionalmarker[1]:st===opts.optionalmarker[1]?st=opts.optionalmarker[0]:st===opts.groupmarker[0]?st=opts.groupmarker[1]:st===opts.groupmarker[1]&&(st=opts.groupmarker[0]),st}for(var match in maskToken.matches=maskToken.matches.reverse(),maskToken.matches)if(Object.prototype.hasOwnProperty.call(maskToken.matches,match)){var intMatch=parseInt(match);if(maskToken.matches[match].isQuantifier&&maskToken.matches[intMatch+1]&&maskToken.matches[intMatch+1].isGroup){var qt=maskToken.matches[match];maskToken.matches.splice(match,1),maskToken.matches.splice(intMatch+1,0,qt)}void 0!==maskToken.matches[match].matches?maskToken.matches[match]=reverseTokens(maskToken.matches[match]):maskToken.matches[match]=reverseStatic(maskToken.matches[match])}return maskToken}function groupify(matches){var groupToken=new MaskToken(!0);return groupToken.openGroup=!1,groupToken.matches=matches,groupToken}function closeGroup(){if(openingToken=openenings.pop(),openingToken.openGroup=!1,void 0!==openingToken)if(0<openenings.length){if(currentOpeningToken=openenings[openenings.length-1],currentOpeningToken.matches.push(openingToken),currentOpeningToken.isAlternator){alternator=openenings.pop();for(var mndx=0;mndx<alternator.matches.length;mndx++)alternator.matches[mndx].isGroup=!1,alternator.matches[mndx].alternatorGroup=!1;0<openenings.length?(currentOpeningToken=openenings[openenings.length-1],currentOpeningToken.matches.push(alternator)):currentToken.matches.push(alternator)}}else currentToken.matches.push(openingToken);else defaultCase()}function groupQuantifier(matches){var lastMatch=matches.pop();return lastMatch.isQuantifier&&(lastMatch=groupify([matches.pop(),lastMatch])),lastMatch}for(regexMask&&(opts.optionalmarker[0]=void 0,opts.optionalmarker[1]=void 0);match=regexMask?regexTokenizer.exec(mask):tokenizer.exec(mask);){if(m=match[0],regexMask)switch(m.charAt(0)){case"?":m="{0,1}";break;case"+":case"*":m="{"+m+"}";break;case"|":if(0===openenings.length){var altRegexGroup=groupify(currentToken.matches);altRegexGroup.openGroup=!0,openenings.push(altRegexGroup),currentToken.matches=[],closeRegexGroup=!0}break}if(escaped)defaultCase();else switch(m.charAt(0)){case"$":case"^":regexMask||defaultCase();break;case"(?=":break;case"(?!":break;case"(?<=":break;case"(?<!":break;case opts.escapeChar:escaped=!0,regexMask&&defaultCase();break;case opts.optionalmarker[1]:case opts.groupmarker[1]:closeGroup();break;case opts.optionalmarker[0]:openenings.push(new MaskToken(!1,!0));break;case opts.groupmarker[0]:openenings.push(new MaskToken(!0));break;case opts.quantifiermarker[0]:var quantifier=new MaskToken(!1,!1,!0);m=m.replace(/[{}]/g,"");var mqj=m.split("|"),mq=mqj[0].split(","),mq0=isNaN(mq[0])?mq[0]:parseInt(mq[0]),mq1=1===mq.length?mq0:isNaN(mq[1])?mq[1]:parseInt(mq[1]);"*"!==mq0&&"+"!==mq0||(mq0="*"===mq1?0:1),quantifier.quantifier={min:mq0,max:mq1,jit:mqj[1]};var matches=0<openenings.length?openenings[openenings.length-1].matches:currentToken.matches;if(match=matches.pop(),match.isAlternator){matches.push(match),matches=match.matches;var groupToken=new MaskToken(!0),tmpMatch=matches.pop();matches.push(groupToken),matches=groupToken.matches,match=tmpMatch}match.isGroup||(match=groupify([match])),matches.push(match),matches.push(quantifier);break;case opts.alternatormarker:if(0<openenings.length){currentOpeningToken=openenings[openenings.length-1];var subToken=currentOpeningToken.matches[currentOpeningToken.matches.length-1];lastMatch=currentOpeningToken.openGroup&&(void 0===subToken.matches||!1===subToken.isGroup&&!1===subToken.isAlternator)?openenings.pop():groupQuantifier(currentOpeningToken.matches)}else lastMatch=groupQuantifier(currentToken.matches);if(lastMatch.isAlternator)openenings.push(lastMatch);else if(lastMatch.alternatorGroup?(alternator=openenings.pop(),lastMatch.alternatorGroup=!1):alternator=new MaskToken(!1,!1,!1,!0),alternator.matches.push(lastMatch),openenings.push(alternator),lastMatch.openGroup){lastMatch.openGroup=!1;var alternatorGroup=new MaskToken(!0);alternatorGroup.alternatorGroup=!0,openenings.push(alternatorGroup)}break;default:defaultCase()}}for(closeRegexGroup&&closeGroup();0<openenings.length;)openingToken=openenings.pop(),currentToken.matches.push(openingToken);return 0<currentToken.matches.length&&(verifyGroupMarker(currentToken),maskTokens.push(currentToken)),(opts.numericInput||opts.isRTL)&&reverseTokens(maskTokens[0]),maskTokens}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _default={9:{validator:"[0-9\uff10-\uff19]",definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",definitionSymbol:"*"},"*":{validator:"[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"}};exports.default=_default},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _default={_maxTestPos:500,placeholder:"_",optionalmarker:["[","]"],quantifiermarker:["{","}"],groupmarker:["(",")"],alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:function oncomplete(){},onincomplete:function onincomplete(){},oncleared:function oncleared(){},repeat:0,greedy:!1,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,insertModeVisual:!0,clearIncomplete:!1,alias:null,onKeyDown:function onKeyDown(){},onBeforeMask:null,onBeforePaste:function onBeforePaste(pastedValue,opts){return"function"==typeof opts.onBeforeMask?opts.onBeforeMask.call(this,pastedValue,opts):pastedValue},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:function onKeyValidation(){},skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",_radixDance:!1,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","url","password","search"],ignorables:[8,9,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123,0,229],isComplete:null,preValidation:null,postValidation:null,staticDefinitionSymbol:void 0,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"text",importDataAttributes:!0,shiftPositions:!0,usePrototypeDefinitions:!0};exports.default=_default},function(module,exports,__webpack_require__){"use strict";var _inputmask=_interopRequireDefault(__webpack_require__(1)),_keycode=_interopRequireDefault(__webpack_require__(0)),_escapeRegex=_interopRequireDefault(__webpack_require__(13)),_positioning=__webpack_require__(2);function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var $=_inputmask.default.dependencyLib,currentYear=(new Date).getFullYear(),formatCode={d:["[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",Date.prototype.getDate],dd:["0[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",function(){return pad(Date.prototype.getDate.call(this),2)}],ddd:[""],dddd:[""],m:["[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return Date.prototype.getMonth.call(this)+1}],mm:["0[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return pad(Date.prototype.getMonth.call(this)+1,2)}],mmm:[""],mmmm:[""],yy:["[0-9]{2}",Date.prototype.setFullYear,"year",function(){return pad(Date.prototype.getFullYear.call(this),2)}],yyyy:["[0-9]{4}",Date.prototype.setFullYear,"year",function(){return pad(Date.prototype.getFullYear.call(this),4)}],h:["[1-9]|1[0-2]",Date.prototype.setHours,"hours",Date.prototype.getHours],hh:["0[1-9]|1[0-2]",Date.prototype.setHours,"hours",function(){return pad(Date.prototype.getHours.call(this),2)}],hx:[function(x){return"[0-9]{".concat(x,"}")},Date.prototype.setHours,"hours",function(x){return Date.prototype.getHours}],H:["1?[0-9]|2[0-3]",Date.prototype.setHours,"hours",Date.prototype.getHours],HH:["0[0-9]|1[0-9]|2[0-3]",Date.prototype.setHours,"hours",function(){return pad(Date.prototype.getHours.call(this),2)}],Hx:[function(x){return"[0-9]{".concat(x,"}")},Date.prototype.setHours,"hours",function(x){return function(){return pad(Date.prototype.getHours.call(this),x)}}],M:["[1-5]?[0-9]",Date.prototype.setMinutes,"minutes",Date.prototype.getMinutes],MM:["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",Date.prototype.setMinutes,"minutes",function(){return pad(Date.prototype.getMinutes.call(this),2)}],s:["[1-5]?[0-9]",Date.prototype.setSeconds,"seconds",Date.prototype.getSeconds],ss:["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",Date.prototype.setSeconds,"seconds",function(){return pad(Date.prototype.getSeconds.call(this),2)}],l:["[0-9]{3}",Date.prototype.setMilliseconds,"milliseconds",function(){return pad(Date.prototype.getMilliseconds.call(this),3)}],L:["[0-9]{2}",Date.prototype.setMilliseconds,"milliseconds",function(){return pad(Date.prototype.getMilliseconds.call(this),2)}],t:["[ap]"],tt:["[ap]m"],T:["[AP]"],TT:["[AP]M"],Z:[""],o:[""],S:[""]},formatAlias={isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};function formatcode(match){var dynMatches=new RegExp("\\d+$").exec(match[0]);if(dynMatches&&void 0!==dynMatches[0]){var fcode=formatCode[match[0][0]+"x"].slice("");return fcode[0]=fcode[0](dynMatches[0]),fcode[3]=fcode[3](dynMatches[0]),fcode}if(formatCode[match[0]])return formatCode[match[0]]}function getTokenizer(opts){if(!opts.tokenizer){var tokens=[],dyntokens=[];for(var ndx in formatCode)if(/\.*x$/.test(ndx)){var dynToken=ndx[0]+"\\d+";-1===dyntokens.indexOf(dynToken)&&dyntokens.push(dynToken)}else-1===tokens.indexOf(ndx[0])&&tokens.push(ndx[0]);opts.tokenizer="("+(0<dyntokens.length?dyntokens.join("|")+"|":"")+tokens.join("+|")+")+?|.",opts.tokenizer=new RegExp(opts.tokenizer,"g")}return opts.tokenizer}function prefillYear(dateParts,currentResult,opts){if(dateParts.year!==dateParts.rawyear){var crrntyear=currentYear.toString(),enteredPart=dateParts.rawyear.replace(/[^0-9]/g,""),currentYearPart=crrntyear.slice(0,enteredPart.length),currentYearNextPart=crrntyear.slice(enteredPart.length);if(2===enteredPart.length&&enteredPart===currentYearPart){var entryCurrentYear=new Date(currentYear,dateParts.month-1,dateParts.day);dateParts.day==entryCurrentYear.getDate()&&(!opts.max||opts.max.date.getTime()>=entryCurrentYear.getTime())&&(dateParts.date.setFullYear(currentYear),dateParts.year=crrntyear,currentResult.insert=[{pos:currentResult.pos+1,c:currentYearNextPart[0]},{pos:currentResult.pos+2,c:currentYearNextPart[1]}])}}return currentResult}function isValidDate(dateParts,currentResult,opts){if(void 0===dateParts.rawday||!isFinite(dateParts.rawday)&&new Date(dateParts.date.getFullYear(),isFinite(dateParts.rawmonth)?dateParts.month:dateParts.date.getMonth()+1,0).getDate()>=dateParts.day||"29"==dateParts.day&&!isFinite(dateParts.rawyear)||new Date(dateParts.date.getFullYear(),isFinite(dateParts.rawmonth)?dateParts.month:dateParts.date.getMonth()+1,0).getDate()>=dateParts.day)return currentResult;if("29"==dateParts.day){var tokenMatch=getTokenMatch(currentResult.pos,opts);if("yyyy"===tokenMatch.targetMatch[0]&&currentResult.pos-tokenMatch.targetMatchIndex==2)return currentResult.remove=currentResult.pos+1,currentResult}else if("02"==dateParts.month&&"30"==dateParts.day)return dateParts.day="03",dateParts.date.setDate(3),dateParts.date.setMonth(1),currentResult.insert=[{pos:currentResult.pos,c:"0"},{pos:currentResult.pos+1,c:currentResult.c}],currentResult.caret=_positioning.seekNext.call(this,currentResult.pos+1),currentResult;return!1}function isDateInRange(dateParts,result,opts,maskset,fromCheckval){if(!result)return result;if(opts.min){if(dateParts.rawyear){var rawYear=dateParts.rawyear.replace(/[^0-9]/g,""),minYear=opts.min.year.substr(0,rawYear.length),maxYear;if(rawYear<minYear){var tokenMatch=getTokenMatch(result.pos,opts);if(rawYear=dateParts.rawyear.substr(0,result.pos-tokenMatch.targetMatchIndex+1).replace(/[^0-9]/g,"0"),minYear=opts.min.year.substr(0,rawYear.length),minYear<=rawYear)return result.remove=tokenMatch.targetMatchIndex+rawYear.length,result;if(rawYear="yyyy"===tokenMatch.targetMatch[0]?dateParts.rawyear.substr(1,1):dateParts.rawyear.substr(0,1),minYear=opts.min.year.substr(2,1),maxYear=opts.max?opts.max.year.substr(2,1):rawYear,1===rawYear.length&&minYear<=rawYear&&rawYear<=maxYear&&!0!==fromCheckval)return"yyyy"===tokenMatch.targetMatch[0]?(result.insert=[{pos:result.pos+1,c:rawYear,strict:!0}],result.caret=result.pos+2,maskset.validPositions[result.pos].input=opts.min.year[1]):(result.insert=[{pos:result.pos+1,c:opts.min.year[1],strict:!0},{pos:result.pos+2,c:rawYear,strict:!0}],result.caret=result.pos+3,maskset.validPositions[result.pos].input=opts.min.year[0]),result;result=!1}}result&&dateParts.year&&dateParts.year===dateParts.rawyear&&opts.min.date.getTime()==opts.min.date.getTime()&&(result=opts.min.date.getTime()<=dateParts.date.getTime())}return result&&opts.max&&opts.max.date.getTime()==opts.max.date.getTime()&&(result=opts.max.date.getTime()>=dateParts.date.getTime()),result}function parse(format,dateObjValue,opts,raw){var mask="",match,fcode;for(getTokenizer(opts).lastIndex=0;match=getTokenizer(opts).exec(format);)if(void 0===dateObjValue)if(fcode=formatcode(match))mask+="("+fcode[0]+")";else switch(match[0]){case"[":mask+="(";break;case"]":mask+=")?";break;default:mask+=(0,_escapeRegex.default)(match[0])}else if(fcode=formatcode(match))if(!0!==raw&&fcode[3]){var getFn=fcode[3];mask+=getFn.call(dateObjValue.date)}else fcode[2]?mask+=dateObjValue["raw"+fcode[2]]:mask+=match[0];else mask+=match[0];return mask}function pad(val,len){for(val=String(val),len=len||2;val.length<len;)val="0"+val;return val}function analyseMask(maskString,format,opts){var dateObj={date:new Date(1,0,1)},targetProp,mask=maskString,match,dateOperation;function setValue(dateObj,value,opts){if(dateObj[targetProp]=value.replace(/[^0-9]/g,"0"),dateObj["raw"+targetProp]=value,void 0!==dateOperation){var datavalue=dateObj[targetProp];"day"===targetProp&&0===parseInt(datavalue)&&(datavalue=1),"month"===targetProp&&(datavalue=parseInt(datavalue),0<datavalue)&&(datavalue-=1),dateOperation.call(dateObj.date,datavalue)}}if("string"==typeof mask){for(getTokenizer(opts).lastIndex=0;match=getTokenizer(opts).exec(format);){var dynMatches=new RegExp("\\d+$").exec(match[0]),fcode=dynMatches?match[0][0]+"x":match[0],value=void 0;if(dynMatches){var lastIndex=getTokenizer(opts).lastIndex,tokanMatch=getTokenMatch(match.index,opts);getTokenizer(opts).lastIndex=lastIndex,value=mask.slice(0,mask.indexOf(tokanMatch.nextMatch[0]))}else value=mask.slice(0,fcode.length);Object.prototype.hasOwnProperty.call(formatCode,fcode)&&(targetProp=formatCode[fcode][2],dateOperation=formatCode[fcode][1],setValue(dateObj,value,opts)),mask=mask.slice(value.length)}return dateObj}if(mask&&"object"===_typeof(mask)&&Object.prototype.hasOwnProperty.call(mask,"date"))return mask}function importDate(dateObj,opts){return parse(opts.inputFormat,{date:dateObj},opts)}function getTokenMatch(pos,opts){var calcPos=0,targetMatch,match,matchLength=0;for(getTokenizer(opts).lastIndex=0;match=getTokenizer(opts).exec(opts.inputFormat);){var dynMatches=new RegExp("\\d+$").exec(match[0]);if(matchLength=dynMatches?parseInt(dynMatches[0]):match[0].length,calcPos+=matchLength,pos<=calcPos){targetMatch=match,match=getTokenizer(opts).exec(opts.inputFormat);break}}return{targetMatchIndex:calcPos-matchLength,nextMatch:match,targetMatch:targetMatch}}_inputmask.default.extendAliases({datetime:{mask:function mask(opts){return opts.numericInput=!1,formatCode.S=opts.i18n.ordinalSuffix.join("|"),opts.inputFormat=formatAlias[opts.inputFormat]||opts.inputFormat,opts.displayFormat=formatAlias[opts.displayFormat]||opts.displayFormat||opts.inputFormat,opts.outputFormat=formatAlias[opts.outputFormat]||opts.outputFormat||opts.inputFormat,opts.placeholder=""!==opts.placeholder?opts.placeholder:opts.inputFormat.replace(/[[\]]/,""),opts.regex=parse(opts.inputFormat,void 0,opts),opts.min=analyseMask(opts.min,opts.inputFormat,opts),opts.max=analyseMask(opts.max,opts.inputFormat,opts),null},placeholder:"",inputFormat:"isoDateTime",displayFormat:void 0,outputFormat:void 0,min:null,max:null,skipOptionalPartCharacter:"",i18n:{dayNames:["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],ordinalSuffix:["st","nd","rd","th"]},preValidation:function preValidation(buffer,pos,c,isSelection,opts,maskset,caretPos,strict){if(strict)return!0;if(isNaN(c)&&buffer[pos]!==c){var tokenMatch=getTokenMatch(pos,opts);if(tokenMatch.nextMatch&&tokenMatch.nextMatch[0]===c&&1<tokenMatch.targetMatch[0].length){var validator=formatCode[tokenMatch.targetMatch[0]][0];if(new RegExp(validator).test("0"+buffer[pos-1]))return buffer[pos]=buffer[pos-1],buffer[pos-1]="0",{fuzzy:!0,buffer:buffer,refreshFromBuffer:{start:pos-1,end:pos+1},pos:pos+1}}}return!0},postValidation:function postValidation(buffer,pos,c,currentResult,opts,maskset,strict,fromCheckval){var inputmask=this,tokenMatch,validator;if(strict)return!0;if(!1===currentResult)return tokenMatch=getTokenMatch(pos+1,opts),tokenMatch.targetMatch&&tokenMatch.targetMatchIndex===pos&&1<tokenMatch.targetMatch[0].length&&void 0!==formatCode[tokenMatch.targetMatch[0]]&&(validator=formatCode[tokenMatch.targetMatch[0]][0],new RegExp(validator).test("0"+c))?{insert:[{pos:pos,c:"0"},{pos:pos+1,c:c}],pos:pos+1}:currentResult;if(currentResult.fuzzy&&(buffer=currentResult.buffer,pos=currentResult.pos),tokenMatch=getTokenMatch(pos,opts),tokenMatch.targetMatch&&tokenMatch.targetMatch[0]&&void 0!==formatCode[tokenMatch.targetMatch[0]]){validator=formatCode[tokenMatch.targetMatch[0]][0];var part=buffer.slice(tokenMatch.targetMatchIndex,tokenMatch.targetMatchIndex+tokenMatch.targetMatch[0].length);!1===new RegExp(validator).test(part.join(""))&&2===tokenMatch.targetMatch[0].length&&maskset.validPositions[tokenMatch.targetMatchIndex]&&maskset.validPositions[tokenMatch.targetMatchIndex+1]&&(maskset.validPositions[tokenMatch.targetMatchIndex+1].input="0")}var result=currentResult,dateParts=analyseMask(buffer.join(""),opts.inputFormat,opts);return result&&dateParts.date.getTime()==dateParts.date.getTime()&&(result=prefillYear(dateParts,result,opts),result=isValidDate.call(this,dateParts,result,opts),result=isDateInRange(dateParts,result,opts,maskset,fromCheckval)),pos&&result&&currentResult.pos!==pos?{buffer:parse(opts.inputFormat,dateParts,opts).split(""),refreshFromBuffer:{start:pos,end:currentResult.pos}}:result},onKeyDown:function onKeyDown(e,buffer,caretPos,opts){var input=this;e.ctrlKey&&e.keyCode===_keycode.default.RIGHT&&(this.inputmask._valueSet(importDate(new Date,opts)),$(this).trigger("setvalue"))},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){return unmaskedValue?parse(opts.outputFormat,analyseMask(maskedValue,opts.inputFormat,opts),opts,!0):unmaskedValue},casing:function casing(elem,test,pos,validPositions){return 0==test.nativeDef.indexOf("[ap]")?elem.toLowerCase():0==test.nativeDef.indexOf("[AP]")?elem.toUpperCase():elem},onBeforeMask:function onBeforeMask(initialValue,opts){return"[object Date]"===Object.prototype.toString.call(initialValue)&&(initialValue=importDate(initialValue,opts)),initialValue},insertMode:!1,shiftPositions:!1,keepStatic:!1,inputmode:"numeric"}})},function(module,exports,__webpack_require__){"use strict";var _inputmask=_interopRequireDefault(__webpack_require__(1)),_keycode=_interopRequireDefault(__webpack_require__(0)),_escapeRegex=_interopRequireDefault(__webpack_require__(13));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var $=_inputmask.default.dependencyLib;function autoEscape(txt,opts){for(var escapedTxt="",i=0;i<txt.length;i++)_inputmask.default.prototype.definitions[txt.charAt(i)]||opts.definitions[txt.charAt(i)]||opts.optionalmarker[0]===txt.charAt(i)||opts.optionalmarker[1]===txt.charAt(i)||opts.quantifiermarker[0]===txt.charAt(i)||opts.quantifiermarker[1]===txt.charAt(i)||opts.groupmarker[0]===txt.charAt(i)||opts.groupmarker[1]===txt.charAt(i)||opts.alternatormarker===txt.charAt(i)?escapedTxt+="\\"+txt.charAt(i):escapedTxt+=txt.charAt(i);return escapedTxt}function alignDigits(buffer,digits,opts,force){if(0<buffer.length&&0<digits&&(!opts.digitsOptional||force)){var radixPosition=buffer.indexOf(opts.radixPoint),negationBack=!1;opts.negationSymbol.back===buffer[buffer.length-1]&&(negationBack=!0,buffer.length--),-1===radixPosition&&(buffer.push(opts.radixPoint),radixPosition=buffer.length-1);for(var i=1;i<=digits;i++)isFinite(buffer[radixPosition+i])||(buffer[radixPosition+i]="0")}return negationBack&&buffer.push(opts.negationSymbol.back),buffer}function findValidator(symbol,maskset){var posNdx=0;if("+"===symbol){for(posNdx in maskset.validPositions);posNdx=parseInt(posNdx)}for(var tstNdx in maskset.tests)if(tstNdx=parseInt(tstNdx),posNdx<=tstNdx)for(var ndx=0,ndxl=maskset.tests[tstNdx].length;ndx<ndxl;ndx++)if((void 0===maskset.validPositions[tstNdx]||"-"===symbol)&&maskset.tests[tstNdx][ndx].match.def===symbol)return tstNdx+(void 0!==maskset.validPositions[tstNdx]&&"-"!==symbol?1:0);return posNdx}function findValid(symbol,maskset){var ret=-1;for(var ndx in maskset.validPositions){var tst=maskset.validPositions[ndx];if(tst&&tst.match.def===symbol){ret=parseInt(ndx);break}}return ret}function parseMinMaxOptions(opts){void 0===opts.parseMinMaxOptions&&(null!==opts.min&&(opts.min=opts.min.toString().replace(new RegExp((0,_escapeRegex.default)(opts.groupSeparator),"g"),""),","===opts.radixPoint&&(opts.min=opts.min.replace(opts.radixPoint,".")),opts.min=isFinite(opts.min)?parseFloat(opts.min):NaN,isNaN(opts.min)&&(opts.min=Number.MIN_VALUE)),null!==opts.max&&(opts.max=opts.max.toString().replace(new RegExp((0,_escapeRegex.default)(opts.groupSeparator),"g"),""),","===opts.radixPoint&&(opts.max=opts.max.replace(opts.radixPoint,".")),opts.max=isFinite(opts.max)?parseFloat(opts.max):NaN,isNaN(opts.max)&&(opts.max=Number.MAX_VALUE)),opts.parseMinMaxOptions="done")}function genMask(opts){opts.repeat=0,opts.groupSeparator===opts.radixPoint&&opts.digits&&"0"!==opts.digits&&("."===opts.radixPoint?opts.groupSeparator=",":","===opts.radixPoint?opts.groupSeparator=".":opts.groupSeparator="")," "===opts.groupSeparator&&(opts.skipOptionalPartCharacter=void 0),1<opts.placeholder.length&&(opts.placeholder=opts.placeholder.charAt(0)),"radixFocus"===opts.positionCaretOnClick&&""===opts.placeholder&&(opts.positionCaretOnClick="lvp");var decimalDef="0",radixPointDef=opts.radixPoint;!0===opts.numericInput&&void 0===opts.__financeInput?(decimalDef="1",opts.positionCaretOnClick="radixFocus"===opts.positionCaretOnClick?"lvp":opts.positionCaretOnClick,opts.digitsOptional=!1,isNaN(opts.digits)&&(opts.digits=2),opts._radixDance=!1,radixPointDef=","===opts.radixPoint?"?":"!",""!==opts.radixPoint&&void 0===opts.definitions[radixPointDef]&&(opts.definitions[radixPointDef]={},opts.definitions[radixPointDef].validator="["+opts.radixPoint+"]",opts.definitions[radixPointDef].placeholder=opts.radixPoint,opts.definitions[radixPointDef].static=!0,opts.definitions[radixPointDef].generated=!0)):(opts.__financeInput=!1,opts.numericInput=!0);var mask="[+]",altMask;if(mask+=autoEscape(opts.prefix,opts),""!==opts.groupSeparator?(void 0===opts.definitions[opts.groupSeparator]&&(opts.definitions[opts.groupSeparator]={},opts.definitions[opts.groupSeparator].validator="["+opts.groupSeparator+"]",opts.definitions[opts.groupSeparator].placeholder=opts.groupSeparator,opts.definitions[opts.groupSeparator].static=!0,opts.definitions[opts.groupSeparator].generated=!0),mask+=opts._mask(opts)):mask+="9{+}",void 0!==opts.digits&&0!==opts.digits){var dq=opts.digits.toString().split(",");isFinite(dq[0])&&dq[1]&&isFinite(dq[1])?mask+=radixPointDef+decimalDef+"{"+opts.digits+"}":(isNaN(opts.digits)||0<parseInt(opts.digits))&&(opts.digitsOptional?(altMask=mask+radixPointDef+decimalDef+"{0,"+opts.digits+"}",opts.keepStatic=!0):mask+=radixPointDef+decimalDef+"{"+opts.digits+"}")}return mask+=autoEscape(opts.suffix,opts),mask+="[-]",altMask&&(mask=[altMask+autoEscape(opts.suffix,opts)+"[-]",mask]),opts.greedy=!1,parseMinMaxOptions(opts),mask}function hanndleRadixDance(pos,c,radixPos,maskset,opts){return opts._radixDance&&opts.numericInput&&c!==opts.negationSymbol.back&&pos<=radixPos&&(0<radixPos||c==opts.radixPoint)&&(void 0===maskset.validPositions[pos-1]||maskset.validPositions[pos-1].input!==opts.negationSymbol.back)&&(pos-=1),pos}function decimalValidator(chrs,maskset,pos,strict,opts){var radixPos=maskset.buffer?maskset.buffer.indexOf(opts.radixPoint):-1,result=-1!==radixPos&&new RegExp("[0-9\uff11-\uff19]").test(chrs);return opts._radixDance&&result&&null==maskset.validPositions[radixPos]?{insert:{pos:radixPos===pos?radixPos+1:radixPos,c:opts.radixPoint},pos:pos}:result}function checkForLeadingZeroes(buffer,opts){var numberMatches=new RegExp("(^"+(""!==opts.negationSymbol.front?(0,_escapeRegex.default)(opts.negationSymbol.front)+"?":"")+(0,_escapeRegex.default)(opts.prefix)+")(.*)("+(0,_escapeRegex.default)(opts.suffix)+(""!=opts.negationSymbol.back?(0,_escapeRegex.default)(opts.negationSymbol.back)+"?":"")+"$)").exec(buffer.slice().reverse().join("")),number=numberMatches?numberMatches[2]:"",leadingzeroes=!1;return number&&(number=number.split(opts.radixPoint.charAt(0))[0],leadingzeroes=new RegExp("^[0"+opts.groupSeparator+"]*").exec(number)),!(!leadingzeroes||!(1<leadingzeroes[0].length||0<leadingzeroes[0].length&&leadingzeroes[0].length<number.length))&&leadingzeroes}_inputmask.default.extendAliases({numeric:{mask:genMask,_mask:function _mask(opts){return"("+opts.groupSeparator+"999){+|1}"},digits:"*",digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:".",positionCaretOnClick:"radixFocus",_radixDance:!0,groupSeparator:"",allowMinus:!0,negationSymbol:{front:"-",back:""},prefix:"",suffix:"",min:null,max:null,SetMaxOnOverflow:!1,step:1,inputType:"text",unmaskAsNumber:!1,roundingFN:Math.round,inputmode:"numeric",shortcuts:{k:"000",m:"000000"},placeholder:"0",greedy:!1,rightAlign:!0,insertMode:!0,autoUnmask:!1,skipOptionalPartCharacter:"",definitions:{0:{validator:decimalValidator},1:{validator:decimalValidator,definitionSymbol:"9"},"+":{validator:function validator(chrs,maskset,pos,strict,opts){return opts.allowMinus&&("-"===chrs||chrs===opts.negationSymbol.front)}},"-":{validator:function validator(chrs,maskset,pos,strict,opts){return opts.allowMinus&&chrs===opts.negationSymbol.back}}},preValidation:function preValidation(buffer,pos,c,isSelection,opts,maskset,caretPos,strict){if(!1!==opts.__financeInput&&c===opts.radixPoint)return!1;var pattern;if(pattern=opts.shortcuts&&opts.shortcuts[c]){if(1<pattern.length)for(var inserts=[],i=0;i<pattern.length;i++)inserts.push({pos:pos+i,c:pattern[i],strict:!1});return{insert:inserts}}var radixPos=buffer.indexOf(opts.radixPoint),initPos=pos;if(pos=hanndleRadixDance(pos,c,radixPos,maskset,opts),"-"===c||c===opts.negationSymbol.front){if(!0!==opts.allowMinus)return!1;var isNegative=!1,front=findValid("+",maskset),back=findValid("-",maskset);return-1!==front&&(isNegative=[front,back]),!1!==isNegative?{remove:isNegative,caret:initPos-opts.negationSymbol.front.length}:{insert:[{pos:findValidator("+",maskset),c:opts.negationSymbol.front,fromIsValid:!0},{pos:findValidator("-",maskset),c:opts.negationSymbol.back,fromIsValid:void 0}],caret:initPos+opts.negationSymbol.back.length}}if(c===opts.groupSeparator)return{caret:initPos};if(strict)return!0;if(-1!==radixPos&&!0===opts._radixDance&&!1===isSelection&&c===opts.radixPoint&&void 0!==opts.digits&&(isNaN(opts.digits)||0<parseInt(opts.digits))&&radixPos!==pos)return{caret:opts._radixDance&&pos===radixPos-1?radixPos+1:radixPos};if(!1===opts.__financeInput)if(isSelection){if(opts.digitsOptional)return{rewritePosition:caretPos.end};if(!opts.digitsOptional){if(caretPos.begin>radixPos&&caretPos.end<=radixPos)return c===opts.radixPoint?{insert:{pos:radixPos+1,c:"0",fromIsValid:!0},rewritePosition:radixPos}:{rewritePosition:radixPos+1};if(caretPos.begin<radixPos)return{rewritePosition:caretPos.begin-1}}}else if(!opts.showMaskOnHover&&!opts.showMaskOnFocus&&!opts.digitsOptional&&0<opts.digits&&""===this.inputmask.__valueGet.call(this))return{rewritePosition:radixPos};return{rewritePosition:pos}},postValidation:function postValidation(buffer,pos,c,currentResult,opts,maskset,strict){if(!1===currentResult)return currentResult;if(strict)return!0;if(null!==opts.min||null!==opts.max){var unmasked=opts.onUnMask(buffer.slice().reverse().join(""),void 0,$.extend({},opts,{unmaskAsNumber:!0}));if(null!==opts.min&&unmasked<opts.min&&(unmasked.toString().length>opts.min.toString().length||unmasked<0))return!1;if(null!==opts.max&&unmasked>opts.max)return!!opts.SetMaxOnOverflow&&{refreshFromBuffer:!0,buffer:alignDigits(opts.max.toString().replace(".",opts.radixPoint).split(""),opts.digits,opts).reverse()}}return currentResult},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){if(""===unmaskedValue&&!0===opts.nullable)return unmaskedValue;var processValue=maskedValue.replace(opts.prefix,"");return processValue=processValue.replace(opts.suffix,""),processValue=processValue.replace(new RegExp((0,_escapeRegex.default)(opts.groupSeparator),"g"),""),""!==opts.placeholder.charAt(0)&&(processValue=processValue.replace(new RegExp(opts.placeholder.charAt(0),"g"),"0")),opts.unmaskAsNumber?(""!==opts.radixPoint&&-1!==processValue.indexOf(opts.radixPoint)&&(processValue=processValue.replace(_escapeRegex.default.call(this,opts.radixPoint),".")),processValue=processValue.replace(new RegExp("^"+(0,_escapeRegex.default)(opts.negationSymbol.front)),"-"),processValue=processValue.replace(new RegExp((0,_escapeRegex.default)(opts.negationSymbol.back)+"$"),""),Number(processValue)):processValue},isComplete:function isComplete(buffer,opts){var maskedValue=(opts.numericInput?buffer.slice().reverse():buffer).join("");return maskedValue=maskedValue.replace(new RegExp("^"+(0,_escapeRegex.default)(opts.negationSymbol.front)),"-"),maskedValue=maskedValue.replace(new RegExp((0,_escapeRegex.default)(opts.negationSymbol.back)+"$"),""),maskedValue=maskedValue.replace(opts.prefix,""),maskedValue=maskedValue.replace(opts.suffix,""),maskedValue=maskedValue.replace(new RegExp((0,_escapeRegex.default)(opts.groupSeparator)+"([0-9]{3})","g"),"$1"),","===opts.radixPoint&&(maskedValue=maskedValue.replace((0,_escapeRegex.default)(opts.radixPoint),".")),isFinite(maskedValue)},onBeforeMask:function onBeforeMask(initialValue,opts){var radixPoint=opts.radixPoint||",";isFinite(opts.digits)&&(opts.digits=parseInt(opts.digits)),"number"!=typeof initialValue&&"number"!==opts.inputType||""===radixPoint||(initialValue=initialValue.toString().replace(".",radixPoint));var isNagtive="-"===initialValue.charAt(0)||initialValue.charAt(0)===opts.negationSymbol.front,valueParts=initialValue.split(radixPoint),integerPart=valueParts[0].replace(/[^\-0-9]/g,""),decimalPart=1<valueParts.length?valueParts[1].replace(/[^0-9]/g,""):"",forceDigits=1<valueParts.length;initialValue=integerPart+(""!==decimalPart?radixPoint+decimalPart:decimalPart);var digits=0;if(""!==radixPoint&&(digits=opts.digitsOptional?opts.digits<decimalPart.length?opts.digits:decimalPart.length:opts.digits,""!==decimalPart||!opts.digitsOptional)){var digitsFactor=Math.pow(10,digits||1);initialValue=initialValue.replace((0,_escapeRegex.default)(radixPoint),"."),isNaN(parseFloat(initialValue))||(initialValue=(opts.roundingFN(parseFloat(initialValue)*digitsFactor)/digitsFactor).toFixed(digits)),initialValue=initialValue.toString().replace(".",radixPoint)}if(0===opts.digits&&-1!==initialValue.indexOf(radixPoint)&&(initialValue=initialValue.substring(0,initialValue.indexOf(radixPoint))),null!==opts.min||null!==opts.max){var numberValue=initialValue.toString().replace(radixPoint,".");null!==opts.min&&numberValue<opts.min?initialValue=opts.min.toString().replace(".",radixPoint):null!==opts.max&&numberValue>opts.max&&(initialValue=opts.max.toString().replace(".",radixPoint))}return isNagtive&&"-"!==initialValue.charAt(0)&&(initialValue="-"+initialValue),alignDigits(initialValue.toString().split(""),digits,opts,forceDigits).join("")},onBeforeWrite:function onBeforeWrite(e,buffer,caretPos,opts){function stripBuffer(buffer,stripRadix){if(!1!==opts.__financeInput||stripRadix){var position=buffer.indexOf(opts.radixPoint);-1!==position&&buffer.splice(position,1)}if(""!==opts.groupSeparator)for(;-1!==(position=buffer.indexOf(opts.groupSeparator));)buffer.splice(position,1);return buffer}var result,leadingzeroes=checkForLeadingZeroes(buffer,opts);if(leadingzeroes)for(var caretNdx=buffer.join("").lastIndexOf(leadingzeroes[0].split("").reverse().join(""))-(leadingzeroes[0]==leadingzeroes.input?0:1),offset=leadingzeroes[0]==leadingzeroes.input?1:0,i=leadingzeroes[0].length-offset;0<i;i--)delete this.maskset.validPositions[caretNdx+i],delete buffer[caretNdx+i];if(e)switch(e.type){case"blur":case"checkval":if(null!==opts.min){var unmasked=opts.onUnMask(buffer.slice().reverse().join(""),void 0,$.extend({},opts,{unmaskAsNumber:!0}));if(null!==opts.min&&unmasked<opts.min)return{refreshFromBuffer:!0,buffer:alignDigits(opts.min.toString().replace(".",opts.radixPoint).split(""),opts.digits,opts).reverse()}}if(buffer[buffer.length-1]===opts.negationSymbol.front){var nmbrMtchs=new RegExp("(^"+(""!=opts.negationSymbol.front?(0,_escapeRegex.default)(opts.negationSymbol.front)+"?":"")+(0,_escapeRegex.default)(opts.prefix)+")(.*)("+(0,_escapeRegex.default)(opts.suffix)+(""!=opts.negationSymbol.back?(0,_escapeRegex.default)(opts.negationSymbol.back)+"?":"")+"$)").exec(stripBuffer(buffer.slice(),!0).reverse().join("")),number=nmbrMtchs?nmbrMtchs[2]:"";0==number&&(result={refreshFromBuffer:!0,buffer:[0]})}else""!==opts.radixPoint&&buffer[0]===opts.radixPoint&&(result&&result.buffer?result.buffer.shift():(buffer.shift(),result={refreshFromBuffer:!0,buffer:stripBuffer(buffer)}));if(opts.enforceDigitsOnBlur){result=result||{};var bffr=result&&result.buffer||buffer.slice().reverse();result.refreshFromBuffer=!0,result.buffer=alignDigits(bffr,opts.digits,opts,!0).reverse()}}return result},onKeyDown:function onKeyDown(e,buffer,caretPos,opts){var $input=$(this),bffr;if(e.ctrlKey)switch(e.keyCode){case _keycode.default.UP:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())+parseInt(opts.step)),$input.trigger("setvalue"),!1;case _keycode.default.DOWN:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())-parseInt(opts.step)),$input.trigger("setvalue"),!1}if(!e.shiftKey&&(e.keyCode===_keycode.default.DELETE||e.keyCode===_keycode.default.BACKSPACE||e.keyCode===_keycode.default.BACKSPACE_SAFARI)&&caretPos.begin!==buffer.length){if(buffer[e.keyCode===_keycode.default.DELETE?caretPos.begin-1:caretPos.end]===opts.negationSymbol.front)return bffr=buffer.slice().reverse(),""!==opts.negationSymbol.front&&bffr.shift(),""!==opts.negationSymbol.back&&bffr.pop(),$input.trigger("setvalue",[bffr.join(""),caretPos.begin]),!1;if(!0===opts._radixDance){var radixPos=buffer.indexOf(opts.radixPoint);if(opts.digitsOptional){if(0===radixPos)return bffr=buffer.slice().reverse(),bffr.pop(),$input.trigger("setvalue",[bffr.join(""),caretPos.begin>=bffr.length?bffr.length:caretPos.begin]),!1}else if(-1!==radixPos&&(caretPos.begin<radixPos||caretPos.end<radixPos||e.keyCode===_keycode.default.DELETE&&caretPos.begin===radixPos))return caretPos.begin!==caretPos.end||e.keyCode!==_keycode.default.BACKSPACE&&e.keyCode!==_keycode.default.BACKSPACE_SAFARI||caretPos.begin++,bffr=buffer.slice().reverse(),bffr.splice(bffr.length-caretPos.begin,caretPos.begin-caretPos.end+1),bffr=alignDigits(bffr,opts.digits,opts).join(""),$input.trigger("setvalue",[bffr,caretPos.begin>=bffr.length?radixPos+1:caretPos.begin]),!1}}}},currency:{prefix:"",groupSeparator:",",alias:"numeric",digits:2,digitsOptional:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0},percentage:{alias:"numeric",min:0,max:100,suffix:" %",digits:0,allowMinus:!1},indianns:{alias:"numeric",_mask:function _mask(opts){return"("+opts.groupSeparator+"99){*|1}("+opts.groupSeparator+"999){1|1}"},groupSeparator:",",radixPoint:".",placeholder:"0",digits:2,digitsOptional:!1}})},function(module,exports,__webpack_require__){"use strict";var _window=_interopRequireDefault(__webpack_require__(12)),_inputmask=_interopRequireDefault(__webpack_require__(1));function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _wrapNativeSuper(Class){var _cache="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function _wrapNativeSuper(Class){if(null===Class||!_isNativeFunction(Class))return Class;if("function"!=typeof Class)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof _cache){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper)}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor)}return Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(Wrapper,Class)},_wrapNativeSuper(Class)}function _construct(Parent,args,Class){return _construct=_isNativeReflectConstruct()?Reflect.construct:function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a),instance=new Constructor;return Class&&_setPrototypeOf(instance,Class.prototype),instance},_construct.apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _isNativeFunction(fn){return-1!==Function.toString.call(fn).indexOf("[native code]")}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var document=_window.default.document;if(document&&document.head&&document.head.attachShadow&&_window.default.customElements&&void 0===_window.default.customElements.get("input-mask")){var InputmaskElement=function(_HTMLElement){_inherits(InputmaskElement,_HTMLElement);var _super=_createSuper(InputmaskElement);function InputmaskElement(){var _this;_classCallCheck(this,InputmaskElement),_this=_super.call(this);var attributeNames=_this.getAttributeNames(),shadow=_this.attachShadow({mode:"closed"}),input=document.createElement("input");for(var attr in input.type="text",shadow.appendChild(input),attributeNames)Object.prototype.hasOwnProperty.call(attributeNames,attr)&&input.setAttribute(attributeNames[attr],_this.getAttribute(attributeNames[attr]));var im=new _inputmask.default;return im.dataAttribute="",im.mask(input),input.inputmask.shadowRoot=shadow,_this}return InputmaskElement}(_wrapNativeSuper(HTMLElement));_window.default.customElements.define("input-mask",InputmaskElement)}},function(module,exports,__webpack_require__){"use strict";var _jquery=_interopRequireDefault(__webpack_require__(8)),_inputmask=_interopRequireDefault(__webpack_require__(1));function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}void 0===_jquery.default.fn.inputmask&&(_jquery.default.fn.inputmask=function(fn,options){var nptmask,input=this[0];if(void 0===options&&(options={}),"string"==typeof fn)switch(fn){case"unmaskedvalue":return input&&input.inputmask?input.inputmask.unmaskedvalue():(0,_jquery.default)(input).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":return input&&input.inputmask?input.inputmask.getemptymask():"";case"hasMaskedValue":return!(!input||!input.inputmask)&&input.inputmask.hasMaskedValue();case"isComplete":return!input||!input.inputmask||input.inputmask.isComplete();case"getmetadata":return input&&input.inputmask?input.inputmask.getmetadata():void 0;case"setvalue":_inputmask.default.setValue(input,options);break;case"option":if("string"!=typeof options)return this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(options)});if(input&&void 0!==input.inputmask)return input.inputmask.option(options);break;default:return options.alias=fn,nptmask=new _inputmask.default(options),this.each(function(){nptmask.mask(this)})}else{if(Array.isArray(fn))return options.alias=fn,nptmask=new _inputmask.default(options),this.each(function(){nptmask.mask(this)});if("object"==_typeof(fn))return nptmask=new _inputmask.default(fn),void 0===fn.mask&&void 0===fn.alias?this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(fn);nptmask.mask(this)}):this.each(function(){nptmask.mask(this)});if(void 0===fn)return this.each(function(){nptmask=new _inputmask.default(options),nptmask.mask(this)})}})},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _bundle=_interopRequireDefault(__webpack_require__(14));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}__webpack_require__(24);var _default=_bundle.default;exports.default=_default}],installedModules={},__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module.default}:function getModuleExports(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=25);function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var modules,installedModules});

/* Табы */
var tabs0 = jQuery_3_5_1('#tabs0');
var tabs1 = jQuery_3_5_1('#tabs1');
var tabs2 = jQuery_3_5_1('#tabs2');
var tabs3 = jQuery_3_5_1('#tabs3');
var tabs4 = jQuery_3_5_1('#tabs4');
var tabs5 = jQuery_3_5_1('#tabs5');
var tabs6 = jQuery_3_5_1('#tabs6');

/* Мобильные Табы */
var tabs0m = jQuery_3_5_1('#tabs0m');
var tabs1m = jQuery_3_5_1('#tabs1m');
var tabs2m = jQuery_3_5_1('#tabs2m');
var tabs3m = jQuery_3_5_1('#tabs3m');
var tabs4m = jQuery_3_5_1('#tabs4m');
var tabs5m = jQuery_3_5_1('#tabs5m');
var tabs6m = jQuery_3_5_1('#tabs6m');

/* события на клике по табам */
jQuery_3_5_1(tabs0).on('click', function () {
    console.log('1 вкладка');
    ga('send', 'event', 'vkladki_misight', 'click_main');
    ym(66929020, 'reachGoal', 'click_main');
});
jQuery_3_5_1(tabs1).on('click', function () {
    console.log('2 вкладка');
    ga('send', 'event', 'vkladki_misight', 'click_myopia');
    ym(66929020, 'reachGoal', 'click_myopia');
});
jQuery_3_5_1(tabs2).on('click', function () {
    console.log('3 вкладка');
    ga('send', 'event', 'vkladki_misight', 'click_methods');
    ym(66929020, 'reachGoal', 'click_methods');
});
jQuery_3_5_1(tabs3).on('click', function () {
    console.log('4 вкладка');
    ga('send', 'event', 'vkladki_misight', 'click_program');
    ym(66929020, 'reachGoal', 'click_program');
});
jQuery_3_5_1(tabs4).on('click', function () {

});
jQuery_3_5_1(tabs5).on('click', function (e, x) {
    console.log('6 вкладка');
    ga('send', 'event', 'vkladki_misight', 'click_test');
    ym(66929020, 'reachGoal', 'click_test');
});
jQuery_3_5_1(tabs6).on('click', function () {
    console.log('вкладка с локатором');
    ga('send', 'event', 'vkladki_misight', 'click_find');
    ym(66929020, 'reachGoal', 'click_find');
});

/* Клик на мобильные табы */
jQuery_3_5_1(tabs0m).on('click', function (e) {
    jQuery_3_5_1(tabs0).trigger('click');
});
jQuery_3_5_1(tabs1m).on('click', function (e) {
    jQuery_3_5_1(tabs1).trigger('click');
});
jQuery_3_5_1(tabs2m).on('click', function (e) {
    jQuery_3_5_1(tabs2).trigger('click');
});
jQuery_3_5_1(tabs3m).on('click', function (e) {
    jQuery_3_5_1(tabs3).trigger('click');
});
jQuery_3_5_1(tabs4m).on('click', function (e) {
    jQuery_3_5_1(tabs4).trigger('click');
});
jQuery_3_5_1(tabs5m).on('click', function (e) {
    jQuery_3_5_1(tabs5).trigger('click');
});
jQuery_3_5_1(tabs6m).on('click', function (e) {
    jQuery_3_5_1(tabs6).trigger('click');
});
jQuery_3_5_1('.jsPdfPutLinzy').on('click', function () {
    console.log('нажал на PDF Put Linzy');
    ym(66929020, 'reachGoal', 'pdf_rekomendacii_kak_nadevat_i_snimat_linzy_misight_1_day');
});
jQuery_3_5_1('.jsPdfBrochureProgram').on('click', function () {
    console.log('нажал на PDF Brochure Program');
    ym(66929020, 'reachGoal', 'pdf_znakomstvo_s_programmoy_yab_s_linzami_misight_1_day');
});

jQuery_3_5_1(document).ready(function(){

    // let final = false;

    const shadow = document.querySelector('.shadow'),
          modal = document.querySelector('#modalReception');


    const openModal = function(idOptika, cityOptika) {

        modal.classList.remove('hide');
        shadow.classList.remove('hide');
        document.documentElement.style.cssText = 'overflow: hidden';

        modal.querySelector('#idOptika').value = idOptika;
        modal.querySelector('#cityOptika').value = cityOptika;

        ga('send', 'event', 'optics_misight', 'modal_optics_open');
        // ym(66929020, 'reachGoal', 'modal_optics_open');
        console.log('%c CooperVision -> Открыл модалку', 'color: green');
    };

    const closeModal = function() {

        modal.classList.add('hide');
        modal.classList.remove('sms', 'sms-success', 'sms-error', 'sms-false');
        shadow.classList.add('hide');
        document.documentElement.style.cssText = 'overflow: unset';
        console.log('%c CooperVision -> Закрыл модалку', 'color: green');
    };

    modal.addEventListener('click', (e) => {

        if ( e.target.classList.contains('new-close') ) {
            closeModal();
        }
    });
    
    shadow.addEventListener('click', (e) => {

        if ( e.target === shadow ) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && !modal.classList.contains('hide')) {
            closeModal();
        }
    });

    jQuery_3_5_1(document).on('click','.jsSignUp',function(event){
        event.preventDefault();
        const idOptika = jQuery_3_5_1(this).siblings('.jsIdOptika').val();
        const cityOptika = jQuery_3_5_1(this).siblings('.jsCityOptika').val();
        console.log('клик по получение информации об оптике');
        ga('send', 'event', 'optics_misight', 'click_optics_info');
        ym(66929020, 'reachGoal', 'click_optics_info');
        openModal(idOptika, cityOptika);
        // jQuery.magnificPopup.open({
        //     items: {
        //         src: '#modalReception'
        //     },
        //     callbacks: {
        //         open: function () {
        //             console.log('%c CooperVision -> Открыл модалку', 'color: green');
        //             // console.log('%c CooperVision -> final: '+final, 'color: green');

        //             $(this.container).find('#idOptika').val(idOptika);
        //             $(this.container).find('#cityOptika').val(cityOptika);
        //             if (document.body.clientWidth > 780) {
        //                 $(this.container).find('.mfp-content').css({
        //                     'width': '650px',
        //                     'border-radius': '20px'
        //                 });
        //             } else {
        //                 $(this.container).find('.mfp-content').css({
        //                     'width': '300px',
        //                     'border-radius': '20px'
        //                 });
        //             }
        //             $(this.container).find('.mfp-close').addClass('new-close');
        //             ga('send', 'event', 'optics_misight', 'modal_optics_open');
        //             ym(66929020, 'reachGoal', 'modal_optics_open');
        //         },
        //         close: function() {
        //             $('#modalReception').removeClass('sms sms-success sms-error sms-false');
        //             console.log('%c CooperVision -> Закрыл модалку', 'color: green');
        //             // console.log('%c CooperVision -> final: '+final, 'color: green');
        //             // if (final === true) {
        //             //     $('#modalReception').removeClass('sms-success');
        //             //     final = false;
        //             // }
        //         }
        //     }
        // });
    });

    /* изменение чекбокса  Политики конфиднециальности */
    jQuery_3_5_1('#modalCheckBox1').on('change', function() {
        console.log('изменение чекбокса  Политики конфиднециальности');
        ga('send', 'event', 'optics_misight', 'modal_optics_chk_privacy');
        ym(66929020, 'reachGoal', 'modal_optics_chk_privacy');
    });

    /* изменение чекбокса  Согласен на рекламную рассылку */
    jQuery_3_5_1('#modalCheckBox1_2').on('change', function() {
        console.log('изменение чекбокса Согласен на рекламную рассылку');
        ga('send', 'event', 'optics_misight', 'modal_optics_chk_mailing');
        ym(66929020, 'reachGoal', 'modal_optics_chk_mailing');
    });

    jQuery_3_5_1(".note").on("click", function (event) {
        event.preventDefault(); //опустошим стандартную обработку
        let block = jQuery_3_5_1('#warningBlock').offset().top; //определим высоту от начала страницы до якоря
        jQuery_3_5_1('body,html').animate({scrollTop: block}, 2000); //сделаем прокрутку за 2 с
    });

    /* Селект */
    jQuery_3_5_1('.select').on('click', function () {
        if (jQuery_3_5_1(this).hasClass('open')) {
            jQuery_3_5_1(this).removeClass('open');
        } else {
            jQuery_3_5_1(this).addClass('open');
        }
    });

    jQuery_3_5_1('.select').on('click', '.select__item', function (event) {
        event.stopPropagation();
        jQuery_3_5_1(this).parent().prev().text(jQuery_3_5_1(this).text());
        jQuery_3_5_1(this).parent().prev().prev().val(jQuery_3_5_1(this).text());
        jQuery_3_5_1(this).closest('.select').removeClass('open');
    });

    /* инпуты */
    var modalName1 = jQuery_3_5_1('#modalName1');
    var modalPhone1 = jQuery_3_5_1('#modalPhone1');
    var modalMail1 = jQuery_3_5_1('#modalMail1');
    var modalCheckBox1 = jQuery_3_5_1('#modalCheckBox1');
    var modalCheckBox1Label = jQuery_3_5_1('#modalCheckBox1Label');
    var modalCheckBox1_2 = jQuery_3_5_1('#modalCheckBox1_2');
    var modalCheckBox1_2Label = jQuery_3_5_1('#modalCheckBox1_2Label');
    var modalButton1 = jQuery_3_5_1('#modalButton1');
    var reg = new RegExp('@');
    var nearsightednessBread = jQuery_3_5_1('#nearsightednessBread');

    /* Маска для интпута с почтой*/
    jQuery(".jsPhone").inputmask({
        mask: "+7 (999) 999-99-99",
        clearIncomplete: true,
        showMaskOnHover: false,
    });

    // function validate() {
    //     if ($(modalName1).val() !== '' && $(modalPhone1).val() !== '' && reg.test($(modalMail1).val()) && modalCheckBox1.is(":checked") && modalCheckBox1_2.is(":checked")) {
    //         // console.log('Все поля заполнены, проверка полей');
    //         if (modalName1.hasClass('success-text') && modalPhone1.hasClass('success-text') && modalMail1.hasClass('success-text') && modalCheckBox1.hasClass('success-check') && modalCheckBox1Label.hasClass('success-check-before') && modalCheckBox1_2.hasClass('success-check') && modalCheckBox1_2Label.hasClass('success-check-before')) {
    //             //   console.log('Все поля проверенны');
    //             $(modalButton1).removeClass('hide');
    //         } else {
    //             //   console.log('Неизвестная ошибка, пропускаю');
    //             modalName1.addClass('success-text').removeClass('error-text');
    //             modalPhone1.addClass('success-text').removeClass('error-text');
    //             modalMail1.addClass('success-text').removeClass('error-text');
    //             modalCheckBox1.addClass('success-check').removeClass('error-check');
    //             modalCheckBox1Label.addClass('success-check-before').removeClass('error-check-before');
    //             modalCheckBox1_2.addClass('success-check').removeClass('error-check');
    //             modalCheckBox1_2Label.addClass('success-check-before').removeClass('error-check-before');
    //         }
    //     } else {
    //         $(modalButton1).addClass('hide');
    //     }
    // }

    jQuery_3_5_1('.jsMail').on("input change paste", function () {
        var newVal = jQuery_3_5_1(this).val().replace(/[^a-zA-Z@\.\-\_0-9]/g, '');
        jQuery_3_5_1(this).val(newVal);
    });

    // $(modalName1).on("input change paste", function () {
    //     var text1 = $(this).val();
    //     if (text1 !== '') {
    //         $(this).addClass('success-text');
    //         $(this).removeClass('error-text');
    //         validate();
    //     } else {
    //         $(this).addClass('error-text');
    //         $(this).removeClass('success-text');
    //         validate();
    //     }
    // });
    // $(modalPhone1).on("input change paste", function () {
    //     var text2 = $(this).val();
    //     if (text2 !== '') {
    //         $(this).addClass('success-text');
    //         $(this).removeClass('error-text');
    //         console.log(text2);
    //         validate();
    //     } else {
    //         $(this).addClass('error-text');
    //         $(this).removeClass('success-text');
    //         console.log(text2);
    //         validate();
    //     }
    // });
    // $(modalMail1).on("input change paste", function () {
    //     var text3 = $(this).val();
    //     if (reg.test(text3)) {
    //         $(this).addClass('success-text');
    //         $(this).removeClass('error-text');
    //         validate();
    //     } else {
    //         $(this).addClass('error-text');
    //         $(this).removeClass('success-text');
    //         validate();
    //     }
    // });

    // $(modalCheckBox1).click(function () {
    //     if ($(this).is(":checked")) {
    //         $(this).addClass('success-check');
    //         $(this).siblings('#modalCheckBox1Label').addClass('success-check-before');
    //         $(this).removeClass('error-check');
    //         $(this).siblings('#modalCheckBox1Label').removeClass('error-check-before');
    //         validate();
    //     } else if ($(this).is(":not(:checked)")) {
    //         $(this).addClass('error-check');
    //         $(this).siblings('#modalCheckBox1Label').addClass('error-check-before');
    //         $(this).removeClass('success-check');
    //         $(this).siblings('#modalCheckBox1Label').removeClass('success-check-before');
    //         validate();
    //     }
    // });

    // $(modalCheckBox1_2).click(function () {
    //     if ($(this).is(":checked")) {
    //         $(this).addClass('success-check');
    //         $(this).siblings('#modalCheckBox1_2Label').addClass('success-check-before');
    //         $(this).removeClass('error-check');
    //         $(this).siblings('#modalCheckBox1_2Label').removeClass('error-check-before');
    //         validate();
    //     } else if ($(this).is(":not(:checked)")) {
    //         $(this).addClass('error-check');
    //         $(this).siblings('#modalCheckBox1_2Label').addClass('error-check-before');
    //         $(this).removeClass('success-check');
    //         $(this).siblings('#modalCheckBox1_2Label').removeClass('success-check-before');
    //         validate();
    //     }
    // });

    //локатор

    jQuery_3_5_1(document).on('submit', '#modalReception .modal-1__form', function (e) {
        e.preventDefault();
        jQuery_3_5_1.ajax({
            url: 'https://camera.webnauts.pro/aPhoneConfirm.php',
            type: "POST",
            dataType: 'json',
            crossDomain: true,
            data: jQuery_3_5_1(this).serialize(),
            success: function (result) {
                console.log('%c CooperVision -> Отправил данные', 'color: green');
                // console.log('%c CooperVision -> final: '+final, 'color: green');
                // if (result.status === 'success') {
                //     $('#modalReception .modal-1__form').closest('.modal-1').addClass('sms');
                //     $('.smsVerif').append('<input type="hidden" name="tel" value="' + result.tel + '">')
                // }
                if (result.verification === true) {
                    jQuery_3_5_1('#modalReception .modal-1__form').closest('.modal-1').addClass('sms');
                    jQuery_3_5_1('.smsVerif').append('<input type="hidden" name="tel" value="' + result.tel + '">')
                } else if (result.verification === false) {
                    jQuery_3_5_1('#modalReception .modal-1__form').closest('.modal-1').addClass('sms-false');
                    ga('send', 'event', 'optics_misight', 'modal_success_optics');
                    ym(66929020, 'reachGoal', 'modal_success_optics');
                }
            },
            error: function (xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        })
    });

    jQuery_3_5_1(document).on('submit', '.smsVerif', function (e) {
        ga('send', 'event', 'optics_misight', 'modal_optics_sms');
        ym(66929020, 'reachGoal', 'modal_optics_sms');
        e.preventDefault();
        jQuery_3_5_1.ajax({
            url: 'https://camera.webnauts.pro/aPhoneConfirmCode.php',
            type: "POST",
            dataType: 'json',
            crossDomain: true,
            data: jQuery_3_5_1(this).serialize(),
            success: function (result) {
                if (result.status === 'success') {
                    jQuery_3_5_1('.smsVerif').closest('.modal-1').removeClass('sms');
                    jQuery_3_5_1('.smsVerif').closest('.modal-1').addClass('sms-success');
                    // final = true;
                    console.log('%c CooperVision -> Ввел правильный смс', 'color: green');
                    // console.log('%c CooperVision -> final: '+final, 'color: green');
                    ga('send', 'event', 'optics_misight', 'modal_success_optics');
                    ym(66929020, 'reachGoal', 'modal_success_optics');
                } else {
                    console.log('%c CooperVision -> Ввел не правильный смс', 'color: green');
                    // console.log('%c CooperVision -> final: '+final, 'color: green');
                    jQuery_3_5_1('.smsVerif').closest('.modal-1').removeClass('sms');
                    jQuery_3_5_1('.smsVerif').closest('.modal-1').addClass('sms-error');
                }
            },
            error: function (xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        });
    });

    jQuery_3_5_1(document).on('click','.modal-1__container--sms-error',function(e){
        console.log('нажал на кнопку ввести СМС еще раз');
        e.preventDefault();
        jQuery_3_5_1(this).closest('.modal-1').removeClass('sms-error');
        jQuery_3_5_1(this).closest('.modal-1').addClass('sms');
    });

    // $('.jsRecommendation').on('click', function (event) {
    //     event.preventDefault();
    //     $.magnificPopup.open({
    //         items: {
    //             src: '#modalRecommendation'
    //         },
    //         callbacks: {
    //             open: function () {
    //                 if (document.body.clientWidth > 780) {
    //                     $(this.container).find('.mfp-content').css({
    //                         'width': '650px',
    //                         'border-radius': '20px'
    //                     });
    //                 } else {
    //                     $(this.container).find('.mfp-content').css({
    //                         'width': '300px',
    //                         'border-radius': '20px'
    //                     });
    //                 }
    //                 $(this.container).find('.mfp-close').addClass('new-close');
    //             }
    //         }
    //     });
    // });

    jQuery_3_5_1(document).on("click", ".jsFindAdressMap", function (event) {
        // event.preventDefault(); //опустошим стандартную обработку
        let block = jQuery_3_5_1('#mapСontrol').offset().top; //определим высоту от начала страницы до якоря
        jQuery_3_5_1('body,html').animate({scrollTop: block}, 1000); //сделаем прокрутку за 2 с
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

            var browserLocation = ymaps.geolocation.get({
                provider: 'browser'
            });

            function successGetGeo (result, browserGeoFlag) {
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
                        check_city_optik(city_name[0], coord, browserGeoFlag)
                    } catch (err) {
                        console.log(err)
                    }
                }

                //проверяем есть ли в&nbsp;этом городк оптики
                function check_city_optik(city_name, coord, browserGeoFlag) {
                    var flag = 0;
                    for (var i = 0; i < Object.keys(clinic_mass).length; i++) {
                        if (city_name == clinic_mass[Object.keys(clinic_mass)[i]]['city']) {
                            jQuery(".select-city").closest(".select").find(".select__head").text(city_name)
                            if (city_name === 'Москва') {
                                jQuery(".select-oblast").closest(".select").find(".select__head").text('Москва')
                            }
                            if(!browserGeoFlag){
                                create_map(coord)
                            }
                            else{
                                myMap.setCenter(
                                    coord,
                                    10
                                );
                                myMap2.setCenter(
                                    coord,
                                    10
                                );
                            }
                            add_markers()
                            show_opik_under_map(city_name, clinic_mass, 'city')
                            findmetro(city_name)
                            // jQuery('.mobile-map-text').append('<span>' + city_name + '</span>');
                            jQuery('.jsMobiCityText').text(city_name);
                            resolve(1);
                            flag = 1;
                            break;
                        }
                    }
                    if (!flag) {
                        //если нет ставим центр карты в&nbsp;городе Москва
                        jQuery(".select-city").closest(".select").find(".select__head").text('Москва')
                        jQuery(".select-oblast").closest(".select").find(".select__head").text('Москва')
                        if(!browserGeoFlag){
                            create_map([55.76, 37.64])
                        }
                        else{
                            myMap.setCenter(
                                [55.76, 37.64],
                                10
                            );
                            myMap2.setCenter(
                                [55.76, 37.64],
                                10
                            );
                        }
                        add_markers()
                        show_opik_under_map("Москва", clinic_mass, 'city')
                        // jQuery('.mobile-map-text').append('<span>Москва</span>');
                        jQuery('.jsMobiCityText').text('Москва');
                        findmetro("Москва")
                        resolve(1);
                    }
                }


            }

            function failGeo (err, browserGeoFlag) {
                console.log('Ошибка: ' + err)
                jQuery(".select-city").closest(".select").find(".select__head").text('Москва')
                jQuery(".select-oblast").closest(".select").find(".select__head").text('Москва')
                if(!browserGeoFlag){
                    create_map([55.76, 37.64])
                }
                else{
                    myMap.setCenter(
                        [55.76, 37.64],
                        10
                    );
                    myMap2.setCenter(
                        [55.76, 37.64],
                        10
                    );
                }
                add_markers()
                show_opik_under_map("Москва", clinic_mass, 'city')
                // jQuery('.mobile-map-text').append('<span>Москва</span>');
                jQuery('.jsMobiCityText').text('Москва');
                findmetro("Москва")
                resolve(1);
            }

            
            location.then(
                function(result){
                    successGetGeo(result, false)
                },
                function(err){
                    failGeo(err, false)
                }
               )

            browserLocation.then(
                function(result){
                    successGetGeo(result, true)
                },
                function(err){
                    failGeo(err, true)
                }
            )

            //browserLocation.then(result => {successGetGeo(result), failGeo(result)})
            




        
            /*
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
                                jQuery('.jsMobiCityText').text(city_name);
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
                            jQuery('.jsMobiCityText').text('Москва');
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
                    jQuery('.jsMobiCityText').text('Москва');
                    findmetro("Москва")
                    resolve(1);
                }
            );*/

        })
        await promise
    }

    //запускаем инициализацию карты
    find_me()


//массив с данными об оптиках
var clinic_mass = {’

    '53.356293, 83.699637': {
    Id_optika: '965a7b61-d962-42e5-b884-0844986e208c',
    balloonContent: 'Медицинский центр Точка Зрения',
    time: '09:00-19:00',
    time_weekend: '10:00-14:00',
    time_weekend_sun: 'выходной',
    phone: '+7 (3852) 533 142',
    phone2: '',
    oblast: 'Алтайский край',
    city: 'Барнаул',
    rayon: '',
    street: 'ул. Малахова, 83',
        doctor: 'Ефимова Ирина'
    },
    '64.558939, 40.540178': {
    Id_optika: '9d8b9d70-445a-4e6b-b55b-97330a677bbf',
    balloonContent: 'Точка Зрения',
    time: '09:00-21:00',
    time_weekend: '09:00-21:00',
    time_weekend_sun: 'выходной',
    phone: '+7 (8182) 24 04 02',
    phone2: '',
    oblast: 'Архангельская область',
    city: 'Архангельск',
    rayon: 'Октябрьский район',
    street: 'ул. Комсомольская, 47',
        doctor: 'Макаровская Оксана Владимировна, Калинина Лидия Павловна, Титова Ольга Владимировна, Гриценко Екатерина Юрьевна'
    },
    '54.722295, 55.941336': {
    Id_optika: '562f1ef4-3b0a-44d7-92f0-9f8d62374a67',
    balloonContent: 'НИИ Глазных болезней',
    time: '09:00-19:00',
    time_weekend: '09:00-19:00',
    time_weekend_sun: '09:00-19:00',
    phone: '+7 (347) 286 53 03',
    phone2: '',
    oblast: 'Башкортостан Республика',
    city: 'Уфа',
    rayon: '',
    street: 'ул. Пушкина, 90',
        doctor: 'Альбина Фахретдинова'
    },
    '54.725805, 55.947696': {
    Id_optika: '5142f24a-19de-4286-b66d-948cee989c4a',
    balloonContent: 'Оправа',
    time: '10:00-20:00',
    time_weekend: '10:00-20:00',
    time_weekend_sun: '10:00-20:00',
    phone: '+7 (347) 216 43 47',
    phone2: '',
    oblast: 'Башкортостан Республика',
    city: 'Уфа',
    rayon: '',
    street: 'ул. Ленина, 26',
        doctor: 'Муладшева Ляйля Хамматовна'
    },
    '54.730235, 55.969911': {
    Id_optika: 'c632105c-addc-4b2e-974f-5aa36d93d9b1',
    balloonContent: 'Арника',
    time: '10:00-19:00',
    time_weekend: '10:00-19:00',
    time_weekend_sun: '10:00-19:00',
    phone: '+7 (347) 294 00 53',
    phone2: '',
    oblast: 'Башкортостан Республика',
    city: 'Уфа',
    rayon: '',
    street: 'ул. Достоевского, 134',
        doctor: 'Муслимова Земфира Рафаиловна'
    },
    '54.743468, 56.025732': {
    Id_optika: 'cec3dfa9-8106-48f0-8e38-2743ce004c65',
    balloonContent: 'Арника',
    time: '09:00-20:00',
    time_weekend: '11:00-18:00',
    time_weekend_sun: '11:00-18:00',
    phone: '+7 (347) 241 41 27',
    phone2: '',
    oblast: 'Башкортостан Республика',
    city: 'Уфа',
    rayon: '',
    street: 'ул. Менделеева, 207',
        doctor: 'Ягафарова Ирина Камилевна'
    },
    '54.711915, 55.992917': {
    Id_optika: '681bf5a1-ee3e-47db-8ea2-7d0f29a14b01',
    balloonContent: 'Арника',
    time: '10:00-20:00',
    time_weekend: '11:00-18:00',
    time_weekend_sun: '11:00-18:00',
    phone: '+7 (347) 255 92 63',
    phone2: '',
    oblast: 'Башкортостан Республика',
    city: 'Уфа',
    rayon: '',
    street: 'ул. Менделеева, 116',
        doctor: 'Галиуллина Альфия Ринатовна'
    },
    '54.780667, 56.118879': {
    Id_optika: 'c8534321-4184-430a-98b7-734fba1b7135',
    balloonContent: 'Арника',
    time: '10:00-20:00',
    time_weekend: '11:00-19:00',
    time_weekend_sun: '11:00-19:00',
    phone: '+7 (347) 257 27 00',
    phone2: '',
    oblast: 'Башкортостан Республика',
    city: 'Уфа',
    rayon: '',
    street: 'ул. Транспортная, 46/1',
        doctor: 'Ихсанова Алсу Насибулловна, Шарифгалеева Гульназ Радиковна'
    },
    '50.599142, 36.580593': {
    Id_optika: 'a42e90cf-8739-4ee9-8e7c-74cac619d9bb',
    balloonContent: 'Новая Оптика',
    time: '09:00-19:00',
    time_weekend: '09:00-19:00',
    time_weekend_sun: '09:00-19:00',
    phone: '+7 (4722) 32 34 90',
    phone2: '',
    oblast: 'Белгородская область',
    city: 'Белгород',
    rayon: '',
    street: 'пр-т Богдана Хмельницкого, 38',
        doctor: 'Яна Лысенко, Ольга Маслова'
    },
    '50.601549, 36.589819': {
    Id_optika: '550f77cf-f72a-456d-95e3-b3d162b51c80',
    balloonContent: 'Новая Оптика',
    time: '09:00-19:00',
    time_weekend: '09:00-19:00',
    time_weekend_sun: '09:00-19:00',
    phone: '+7 (951) 154 29 95',
    phone2: '',
    oblast: 'Белгородская область',
    city: 'Белгород',
    rayon: '',
    street: 'ул. Попова, 25',
        doctor: 'Лариса Сливченко'
    },
    '53.244095, 34.357146': {
    Id_optika: '72a15a84-401c-415f-9d1e-c2da3b02e227',
    balloonContent: 'Кабинет Окулист',
    time: 'уточняйте по телефону',
    time_weekend: 'уточняйте по телефону',
    time_weekend_sun: 'выходной',
    phone: '7 (980) 338 24 38',
    phone2: '+7 (980) 339 04 64',
    oblast: 'Брянская область',
    city: 'Брянск',
    rayon: '',
    street: 'ул. Фокина, 67',
        doctor: 'Тузова Дарья'
    },
    '48.719087, 44.507642': {
    Id_optika: 'e60a759e-91b6-44b2-822d-488fc94f9492',
    balloonContent: 'Мир Оптики',
    time: '09:30-20:00',
    time_weekend: '09:30-20:00',
    time_weekend_sun: '09:30-20:00',
    phone: '8 (800) 555 63 53',
    phone2: '',
    oblast: 'Волгоградская область',
    city: 'Волгоград',
    rayon: '',
    street: 'ул. Невская, 16а',
        doctor: 'Вера Ильина'
    },
    '48.698107, 44.500976': {
    Id_optika: '9f35ec4f-8559-4563-bd7b-55958029ba76',
    balloonContent: 'Оптика-Сервис',
    time: '09:00-19:00',
    time_weekend: '10:00-18:00',
    time_weekend_sun: '10:00-17:00',
    phone: '+7 (8442) 900 189',
    phone2: '',
    oblast: 'Волгоградская область',
    city: 'Волгоград',
    rayon: '',
    street: 'ул. Рабоче-Крестьянская, 8',
        doctor: 'Дудакова Татьяна Владимировна'
    },
    '48.695508, 44.491903': {
    Id_optika: '3aae02a5-00cb-45df-bdcb-7be1b77f8ee8',
    balloonContent: 'Мир Оптики',
    time: '09:00-20:00',
    time_weekend: '09:00-20:00',
    time_weekend_sun: '09:00-20:00',
    phone: '8 (800) 555 63 53',
    phone2: '',
    oblast: 'Волгоградская область',
    city: 'Волгоград',
    rayon: '',
    street: 'ул. Козловская, 31',
        doctor: 'Сигаева Надежда, Наталия Радковская'
    },
    '48.513114, 44.546215': {
    Id_optika: 'e0378d36-ad75-49a9-aebd-10e5444c82f6',
    balloonContent: 'Мир Оптики',
    time: '09:30-20:00',
    time_weekend: '09:30-20:00',
    time_weekend_sun: '09:30-20:00',
    phone: '8 (800) 555 63 53',
    phone2: '',
    oblast: 'Волгоградская область',
    city: 'Волгоград',
    rayon: '',
    street: 'пр-т Героев Сталинграда, 48',
        doctor: 'Ксения Французова'
    },
    '48.789261, 44.761811': {
    Id_optika: '550659a5-1838-4c48-af43-f53d3559b7f3',
    balloonContent: 'Мир Оптики',
    time: '10:00-19:00',
    time_weekend: '10:00-19:00',
    time_weekend_sun: '10:00-19:00',
    phone: '8 (800) 555 63 53',
    phone2: '',
    oblast: 'Волгоградская область',
    city: 'Волжский',
    rayon: '',
    street: 'ул. Карбышева, 44',
        doctor: 'Пересыпкина Юлия'
    },
    '51.670724, 39.189579': {
    Id_optika: '1529a9a6-bee8-489b-a8df-9754759f38d0',
    balloonContent: 'Европа Оптика',
    time: '09:30-20:00',
    time_weekend: '10:00-19:00',
    time_weekend_sun: '10:00-17:00',
    phone: '+7 (473) 271 67 87',
    phone2: '',
    oblast: 'Воронежская область',
    city: 'Воронеж',
    rayon: '',
    street: 'ул. Плехановская, 48',
        doctor: 'Марина Сергеевна Соболева, Татьяна Николаевна Мельникова, Ольга Александровна Дмитриенко, Людмила Николаевна Парфенова, Алла Владимировна Новокщенова'
    },
    '51.682006, 39.216286': {
    Id_optika: '6572bf1e-04e7-49b1-ae64-5bf2f3e4435c',
    balloonContent: 'Новые Горизонты',
    time: '08:00-19:00',
    time_weekend: '08:00-17:00',
    time_weekend_sun: 'выходной',
    phone: '+7 (473) 30 03 111',
    phone2: '',
    oblast: 'Воронежская область',
    city: 'Воронеж',
    rayon: '',
    street: 'пр-т Революции, 1в',
        doctor: 'Татьяна Агеева, Мария Старикова, Ольга Самойлова'
    },
    '51.700525, 39.182995': {
    Id_optika: '3559bf11-c291-4741-b6a3-e6dd952f7cca',
    balloonContent: 'Визио',
    time: '09:00-20:00',
    time_weekend: '10:00-19:00',
    time_weekend_sun: '10:00-18:00',
    phone: '+7 (473) 224 70 84',
    phone2: '',
    oblast: 'Воронежская область',
    city: 'Воронеж',
    rayon: '',
    street: 'пер. Ученический, 7',
        doctor: 'Артем Мацнев'
    },
    '51.658775, 39.194601': {
    Id_optika: '155cab5c-df40-4a70-bc18-95e4a28f4bf5',
    balloonContent: 'Визио',
    time: '09:00-20:00',
    time_weekend: '10:00-20:00',
    time_weekend_sun: '10:00-18:00',
    phone: '+7 (473) 277 55 44',
    phone2: '',
    oblast: 'Воронежская область',
    city: 'Воронеж',
    rayon: '',
    street: 'ул. Кирова, 3',
        doctor: 'Владимир Соколенко, Ольга Маренкова, Анна Платонова, Ольга Лихотина'
    },
    '51.663216, 39.193801': {
    Id_optika: '9bba1497-b774-4ff5-8de2-08d47a8bc1ef',
    balloonContent: 'МедИнвест',
    time: '08:00-20:00',
    time_weekend: '09:00-17:00',
    time_weekend_sun: 'выходной',
    phone: '+7 (473) 212 12 22',
    phone2: '',
    oblast: 'Воронежская область',
    city: 'Воронеж',
    rayon: '',
    street: 'ул. Куколкина, 11',
        doctor: 'Евгения Черных, Снежана Хрипченко'
    },
    '51.712479, 39.158174': {
    Id_optika: '59aa92e9-52e3-4b11-bff9-82cce02b5991',
    balloonContent: 'Точка Зрения',
    time: '09:30-20:00',
    time_weekend: '09:30-20:00',
    time_weekend_sun: '09:30-20:00',
    phone: '+7 (473) 202 19 10',
    phone2: '',
    oblast: 'Воронежская область',
    city: 'Воронеж',
    rayon: '',
    street: 'б-р Победы, 42',
        doctor: 'Дарья Резникова, Ольга Вербицкая, Олеся Черных, Юлия Хаванская'
    },
    '51.673427, 39.199559': {
    Id_optika: '6341772c-efe6-4480-a767-533006b038d4',
    balloonContent: 'Точка Зрения',
    time: '09:00-19:00',
    time_weekend: '09:00-19:00',
    time_weekend_sun: '09:00-17:00',
    phone: '+7 (473) 259 84 16',
    phone2: '',
    oblast: 'Воронежская область',
    city: 'Воронеж',
    rayon: '',
    street: 'ул. Кольцовская, 34',
        doctor: 'Олеся Забровская, Ольга Иванникова'
    },
    '52.046188, 113.508927': {
    Id_optika: 'a91e608f-fabf-4df7-b156-0e27e3c83e40',
    balloonContent: 'Детство',
    time: '10:00-19:00',
    time_weekend: '11:00-18:00',
    time_weekend_sun: '11:00-17:00',
    phone: '+7 (3022) 21 02 00',
    phone2: '',
    oblast: 'Забайкальский край',
    city: 'Чита',
    rayon: 'Центральный район',
    street: 'ул. Новобульварная, 53',
        doctor: 'Юлия Тунглакова, Надежда Жамбалдоржиева, Светлана Баторова'
    },
    '52.035514, 113.505244': {
    Id_optika: '4a29b3c2-dfd3-4381-a272-beeb6cfdb639',
    balloonContent: 'Глазная амбулатория Взгляд',
    time: '09:00-20:00',
    time_weekend: '09:00-18:00',
    time_weekend_sun: '09:00-18:00',
    phone: '+7 (914) 126 13 64',
    phone2: '+7 (924) 380 12 26',
    oblast: 'Забайкальский край',
    city: 'Чита',
    rayon: 'Центральный район',
    street: 'ул. Ленинградская, 58',
        doctor: 'Ирина Андреевна Козырева, Людмила Митина'
    },
    '54.516474, 36.286988': {
    Id_optika: '130cafdf-97c8-498e-b828-28c29472e201',
    balloonContent: 'Доктор Линз',
    time: '11:00-19:00 ПН - выходной',
    time_weekend: '11:00-19:00',
    time_weekend_sun: 'выходной',
    phone: '+7 (4842) 40 46 20',
    phone2: '+7 (930) 754 4620',
    oblast: 'Калужская область',
    city: 'Калуга',
    rayon: '',
    street: 'ул. Маршала Жукова, 25',
        doctor: 'Цветков Александр Николаевич'
    },
    '61.791652, 34.368860': {
    Id_optika: '3ccfc2fb-eb79-4673-8366-4cc15b5501da',
    balloonContent: 'Центр коррекции зрения',
    time: '09:00-19:00',
    time_weekend: '10:00-18:00',
    time_weekend_sun: '11:00-17:00',
    phone: '+7 (8142) 76 39 80',
    phone2: '',
    oblast: 'Карелия Республика',
    city: 'Петрозаводск',
    rayon: '',
    street: 'пр-т Ленина, 11',
        doctor: 'Максимова Наталья Васильевна, Тушина Светлана Юрьевна'
    },
    '55.345985, 86.166213': {
    Id_optika: 'f2d56071-714c-4c89-b988-8e0fcdea39d0',
    balloonContent: 'Визус-2',
    time: '10:00-19:00',
    time_weekend: '10:00-17:00',
    time_weekend_sun: '10:00-17:00',
    phone: '+7 (3842) 37 57 40',
    phone2: '',
    oblast: 'Кемеровская область',
    city: 'Кемерово',
    rayon: '',
    street: 'б-р Строителей, 26',
        doctor: 'Анастасия Горяева, Лилия Жумаева'
    },
    '53.756424, 87.136097': {
    Id_optika: '3713074f-6933-4fd1-9972-b7b663225d6c',
    balloonContent: 'Оптика 100%',
    time: '09:00-20:00',
    time_weekend: '09:00-20:00',
    time_weekend_sun: '09:00-20:00',
    phone: '88007000214',
    phone2: '',
    oblast: 'Кемеровская область',
    city: 'Новокузнецк',
    rayon: '',
    street: 'ул. Бардина, 42',
        doctor: 'Ольга Карпенко, Елена Трубачева, Олеся Грачева, Олеся Гросс'
    },
    '58.604158, 49.681578': {
    Id_optika: '5f4d7384-7ca0-4035-b628-7a8fab8b58b7',
    balloonContent: 'Дом здорового зрения',
    time: '09:00-19:00',
    time_weekend: '09:00-19:00',
    time_weekend_sun: '10:00-18:00',
    phone: '+7 (8332) 21 88 22',
    phone2: '',
    oblast: 'Кировская область',
    city: 'Киров',
    rayon: '',
    street: 'ул. Ленина, 80',
        doctor: 'Подыниногин Николай, Злобина Ольга Николаевна'
    },
    '58.572305, 49.683375': {
    Id_optika: 'e43736d7-b9bd-4815-bf34-fc5f92ca352d',
    balloonContent: 'Дом здорового зрения',
    time: '09:00-19:00',
    time_weekend: '09:00-19:00',
    time_weekend_sun: '10:00-18:00',
    phone: '+7 (8332) 21 88 22',
    phone2: '',
    oblast: 'Кировская область',
    city: 'Киров',
    rayon: '',
    street: 'ул. Ленина, 191',
        doctor: 'Пономарева Ольга, Брязгина Анастасия'
    },
    '58.592763, 49.632261': {
    Id_optika: 'a754d0c2-bfad-40b6-9a45-9c1a48fe70d0',
    balloonContent: 'Дом здорового зрения',
    time: '09:00-19:00',
    time_weekend: '09:00-19:00',
    time_weekend_sun: '10:00-18:00',
    phone: '+7 (8332) 21 88 22',
    phone2: '',
    oblast: 'Кировская область',
    city: 'Киров',
    rayon: '',
    street: 'ул. Воровского, 78',
        doctor: 'Ступникова Елена, Краева Екатерина'
    },
    '61.662059, 50.816627': {
    Id_optika: 'a1adeaef-532d-42cd-869b-25994efd61d9',
    balloonContent: 'МКЦ Линза',
    time: '10:00-19:00',
    time_weekend: '10:00-18:00',
    time_weekend_sun: '11:00-16:00',
    phone: '+7 (8212) 32 80 49',
    phone2: '',
    oblast: 'Коми Республика',
    city: 'Сыктывкар',
    rayon: '',
    street: 'пр-т Октябрьский, 43',
        doctor: 'Мельникова Наталья Михайловна, Волков Михаил Алексеевич'
    },
    '57.758614, 40.956754': {
    Id_optika: 'a79cdf1e-3edb-424b-9204-318cb6ce637d',
    balloonContent: 'Оптика Сокол',
    time: '09:00-19:00',
    time_weekend: '09:00-19:00',
    time_weekend_sun: '10:00-17:00',
    phone: '+7 (494) 242 13 42',
    phone2: '',
    oblast: 'Костромская область',
    city: 'Кострома',
    rayon: '',
    street: 'ул. Лагерная, 4',
        doctor: 'Надежда Леонидовна'
    },
    '57.773304, 40.934781': {
    Id_optika: 'e4f345da-e015-49f2-a4ad-167cc314f486',
    balloonContent: 'ТехноОптика',
    time: '10:00-18:00',
    time_weekend: '10:00-16:00',
    time_weekend_sun: 'выходной',
    phone: '+7 (4942) 47 26 04',
    phone2: '',
    oblast: 'Костромская область',
    city: 'Кострома',
    rayon: 'Ленинский район',
    street: 'ул. Сенная, 14',
        doctor: 'Скворцов Андрей Борисович'
    },
    '45.031821, 39.093253': {
    Id_optika: '85d34784-7e64-4d62-acd7-3f5749056d92',
    balloonContent: 'ОптриКа',
    time: '09:00-20:00',
    time_weekend: '09:00-20:00',
    time_weekend_sun: '09:00-20:00',
    phone: '+7 (861) 232 42 37',
    phone2: '',
    oblast: 'Краснодарский край',
    city: 'Краснодар',
    rayon: '',
    street: 'ул. Сормовская, 108/2',
        doctor: 'Виктория Гуцалюк'
    },
    '45.065106, 39.009575': {
    Id_optika: '9b3e17a2-4eb3-4e51-9577-0335a5365c80',
    balloonContent: 'Я вижу!',
    time: '09:30-20:00',
    time_weekend: '09:30-20:00',
    time_weekend_sun: '11:00-18:00',
    phone: '+7 (861) 991 42 41 доп.2',
    phone2: '',
    oblast: 'Краснодарский край',
    city: 'Краснодар',
    rayon: '',
    street: 'ул. Карякина, 20',
        doctor: 'Элина Погосян'
    },
    '45.054136, 38.936191': {
    Id_optika: '61dc9520-4426-4487-8830-ff044af3ca80',
    balloonContent: 'Детское офтальмологическое отделение клиники 3Z',
    time: '08:00-20:00',
    time_weekend: '09:00-17:00',
    time_weekend_sun: '09:00-17:00',
    phone: '8 (800) 250 33 30',
    phone2: '',
    oblast: 'Краснодарский край',
    city: 'Краснодар',
    rayon: 'Западный округ',
    street: 'ул. Красных партизан, 16/1',
        doctor: 'Валентина Щевцова, Юлия Шадрина, Вероника Орлова, Олеся Минеева, Светлана Георгиева'
    },
    '45.036751, 39.091860': {
    Id_optika: 'a1104baf-35ba-48cf-9d51-dc446a48c974',
    balloonContent: 'Диагностический центр 3Z',
    time: '08:00-16:00',
    time_weekend: '09:00-17:00',
    time_weekend_sun: 'выходной',
    phone: '8 (800) 250 33 30',
    phone2: '',
    oblast: 'Краснодарский край',
    city: 'Краснодар',
    rayon: 'Комсомольский район',
    street: 'ул. Уральская ,156',
        doctor: 'Олеся Минеева'
    },
    '45.016467, 39.040683': {
    Id_optika: '942b38f7-eeb5-4c39-8865-0ff11fccd6e2',
    balloonContent: 'Диагностический центр 3Z',
    time: '08:00-20:00',
    time_weekend: '08:00-20:00',
    time_weekend_sun: '08:00-20:00',
    phone: '8 (800) 250 33 30',
    phone2: '',
    oblast: 'Краснодарский край',
    city: 'Краснодар',
    rayon: 'Черёмушки микрорайон',
    street: 'ул. Ставропольская,252',
        doctor: 'Ольга Щурина'
    },
    '45.034292, 38.919995': {
    Id_optika: '892da1e8-11e9-40a7-aa81-3cd9e7bbab8e',
    balloonContent: 'Я Вижу!',
    time: '10:00-20:30',
    time_weekend: '10:00-20:30',
    time_weekend_sun: '11:00-18:00',
    phone: '+7 (861) 991 42 41 доп.1',
    phone2: '',
    oblast: 'Краснодарский край',
    city: 'Краснодар',
    rayon: 'Юбилейный',
    street: 'пр-т Чекистов, 33',
        doctor: 'Сергей Селин'
    },
    '43.426198, 39.925380': {
    Id_optika: '99570070-d54b-43be-85e4-9962497fbf01',
    balloonContent: 'Morraray',
    time: '09:30-18:00',
    time_weekend: '09:30-18:00',
    time_weekend_sun: '09:30-18:00',
    phone: '+7 (988) 183 39 93',
    phone2: '',
    oblast: 'Краснодарский край',
    city: 'Сочи',
    rayon: 'Адлер',
    street: 'ул. Кирова, 52',
        doctor: 'Майя Майорова, Нина Майорова'
    },
    '43.444096, 39.911438': {
    Id_optika: 'd836bfe3-1e28-4cf0-aa54-f822554d5389',
    balloonContent: 'Morraray',
    time: '10:00-19:00',
    time_weekend: '10:00-19:00',
    time_weekend_sun: '10:00-19:00',
    phone: '+7 (988) 183 39 93',
    phone2: '',
    oblast: 'Краснодарский край',
    city: 'Сочи',
    rayon: 'Адлер',
    street: 'ул. Кирпичная, 24 к.1',
        doctor: 'Нина Майорова, Майя Майорова'
    },
    '55.988172, 92.855213': {
    Id_optika: '70bb5a99-2d4e-41bc-9c02-29fa25c5427c',
    balloonContent: 'Оптика Давыдов',
    time: '10:00-20:00',
    time_weekend: '10:00-19:00',
    time_weekend_sun: '10:00-19:00',
    phone: '+7 (3912) 42 03 74',
    phone2: '',
    oblast: 'Красноярский край',
    city: 'Красноярск',
    rayon: 'Пашенный район',
    street: 'ул. Карамзина, 18',
        doctor: 'Марина Доброва, Оксана Котова'
    },
    '56.060439, 92.919388': {
    Id_optika: '2f80b621-d7d0-403e-82f8-97967ad3f898',
    balloonContent: 'Оптика Давыдов',
    time: '10:00-20:00',
    time_weekend: '10:00-20:00',
    time_weekend_sun: '10:00-20:00',
    phone: '+7 (3912) 92 03 74',
    phone2: '',
    oblast: 'Красноярский край',
    city: 'Красноярск',
    rayon: 'Северный район',
    street: 'ул. 9 мая, 51',
        doctor: 'Ольга Малинова, Елена Полынцева'
    },
    '56.057463, 92.913522': {
    Id_optika: 'd3bbc8fc-a2aa-42d2-84af-9231e8e884b9',
    balloonContent: 'ПрофиОптик',
    time: '10:00-19:00',
    time_weekend: '10:00-18:00',
    time_weekend_sun: 'выходной',
    phone: '+7 (3912) 31 21 31',
    phone2: '',
    oblast: 'Красноярский край',
    city: 'Красноярск',
    rayon: 'Северный район',
    street: 'ул. 9 мая, 59',
        doctor: 'Левченко Юлия Сергеевна, Ирина Новикова, Татьяна Воробьева'
    },
    '56.011731, 92.850667': {
    Id_optika: '448ca78e-d825-4f22-b988-4d63217cd5ff',
    balloonContent: 'ПрофиОптик',
    time: '10:00-19:00',
    time_weekend: '10:00-18:00',
    time_weekend_sun: 'выходной',
    phone: '+7 (3912) 22 49 99',
    phone2: '',
    oblast: 'Красноярский край',
    city: 'Красноярск',
    rayon: 'Центральный район',
    street: 'ул. Ленина, 127',
        doctor: 'Галина Казакова, Екатерина Ивановна'
    },
    '59.353893, 30.064685': {
    Id_optika: '8ddff281-de09-478b-9898-adf9aecb6112',
    balloonContent: 'Наша Оптика',
    time: '10:00-19:00',
    time_weekend: '10:00-19:00',
    time_weekend_sun: '10:00-19:00',
    phone: '+7 (812) 455 45 18',
    phone2: '',
    oblast: 'Ленинградская область',
    city: 'Сиверский',
    rayon: 'Гатчинский район',
    street: 'пер. Строителей, 5',
        doctor: 'Слепых Константин Александрович'
    },
    '54.187080, 45.185870': {
    Id_optika: '40dfc91d-b672-4a4c-993f-febdbf9e046f',
    balloonContent: 'Оптика Фокус',
    time: '10:00-19:00',
    time_weekend: '10:00-17:00',
    time_weekend_sun: 'выходной',
    phone: '+7 (8342) 48 25 75',
    phone2: '',
    oblast: 'Мордовия Республика',
    city: 'Саранск',
    rayon: '',
    street: 'ул. Богдана Хмельницкого, 33',
        doctor: 'Сафонкина Елена Юрьевна'
    },
    '54.194397, 45.188960': {
    Id_optika: '0f5897d2-eb32-474e-9252-6239403d4958',
    balloonContent: 'Оптика Фокус',
    time: '09:00-19:00',
    time_weekend: '09:00-19:00',
    time_weekend_sun: '10:00-17:00',
    phone: '+7 (8342) 23 18 80',
    phone2: '+7 (927) 274 70 88',
    oblast: 'Мордовия Республика',
    city: 'Саранск',
    rayon: '',
    street: 'пр-т Ленина, 41',
        doctor: 'Сафонкина Елена Юрьевна'
    },
    '54.187001, 45.218020': {
    Id_optika: '44aa0583-5e4e-452d-b68b-9f46b5dc15e7',
    balloonContent: 'Оптика Фокус',
    time: '10:00-19:00',
    time_weekend: '10:00-19:00',
    time_weekend_sun: '10:00-19:00',
    phone: '+7 (8342) 30 07 27',
    phone2: '',
    oblast: 'Мордовия Республика',
    city: 'Саранск',
    rayon: '',
    street: 'ул. Волгоградская, 64',
        doctor: 'Сафонкина Елена Юрьевна'
    },
    '56.000457, 37.205749': {
    Id_optika: 'a905866c-62ea-45f1-a2b8-45e9b8cdbee0',
    balloonContent: 'Оптика Плюс Минус',
    time: '09:00-19:00',
    time_weekend: '09:00-19:00',
    time_weekend_sun: '09:00-19:00',
    phone: '+7 (967) 243 83 43',
    phone2: '',
    oblast: 'Москва',
    city: 'Зеленоград',
    rayon: '',
    street: 'ул. Летчика Полагушина, корп. 403 А',
        doctor: 'Наталья Гарбузова'
    },
    '55.868915, 37.664905': {
    Id_optika: '2a1bf66d-60cf-4c91-9ecd-016c11b4d9a4',
    balloonContent: 'Оптик Сити',
    time: '09:00-21:00',
    time_weekend: '09:00-21:00',
    time_weekend_sun: '09:00-21:00',
    phone: '+7 (495) 471 79 76',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Бабушкинская',
    street: 'ул. Енисейская, 22 к.2',
        doctor: 'Джаспер Лилиана Виллисовна'
    },
    '55.757298, 37.632862': {
    Id_optika: '418ee35f-ea2e-4405-a7fb-1216176435fe',
    balloonContent: 'Глазко мастерская очков',
    time: '10:00-20:00',
    time_weekend: '11:00-19:00',
    time_weekend_sun: '11:00-19:00',
    phone: '+7 (916) 311 27 77',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Багратионовская',
    street: 'ул. Маросейка, 2/15с1',
        doctor: 'Ольга Бракоренко'
    },
    '55.766121, 37.582529': {
    Id_optika: 'e1a0359d-a084-4317-ab43-1e12053bef7f',
    balloonContent: 'Клиника Глазных Болезней',
    time: '10:00-19:00',
    time_weekend: '10:00-19:00',
    time_weekend_sun: '10:00-19:00',
    phone: '+7 (495) 540 55 22',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Баррикадная',
    street: 'ул. Зоологическая, 22',
        doctor: 'Анастасия Дмитриева'
    },
    '55.776978, 37.549202': {
    Id_optika: '6c72c12f-c996-416d-9e97-d153f7f111fb',
    balloonContent: 'Оптимист Оптика',
    time: '10:00-20:00',
    time_weekend: '10:00-19:00',
    time_weekend_sun: '10:00-19:00',
    phone: '+7 (495) 118 44 25',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Беговая',
    street: '1-й Хорошёвский проезд, 4, корп. 1',
        doctor: 'Олеся Фадеева'
    },
    '55.771413, 37.583266': {
    Id_optika: '3e84b6cb-c10b-4574-83f2-ce7be87601d2',
    balloonContent: 'Оптик Сити',
    time: '09:00-21:00',
    time_weekend: '09:00-21:00',
    time_weekend_sun: '09:00-21:00',
    phone: '+7 (495) 129 29 14',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Белорусская',
    street: 'ул. Большая Грузинская, 57/1',
        doctor: 'Гаврилова Оксана Андреевна'
    },
    '55.775692, 37.590731': {
    Id_optika: '7f451da3-e636-4a3d-a6c7-0861fb705868',
    balloonContent: 'Клиника Коновалова',
    time: '08:30-19:00',
    time_weekend: '09:00-18:00',
    time_weekend_sun: 'выходной',
    phone: '+7 (499) 490 52 08',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Белорусская',
    street: 'ул. 3-я Тверская-Ямская, 56/6',
        doctor: 'Наталья Захарова'
    },
    '55.865531, 37.704889': {
    Id_optika: 'c5287c4c-0402-48f1-b72a-a9333fb908d4',
    balloonContent: 'Оптик Сити',
    time: '10:00-22:00',
    time_weekend: '10:00-22:00',
    time_weekend_sun: '10:00-22:00',
    phone: '+7 (495) 120 77 52',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. ВДНХ',
    street: 'Ярославское шоссе, 54',
        doctor: 'Ильина Илона Викторовна'
    },
    '55.845855, 37.662093': {
    Id_optika: '60fe5b4b-f7c0-4ee9-850e-c686ec5f1138',
    balloonContent: 'Оптик Сити',
    time: '10:00-22:00',
    time_weekend: '10:00-22:00',
    time_weekend_sun: '10:00-22:00',
    phone: '+7 (495) 120 40 48',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. ВДНХ',
    street: 'ул. Проспект Мира, 211, корп.2',
        doctor: 'Ильина Илона Викторовна'
    },
    '55.726583, 37.622064': {
    Id_optika: '8f4f6515-e27b-42b7-82bf-2e81f47fe0cc',
    balloonContent: 'Доктор Линз',
    time: '10:00-20:00',
    time_weekend: '10:00-20:00',
    time_weekend_sun: '10:00-20:00',
    phone: '+7 (495) 514 25 41',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Добрынинская',
    street: 'ул. Люсиновская, 6',
        doctor: 'Шебеко Вилолетта Георгиевна'
    },
    '55.780810, 37.612560': {
    Id_optika: '3d2cee3f-8d28-42e5-8506-5e81987f84e6',
    balloonContent: 'Оптик Сити',
    time: '09:00-20:00',
    time_weekend: '09:00-20:00',
    time_weekend_sun: '10:00-18:00',
    phone: '+7 (495) 684 43 37',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Достоевская',
    street: 'ул. Селезневская, 34',
        doctor: 'Вострецова Светлана Евгеньевна, Евтушенко Евгений Владимирович, Круглякова Лилия Евгеньевна, Сенькова Елена Николаевна, Черепахина Мария Александровна'
    },
    '55.653314, 37.646130': {
    Id_optika: '1a928815-0188-4d01-81f2-51860f84de82',
    balloonContent: 'Оптик Сити',
    time: '10:00-22:00',
    time_weekend: '10:00-22:00',
    time_weekend_sun: '10:00-22:00',
    phone: '+7 (495) 966 09 23',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Каширская',
    street: 'Каширское шоссе, 26',
        doctor: 'Семенова Екатерина Юрьевна'
    },
    '55.754086, 37.635709': {
    Id_optika: '64dc8e16-4990-43ec-90c5-1455550b45db',
    balloonContent: 'Оптимист Оптика',
    time: '10:00-20:00',
    time_weekend: '10:00-20:00',
    time_weekend_sun: '10:00-20:00',
    phone: '+7 (495) 118 44 25',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Китай-город',
    street: 'Лубянский проезд, 27/1',
        doctor: 'Махер Аль-Мобарак'
    },
    '55.679976, 37.662623': {
    Id_optika: 'b8d327c8-f580-4e7a-8457-c8d1cfa3003c',
    balloonContent: 'Салон Необычных Оправ',
    time: '10:00-21:00',
    time_weekend: '10:00-21:00',
    time_weekend_sun: '10:00-21:00',
    phone: '+7 (499) 782 50 16',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Коломенская',
    street: 'пр-т Андропова, 28',
        doctor: 'Ирина  Ленская'
    },
    '55.772760, 37.651762': {
    Id_optika: 'c9c29b91-26c5-4b72-94d2-871a5ca9262d',
    balloonContent: 'Доктор Визус (Гост-Оптика)',
    time: '09:00-20:00',
    time_weekend: '09:00-18:00',
    time_weekend_sun: 'выходной',
    phone: '+7 (495) 699 95 95',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Комсомольская',
    street: 'ул. Каланчевская, 17 стр. 1',
        doctor: 'Гульнара Владимировна Андриенко, Суханова Светлана Игоревна, Моисеева Ольга Валерьевна, Сейфулла Нияара Рошеновна'
    },
    '55.751568, 37.662964': {
    Id_optika: '0bcb012c-b430-4cdb-a909-5c497955466e',
    balloonContent: 'Дельта Клиник',
    time: '11:00-19:00',
    time_weekend: 'выходной',
    time_weekend_sun: 'выходной',
    phone: '+7 (916) 117 73 19',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Курская',
    street: 'пер. Наставнический, 6',
        doctor: 'Садрисламова Лариса Флоридовна'
    },
    '55.760130, 37.624948': {
    Id_optika: 'd6e46990-c495-4d20-8b80-20bf70bfa7e9',
    balloonContent: 'Оптик Сити',
    time: '10:00-22:00',
    time_weekend: '10:00-22:00',
    time_weekend_sun: '10:00-22:00',
    phone: '+7 (495) 730 52 09',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Лубянка',
    street: 'ул. Театральный проезд, 5 стр.1',
        doctor: 'Ащеулов Сергей Викторович, Голубева Евгения Васильевна, Калинина Елена Александровна'
    },
    '55.771980, 37.596507': {
    Id_optika: 'c76e9723-6017-4b14-bc31-c0f9d7ccbcfa',
    balloonContent: 'Оптикалнэт (Заказ Линз)',
    time: '09:00-20:30',
    time_weekend: '09:00-20:30',
    time_weekend_sun: '10:00-19:00',
    phone: '+7 (495) 730 52 60',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Маяковская',
    street: 'ул. 3-я Тверская-Ямская, 12, стр 1',
        doctor: 'Атаманенко Ирина Андреевна, Жукова Наталья Николаевна, Маркосян Армида Григорьевна,Жуков Олег Владимирович, Кацанашвили Русудан'
    },
    '55.898588, 37.629385': {
    Id_optika: 'a9f64f45-14f5-4a4e-a39b-972a83ade287',
    balloonContent: 'Оптик Сити',
    time: '10:00-22:00',
    time_weekend: '10:00-22:00',
    time_weekend_sun: '10:00-22:00',
    phone: '+7 (495) 580 22 17',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Медведково',
    street: 'МКАД, 87-й км, д.8',
        doctor: 'Голубева Евгения Васильевна'
    },
    '55.678707, 37.634631': {
    Id_optika: 'a0ab7429-9ec2-4e4c-a5ed-706bffbf5210',
    balloonContent: 'ОфтальНова',
    time: '10:00-19:00',
    time_weekend: '10:00-19:00',
    time_weekend_sun: '10:00-19:00',
    phone: '+7 (495) 369 65 62',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Нагатинская',
    street: '1-й Нагатинский проезд, 11, корпус 1',
        doctor: 'Елена Тананакина, Ольга Комарова, Мария Степанова, Евгения Суббота, Ольга Селина'
    },
    '55.748392, 37.819999': {
    Id_optika: 'a6a99b3e-00ba-4e32-af01-ce33217b5e2e',
    balloonContent: 'Клиника Здорового Зрения',
    time: '09:00-20:00',
    time_weekend: '10:00-17:00',
    time_weekend_sun: 'выходной',
    phone: '+7 (495) 301 05 44',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Новогирево',
    street: 'пр-т Союзный, 22',
        doctor: 'Наталия Павловна Парфенова, Сейфулла Нияара Рошеновна'
    },
    '55.752029, 37.816271': {
    Id_optika: '488a419d-13fb-4159-b828-f85122fa2bb4',
    balloonContent: 'Оптик Сити',
    time: '10:00-21:00',
    time_weekend: '10:00-21:00',
    time_weekend_sun: '10:00-20:00',
    phone: '+7 (495) 770 19 73',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Новогиреево',
    street: 'пр-т Зеленый, 79А',
        doctor: 'Колесникова Ольга Вадимовна'
    },
    '55.728778, 37.610988': {
    Id_optika: '0f6ebde0-16dc-4aab-ac14-d1bad90f9af5',
    balloonContent: 'Има Вижн',
    time: '10:00-20:00',
    time_weekend: '-',
    time_weekend_sun: '-',
    phone: '+7 (495) 231 39 93',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Октябрьская',
    street: 'пр-т Ленинский, 2А',
        doctor: 'Вержанская Татьяна Юрьевна'
    },
    '55.798115, 37.495617': {
    Id_optika: '020abfda-3949-4e41-9932-5decf86fb117',
    balloonContent: 'Клиника семейной офтальмологии профессора Трубилина',
    time: '09:00-21:00',
    time_weekend: '10:00-18:00',
    time_weekend_sun: 'выходной',
    phone: '+7 (495) 126 96 10',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Октябрьское поле',
    street: 'ул. Маршала Рыбалко, 2, корп.6',
        doctor: 'Мария Александровна Трубилина, Валерия Винник, Полина Козлова, Татьяна Привезенцева'
    },
    '55.734151, 37.618920': {
    Id_optika: 'd122a2c5-3686-49c1-b844-808584175313',
    balloonContent: 'Оптик Сити',
    time: '09:00-21:00',
    time_weekend: '09:00-21:00',
    time_weekend_sun: '09:00-21:00',
    phone: '+7 (499) 230 20 02',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Полянка',
    street: 'ул. Большая Полянка, 30',
        doctor: 'Голубева Евгения Васильевна, Колесникова Ольга Вадимовна'
    },
    '55.781140, 37.637219': {
    Id_optika: '817e6e61-a27f-4741-a686-8ade9c9a698d',
    balloonContent: 'Клиника Элит Плюс',
    time: '10:00-20:00',
    time_weekend: '10:00-20:00',
    time_weekend_sun: '10:00-20:00',
    phone: '+7 (495) 960 00 33',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Проспект Мира',
    street: 'пер. Протопоповский, 17, стр. 5',
        doctor: 'Ирина  Демчук'
    },
    '55.743923, 37.582655': {
    Id_optika: 'e57b0404-0ac2-46ae-abd6-407f439a184c',
    balloonContent: 'Салон Необычных Оправ',
    time: '10:00-21:00',
    time_weekend: '10:00-21:00',
    time_weekend_sun: '10:00-21:00',
    phone: '+7 (499) 241 99 99',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Смоленская',
    street: 'пл. Смоленская-Сенная, 23/25',
        doctor: 'Лариса  Дик'
    },
    '55.748042, 37.655032': {
    Id_optika: '817a2cbd-b77d-4a9c-918e-51fcb0de20e2',
    balloonContent: 'Оптик Сити',
    time: '09:00-21:00',
    time_weekend: '09:00-21:00',
    time_weekend_sun: '09:00-21:00',
    phone: '+7 (495) 748 04 55',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Таганская',
    street: 'ул. Земляной Вал, 54, стр. 2',
        doctor: 'Аверич Вероника Валерьевна, Голубева Евгения Васильевна, Колесникова Ольга Вадимовна, Литвинова Лариса Евгеньевна, Нам Елена Вильгельмовна'
    },
    '55.763584, 37.567788': {
    Id_optika: '05371432-d00e-45a6-adef-8dc62e997618',
    balloonContent: 'Клиника Рассвет',
    time: '08:00-21:00',
    time_weekend: '08:00-21:00',
    time_weekend_sun: '08:00-21:00',
    phone: '+7 (495) 249 03 33',
    phone2: '',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Улица 1905 года',
    street: 'пер. Столярный, 3 корп. 2',
        doctor: 'Панюшкина Любовь Александровна'
    },
    '55.551385, 37.555589': {
    Id_optika: 'b63ed93c-81fd-424b-bd7e-7c0fc79a5b87',
    balloonContent: 'Оптик Сити',
    time: '09:00-21:00',
    time_weekend: '09:00-21:00',
    time_weekend_sun: '09:00-21:00',
    phone: '+7 (495) 716 02 09',
    phone2: '+7 (495) 716 01 90',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Улица Скобелевская',
    street: 'ул. Скобелевская, 1',
        doctor: 'Голубева Евгения Васильевна, Кожарская Зоя Викторовна'
    },
    '55.696575, 37.561544': {
    Id_optika: 'ebe5e36b-fb7e-4275-ac3b-4d8383c87cb6',
    balloonContent: 'Центр Оптической Коррекции Зрения Академоптика',
    time: '10:00-21:00',
    time_weekend: '10:00-21:00',
    time_weekend_sun: '10:00-21:00',
    phone: '+7 (495) 743 27 05',
    phone2: '+7 (903) 743 27 05',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Университет',
    street: 'пр-т Ленинский, 57',
        doctor: 'Светлана Кондратова, Мария Чайковская, Виноградова Галина Сергеевна, Фокина Ольга Васильевна'
    },
    '55.680828, 37.535862': {
    Id_optika: '5ad1be2d-7aa1-440a-a311-fff0c8828bfa',
    balloonContent: 'Оптический уют',
    time: '10:00-20:00',
    time_weekend: '10:00-18:00',
    time_weekend_sun: 'выходной',
    phone: '+7 (499) 783 52 23',
    phone2: '+7 (915) 308 77 74',
    oblast: 'Москва',
    city: 'Москва',
    rayon: 'м. Университет',
    street: 'пр-т Ленинский, 85',
        doctor: 'Елена Ривкина, Елена Космачева, Татьяна Сбитнева, Доценко Михаил Александрович'
    },
    '55.476730, 37.297044': {
    Id_optika: '44e14e95-5c45-4f22-92ca-5275ce0e7720',
    balloonContent: 'Вижу Все',
    time: '09:30-20:00',
    time_weekend: '09:30-20:00',
    time_weekend_sun: '09:30-20:00',
    phone: '+7 (495) 984 35 34',
    phone2: '',
    oblast: 'Москва',
    city: 'Троицк',
    rayon: '',
    street: 'пр-т Октябрьский, 13А',
        doctor: 'Орехова Ирина, Бакиев Шерзод, Захир Альубейд, Дружинин Илья'
    },
    '56.762834, 37.143100': {
    Id_optika: '7d738fed-bd40-42bd-9060-00d64985579f',
    balloonContent: 'Оптика Айболит (ИП Шнайдер)',
    time: '11:00-19:00',
    time_weekend: '11:00-19:00',
    time_weekend_sun: '10:00-15:00',
    phone: '+7 (496) 212 36 40',
    phone2: '',
    oblast: 'Московская область',
    city: 'Дубна',
    rayon: '',
    street: 'ул. Тверская, 4б',
        doctor: 'Юлия Михайловна Шаркова'
    },
    '55.601035, 38.087409': {
    Id_optika: 'f728b528-aa85-4238-b7ec-d61888fd308f',
    balloonContent: 'МедСэф',
    time: '10:00-19:00',
    time_weekend: '10:00-19:00',
    time_weekend_sun: '10:00-17:00',
    phone: '+7 (966) 183 12 64',
    phone2: '',
    oblast: 'Московская область',
    city: 'Жуковский',
    rayon: '',
    street: 'ул. Гудкова, 16',
        doctor: 'Оксана Петрова'
    },
    '55.096523, 38.760149': {
    Id_optika: 'ce2c7c8c-695a-4e6b-82c9-33adcd93a600',
    balloonContent: 'Тет-а-Тет',
    time: '10:00-18:30',
    time_weekend: '10:00-17:00',
    time_weekend_sun: '10:00-16:00',
    phone: '+7 (915) 202 74 07',
    phone2: '',
    oblast: 'Московская область',
    city: 'Коломна',
    rayon: '',
    street: 'ул. Гражданская, 10',
        doctor: 'Власова Ирина Андреевна'
    },
    '55.622965, 37.945987': {
    Id_optika: 'd8d8f6ea-0e9b-4d41-bf22-f10d3b26a015',
    balloonContent: 'МедСэф',
    time: '08:00-20:00',
    time_weekend: '08:00-20:00',
    time_weekend_sun: '09:00-18:00',
    phone: '+7 (495) 132 66 88',
    phone2: '',
    oblast: 'Московская область',
    city: 'Люберцы',
    rayon: '',
    street: 'п. Мирный, ул. Свободы, 3',
        doctor: 'Лусине Варданян'
    },
    '55.685132, 37.877527': {
    Id_optika: '3cf22866-453d-4d57-8086-5efe9f576eb5',
    balloonContent: 'Кеплер',
    time: '10:00-22:00',
    time_weekend: '10:00-22:00',
    time_weekend_sun: '10:00-22:00',
    phone: '+7 (495) 108 06 39',
    phone2: '',
    oblast: 'Московская область',
    city: 'Люберцы',
    rayon: '',
    street: 'пр-т Октябрьский, 112',
        doctor: 'Александр Косилкин, Галина Афонина, Сергей Александрович Кутузов, Наталья Калюга'
    },
    '55.682245, 37.143451': {
    Id_optika: '55ec75fe-7980-4cc4-9c2c-0381e4f079a0',
    balloonContent: 'Семейная оптика Лапино',
    time: '10:00-21:00',
    time_weekend: '10:00-21:00',
    time_weekend_sun: '10:00-21:00',
    phone: '+7 (916) 058 88 98',
    phone2: '',
    oblast: 'Московская область',
    city: 'Одинцово (округ)',
    rayon: '',
    street: 'д. Лапино,1-е Успенское шоссе, стр.25',
        doctor: 'Светлана Кондратова, Анастасия Стахеева'
    },
    '55.433026, 37.547288': {
    Id_optika: '661de09b-1c34-495a-b76e-00004705da71',
    balloonContent: 'Вижу Все',
    time: '10:00-20:00',
    time_weekend: '10:00-20:00',
    time_weekend_sun: '10:00-20:00',
    phone: '+7 (495) 984 35 34',
    phone2: '',
    oblast: 'Московская область',
    city: 'Подольск',
    rayon: '',
    street: 'пр-т Ленина, 150/54',
        doctor: 'Серпинская Гелена Сергеевна'
    },
    '55.425640, 37.494000': {
    Id_optika: 'd2f26ad7-1e6e-4831-a532-3f7c63fc883e',
    balloonContent: 'Вижу Все',
    time: '10:00-20:00',
    time_weekend: '10:00-20:00',
    time_weekend_sun: '10:00-20:00',
    phone: '+7 (495) 984 35 34',
    phone2: '',
    oblast: 'Московская область',
    city: 'Подольск',
    rayon: '',
    street: 'ул. Ленинградская, 18',
        doctor: 'Дружинин Илья Александрович, Плещенкова Светлана Андреевна, Шарко Александра Сергеевна, Альубейд Захир'
    },
    '55.426483, 37.501043': {
    Id_optika: 'd7f319a2-de57-45f6-b8c8-f84549013edc',
    balloonContent: 'Глаз Алмаз',
    time: '10:00-20:00',
    time_weekend: '10:00-20:00',
    time_weekend_sun: '10:00-20:00',
    phone: '+7 (915) 297 53 58',
    phone2: '',
    oblast: 'Московская область',
    city: 'Подольск',
    rayon: '',
    street: 'ул. Ленинградская, 7',
        doctor: 'Екатерина Сергеевна Малышева, Лариса Кислякова'
    },
    '55.432301, 37.558742': {
    Id_optika: '484a799b-7f04-4e58-b457-60c6d73600bf',
    balloonContent: 'Магазин зрения',
    time: '10:00-19:00',
    time_weekend: '10:00-16:00',
    time_weekend_sun: 'выходной',
    phone: '+7 (929) 682 65 28',
    phone2: '',
    oblast: 'Московская область',
    city: 'Подольск',
    rayon: '',
    street: 'пр-т Революционный, 18',
        doctor: 'Севиль Никитина'
    },
    '55.375501, 37.538835': {
    Id_optika: '4dbd2015-4ed4-457f-ae99-4845ed6862d5',
    balloonContent: 'Вижу Все',
    time: '10:00-20:00',
    time_weekend: '10:00-20:00',
    time_weekend_sun: '10:00-20:00',
    phone: '+7 (495) 984 35 34',
    phone2: '',
    oblast: 'Московская область',
    city: 'Подольск',
    rayon: 'Климовск',
    street: 'пл. Октябрьская, 2',
        doctor: 'Серпинская Гелена Сергеевна, Фадеева Елена Николаевна'
    },
    '55.580431, 38.200597': {
    Id_optika: 'fc062cb1-7b18-4c7a-9658-edec2e3b0f8e',
    balloonContent: 'МедСэф',
    time: '08:00-20:00',
    time_weekend: '08:00-20:00',
    time_weekend_sun: '09:00-18:00',
    phone: '+7 (926) 600 61 10',
    phone2: '',
    oblast: 'Московская область',
    city: 'Раменское',
    rayon: '',
    street: 'ул. Чугунова, 43',
        doctor: 'Елена Любимцева'
    },
    '55.924820, 37.996895': {
    Id_optika: 'fbfd2822-d401-4ccb-8747-c6fbc5f7dccf',
    balloonContent: 'Оптик Сити',
    time: '09:00-21:00',
    time_weekend: '09:00-21:00',
    time_weekend_sun: '09:00-21:00',
    phone: '+7 (495) 150 31 23',
    phone2: '',
    oblast: 'Московская область',
    city: 'Щелково',
    rayon: '',
    street: 'ул. Талсинская, 1',
        doctor: 'Загребаева Наталия Евгеньевна'
    },
    '56.645806, 43.472675': {
    Id_optika: 'b141598c-7c2d-40d6-aaa2-4cd632cd5e62',
    balloonContent: 'Оптика Кронос',
    time: '09:00-20:00',
    time_weekend: '09:00-20:00',
    time_weekend_sun: '09:00-20:00',
    phone: '8 (800) 234 11 99',
    phone2: '',
    oblast: 'Нижегородская область',
    city: 'Городец',
    rayon: '',
    street: 'ул. Колхозная, 2',
        doctor: 'Татьяна Анедченко'
    },
    '56.276374, 43.917646': {
    Id_optika: '3c957b0e-5dcd-45e0-8215-34a5d6a97082',
    balloonContent: 'Оптика Нижегородская',
    time: '09:00-20:00',
    time_weekend: '10:00-18:00',
    time_weekend_sun: '10:00-18:00',
    phone: '+7 (8313) 26 18 14',
    phone2: '',
    oblast: 'Нижегородская область',
    city: 'Дзержинск',
    rayon: '',
    street: 'пр-т Ленина 57/2',
        doctor: 'Полина Владимировна Балабанова'
    },
    '56.246746, 43.426393': {
    Id_optika: '9654cb05-8ad4-4505-9eb7-c301fd56f6cc',
    balloonContent: 'Оптика Кронос',
    time: '09:00-20:00',
    time_weekend: '09:00-20:00',
    time_weekend_sun: '09:00-20:00',
    phone: '8 (800) 234 11 99',
    phone2: '',
    oblast: 'Нижегородская область',
    city: 'Дзержинск',
    rayon: '',
    street: 'пр-т Ленина, 1В',
        doctor: 'Анна Починко, Панкратьева Светлана'
    },
    '56.238622, 43.865930': {
    Id_optika: 'ac80a75a-5ab0-4552-9776-d263028cec14',
    balloonContent: 'Оптика Нижегородская',
    time: '09:00-20:00',
    time_weekend: '10:00-18:00',
    time_weekend_sun: '10:00-18:00',
    phone: '+7 (831) 256 92 64',
    phone2: '',
    oblast: 'Нижегородская область',
    city: 'Нижний Новгород',
    rayon: '',
    street: 'ул. Смирнова ,15',
        doctor: 'Арина Машукова'
    },
    '56.321067, 44.009490': {
    Id_optika: '72bb6a02-9776-4beb-8151-8e63cebf6a89',
    balloonContent: 'Оптика Carl Zeiss',
    time: '09:00-20:00',
    time_weekend: '10:00-18:00',
    time_weekend_sun: '10:00-18:00',
    phone: '+7 (831) 419 54 78',
    phone2: '',
    oblast: 'Нижегородская область',
    city: 'Нижний Новгород',
    rayon: '',
    street: 'ул. Ошарская ,14',
        doctor: 'Татьяна Ринатовна Кольцова'
    },
    '56.312285, 43.993644': {
    Id_optika: '66c2df96-5301-441d-b7fb-41aa9cfbaf5a',
    balloonContent: 'Доктор Линз НН',
    time: '10:00-19:00',
    time_weekend: '10:00-15:00',
    time_weekend_sun: 'выходной',
    phone: '+7 (831) 410 34 41',
    phone2: '+7 (831) 220 77 51',
    oblast: 'Нижегородская область',
    city: 'Нижний Новгород',
    rayon: 'м. Горьковская',
    street: 'ул. Новая, 28',
        doctor: 'Екатерина Журавлева, Юлия Долинина, Наталья Кузнецова'
    },
    '56.312120, 43.989700': {
    Id_optika: '3de7ba77-cae9-4b50-9cb2-3f238d9bb4cc',
    balloonContent: 'Оптика Кронос',
    time: '09:00-20:00',
    time_weekend: '09:00-20:00',
    time_weekend_sun: '09:00-20:00',
    phone: '8 (800) 234 11 99',
    phone2: '',
    oblast: 'Нижегородская область',
    city: 'Нижний Новгород',
    rayon: 'Нижегородский район',
    street: 'ул. Б.Покровская, 60',
        doctor: 'Елена Пояркова'
    },
    '56.324142, 44.003157': {
    Id_optika: '5853944f-469e-482b-a323-040bb3653fbd',
    balloonContent: 'Оптика Кронос',
    time: '09:00-20:00',
    time_weekend: '09:00-20:00',
    time_weekend_sun: '09:00-22:00',
    phone: '8 (800) 234 11 99',
    phone2: '',
    oblast: 'Нижегородская область',
    city: 'Нижний Новгород',
    rayon: 'Нижегородский район',
    street: 'ул. Пискунова, 8/8',
        doctor: 'Гущина  Галина'
    },
    '56.326048, 44.009786': {
    Id_optika: '9071534b-84d6-42a9-859b-1dfbdf8689c6',
    balloonContent: 'Оптика Кронос',
    time: '09:00-20:00',
    time_weekend: '09:00-20:00',
    time_weekend_sun: '09:00-20:00',
    phone: '8 (800) 234 11 99',
    phone2: '',
    oblast: 'Нижегородская область',
    city: 'Нижний Новгород',
    rayon: 'Нижегородский район',
    street: 'ул. Ульянова, 5',
        doctor: 'Гуденко Наталья, Инна Розенвальд'
    },
    '56.293890, 44.070063': {
    Id_optika: '1839757c-ea57-46ea-9746-872bb22c5f28',
    balloonContent: 'Оптика Кронос',
    time: '09:00-20:00',
    time_weekend: '09:00-20:00',
    time_weekend_sun: '09:00-20:00',
    phone: '8 (800) 234 11 99',
    phone2: '',
    oblast: 'Нижегородская область',
    city: 'Нижний Новгород',
    rayon: 'Нижегородский район',
    street: 'ул. Лопатина 3/2',
        doctor: 'Райся Мусина, Елена Парфенова'
    },
    '56.323358, 43.950902': {
    Id_optika: '872e13c6-faaa-43c4-b655-2dfbf1e1c011',
    balloonContent: 'Оптика Кронос',
    time: '10:00-20:00',
    time_weekend: '10:00-22:00',
    time_weekend_sun: '10:00-22:00',
    phone: '8 (800) 234 11 99',
    phone2: '',
    oblast: 'Нижегородская область',
    city: 'Нижний Новгород',
    rayon: 'Советский район',
    street: 'ул. Советская, 19',
        doctor: 'Ирина Корчуганова, Ирина Дуброва'
    },
    '54.982265, 82.815929': {
    Id_optika: '91116fa0-142e-49ee-a984-a4d6cfe5d70e',
    balloonContent: 'МНТК им. Академика С.Н. Федорова ФГУ',
    time: '09:00-16:00',
    time_weekend: '-',
    time_weekend_sun: '-',
    phone: '+7(383) 340 46 68',
    phone2: '',
    oblast: 'Новосибирская область',
    city: 'Новосибирск',
    rayon: '',
    street: 'ул. Колхидская, 10',
        doctor: 'Елена Викторовна Булава'
    },
    '55.055733, 82.911905': {
    Id_optika: '6bc49683-0d44-4517-b1b8-51928a8fac67',
    balloonContent: 'Всё для глаз',
    time: '11:00-20:00',
    time_weekend: '11:00-20:00',
    time_weekend_sun: '11:00-20:00',
    phone: '+7 (383) 230 37 86',
    phone2: '',
    oblast: 'Новосибирская область',
    city: 'Новосибирск',
    rayon: 'м. Заельцовская',
    street: 'пр-т Красный, 101',
        doctor: 'Екатерина Отмахова, Вера Дегтярёва, Екатерина Чирке, Ольга Шустова'
    },
    '55.028156, 82.912650': {
    Id_optika: '8b4444a7-570e-4543-8ec0-4e3ac1396146',
    balloonContent: 'ДОК Клиника Пузыревского',
    time: '09:00-20:00',
    time_weekend: '09:00-18:00',
    time_weekend_sun: '11:00-17:00',
    phone: '+7 (383) 263 29 58',
    phone2: '',
    oblast: 'Новосибирская область',
    city: 'Новосибирск',
    rayon: 'м. Площадь Ленина',
    street: 'ул. Урицкого, 21',
        doctor: 'Амирджон Ахунов, Зубкова Екатерина,  Марина Федорова'
    },
    '55.020905, 82.946804': {
    Id_optika: '104b2ef4-fe37-4431-be75-91dffab37f97',
    balloonContent: 'Центр зрения Доктор Линз',
    time: '09:00-20:00',
    time_weekend: '09:00-20:00',
    time_weekend_sun: '09:00-20:00',
    phone: '+7 (383) 202 20 04',
    phone2: '',
    oblast: 'Новосибирская область',
    city: 'Новосибирск',
    rayon: 'Октябрьский район',
    street: 'ул. Сакко и Ванцетти, 77',
        doctor: 'Пётр Нагорский, Валерия Филимонова, Николай Кихтенко, Ламбина Татьяна, Кукеева Галина, Гаан Яна, Кузьмина Наталья'
    },
    '51.820220, 55.168551': {
    Id_optika: '28a9373a-fa06-4f3d-b14c-1296a6d446ec',
    balloonContent: 'Оптика Дилор',
    time: '10:00-20:00',
    time_weekend: '10:00-20:00',
    time_weekend_sun: '10:00-20:00',
    phone: '+7 (3532) 408 288',
    phone2: '',
    oblast: 'Оренбургская область',
    city: 'Оренбург',
    rayon: '',
    street: 'ул. Салмышская, 48',
        doctor: 'Бочкова Фируза Шамильевна'
    },
    '51.843890, 55.117706': {
    Id_optika: '8abfb3cb-2427-4288-8e8b-a7a88629e1ed',
    balloonContent: 'ОС-Оптика',
    time: '11:00-21:00',
    time_weekend: '11:00-21:00',
    time_weekend_sun: '11:00-21:00',
    phone: '+7 (3532) 44 08 98',
    phone2: '',
    oblast: 'Оренбургская область',
    city: 'Оренбург',
    rayon: '',
    street: 'Шарлыкское шоссе, 1/2',
        doctor: 'Елена Анатольевна Кобзева'
    },
    '51.767513, 55.101321': {
    Id_optika: '99a8fe3b-6fe1-4060-b2a8-2817b22777bf',
    balloonContent: 'ОС -Оптика',
    time: '10:00-18:00',
    time_weekend: '10:00-18:00',
    time_weekend_sun: '10:00-18:00',
    phone: '+7 (3532) 307 000',
    phone2: '',
    oblast: 'Оренбургская область',
    city: 'Оренбург',
    rayon: '',
    street: 'ул. Володарского, 23',
        doctor: 'Елена  Анатольевна Заболоцкая'
    },
    '51.790198, 55.124246': {
    Id_optika: '4493f0f4-d7ff-41da-8182-8bdb6882f1a5',
    balloonContent: 'Оптика Лунет',
    time: '09:00-19:00',
    time_weekend: '09:00-18:00',
    time_weekend_sun: '10:00-16:00',
    phone: '+7 (3532) 75 68 98',
    phone2: '',
    oblast: 'Оренбургская область',
    city: 'Оренбург',
    rayon: '',
    street: 'пр-т Победы, 118',
        doctor: 'Айгуль Есмухамбетова, Шурбаева Диана Маратовна'
    },
    '51.769481, 55.129995': {
    Id_optika: 'b1c10a1f-b314-4923-94ff-bb4e84591857',
    balloonContent: 'Оптика Дилор',
    time: '10:00-20:00',
    time_weekend: '10:00-20:00',
    time_weekend_sun: '10:00-20:00',
    phone: '+7 (3532) 505 545',
    phone2: '',
    oblast: 'Оренбургская область',
    city: 'Оренбург',
    rayon: '',
    street: 'ул. Чкалова, 26/1',
        doctor: 'Бочкова Фируза Шамильевна'
    },
    '52.942378, 36.052492': {
    Id_optika: '2c5bcc3b-8ffe-4488-a5c9-790d1e6037ff',
    balloonContent: 'Оптика Доктора Цветкова',
    time: '09:00-20:00',
    time_weekend: '09:00-19:00',
    time_weekend_sun: '09:00-19:00',
    phone: '+7 (4862) 72 31 14',
    phone2: '+7 (910) 304 77 24',
    oblast: 'Орловская область',
    city: 'Орел',
    rayon: '',
    street: 'ул. Комсомольская, 193',
        doctor: 'Цветков Александр Николаевич'
    },
    '53.194319, 45.017148': {
    Id_optika: '2d8b70de-3ada-4353-b43a-8917b1045177',
    balloonContent: 'Биком Плюс',
    time: '10:00-19:00',
    time_weekend: '10:00-15:00',
    time_weekend_sun: 'выходной',
    phone: '+7 (8412) 56 24 14',
    phone2: '',
    oblast: 'Пензенская область',
    city: 'Пенза',
    rayon: 'Ленинский район',
    street: 'ул. Московская, 71',
        doctor: 'Кулькова Елена Артуровна'
    },
    '58.006736, 56.230045': {
    Id_optika: '2de275a5-96cc-4bd5-a49a-75f74c8544ac',
    balloonContent: 'Офтальмологическая клиника 3z',
    time: '08:00-19:00',
    time_weekend: '09:00-17:00',
    time_weekend_sun: 'выходной',
    phone: '8 (800) 250 33 30',
    phone2: '',
    oblast: 'Пермский край',
    city: 'Пермь',
    rayon: 'Ленинский район',
    street: 'ул. Екатерининская, 105-107',
        doctor: 'Елена Сарапулова'
    },
    '43.354922, 132.179934': {
    Id_optika: '2d9f7580-cfc5-43bd-bb43-de15b73866e4',
    balloonContent: 'Хамелеон',
    time: '10:00-19:00',
    time_weekend: '10:00-19:00',
    time_weekend_sun: '10:00-19:00',
    phone: '+7 (914) 720 18 80',
    phone2: '',
    oblast: 'Приморский край',
    city: 'Артем',
    rayon: '',
    street: 'ул. Ленина, 4',
        doctor: 'Швец Татьяна'
    },
    '43.132361, 131.900918': {
    Id_optika: '16a500a3-1f0a-4555-81fd-6a0235600b99',
    balloonContent: 'Оптометрический центр Хамелеон',
    time: '10:00-19:00',
    time_weekend: '10:00-19:00',
    time_weekend_sun: '10:00-19:00',
    phone: '+7 (914) 650 12 72',
    phone2: '',
    oblast: 'Приморский край',
    city: 'Владивосток',
    rayon: '',
    street: 'пр-т Океанский, 90',
        doctor: 'Журавлева Елена Ивановна'
    },
    '47.219012, 39.703937': {
    Id_optika: '680131f3-0bda-4cd1-b32e-ce838c394623',
    balloonContent: 'Проект 03',
    time: '10:00-20:00',
    time_weekend: '10:00-17:00',
    time_weekend_sun: '10:00-17:00',
    phone: '+7 (863) 282 01 73',
    phone2: '',
    oblast: 'Ростовская область',
    city: 'Ростов-на-Дону',
    rayon: '',
    street: 'ул. Большая Садовая, 34а',
        doctor: 'Вадим Демков, Наталья Яковенко, Виктория Азарова,  Александра Глод, Ирина Карпинская'
    },
    '47.226968, 39.734264': {
    Id_optika: '35dfda9b-76fc-4de9-9317-bdab52a2a25b',
    balloonContent: 'Глазная клиника Интер Юна',
    time: 'уточняйте по телефону',
    time_weekend: '10:00-16:00',
    time_weekend_sun: 'выходной',
    phone: '+7 (863) 200 07 07',
    phone2: '',
    oblast: 'Ростовская область',
    city: 'Ростов-на-Дону',
    rayon: 'Кировский район',
    street: 'ул. Суворова, 105',
        doctor: 'Татьяна Каргальцева'
    },
    '47.289648, 39.706614': {
    Id_optika: '029b0c42-bd8a-4597-92d0-f2543ddc093f',
    balloonContent: 'Центр Оптометрии Ирины Потаповой',
    time: '10:00-19:00',
    time_weekend: '10:00-19:00',
    time_weekend_sun: 'выходной',
    phone: '+7 (928) 108 04 08',
    phone2: '',
    oblast: 'Ростовская область',
    city: 'Ростов-на-Дону',
    rayon: 'Северный район',
    street: 'б-р Комарова, 24',
        doctor: 'Ирина Потапова'
    },
    '54.629289, 39.714510': {
    Id_optika: 'c7b0649f-26ac-4a86-b9aa-87a5514d656a',
    balloonContent: 'Оптика-Сервис',
    time: '10:00-20:00',
    time_weekend: '10:00-20:00',
    time_weekend_sun: '10:00-20:00',
    phone: '+7 (4912) 47 01 01',
    phone2: '',
    oblast: 'Рязанская область',
    city: 'Рязань',
    rayon: '',
    street: 'пр-т Первомайский, 64',
        doctor: 'Татьяна Беглова'
    },
    '54.623159, 39.750353': {
    Id_optika: 'f1411060-a72f-46d7-9e68-530f3fa0cec5',
    balloonContent: 'Monview',
    time: '10:00-20:00',
    time_weekend: '10:00-20:00',
    time_weekend_sun: '09:00-18:00',
    phone: '+7 (4912) 93 77 57',
    phone2: '+7 (4912) 50 70 28',
    oblast: 'Рязанская область',
    city: 'Рязань',
    rayon: '',
    street: 'ул. Введенская, 80',
        doctor: 'Черенкова Наталья Сергеевна, Немчинова Елена Валентиновна'
    },
    '54.609375, 39.711186': {
    Id_optika: 'ec48b3f3-8eb0-4b9e-b5d5-9adf70c7fd23',
    balloonContent: 'Оптика-Сервис',
    time: '09:00-19:00',
    time_weekend: '09:00-19:00',
    time_weekend_sun: '09:00-17:00',
    phone: '+7 (4912) 77 30 38',
    phone2: '',
    oblast: 'Рязанская область',
    city: 'Рязань',
    rayon: '',
    street: 'ул. Гагарина, 81',
        doctor: 'Наталья Скотникова'
    },
    '54.628898, 39.718319': {
    Id_optika: 'bd48d320-106b-449a-89fe-cbcebedde123',
    balloonContent: 'Мой взгляд',
    time: '10:00-20:00',
    time_weekend: '10:00-20:00',
    time_weekend_sun: '09:00-18:00',
    phone: '+7 (4912) 93 77 57',
    phone2: '+7 (4912) 50 70 29',
    oblast: 'Рязанская область',
    city: 'Рязань',
    rayon: '',
    street: 'пр-т Первомайский, 35',
        doctor: 'Черенкова Наталья Сергеевна, Гарев Андрей Андреевич, Кованова Ольга Игоревна'
    },
    '54.622429, 39.755805': {
    Id_optika: '40b1ae67-2339-44a8-9421-70a57d4f28a7',
    balloonContent: 'Доступная оптика',
    time: '10:00-20:00',
    time_weekend: '10:00-20:00',
    time_weekend_sun: '09:00-18:00',
    phone: '+7 (4912) 93 77 57',
    phone2: '+7 (4912) 50 70 30',
    oblast: 'Рязанская область',
    city: 'Рязань',
    rayon: '',
    street: 'ул. Ленина, 2/68',
        doctor: 'Гарев  Андрей Андеевич'
    },
    '53.258820, 50.222472': {
    Id_optika: '',
    balloonContent: 'Оптика Lux',
    time: '10:00-20:00 ПН - выходной',
    time_weekend: '10:00-20:00',
    time_weekend_sun: '10:00-18:00',
    phone: '+7 (846) 331 25 41',
    phone2: '',
    oblast: 'Самарская область',
    city: 'Самара',
    rayon: '',
    street: 'ул. Молодежная, 10',
        doctor: 'Журков Александр Сергеевич, Власкин Сергей Иванович'
    },
    '53.220169, 50.155134': {
    Id_optika: '96302b60-b96d-40a5-9bf4-99814aa7fa34',
    balloonContent: 'Семейная клиника КОСМА',
    time: '09:00-19:00',
    time_weekend: '09:00-19:00',
    time_weekend_sun: 'выходной',
    phone: '+7 (846) 97 911 97',
    phone2: '',
    oblast: 'Самарская область',
    city: 'Самара',
    rayon: '',
    street: 'ул. Ново-Садовая, 106Б',
        doctor: 'Татьяна Корнеева, Турутина Анастасия,  Кийко Надежда, Лунева Евгения, Космирова Надежда, Народицкая Маргарита'
    },
    '53.520569, 49.296462': {
    Id_optika: '5316122f-7cee-4819-ad13-01f92abcbae7',
    balloonContent: 'ТЛТ-ОПТИКА',
    time: '09:00-20:00',
    time_weekend: '09:00-20:00',
    time_weekend_sun: '09:00-20:00',
    phone: '+7 (927) 022 63 55',
    phone2: '',
    oblast: 'Самарская область',
    city: 'Тольятти',
    rayon: '',
    street: 'пр-т Степана Разина, 39',
        doctor: 'Ольга Щербакова, Колчина Елена, Артибилова Евгения, Рахметова Руфия, Голова Людмила, Потапова Лилия'
    },
    '53.507933, 49.415300': {
    Id_optika: '00fb9307-4115-4b47-9db9-de62a812a65a',
    balloonContent: 'Прозрение',
    time: '09:00-20:00',
    time_weekend: '09:00-20:00',
    time_weekend_sun: '09:00-17:00',
    phone: '+7 (8482) 48 71 46',
    phone2: '+7 (8482) 40 16 64',
    oblast: 'Самарская область',
    city: 'Тольятти',
    rayon: '',
    street: 'пр-т Мира, 69',
        doctor: 'Надежда Михайловна Гриднева'
    },
    '53.482172, 49.480365': {
    Id_optika: 'be873d45-b0eb-4ab0-8652-8b2df13474a9',
    balloonContent: 'Прозрение',
    time: '09:00-20:00',
    time_weekend: '09:00-20:00',
    time_weekend_sun: '09:00-17:00',
    phone: '+7 (8482) 55 10 70',
    phone2: '',
    oblast: 'Самарская область',
    city: 'Тольятти',
    rayon: '',
    street: 'ул. Лизы Чайкиной, 79',
        doctor: 'Дарья Николаевна Белова, Марина Александровна Красулина'
    },
    '53.536203, 49.276959': {
    Id_optika: '9d256ccf-6c25-442e-b335-140872d4135d',
    balloonContent: '100z',
    time: '09:00-20:00',
    time_weekend: '09:00-20:00',
    time_weekend_sun: '09:00-17:00',
    phone: '+7 (8482) 75 16 66',
    phone2: '+7 (8482) 75 07 35',
    oblast: 'Самарская область',
    city: 'Тольятти',
    rayon: '',
    street: 'ул. Революционная,  6',
        doctor: 'Елена Витальевна Голубенко, Минебаева Юлия Шамильевна'
    },
    '59.737369, 30.572095': {
    Id_optika: 'b328342a-18f0-4fc4-a8a4-de0b3c22d970',
    balloonContent: 'ЗАЙДИ-УВИДИШЬ',
    time: '10:00-21:00',
    time_weekend: '10:00-21:00',
    time_weekend_sun: '10:00-21:00',
    phone: '+7 (921) 901 26 15',
    phone2: '',
    oblast: 'Санкт-Петербург',
    city: 'Колпино',
    rayon: 'м. Купчино',
    street: 'б-р Трудящихся, 12',
        doctor: 'Щербакова Елена Валентиновна'
    },
    '59.702318, 30.381607': {
    Id_optika: 'e4d242f1-432a-43f8-97de-a3601ea35576',
    balloonContent: 'Семейный центр охраны зрения Глазастик',
    time: '10:00-20:00',
    time_weekend: '10:00-19:00',
    time_weekend_sun: '10:00-19:00',
    phone: '+7 (812) 455 45 18',
    phone2: '',
    oblast: 'Санкт-Петербург',
    city: 'Пушкин',
    rayon: 'Пушкинский район',
    street: 'ул.Полковая 1/25',
        doctor: 'Рогутсуая Виктория Евгеньевна, Шамрий Алина Станиславовна, Слепых Константин Александрович, Мордвов Алексей Александрович'
    },
    '59.904816, 30.472903': {
    Id_optika: 'd8b9813f-c8a7-47ac-ad4b-641f9f3b20bc',
    balloonContent: 'Линз-Очки',
    time: '10:00-22:00',
    time_weekend: '10:00-22:00',
    time_weekend_sun: '10:00-22:00',
    phone: '+7 (812) 929 50 99',
    phone2: '',
    oblast: 'Санкт-Петербург',
    city: 'Санкт-Петербург',
    rayon: '',
    street: 'ул. Дыбенко, 20 к. 1',
        doctor: 'Артемов Андрей'
    },
    '60.014599, 30.393456': {
    Id_optika: '17fa7066-b666-4b79-a428-5a38d1961bd5',
    balloonContent: 'Линз-Очки',
    time: '10:00-22:00',
    time_weekend: '10:00-22:00',
    time_weekend_sun: '10:00-22:00',
    phone: '+7 (812) 929 29 58',
    phone2: '',
    oblast: 'Санкт-Петербург',
    city: 'Санкт-Петербург',
    rayon: '',
    street: 'пр-т Науки, 12',
        doctor: 'Морозов Роман, Лесакова Алена, Монастырева Наталия'
    },
    '59.941633, 30.272839': {
    Id_optika: 'acd68993-26c8-4b07-8e8d-2d80cb8f6a9e',
    balloonContent: 'ЗАЙДИ-УВИДИШЬ',
    time: '10:00-21:00',
    time_weekend: '10:00-21:00',
    time_weekend_sun: '10:00-21:00',
    phone: '+7 (921) 901 26 20',
    phone2: '',
    oblast: 'Санкт-Петербург',
    city: 'Санкт-Петербург',
    rayon: 'м. Василеостровская',
    street: 'В.О., пр-т Средний, 47',
        doctor: 'Назарян Елена Владимировна,  Данилова Татьяна Николаевна'
    },
    '59.929854, 30.347195': {
    Id_optika: '713fd361-6b10-4989-a14e-c15ad266ad80',
    balloonContent: 'ZEISS',
    time: '10:00-21:00',
    time_weekend: '10:00-21:00',
    time_weekend_sun: '11:00-20:00',
    phone: '+7 (921) 901 26 00',
    phone2: '',
    oblast: 'Санкт-Петербург',
    city: 'Санкт-Петербург',
    rayon: 'м. Владимирская/Достоевская',
    street: 'пр-т Владимирский, 13',
        doctor: 'Екатерина Владимировна Бондарчук'
    },
    '60.032847, 30.418752': {
    Id_optika: 'fd3c6135-0741-4db3-9f0b-35fde53b3213',
    balloonContent: 'ЗАЙДИ-УВИДИШЬ',
    time: '10:00-21:00',
    time_weekend: '10:00-21:00',
    time_weekend_sun: '10:00-21:00',
    phone: '+7 (921) 901 26 84',
    phone2: '',
    oblast: 'Санкт-Петербург',
    city: 'Санкт-Петербург',
    rayon: 'м. Гражданский проспект',
    street: 'пр-т Гражданский, 117',
        doctor: 'Екатерина Анатольевна Комракова'
    },
    '59.928870, 30.341470': {
    Id_optika: '22466c06-0dcf-4cee-9f15-4afeb24f32f7',
    balloonContent: 'Доктор Линз',
    time: '10:00-20:00',
    time_weekend: '10:00-20:00',
    time_weekend_sun: '10:00-20:00',
    phone: '+7 (812) 770 03 03',
    phone2: '',
    oblast: 'Санкт-Петербург',
    city: 'Санкт-Петербург',
    rayon: 'м. Достоевская',
    street: 'пер. Щербаков, 4',
        doctor: 'Лисова Елена Алексеевна, Яковина Лилия Викторовна, Нагорная Наталья Александровна, Ларина Виктория Алексеевна'
    },
    '60.008095, 30.257415': {
    Id_optika: 'c2bf9109-cce0-4bce-8a71-7125f8c46116',
    balloonContent: 'ЗАЙДИ-УВИДИШЬ',
    time: '10:00-21:00',
    time_weekend: '10:00-21:00',
    time_weekend_sun: '11:00-20:00',
    phone: '+7 (921) 901 26 88',
    phone2: '',
    oblast: 'Санкт-Петербург',
    city: 'Санкт-Петербург',
    rayon: 'м. Комендантский проспект',
    street: 'пр-т Комендантский, 12',
        doctor: 'Ольга Вениаминовна Аксенова'
    },
    '60.008878, 30.259984': {
    Id_optika: '73768a9f-ee48-4944-89cf-ad5968a3ab9f',
    balloonContent: 'ZEISS',
    time: '10:00-21:00',
    time_weekend: '10:00-21:00',
    time_weekend_sun: '11:00-20:00',
    phone: '+7 (921) 901 26 13',
    phone2: '',
    oblast: 'Санкт-Петербург',
    city: 'Санкт-Петербург',
    rayon: 'м. Комендантский проспект',
    street: 'пр-т Комендантский, 13',
        doctor: 'Юлия Владимировна Кулагина, Тамара Петровна Павловская'
    },
    '59.852312, 30.265589': {
    Id_optika: '3ba2de39-5c3a-4f47-a495-99da019b990f',
    balloonContent: 'ЗАЙДИ-УВИДИШЬ',
    time: '10:00-21:00',
    time_weekend: '10:00-21:00',
    time_weekend_sun: '10:00-21:00',
    phone: '+7 (931) 239 46 82',
    phone2: '',
    oblast: 'Санкт-Петербург',
    city: 'Санкт-Петербург',
    rayon: 'м. Ленинский проспект',
    street: 'пр-т Ленинский, 128',
        doctor: 'Ирина Андреевна Шалагина'
    },
    '59.998774, 30.298315': {
    Id_optika: '5236b22f-5c2b-4316-aca7-7f7561284144',
    balloonContent: 'ZEISS',
    time: '10:00-21:00',
    time_weekend: '10:00-21:00',
    time_weekend_sun: '11:00-20:00',
    phone: '+7 (921) 901 26 27',
    phone2: '',
    oblast: 'Санкт-Петербург',
    city: 'Санкт-Петербург',
    rayon: 'м. Пионерская',
    street: 'пр-т Коломяжский, 20',
        doctor: 'Ирина Владимировна Есипова, Ирина Владимировна Комракова'
    },
    '59.933379, 30.368941': {
    Id_optika: '7903e811-7906-4e72-8636-af63de4d41d7',
    balloonContent: 'ZEISS',
    time: '10:00-21:00',
    time_weekend: '10:00-21:00',
    time_weekend_sun: '10:00-21:00',
    phone: '+7 (921) 901 26 01',
    phone2: '',
    oblast: 'Санкт-Петербург',
    city: 'Санкт-Петербург',
    rayon: 'м. Проспект Восстания',
    street: 'пр-т Cуворовский, 8',
        doctor: 'Светлана Александровна Заостровская'
    },
    '60.051980, 30.335541': {
    Id_optika: '5387710c-8f68-4ed9-8c79-45113962b5d0',
    balloonContent: 'ЗАЙДИ-УВИДИШЬ',
    time: '10:00-21:00',
    time_weekend: '10:00-21:00',
    time_weekend_sun: '11:00-20:00',
    phone: '+7 (921) 901 26 24',
    phone2: '',
    oblast: 'Санкт-Петербург',
    city: 'Санкт-Петербург',
    rayon: 'м. Проспект Просвещения',
    street: 'пр-т Просвещения, 21',
        doctor: 'Елена Владимировна Руденко, Анна Андреевна Грушина'
    },
    '60.053777, 30.334266': {
    Id_optika: '6344378b-de43-485b-9cb1-768e027826f1',
    balloonContent: 'ZEISS',
    time: '10:00-21:00',
    time_weekend: '10:00-21:00',
    time_weekend_sun: '11:00-21:00',
    phone: '+7 (921) 901 26 34',
    phone2: '',
    oblast: 'Санкт-Петербург',
    city: 'Санкт-Петербург',
    rayon: 'м. Проспект Просвещения',
    street: 'пр-т Просвещения, 34',
        doctor: 'Марина Николаевна Майорова, Дягтерев Юрий Викторович'
    },
    '59.943706, 30.359077': {
    Id_optika: '16924e74-69fd-40c5-94d4-64718aa18311',
    balloonContent: 'Оптика100%',
    time: '10:00-20:00',
    time_weekend: '10:00-20:00',
    time_weekend_sun: '10:00-20:00',
    phone: '8 800 700 02 14',
    phone2: '',
    oblast: 'Санкт-Петербург',
    city: 'Санкт-Петербург',
    rayon: 'м. Чернышевская',
    street: 'ул. Кирочная, 17',
        doctor: 'Данич Ольга Петровна'
    },
    '60.092945, 29.961734': {
    Id_optika: '77c6ecad-fc0a-4e4b-b07c-05684ae03181',
    balloonContent: 'ЗАЙДИ-УВИДИШЬ',
    time: '10:00-20:00',
    time_weekend: '10:00-20:00',
    time_weekend_sun: '11:00-19:00',
    phone: '+7 (921) 901 26 17',
    phone2: '',
    oblast: 'Санкт-Петербург',
    city: 'Сестрорецк',
    rayon: 'м. Черная Речка',
    street: 'ул. Воскова, 5',
        doctor: 'Наталья Васильевна Патлатая'
    },
    '56.806870, 60.597564': {
    Id_optika: '2cc7d0b7-1f7a-4036-b9df-574a7bfcfefb',
    balloonContent: 'Очки для Вас',
    time: '09:00-20:00',
    time_weekend: '10:00-20:00',
    time_weekend_sun: '10:00-20:00',
    phone: '8 800 500 17 13',
    phone2: '',
    oblast: 'Свердловская область',
    city: 'Екатеринбург',
    rayon: '',
    street: 'ул. Щорса, 109',
        doctor: 'Виктория  Володина'
    },
    '56.846012, 60.632679': {
    Id_optika: '334db6be-2764-4156-8cf6-6af2543da6d5',
    balloonContent: 'Очки для Вас',
    time: '09:00-20:00',
    time_weekend: '10:00-20:00',
    time_weekend_sun: '10:00-20:00',
    phone: '8 800 500 17 13',
    phone2: '',
    oblast: 'Свердловская область',
    city: 'Екатеринбург',
    rayon: '',
    street: 'ул. Блюхера, 3',
        doctor: 'Татьяна Давыдова, Бикметова Наталья, Булдакова Вера, Наталья Дубровина'
    },
    '56.835466, 60.617579': {
    Id_optika: 'c8406271-9b61-4d12-bf17-3ba32e61d542',
    balloonContent: 'Очки для Вас',
    time: '09:00-20:00',
    time_weekend: '10:00-20:00',
    time_weekend_sun: '10:00-20:00',
    phone: '8 800 500 17 13',
    phone2: '',
    oblast: 'Свердловская область',
    city: 'Екатеринбург',
    rayon: '',
    street: 'ул. Малышева, 84',
        doctor: 'Наталья Мотина'
    },
    '56.828640, 60.594636': {
    Id_optika: 'e67d1872-df2d-4965-a6c1-5ef0fd554ca6',
    balloonContent: 'Доктор Линза',
    time: '09:00-20:00',
    time_weekend: '09:00-19:00',
    time_weekend_sun: '09:00-19:00',
    phone: '+7 (343) 243 56 03',
    phone2: '',
    oblast: 'Свердловская область',
    city: 'Екатеринбург',
    rayon: 'м. Геологическая',
    street: 'ул. Хохрякова, 63',
        doctor: 'Елена  Плотникова, Анастасия Дутлякова, Елена Щербакова, Наталья Турчанова, Наталья Гудкова, Илья Маков'
    },
    '43.018447, 44.658307': {
    Id_optika: 'd5633f8d-f017-4c57-abc3-acf98a1892c4',
    balloonContent: 'Детский лечебно-диагностический центр DEAR KIDS',
    time: '10:00-19:00',
    time_weekend: '10:00-19:00',
    time_weekend_sun: 'выходной',
    phone: '+7 (901) 497 77 69',
    phone2: '',
    oblast: 'Северная Осетия',
    city: 'Владикавказ',
    rayon: 'Затеречный район',
    street: 'пр-т Доватора 17',
        doctor: 'Дарья Смольникова, Зарета Камболова'
    },
    '55.826038, 49.148823': {
    Id_optika: '752dbaf8-389c-48a2-8f13-5ae701105e2d',
    balloonContent: 'Корд Оптика',
    time: '10:00-20:00',
    time_weekend: '10:00-20:00',
    time_weekend_sun: '10:00-20:00',
    phone: '8 (800) 100 09 91',
    phone2: '',
    oblast: 'Татарстан Республика',
    city: 'Казань',
    rayon: 'Ново-Савиновский район',
    street: 'пр-т Ямашева, 93',
        doctor: 'Гульназ Галеева,  Земфира Бурачевская'
    },
    '55.748290, 49.213026': {
    Id_optika: '7813d413-d8e4-4d4e-888a-ba2a11f106da',
    balloonContent: 'Корд Оптика',
    time: '09:00-20:00',
    time_weekend: '10:00-19:00',
    time_weekend_sun: '10:00-19:00',
    phone: '8 (800) 100 09 91',
    phone2: '',
    oblast: 'Татарстан Республика',
    city: 'Казань',
    rayon: 'Приволжский район',
    street: 'ул. Рихарда Зорге, 75',
        doctor: 'Айрат Ханбиков'
    },
    '55.780957, 49.213125': {
    Id_optika: 'b9ab25bf-1489-4e0a-a502-feedbad9fa9c',
    balloonContent: 'Корд Оптика',
    time: '10:00-22:00',
    time_weekend: '10:00-22:00',
    time_weekend_sun: '10:00-22:00',
    phone: '8 (800) 100 09 91',
    phone2: '',
    oblast: 'Татарстан Республика',
    city: 'Казань',
    rayon: 'Советский район',
    street: 'пр-т Победы, 141',
        doctor: 'Ирина Егорова'
    },
    '56.475827, 84.991055': {
    Id_optika: 'c58ced3c-d3a7-44ec-9ae3-dea1fb5fe680',
    balloonContent: 'Эль Ликон',
    time: '09:30-20:00',
    time_weekend: '10:00-18:00',
    time_weekend_sun: '11:00-17:00',
    phone: '+7 (3822)52 35 53',
    phone2: '',
    oblast: 'Томская область',
    city: 'Томск',
    rayon: '',
    street: 'пр-т Фрунзе, 107',
        doctor: 'Галина Абрамова'
    },
    '56.489993, 84.947712': {
    Id_optika: 'b2572c66-7024-4ef2-93bb-655164db8110',
    balloonContent: 'Эль Ликон',
    time: '09:30-20:00',
    time_weekend: '10:00-19:00',
    time_weekend_sun: '11:00-17:00',
    phone: '+7 (3822) 51 48 53',
    phone2: '',
    oblast: 'Томская область',
    city: 'Томск',
    rayon: '',
    street: 'пр-т Ленина, 84',
        doctor: 'Владимир Гладышев, Евгений Глуханков'
    },
    '56.510288, 84.984489': {
    Id_optika: '7969d2f4-3921-49dc-9126-945c6689d43c',
    balloonContent: 'Эль Ликон',
    time: '11:00-19:00',
    time_weekend: '11:00-17:00',
    time_weekend_sun: 'выходной',
    phone: '+7 (3822) 47 35 61',
    phone2: '',
    oblast: 'Томская область',
    city: 'Томск',
    rayon: '',
    street: 'ул. Говорова, 46',
        doctor: 'Елизавета Козел'
    },
    '54.197468, 37.611024': {
    Id_optika: '2f1dab4d-7426-45f0-9f7a-40a7a7123b14',
    balloonContent: '1. Центр Здорового Зрения',
    time: '09:00-21:00',
    time_weekend: '09:00-21:00',
    time_weekend_sun: '09:00-21:00',
    phone: '+7 (4872) 55 40 12',
    phone2: '+7 (4872) 34 34 74',
    oblast: 'Тульская область',
    city: 'Тула',
    rayon: '',
    street: 'ул. Советская, 8',
        doctor: 'Олеся Кукушкина, Ольга Бракоренко, Анастасия Егорова, Елена Старикова'
    },
    '54.183523, 37.611311': {
    Id_optika: '34fd1f2a-29d5-4cd8-b873-d24c5fc4ec0b',
    balloonContent: '2. Колинз',
    time: '09:00-18:00',
    time_weekend: '10:00-16:00',
    time_weekend_sun: 'выходной',
    phone: '+7 (915) 688 77 25',
    phone2: '',
    oblast: 'Тульская область',
    city: 'Тула',
    rayon: '',
    street: 'ул. Тургеневская, 69',
        doctor: 'Людмила Евгеньевна Невзорова'
    },
    '54.195593, 37.612937': {
    Id_optika: '617bf8fb-2261-4968-805b-b7859c1bdc83',
    balloonContent: 'Доктор Линз',
    time: '10:00-18:00',
    time_weekend: '10:00-15:00',
    time_weekend_sun: 'выходной',
    phone: '+7 (910) 159 57 50',
    phone2: '+7 (930) 791 09 25, +7 (4872) 79 09 25',
    oblast: 'Тульская область',
    city: 'Тула',
    rayon: '',
    street: 'пер. Денисовский, 12',
        doctor: 'Цветков Александр Николаевич'
    },
    '57.154088, 65.538882': {
    Id_optika: 'f83aea98-097e-4652-8e42-1957f5d7d6f2',
    balloonContent: 'Имидж Оптика',
    time: '10:00-19:30',
    time_weekend: '10:00-19:00',
    time_weekend_sun: '10:00-18:00',
    phone: '+7 (3452) 57 88 75',
    phone2: '',
    oblast: 'Тюменская область',
    city: 'Тюмень',
    rayon: '',
    street: 'ул. Республики, 45',
        doctor: 'Инна Робертовна Перминова, Эмилия Рамзисовна Идрисова'
    },
    '57.148459, 65.562122': {
    Id_optika: '354d4db7-8ad5-4e73-b355-d1da27186812',
    balloonContent: 'Имидж Оптика',
    time: '10:00-19:30',
    time_weekend: '10:00-19:00',
    time_weekend_sun: '10:00-18:00',
    phone: '+7 (3452) 50 22 75',
    phone2: '',
    oblast: 'Тюменская область',
    city: 'Тюмень',
    rayon: '',
    street: 'ул. Максима Горького, 47',
        doctor: 'Светлана Олеговна Дунаева, Ильиных Татьяна Олеговна'
    },
    '57.154088, 65.538882': {
    Id_optika: 'e370e2f8-61ef-4725-93dd-f04f2ff4d1d0',
    balloonContent: 'Городской центр коррекции зрения',
    time: '09:00-20:00',
    time_weekend: '10:00-20:00',
    time_weekend_sun: '10:00-20:00',
    phone: '8 (800) 201-71-71',
    phone2: '',
    oblast: 'Тюменская область',
    city: 'Тюмень',
    rayon: '',
    street: 'ул. Республики, 45',
        doctor: 'Гончарова Юлия Мавлитяновна, Воронова Мария'
    },
    '56.838194, 53.214940': {
    Id_optika: '65f5832b-a3bb-42b3-86be-b2c84c0fcc90',
    balloonContent: 'Линза',
    time: '08:00-20:00',
    time_weekend: '10:00-18:00',
    time_weekend_sun: '10:00-17:00',
    phone: '+7 (3412) 52 93 93',
    phone2: '',
    oblast: 'Удмуртская Республика',
    city: 'Ижевск',
    rayon: '',
    street: 'ул. Либкнехта, 19',
        doctor: 'Марина Лепихина'
    },
    '56.864384, 53.179771': {
    Id_optika: '',
    balloonContent: 'Республиканская офтальмологическая клиническая больница',
    time: '09:00-18:00',
    time_weekend: 'выходной',
    time_weekend_sun: 'выходной',
    phone: '+7 (3412) 59 75 66',
    phone2: '',
    oblast: 'Удмуртская Республика',
    city: 'Ижевск',
    rayon: '',
    street: 'ул. 30 лет Победы, 9',
        doctor: 'Елена Перминова, Шкляева Ольга'
    },
    '54.369151, 48.587242': {
    Id_optika: '75595566-94c5-4ff7-924c-cbd485499dbc',
    balloonContent: 'Оптика NADIN',
    time: '10:00-21:00',
    time_weekend: '10:00-21:00',
    time_weekend_sun: '10:00-21:00',
    phone: '+7 (8422) 97 26 14',
    phone2: '',
    oblast: 'Ульяновская область',
    city: 'Ульяновск',
    rayon: 'Заволжский район',
    street: 'пр-т Ульяновский, 1',
        doctor: 'Лариса  Токарева, Казакова Галина, Коробова Юлия, Бакун Людмила'
    },
    '54.315389, 48.395092': {
    Id_optika: '219880e9-20f1-445d-b86d-e5d5c0e1a73f',
    balloonContent: 'Оптика NADIN',
    time: '09:00-20:00',
    time_weekend: '09:00-20:00',
    time_weekend_sun: '09:00-20:00',
    phone: '+7 (8422) 58 08 48',
    phone2: '',
    oblast: 'Ульяновская область',
    city: 'Ульяновск',
    rayon: 'Ленинский район',
    street: 'ул. Гончарова, 13',
        doctor: 'Анастасия  Тютина, Дворянчикова Анастасия, Коробова Юлия, Казакова Галина, Цыбина Ирина, Попова Любовь, Махоркина Насифа'
    },
    '55.166372, 61.451081': {
    Id_optika: '459ee106-79da-4daf-a784-94ddde687367',
    balloonContent: 'Оптик Центр',
    time: '08:00-20:00',
    time_weekend: '09:00-20:00',
    time_weekend_sun: '09:00-20:00',
    phone: '+7 (3512) 22 41 60',
    phone2: '',
    oblast: 'Челябинская область',
    city: 'Челябинск',
    rayon: '',
    street: 'ул. 40-летия Октября, 15',
        doctor: 'Сулимова Елена Маратовна, Халявка Инна Рудольфовна'
    },
    '56.128079, 47.248671': {
    Id_optika: '5df04ad0-0272-4318-83f3-52d35dceccb4',
    balloonContent: 'Новая Оптика',
    time: '09:00-19:00',
    time_weekend: '10:00-18:00',
    time_weekend_sun: '10:00-18:00',
    phone: '+7 (8352) 23 73 73',
    phone2: '',
    oblast: 'Чувашия Республика',
    city: 'Чебоксары',
    rayon: '',
    street: 'пр-т Ленина, 14',
        doctor: 'Лариса Михайловна Кудряшова'
    },
    '56.105084, 47.315991': {
    Id_optika: '314c112c-45e6-44ec-b300-a9bf00cbdc5a',
    balloonContent: 'Новая Оптика',
    time: '09:00-19:00',
    time_weekend: '09:00-17:00',
    time_weekend_sun: '09:00-17:00',
    phone: '+7 (8352) 25 96 07',
    phone2: '',
    oblast: 'Чувашия Республика',
    city: 'Чебоксары',
    rayon: '',
    street: 'пр-т Тракторостроителей, 63/21',
        doctor: 'Наталья Генриховна Нигмедзянова'
    },





};


    //заполняем маркеры данными из&nbsp;массива и наносим на&nbsp;карту
    function add_markers() {
        //заполняем маркеры данными из&nbsp;массива и наносим на&nbsp;карту
        for (var i = 0; i < Object.keys(clinic_mass).length; i++) {
            myMap.geoObjects.add(new ymaps.Placemark(Object.keys(clinic_mass)[i].split(","), {
                balloonContent: clinic_mass[Object.keys(clinic_mass)[i]]['balloonContent'] + "<br>" + "Время работы(пн-пт): " + clinic_mass[Object.keys(clinic_mass)[i]]['time'] + "<br>" + "Суббота: " + clinic_mass[Object.keys(clinic_mass)[i]]['time_weekend'] + "<br>" + "Воскресенье: " + clinic_mass[Object.keys(clinic_mass)[i]]['time_weekend_sun'] + "<br>" + "Телефон: " + clinic_mass[Object.keys(clinic_mass)[i]]['phone'],
            }, {
                preset: 'islands#dotIcon',
                iconColor: '#735184'
            }))
            myMap2.geoObjects.add(new ymaps.Placemark(Object.keys(clinic_mass)[i].split(","), {
                balloonContent: clinic_mass[Object.keys(clinic_mass)[i]]['balloonContent'] + "<br>" + "Время работы(пн-пт): " + clinic_mass[Object.keys(clinic_mass)[i]]['time'] + "<br>" + "Суббота: " + clinic_mass[Object.keys(clinic_mass)[i]]['time_weekend'] + "<br>" + "Воскресенье: " + clinic_mass[Object.keys(clinic_mass)[i]]['time_weekend_sun'] + "<br>" + "Телефон: " + clinic_mass[Object.keys(clinic_mass)[i]]['phone'],
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

            'Москва': [55.755814, 37.617635],
            'Санкт-Петербург': [59.939095, 30.315868],
            'Адыгея Республика': [44.606677, 40.105852],
            'Алтай Республика': [51.957804, 85.960625],
            'Алтайский край': [53.346785, 83.776856],
            'Амурская область': [50.257451, 127.534611],
            'Архангельская область': [64.539911, 40.515753],
            'Астраханская область': [46.347614, 48.030169],
            'Башкортостан Республика': [54.735147, 55.958727],
            'Белгородская область': [50.595414, 36.587268],
            'Брянская область': [53.243562, 34.363407],
            'Бурятия Республика': [51.834464, 107.584574],
            'Владимирская область': [56.129057, 40.406635],
            'Волгоградская область': [48.707067, 44.516948],
            'Вологодская область': [59.220496, 39.891523],
            'Воронежская область': [51.660781, 39.200269],
            'Дагестан Республика': [42.983535, 47.504053],
            'Еврейская автономная область': [48.789914, 132.924746],
            'Забайкальский край': [52.033635, 113.501049],
            'Ивановская область': [57.000348, 40.973921],
            'Ингушетия Республика': [43.166780, 44.803574],
            'Иркутская область': [52.287054, 104.281047],
            'Кабардино-Балкарская республика': [43.485259, 43.607072],
            'Калининградская область': [54.710157, 20.510137],
            'Калмыкия Республика': [46.307743, 44.269759],
            'Калужская область': [54.513845, 36.261215],
            'Камчатский край': [53.024259, 158.643503],
            'Карачаево-Черкесская Республика': [44.228374, 42.048270],
            'Карелия Республика': [61.785017, 34.346878],
            'Кемеровская область': [55.354727, 86.088374],
            'Кировская область': [58.603591, 49.668014],
            'Коми Республика': [61.668793, 50.836497],
            'Костромская область': [57.767961, 40.926858],
            'Краснодарский край': [45.035470, 38.975313],
            'Красноярский край': [56.010563, 92.852572],
            'Курганская область': [55.441004, 65.341118],
            'Курская область': [51.730846, 36.193015],
            'Ленинградская область': [59.939095, 30.315868],
            'Липецкая область': [52.608820, 39.599220],
            'Магаданская область': [59.565151, 150.808586],
            'Марий Эл Республика': [56.631595, 47.886178],
            'Мордовия Республика': [54.187433, 45.183938],
            'Московская область': [55.755814, 37.617635],
            'Мурманская область': [68.970663, 33.074909],
            'Ненецкий автономный округ': [67.638050, 53.006926],
            'Нижегородская область': [56.326797, 44.006516],
            'Новгородская область': [58.522852, 31.269807],
            'Новосибирская область': [55.030199, 82.920430],
            'Омская область': [54.989342, 73.368212],
            'Оренбургская область': [51.768199, 55.096955],
            'Орловская область': [52.970371, 36.063837],
            'Пензенская область': [53.195042, 45.018316],
            'Пермский край': [58.010450, 56.229434],
            'Приморский край': [43.115536, 131.885485],
            'Псковская область': [57.819274, 28.332451],
            'Ростовская область': [47.222078, 39.720349],
            'Рязанская область': [54.629216, 39.736375],
            'Самарская область': [53.195873, 50.100193],
            'Саратовская область': [51.533557, 46.034257],
            'Сахалинская область': [46.957765, 142.729579],
            'Свердловская область': [56.838011, 60.597465],
            'Северная Осетия': [43.024616, 44.681762],
            'Смоленская область': [54.782422, 32.047847],
            'Ставропольский край': [45.044241, 41.969012],
            'Тамбовская область': [52.721219, 41.452274],
            'Татарстан Республика': [55.796127, 49.106405],
            'Тверская область': [56.859625, 35.911851],
            'Томская область': [56.484640, 84.947649],
            'Тульская область': [54.193122, 37.617348],
            'Тыва Республика': [51.719086, 94.437757],
            'Тюменская область': [57.153033, 65.534328],
            'Удмуртская Республика': [56.852676, 53.206891],
            'Ульяновская область': [54.314192, 48.403123],
            'Хабаровский край': [48.480223, 135.071917],
            'Хакасия Республика': [53.721152, 91.442387],
            'Челябинская область': [55.159897, 61.402554],
            'Чеченская Республика': [43.318510, 45.694271],
            'Чувашия Республика': [56.143529, 47.251123],
            'Чукотский автономный округ': [64.735814, 177.518904],
            'Якутия Республика Саха': [62.027216, 129.732178],
            'Ярославская область': [57.626559, 39.893804],
                        
        };

        //заполняем массив областями в которых есть оптики
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

        jQuery(".select-oblast").html('');

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
            show_opik_under_map(jQuery_3_5_1(this).text(), clinic_mass, 'oblast')
            f3(jQuery_3_5_1(this).text())
            myMap.setCenter(
                jQuery_3_5_1(this).attr("value").split(','),
                9
            );
            myMap2.setCenter(
                jQuery_3_5_1(this).attr("value").split(','),
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
                // if(temp_oblast.trim().toLowerCase() == 'край'.trim().toLowerCase() || temp_oblast.trim().toLowerCase() == 'республика'.trim().toLowerCase()){
                    city_center.push([clinic_mass[Object.keys(clinic_mass)[i]]['oblast'] + ', ' + clinic_mass[Object.keys(clinic_mass)[i]]['city']])
                // }
                // else{
                //     city_center.push([clinic_mass[Object.keys(clinic_mass)[i]]['oblast'] + ' область, ' + clinic_mass[Object.keys(clinic_mass)[i]]['city']])
                // }
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
            show_opik_under_map(jQuery_3_5_1(this).text(), clinic_mass, 'city')
            findmetro(jQuery_3_5_1(this).text())
            jQuery_3_5_1('.select-city').attr('value', jQuery_3_5_1(this).text())
            myMap.setCenter(
                jQuery_3_5_1(this).attr("value").split(','),
                11
            );
            myMap2.setCenter(
                jQuery_3_5_1(this).attr("value").split(','),
                11
            );
        });
    }

    //показываем список оптик под картой
    function show_opik_under_map(geolocation, clinic_mass, region_type, cityFromSelect = '') {
        var data = {optiks: []}
        for (var i = 0; i < Object.keys(clinic_mass).length; i++) {
            //console.log('I am in metro: ', geolocation, region_type)

            console.log('city under map', cityFromSelect)
            if (geolocation.toUpperCase().trim() == clinic_mass[Object.keys(clinic_mass)[i]][region_type].toUpperCase().trim()) {
                if(cityFromSelect != ''){
                    if(cityFromSelect.toUpperCase().trim() != clinic_mass[Object.keys(clinic_mass)[i]]['city'].toUpperCase().trim()){
                        return
                    }
                }
                if(Object.values(clinic_mass)[i]['oblast'] == 'Москва'  || Object.values(clinic_mass)[i]['oblast'] == 'Санкт-Петербург'){
                    data['optiks'].push({
                        title: Object.values(clinic_mass)[i]['balloonContent'],
                        adress: (Object.values(clinic_mass)[i]['city'] + ", " + Object.values(clinic_mass)[i]['street']),
                        time: 'время работы(пн-пт): ' + Object.values(clinic_mass)[i]['time'],
                        time_weekend: 'Суббота: ' + Object.values(clinic_mass)[i]['time_weekend'],
                        time_weekend_sun: 'Воскресенье: ' + Object.values(clinic_mass)[i]['time_weekend_sun'],
                        phone: Object.values(clinic_mass)[i]['phone'],
                        phone2: Object.values(clinic_mass)[i]['phone2'],
                        doctor: `Специалист: ${Object.values(clinic_mass)[i]['doctor']}`,
                        Id_optika: Object.values(clinic_mass)[i]['Id_optika'],
                        city_optika: Object.values(clinic_mass)[i]['city'],
                        coord: Object.keys(clinic_mass)[i],
                    });
                    // console.log('1->');
                    // console.log(Object.values(clinic_mass)[i]['Id_optika']);
                }
                else{
                    data['optiks'].push({
                        title: Object.values(clinic_mass)[i]['balloonContent'],
                        adress: (Object.values(clinic_mass)[i]['oblast'] + ", " + Object.values(clinic_mass)[i]['city'] + ", " + Object.values(clinic_mass)[i]['street']),
                        time: 'время работы(пн-пт): ' + Object.values(clinic_mass)[i]['time'],
                        time_weekend: 'Суббота: ' + Object.values(clinic_mass)[i]['time_weekend'],
                        time_weekend_sun: 'Воскресенье: ' + Object.values(clinic_mass)[i]['time_weekend_sun'],
                        phone: Object.values(clinic_mass)[i]['phone'],
                        phone2: Object.values(clinic_mass)[i]['phone2'],
                        doctor: `Специалист: ${Object.values(clinic_mass)[i]['doctor']}`,
                        Id_optika: Object.values(clinic_mass)[i]['Id_optika'],
                        city_optika: Object.values(clinic_mass)[i]['city'],
                        coord: Object.keys(clinic_mass)[i],
                    });
                    // console.log('2->');
                    // console.log(Object.values(clinic_mass)[i]['Id_optika']);
                }
            }
        }
        data['optiks'].sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
        if (data['optiks'].length != 0) {
            if (jQuery('.optik-wrapper').text().trim() == '') {
                jQuery('.map__control-adress').removeClass('hide-class')
                rivets.bind(
                    jQuery('.map__control-adress'),
                    {
                        data: data
                    });
                jQuery('.click-optik').on("click", function () {
                    console.log(jQuery_3_5_1(this).attr('id'));
                    myMap.setCenter(
                        jQuery_3_5_1(this).attr('id').split(','),
                        18
                    );
                    myMap2.setCenter(
                        jQuery_3_5_1(this).attr('id').split(','),
                        18
                    );
                });
            } else {
                rivets.formatters.tel = function(value) {
                    return `tel:${value}`
                }
                jQuery('.map__control-adress').html('\
                    <div class="map__control-adress-block" rv-each-optiks="data.optiks">\
                        <p class="map__control-adress-block-title" rv-text="optiks.title"></p>\
                        <p class="map__control-adress-block-text" rv-text="optiks.adress"></p>\
                        <p class="map__control-adress-block-text" rv-text="optiks.time"></p>\
                        <p class="map__control-adress-block-text" rv-text="optiks.time_weekend"></p>\
                        <p class="map__control-adress-block-text" rv-text="optiks.time_weekend_sun"></p>\
                        <a rv-href="optiks.phone | tel" class="map__control-adress-block-link" rv-text="optiks.phone"></a>\
                        <a rv-href="optiks.phone2 | tel" class="map__control-adress-block-link" rv-text="optiks.phone2" rv-if="optiks.phone2"></a>\
                        <p class="map__control-adress-block-text" rv-text="optiks.doctor"></p>\
                        <input class="jsIdOptika" type="hidden" rv-value="optiks.Id_optika">\
                        <input class="jsCityOptika" type="hidden" rv-value="optiks.city_optika">\
                        <p rv-id = "optiks.coord" class="map__control-adress-block-link jsFindAdressMap click-optik">На карте</p>\
                        <a href="#" class="map__control-adress-block-button jsSignUp">Сохранить информацию</a>\
                        </div>');
                /*click-optik">На карте</p>\
                <a href="#" class="map__control-adress-block-button jsSignUp">Получить информацию</a>\
                </div>');*/
                jQuery('.map__control-adress').removeClass('hide-class')
                rivets.bind(
                    jQuery('.map__control-adress'),
                    {
                        data: data
                    });
                jQuery('.click-optik').on("click", function () {
                    console.log(jQuery_3_5_1(this).attr('id'));
                    myMap.setCenter(
                        jQuery_3_5_1(this).attr('id').split(','),
                        18
                    );
                    myMap2.setCenter(
                        jQuery_3_5_1(this).attr('id').split(','),
                        18
                    );
                });
            }
        } else {
            rivets.formatters.tel = function(value) {
                return `tel:${value}`
            }
            jQuery('.map__control-adress').html('\
                <div class="map__control-adress-block" rv-each-optiks="data.optiks">\
                    <p class="map__control-adress-block-title" rv-text="optiks.title"></p>\
                    <p class="map__control-adress-block-text" rv-text="optiks.adress"></p>\
                    <p class="map__control-adress-block-text" rv-text="optiks.time"></p>\
                    <p class="map__control-adress-block-text" rv-text="optiks.time_weekend"></p>\
                    <a rv-href="optiks.phone | tel" class="map__control-adress-block-link" rv-text="optiks.phone"></a>\
                    <a rv-href="optiks.phone2 | tel" class="map__control-adress-block-link" rv-text="optiks.phone2" rv-if="optiks.phone2"></a>\
                    <p class="map__control-adress-block-text" rv-text="optiks.doctor"></p>\
                    <input class="jsIdOptika" type="hidden" rv-value="optiks.Id_optika">\
                    <input class="jsCityOptika" type="hidden" rv-value="optiks.city_optika">\
                    <p rv-id = "optiks.coord" class="map__control-adress-block-link jsFindAdressMap click-optik">На карте</p>\
                    <a href="#" class="map__control-adress-block-button jsSignUp">Сохранить информацию</a>\
                    </div>');
            /*
            click-optik">На карте</p>\
            <a href="#" class="map__control-adress-block-button jsSignUp">Получить информацию</a>\
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
            jQuery(".select-metro").closest(".select").find(".select__head").text("Район/Метро")
            create_combox_metro(mass_metro_coord);
        } else {
            geocode_city_area(city.trim());
        }
    }

    //запрос списка метро по api
    function getmetro() {
        var jqXHR = jQuery_3_5_1.ajax({
            type: "GET",
            url: "https://api.hh.ru/metro",
            async: false,
            crossOrigin: null,
        });

        return jqXHR.responseText;
    }

    //выпадающий список с&nbsp;метро
    function create_combox_metro(mass_metro_coord) {
        var mass_metro_coord = findUnique(mass_metro_coord);
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
            show_opik_under_map(jQuery_3_5_1(this).text(), clinic_mass, 'rayon', jQuery_3_5_1('.select-city').attr('value'))
            myMap.setCenter(
                jQuery_3_5_1(this).attr("value").split(','),
                15
            );
            myMap2.setCenter(
                jQuery_3_5_1(this).attr("value").split(','),
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
            jQuery(".select-metro").closest(".select").find(".select__head").text("Район/Метро")
            create_area_list(area_center, clinic_mass)

        }

    }


    //выпадающий список с&nbsp;районами (если нет метро)
    function create_area_list(area_center, clinic_mass) {

        var area_center = findUnique(area_center);
        
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
            show_opik_under_map(jQuery_3_5_1(this).text(), clinic_mass, 'rayon', jQuery_3_5_1('.select-city').attr('value'))
            myMap.setCenter(
                jQuery_3_5_1(this).attr("value").split(','),
                15
            );
            myMap2.setCenter(
                jQuery_3_5_1(this).attr("value").split(','),
                15
            );

        });

    }


}

});

//Rivets.js + Sightglass.js
    (function(){function t(t,s,i,h){return new e(t,s,i,h)}function e(t,e,i,h){this.options=h||{},this.options.adapters=this.options.adapters||{},this.obj=t,this.keypath=e,this.callback=i,this.objectPath=[],this.update=this.update.bind(this),this.parse(),s(this.target=this.realize())&&this.set(!0,this.key,this.target,this.callback)}function s(t){return"object"==typeof t&&null!==t}function i(t){throw new Error("[sightglass] "+t)}t.adapters={},e.tokenize=function(t,e,s){var i,h,a=[],o={i:s,path:""};for(i=0;i<t.length;i++)h=t.charAt(i),~e.indexOf(h)?(a.push(o),o={i:h,path:""}):o.path+=h;return a.push(o),a},e.prototype.parse=function(){var s,h,a=this.interfaces();a.length||i("Must define at least one adapter interface."),~a.indexOf(this.keypath[0])?(s=this.keypath[0],h=this.keypath.substr(1)):("undefined"==typeof(s=this.options.root||t.root)&&i("Must define a default root adapter."),h=this.keypath),this.tokens=e.tokenize(h,a,s),this.key=this.tokens.pop()},e.prototype.realize=function(){var t,e=this.obj,i=!1;return this.tokens.forEach(function(h,a){s(e)?("undefined"!=typeof this.objectPath[a]?e!==(t=this.objectPath[a])&&(this.set(!1,h,t,this.update),this.set(!0,h,e,this.update),this.objectPath[a]=e):(this.set(!0,h,e,this.update),this.objectPath[a]=e),e=this.get(h,e)):(i===!1&&(i=a),(t=this.objectPath[a])&&this.set(!1,h,t,this.update))},this),i!==!1&&this.objectPath.splice(i),e},e.prototype.update=function(){var t,e;(t=this.realize())!==this.target&&(s(this.target)&&this.set(!1,this.key,this.target,this.callback),s(t)&&this.set(!0,this.key,t,this.callback),e=this.value(),this.target=t,(this.value()instanceof Function||this.value()!==e)&&this.callback())},e.prototype.value=function(){return s(this.target)?this.get(this.key,this.target):void 0},e.prototype.setValue=function(t){s(this.target)&&this.adapter(this.key).set(this.target,this.key.path,t)},e.prototype.get=function(t,e){return this.adapter(t).get(e,t.path)},e.prototype.set=function(t,e,s,i){var h=t?"observe":"unobserve";this.adapter(e)[h](s,e.path,i)},e.prototype.interfaces=function(){var e=Object.keys(this.options.adapters);return Object.keys(t.adapters).forEach(function(t){~e.indexOf(t)||e.push(t)}),e},e.prototype.adapter=function(e){return this.options.adapters[e.i]||t.adapters[e.i]},e.prototype.unobserve=function(){var t;this.tokens.forEach(function(e,s){(t=this.objectPath[s])&&this.set(!1,e,t,this.update)},this),s(this.target)&&this.set(!1,this.key,this.target,this.callback)},"undefined"!=typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd?define([],function(){return this.sightglass=t}):this.sightglass=t}).call(this);
    (function(){var t,e,i,n,r,s=function(t,e){return function(){return t.apply(e,arguments)}},o=[].slice,u={}.hasOwnProperty,l=function(t,e){function i(){this.constructor=t}for(var n in e)u.call(e,n)&&(t[n]=e[n]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},h=[].indexOf||function(t){for(var e=0,i=this.length;i>e;e++)if(e in this&&this[e]===t)return e;return-1};t={options:["prefix","templateDelimiters","rootInterface","preloadData","handler","executeFunctions"],extensions:["binders","formatters","components","adapters"],"public":{binders:{},components:{},formatters:{},adapters:{},prefix:"rv",templateDelimiters:["{","}"],rootInterface:".",preloadData:!0,executeFunctions:!1,iterationAlias:function(t){return"%"+t+"%"},handler:function(t,e,i){return this.call(t,e,i.view.models)},configure:function(e){var i,n,r,s;null==e&&(e={});for(r in e)if(s=e[r],"binders"===r||"components"===r||"formatters"===r||"adapters"===r)for(n in s)i=s[n],t[r][n]=i;else t["public"][r]=s},bind:function(e,i,n){var r;return null==i&&(i={}),null==n&&(n={}),r=new t.View(e,i,n),r.bind(),r},init:function(e,i,n){var r,s,o;if(null==n&&(n={}),null==i&&(i=document.createElement("div")),e=t["public"].components[e],s=e.template.call(this,i),s instanceof HTMLElement){for(;i.firstChild;)i.removeChild(i.firstChild);i.appendChild(s)}else i.innerHTML=s;return r=e.initialize.call(this,i,n),o=new t.View(i,r),o.bind(),o}}},window.jQuery||window.$?(i=window.jQuery||window.$,r="on"in i.prototype?["on","off"]:["bind","unbind"],e=r[0],n=r[1],t.Util={bindEvent:function(t,n,r){return i(t)[e](n,r)},unbindEvent:function(t,e,r){return i(t)[n](e,r)},getInputValue:function(t){var e;return e=i(t),"checkbox"===e.attr("type")?e.is(":checked"):e.val()}}):t.Util={bindEvent:function(){return"addEventListener"in window?function(t,e,i){return t.addEventListener(e,i,!1)}:function(t,e,i){return t.attachEvent("on"+e,i)}}(),unbindEvent:function(){return"removeEventListener"in window?function(t,e,i){return t.removeEventListener(e,i,!1)}:function(t,e,i){return t.detachEvent("on"+e,i)}}(),getInputValue:function(t){var e,i,n,r;if("checkbox"===t.type)return t.checked;if("select-multiple"===t.type){for(r=[],i=0,n=t.length;n>i;i++)e=t[i],e.selected&&r.push(e.value);return r}return t.value}},t.TypeParser=function(){function t(){}return t.types={primitive:0,keypath:1},t.parse=function(t){return/^'.*'$|^".*"$/.test(t)?{type:this.types.primitive,value:t.slice(1,-1)}:"true"===t?{type:this.types.primitive,value:!0}:"false"===t?{type:this.types.primitive,value:!1}:"null"===t?{type:this.types.primitive,value:null}:"undefined"===t?{type:this.types.primitive,value:void 0}:""===t?{type:this.types.primitive,value:void 0}:isNaN(Number(t))===!1?{type:this.types.primitive,value:Number(t)}:{type:this.types.keypath,value:t}},t}(),t.TextTemplateParser=function(){function t(){}return t.types={text:0,binding:1},t.parse=function(t,e){var i,n,r,s,o,u,l;for(u=[],s=t.length,i=0,n=0;s>n;){if(i=t.indexOf(e[0],n),0>i){u.push({type:this.types.text,value:t.slice(n)});break}if(i>0&&i>n&&u.push({type:this.types.text,value:t.slice(n,i)}),n=i+e[0].length,i=t.indexOf(e[1],n),0>i){o=t.slice(n-e[1].length),r=u[u.length-1],(null!=r?r.type:void 0)===this.types.text?r.value+=o:u.push({type:this.types.text,value:o});break}l=t.slice(n,i).trim(),u.push({type:this.types.binding,value:l}),n=i+e[1].length}return u},t}(),t.View=function(){function e(e,i,n){var r,o,u,l,h,a,p,d,c,f,b,v,m;for(this.els=e,this.models=i,null==n&&(n={}),this.update=s(this.update,this),this.publish=s(this.publish,this),this.sync=s(this.sync,this),this.unbind=s(this.unbind,this),this.bind=s(this.bind,this),this.select=s(this.select,this),this.traverse=s(this.traverse,this),this.build=s(this.build,this),this.buildBinding=s(this.buildBinding,this),this.bindingRegExp=s(this.bindingRegExp,this),this.options=s(this.options,this),this.els.jquery||this.els instanceof Array||(this.els=[this.els]),c=t.extensions,h=0,p=c.length;p>h;h++){if(o=c[h],this[o]={},n[o]){f=n[o];for(r in f)u=f[r],this[o][r]=u}b=t["public"][o];for(r in b)u=b[r],null==(l=this[o])[r]&&(l[r]=u)}for(v=t.options,a=0,d=v.length;d>a;a++)o=v[a],this[o]=null!=(m=n[o])?m:t["public"][o];this.build()}return e.prototype.options=function(){var e,i,n,r,s;for(i={},s=t.extensions.concat(t.options),n=0,r=s.length;r>n;n++)e=s[n],i[e]=this[e];return i},e.prototype.bindingRegExp=function(){return new RegExp("^"+this.prefix+"-")},e.prototype.buildBinding=function(e,i,n,r){var s,o,u,l,h,a,p;return h={},p=function(){var t,e,i,n;for(i=r.match(/((?:'[^']*')*(?:(?:[^\|']*(?:'[^']*')+[^\|']*)+|[^\|]+))|^$/g),n=[],t=0,e=i.length;e>t;t++)a=i[t],n.push(a.trim());return n}(),s=function(){var t,e,i,n;for(i=p.shift().split("<"),n=[],t=0,e=i.length;e>t;t++)o=i[t],n.push(o.trim());return n}(),l=s.shift(),h.formatters=p,(u=s.shift())&&(h.dependencies=u.split(/\s+/)),this.bindings.push(new t[e](this,i,n,l,h))},e.prototype.build=function(){var e,i,n,r,s;for(this.bindings=[],i=function(e){return function(n){var r,s,o,u,l,h,a,p,d,c,f,b,v;if(3===n.nodeType){if(l=t.TextTemplateParser,(o=e.templateDelimiters)&&(p=l.parse(n.data,o)).length&&(1!==p.length||p[0].type!==l.types.text)){for(d=0,f=p.length;f>d;d++)a=p[d],h=document.createTextNode(a.value),n.parentNode.insertBefore(h,n),1===a.type&&e.buildBinding("TextBinding",h,null,a.value);n.parentNode.removeChild(n)}}else 1===n.nodeType&&(r=e.traverse(n));if(!r)for(v=function(){var t,e,i,r;for(i=n.childNodes,r=[],t=0,e=i.length;e>t;t++)u=i[t],r.push(u);return r}(),c=0,b=v.length;b>c;c++)s=v[c],i(s)}}(this),s=this.els,n=0,r=s.length;r>n;n++)e=s[n],i(e);this.bindings.sort(function(t,e){var i,n;return((null!=(i=e.binder)?i.priority:void 0)||0)-((null!=(n=t.binder)?n.priority:void 0)||0)})},e.prototype.traverse=function(e){var i,n,r,s,o,u,l,h,a,p,d,c,f,b,v,m;for(s=this.bindingRegExp(),o="SCRIPT"===e.nodeName||"STYLE"===e.nodeName,b=e.attributes,p=0,c=b.length;c>p;p++)if(i=b[p],s.test(i.name)){if(h=i.name.replace(s,""),!(r=this.binders[h])){v=this.binders;for(u in v)a=v[u],"*"!==u&&-1!==u.indexOf("*")&&(l=new RegExp("^"+u.replace(/\*/g,".+")+"$"),l.test(h)&&(r=a))}r||(r=this.binders["*"]),r.block&&(o=!0,n=[i])}for(m=n||e.attributes,d=0,f=m.length;f>d;d++)i=m[d],s.test(i.name)&&(h=i.name.replace(s,""),this.buildBinding("Binding",e,h,i.value));return o||(h=e.nodeName.toLowerCase(),this.components[h]&&!e._bound&&(this.bindings.push(new t.ComponentBinding(this,e,h)),o=!0)),o},e.prototype.select=function(t){var e,i,n,r,s;for(r=this.bindings,s=[],i=0,n=r.length;n>i;i++)e=r[i],t(e)&&s.push(e);return s},e.prototype.bind=function(){var t,e,i,n;for(n=this.bindings,e=0,i=n.length;i>e;e++)t=n[e],t.bind()},e.prototype.unbind=function(){var t,e,i,n;for(n=this.bindings,e=0,i=n.length;i>e;e++)t=n[e],t.unbind()},e.prototype.sync=function(){var t,e,i,n;for(n=this.bindings,e=0,i=n.length;i>e;e++)t=n[e],"function"==typeof t.sync&&t.sync()},e.prototype.publish=function(){var t,e,i,n;for(n=this.select(function(t){var e;return null!=(e=t.binder)?e.publishes:void 0}),e=0,i=n.length;i>e;e++)t=n[e],t.publish()},e.prototype.update=function(t){var e,i,n,r,s,o;null==t&&(t={});for(i in t)n=t[i],this.models[i]=n;for(o=this.bindings,r=0,s=o.length;s>r;r++)e=o[r],"function"==typeof e.update&&e.update(t)},e}(),t.Binding=function(){function e(t,e,i,n,r){this.view=t,this.el=e,this.type=i,this.keypath=n,this.options=null!=r?r:{},this.getValue=s(this.getValue,this),this.update=s(this.update,this),this.unbind=s(this.unbind,this),this.bind=s(this.bind,this),this.publish=s(this.publish,this),this.sync=s(this.sync,this),this.set=s(this.set,this),this.eventHandler=s(this.eventHandler,this),this.formattedValue=s(this.formattedValue,this),this.parseFormatterArguments=s(this.parseFormatterArguments,this),this.parseTarget=s(this.parseTarget,this),this.observe=s(this.observe,this),this.setBinder=s(this.setBinder,this),this.formatters=this.options.formatters||[],this.dependencies=[],this.formatterObservers={},this.model=void 0,this.setBinder()}return e.prototype.setBinder=function(){var t,e,i,n;if(!(this.binder=this.view.binders[this.type])){n=this.view.binders;for(t in n)i=n[t],"*"!==t&&-1!==t.indexOf("*")&&(e=new RegExp("^"+t.replace(/\*/g,".+")+"$"),e.test(this.type)&&(this.binder=i,this.args=new RegExp("^"+t.replace(/\*/g,"(.+)")+"$").exec(this.type),this.args.shift()))}return this.binder||(this.binder=this.view.binders["*"]),this.binder instanceof Function?this.binder={routine:this.binder}:void 0},e.prototype.observe=function(e,i,n){return t.sightglass(e,i,n,{root:this.view.rootInterface,adapters:this.view.adapters})},e.prototype.parseTarget=function(){var e;return e=t.TypeParser.parse(this.keypath),e.type===t.TypeParser.types.primitive?this.value=e.value:(this.observer=this.observe(this.view.models,this.keypath,this.sync),this.model=this.observer.target)},e.prototype.parseFormatterArguments=function(e,i){var n,r,s,o,u,l,h;for(e=function(){var i,n,s;for(s=[],i=0,n=e.length;n>i;i++)r=e[i],s.push(t.TypeParser.parse(r));return s}(),o=[],n=l=0,h=e.length;h>l;n=++l)r=e[n],o.push(r.type===t.TypeParser.types.primitive?r.value:((u=this.formatterObservers)[i]||(u[i]={}),(s=this.formatterObservers[i][n])?void 0:(s=this.observe(this.view.models,r.value,this.sync),this.formatterObservers[i][n]=s),s.value()));return o},e.prototype.formattedValue=function(t){var e,i,n,r,s,u,l,h,a;for(h=this.formatters,i=u=0,l=h.length;l>u;i=++u)n=h[i],e=n.match(/[^\s']+|'([^']|'[^\s])*'|"([^"]|"[^\s])*"/g),r=e.shift(),n=this.view.formatters[r],s=this.parseFormatterArguments(e,i),(null!=n?n.read:void 0)instanceof Function?t=(a=n.read).call.apply(a,[this.model,t].concat(o.call(s))):n instanceof Function&&(t=n.call.apply(n,[this.model,t].concat(o.call(s))));return t},e.prototype.eventHandler=function(t){var e,i;return i=(e=this).view.handler,function(n){return i.call(t,this,n,e)}},e.prototype.set=function(e){var i;return e=e instanceof Function&&!this.binder["function"]&&t["public"].executeFunctions?this.formattedValue(e.call(this.model)):this.formattedValue(e),null!=(i=this.binder.routine)?i.call(this,this.el,e):void 0},e.prototype.sync=function(){var t,e;return this.set(function(){var i,n,r,s,o,u,l;if(this.observer){if(this.model!==this.observer.target){for(o=this.dependencies,i=0,r=o.length;r>i;i++)e=o[i],e.unobserve();if(this.dependencies=[],null!=(this.model=this.observer.target)&&(null!=(u=this.options.dependencies)?u.length:void 0))for(l=this.options.dependencies,n=0,s=l.length;s>n;n++)t=l[n],e=this.observe(this.model,t,this.sync),this.dependencies.push(e)}return this.observer.value()}return this.value}.call(this))},e.prototype.publish=function(){var t,e,i,n,r,s,u,l,h,a,p,d,c;if(this.observer){for(l=this.getValue(this.el),s=this.formatters.length-1,p=this.formatters.slice(0).reverse(),i=h=0,a=p.length;a>h;i=++h)n=p[i],e=s-i,t=n.split(/\s+/),r=t.shift(),u=this.parseFormatterArguments(t,e),(null!=(d=this.view.formatters[r])?d.publish:void 0)&&(l=(c=this.view.formatters[r]).publish.apply(c,[l].concat(o.call(u))));return this.observer.setValue(l)}},e.prototype.bind=function(){var t,e,i,n,r,s,o;if(this.parseTarget(),null!=(r=this.binder.bind)&&r.call(this,this.el),null!=this.model&&(null!=(s=this.options.dependencies)?s.length:void 0))for(o=this.options.dependencies,i=0,n=o.length;n>i;i++)t=o[i],e=this.observe(this.model,t,this.sync),this.dependencies.push(e);return this.view.preloadData?this.sync():void 0},e.prototype.unbind=function(){var t,e,i,n,r,s,o,u,l,h;for(null!=(o=this.binder.unbind)&&o.call(this,this.el),null!=(u=this.observer)&&u.unobserve(),l=this.dependencies,r=0,s=l.length;s>r;r++)n=l[r],n.unobserve();this.dependencies=[],h=this.formatterObservers;for(i in h){e=h[i];for(t in e)n=e[t],n.unobserve()}return this.formatterObservers={}},e.prototype.update=function(t){var e,i;return null==t&&(t={}),this.model=null!=(e=this.observer)?e.target:void 0,null!=(i=this.binder.update)?i.call(this,t):void 0},e.prototype.getValue=function(e){return this.binder&&null!=this.binder.getValue?this.binder.getValue.call(this,e):t.Util.getInputValue(e)},e}(),t.ComponentBinding=function(e){function i(e,i,n){var r,o,u,l,a,p,d,c;for(this.view=e,this.el=i,this.type=n,this.unbind=s(this.unbind,this),this.bind=s(this.bind,this),this.locals=s(this.locals,this),this.component=this.view.components[this.type],this["static"]={},this.observers={},this.upstreamObservers={},o=e.bindingRegExp(),d=this.el.attributes||[],a=0,p=d.length;p>a;a++)r=d[a],o.test(r.name)||(u=this.camelCase(r.name),l=t.TypeParser.parse(r.value),h.call(null!=(c=this.component["static"])?c:[],u)>=0?this["static"][u]=r.value:l.type===t.TypeParser.types.primitive?this["static"][u]=l.value:this.observers[u]=r.value)}return l(i,e),i.prototype.sync=function(){},i.prototype.update=function(){},i.prototype.publish=function(){},i.prototype.locals=function(){var t,e,i,n,r,s;i={},r=this["static"];for(t in r)n=r[t],i[t]=n;s=this.observers;for(t in s)e=s[t],i[t]=e.value();return i},i.prototype.camelCase=function(t){return t.replace(/-([a-z])/g,function(t){return t[1].toUpperCase()})},i.prototype.bind=function(){var e,i,n,r,s,o,u,l,h,a,p,d,c,f,b,v,m,y,g,w;if(!this.bound){f=this.observers;for(i in f)n=f[i],this.observers[i]=this.observe(this.view.models,n,function(t){return function(e){return function(){return t.componentView.models[e]=t.observers[e].value()}}}(this).call(this,i));this.bound=!0}if(null!=this.componentView)this.componentView.bind();else{for(this.el.innerHTML=this.component.template.call(this),u=this.component.initialize.call(this,this.el,this.locals()),this.el._bound=!0,o={},b=t.extensions,a=0,d=b.length;d>a;a++){if(s=b[a],o[s]={},this.component[s]){v=this.component[s];for(e in v)l=v[e],o[s][e]=l}m=this.view[s];for(e in m)l=m[e],null==(h=o[s])[e]&&(h[e]=l)}for(y=t.options,p=0,c=y.length;c>p;p++)s=y[p],o[s]=null!=(g=this.component[s])?g:this.view[s];this.componentView=new t.View(Array.prototype.slice.call(this.el.childNodes),u,o),this.componentView.bind(),w=this.observers;for(i in w)r=w[i],this.upstreamObservers[i]=this.observe(this.componentView.models,i,function(t){return function(e,i){return function(){return i.setValue(t.componentView.models[e])}}}(this).call(this,i,r))}},i.prototype.unbind=function(){var t,e,i,n,r;i=this.upstreamObservers;for(t in i)e=i[t],e.unobserve();n=this.observers;for(t in n)e=n[t],e.unobserve();return null!=(r=this.componentView)?r.unbind.call(this):void 0},i}(t.Binding),t.TextBinding=function(t){function e(t,e,i,n,r){this.view=t,this.el=e,this.type=i,this.keypath=n,this.options=null!=r?r:{},this.sync=s(this.sync,this),this.formatters=this.options.formatters||[],this.dependencies=[],this.formatterObservers={}}return l(e,t),e.prototype.binder={routine:function(t,e){return t.data=null!=e?e:""}},e.prototype.sync=function(){return e.__super__.sync.apply(this,arguments)},e}(t.Binding),t["public"].binders.text=function(t,e){return null!=t.textContent?t.textContent=null!=e?e:"":t.innerText=null!=e?e:""},t["public"].binders.html=function(t,e){return t.innerHTML=null!=e?e:""},t["public"].binders.show=function(t,e){return t.style.display=e?"":"none"},t["public"].binders.hide=function(t,e){return t.style.display=e?"none":""},t["public"].binders.enabled=function(t,e){return t.disabled=!e},t["public"].binders.disabled=function(t,e){return t.disabled=!!e},t["public"].binders.checked={publishes:!0,priority:2e3,bind:function(e){return t.Util.bindEvent(e,"change",this.publish)},unbind:function(e){return t.Util.unbindEvent(e,"change",this.publish)},routine:function(t,e){var i;return t.checked="radio"===t.type?(null!=(i=t.value)?i.toString():void 0)===(null!=e?e.toString():void 0):!!e}},t["public"].binders.unchecked={publishes:!0,priority:2e3,bind:function(e){return t.Util.bindEvent(e,"change",this.publish)},unbind:function(e){return t.Util.unbindEvent(e,"change",this.publish)},routine:function(t,e){var i;return t.checked="radio"===t.type?(null!=(i=t.value)?i.toString():void 0)!==(null!=e?e.toString():void 0):!e}},t["public"].binders.value={publishes:!0,priority:3e3,bind:function(e){return"INPUT"!==e.tagName||"radio"!==e.type?(this.event="SELECT"===e.tagName?"change":"input",t.Util.bindEvent(e,this.event,this.publish)):void 0},unbind:function(e){return"INPUT"!==e.tagName||"radio"!==e.type?t.Util.unbindEvent(e,this.event,this.publish):void 0},routine:function(t,e){var n,r,s,o,u,l,a;if("INPUT"===t.tagName&&"radio"===t.type)return t.setAttribute("value",e);if(null!=window.jQuery){if(t=i(t),(null!=e?e.toString():void 0)!==(null!=(o=t.val())?o.toString():void 0))return t.val(null!=e?e:"")}else if("select-multiple"===t.type){if(null!=e){for(a=[],r=0,s=t.length;s>r;r++)n=t[r],a.push(n.selected=(u=n.value,h.call(e,u)>=0));return a}}else if((null!=e?e.toString():void 0)!==(null!=(l=t.value)?l.toString():void 0))return t.value=null!=e?e:""}},t["public"].binders["if"]={block:!0,priority:4e3,bind:function(t){var e,i;return null==this.marker?(e=[this.view.prefix,this.type].join("-").replace("--","-"),i=t.getAttribute(e),this.marker=document.createComment(" rivets: "+this.type+" "+i+" "),this.bound=!1,t.removeAttribute(e),t.parentNode.insertBefore(this.marker,t),t.parentNode.removeChild(t)):void 0},unbind:function(){return this.nested?(this.nested.unbind(),this.bound=!1):void 0},routine:function(e,i){var n,r,s,o;if(!!i==!this.bound){if(i){s={},o=this.view.models;for(n in o)r=o[n],s[n]=r;return(this.nested||(this.nested=new t.View(e,s,this.view.options()))).bind(),this.marker.parentNode.insertBefore(e,this.marker.nextSibling),this.bound=!0}return e.parentNode.removeChild(e),this.nested.unbind(),this.bound=!1}},update:function(t){var e;return null!=(e=this.nested)?e.update(t):void 0}},t["public"].binders.unless={block:!0,priority:4e3,bind:function(e){return t["public"].binders["if"].bind.call(this,e)},unbind:function(){return t["public"].binders["if"].unbind.call(this)},routine:function(e,i){return t["public"].binders["if"].routine.call(this,e,!i)},update:function(e){return t["public"].binders["if"].update.call(this,e)}},t["public"].binders["on-*"]={"function":!0,priority:1e3,unbind:function(e){return this.handler?t.Util.unbindEvent(e,this.args[0],this.handler):void 0},routine:function(e,i){return this.handler&&t.Util.unbindEvent(e,this.args[0],this.handler),t.Util.bindEvent(e,this.args[0],this.handler=this.eventHandler(i))}},t["public"].binders["each-*"]={block:!0,priority:4e3,bind:function(t){var e,i,n,r,s;if(null==this.marker)e=[this.view.prefix,this.type].join("-").replace("--","-"),this.marker=document.createComment(" rivets: "+this.type+" "),this.iterated=[],t.removeAttribute(e),t.parentNode.insertBefore(this.marker,t),t.parentNode.removeChild(t);else for(s=this.iterated,n=0,r=s.length;r>n;n++)i=s[n],i.bind()},unbind:function(){var t,e,i,n;if(null!=this.iterated)for(n=this.iterated,e=0,i=n.length;i>e;e++)t=n[e],t.unbind()},routine:function(e,i){var n,r,s,o,u,l,h,a,p,d,c,f,b,v,m,y,g,w,k,x;if(h=this.args[0],i=i||[],this.iterated.length>i.length)for(w=Array(this.iterated.length-i.length),f=0,m=w.length;m>f;f++)s=w[f],c=this.iterated.pop(),c.unbind(),this.marker.parentNode.removeChild(c.els[0]);for(o=b=0,y=i.length;y>b;o=++b)if(l=i[o],r={index:o},r[t["public"].iterationAlias(h)]=o,r[h]=l,null==this.iterated[o]){k=this.view.models;for(u in k)l=k[u],null==r[u]&&(r[u]=l);p=this.iterated.length?this.iterated[this.iterated.length-1].els[0]:this.marker,a=this.view.options(),a.preloadData=!0,d=e.cloneNode(!0),c=new t.View(d,r,a),c.bind(),this.iterated.push(c),this.marker.parentNode.insertBefore(d,p.nextSibling)}else this.iterated[o].models[h]!==l&&this.iterated[o].update(r);if("OPTION"===e.nodeName)for(x=this.view.bindings,v=0,g=x.length;g>v;v++)n=x[v],n.el===this.marker.parentNode&&"value"===n.type&&n.sync()},update:function(t){var e,i,n,r,s,o,u;e={};for(i in t)n=t[i],i!==this.args[0]&&(e[i]=n);for(u=this.iterated,s=0,o=u.length;o>s;s++)r=u[s],r.update(e)}},t["public"].binders["class-*"]=function(t,e){var i;return i=" "+t.className+" ",!e==(-1!==i.indexOf(" "+this.args[0]+" "))?t.className=e?""+t.className+" "+this.args[0]:i.replace(" "+this.args[0]+" "," ").trim():void 0},t["public"].binders["*"]=function(t,e){return null!=e?t.setAttribute(this.type,e):t.removeAttribute(this.type)},t["public"].formatters.call=function(){var t,e;return e=arguments[0],t=2<=arguments.length?o.call(arguments,1):[],e.call.apply(e,[this].concat(o.call(t)))},t["public"].adapters["."]={id:"_rv",counter:0,weakmap:{},weakReference:function(t){var e,i,n;return t.hasOwnProperty(this.id)||(e=this.counter++,Object.defineProperty(t,this.id,{value:e})),(i=this.weakmap)[n=t[this.id]]||(i[n]={callbacks:{}})},cleanupWeakReference:function(t,e){return Object.keys(t.callbacks).length||t.pointers&&Object.keys(t.pointers).length?void 0:delete this.weakmap[e]},stubFunction:function(t,e){var i,n,r;return n=t[e],i=this.weakReference(t),r=this.weakmap,t[e]=function(){var e,s,o,u,l,h,a,p,d,c;u=n.apply(t,arguments),a=i.pointers;for(o in a)for(s=a[o],c=null!=(p=null!=(d=r[o])?d.callbacks[s]:void 0)?p:[],l=0,h=c.length;h>l;l++)e=c[l],e();return u}},observeMutations:function(t,e,i){var n,r,s,o,u,l;if(Array.isArray(t)){if(s=this.weakReference(t),null==s.pointers)for(s.pointers={},r=["push","pop","shift","unshift","sort","reverse","splice"],u=0,l=r.length;l>u;u++)n=r[u],this.stubFunction(t,n);if(null==(o=s.pointers)[e]&&(o[e]=[]),h.call(s.pointers[e],i)<0)return s.pointers[e].push(i)}},unobserveMutations:function(t,e,i){var n,r,s;return Array.isArray(t)&&null!=t[this.id]&&(r=this.weakmap[t[this.id]])&&(s=r.pointers[e])?((n=s.indexOf(i))>=0&&s.splice(n,1),s.length||delete r.pointers[e],this.cleanupWeakReference(r,t[this.id])):void 0},observe:function(t,e,i){var n,r,s;return n=this.weakReference(t).callbacks,null==n[e]&&(n[e]=[],r=Object.getOwnPropertyDescriptor(t,e),(null!=r?r.get:void 0)||(null!=r?r.set:void 0)||(s=t[e],Object.defineProperty(t,e,{enumerable:!0,get:function(){return s},set:function(i){return function(r){var o,u,l,a,p;if(r!==s&&(i.unobserveMutations(s,t[i.id],e),s=r,u=i.weakmap[t[i.id]])){if(n=u.callbacks,n[e])for(p=n[e].slice(),l=0,a=p.length;a>l;l++)o=p[l],h.call(n[e],o)>=0&&o();return i.observeMutations(r,t[i.id],e)}}}(this)}))),h.call(n[e],i)<0&&n[e].push(i),this.observeMutations(t[e],t[this.id],e)},unobserve:function(t,e,i){var n,r,s;return(s=this.weakmap[t[this.id]])&&(n=s.callbacks[e])?((r=n.indexOf(i))>=0&&(n.splice(r,1),n.length||(delete s.callbacks[e],this.unobserveMutations(t[e],t[this.id],e))),this.cleanupWeakReference(s,t[this.id])):void 0},get:function(t,e){return t[e]},set:function(t,e,i){return t[e]=i}},t.factory=function(e){return t.sightglass=e,t["public"]._=t,t["public"]},"object"==typeof("undefined"!=typeof module&&null!==module?module.exports:void 0)?module.exports=t.factory(require("sightglass")):"function"==typeof define&&define.amd?define(["sightglass"],function(e){return this.rivets=t.factory(e)}):this.rivets=t.factory(sightglass)}).call(this);