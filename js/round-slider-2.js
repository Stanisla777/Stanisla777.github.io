// var round_slider = {
//   min_weight: parseFloat($('.round-slider').attr('data-min-size')),
//   max_weight: parseFloat($('.round-slider').attr('data-max-size')),
//   before_weight: parseFloat($('.round-slider').attr('data-before-weight')),
//   step: parseFloat($('.round-slider').attr('data-step')),
//   active_slide: '',
//   wrapper_translate: 0,
//   swiper:{},
//   slides: [],
//   slide: function(object,weight,id){
//     this.id = id;
//     this.obj = object;
//     this.offsetTop = 0;
//     this.isActive = false;
//     this.isRightSide = true;
//     this.weight = 0;
//     this.setOffsetTop = function(paddingTop, id) {
//       id = id || this.id;
//       $('.swiper-slide[data-slide-id='+id+']').css('padding-top',paddingTop+'px');
//       this.offsetTop = this.offsetTop+paddingTop;
//     };
//     this.moveToDown = function(paddingTop) {
//       var sumTop = this.offsetTop+paddingTop;
//       if(sumTop <= 0){
//         sumTop = 0
//       }
//       $('.swiper-slide[data-slide-id='+this.id+']').css('padding-top',(sumTop)+'px');
//       this.offsetTop = sumTop;
//     };
//     this.getOffsetTop = function() {
//       return this.offsetTop;
//     }
//   },
//   setActiveSlide: function (id) {
//     for(var i = 0;i < this.slides.length; i++){
//       round_slider.slides[i].isActive = false
//     }
//     this.slides[id].isActive = true
//   },
//   getActiveSlide: function () {
//     return $('.round-slider .swiper-slide-active');
//   },
//   getIdActiveSlide: function () {
//     return $('.round-slider .swiper-slide-active').attr('data-slide-id');
//   },
//   setSideSlide: function (index,isRightSide) {
//     this.slides[index].isRightSide = isRightSide
//   },
//   /**
//    * @method initSlides РўСѓС‚ РјС‹ РґРµР»Р°РµРј СЃР°РјРѕРµ РіР»Р°РІРЅРѕРµ - РґРѕР±Р°РІР»СЏРµРј СЌР»РµРјРµРЅС‚С‹ РІ СЃРІР°Р№РїРµСЂ
//    */
//   initSlides: function () {
//     for(var id = 0, i = this.min_weight; i <= this.max_weight; i += this.step, id++){
//       $('.round-slider .swiper-wrapper').append('<div class="swiper-slide" data-weight="' + i + '" data-slide-id="'+id+'">'+ i.toFixed(1) +'</div>');
//       round_slider.slides.push(new round_slider.slide($('.round-slider .swiper-slide[data-weight="'+i+'"]'),i,id))
//     }
//   },
//   initSwiper: function () {
//     this.swiper = new Swiper('.round-slider', {
//       initialSlide: 20,
//       slidesPerView: 5,
//       centeredSlides: true,
//       direction:'horizontal',
//       loop:true,
//       wrapperTranslate:0,
//       grabCursor: true
//       // freeMode: true
//     });
//   },
//   initOffset: function () {
//     this.swiper.params.wrapperTranslate = this.swiper.getWrapperTranslate();
//     var next_sliders = this.getActiveSlide().nextAll();
//     var prev_sliders = this.getActiveSlide().prevAll();
//     var tempPaddingTopNextSlider = 0;
//     var tempPaddingTopPrevSlider = 0;
//     var padding_val = 10;
//     this.setActiveSlide(this.getIdActiveSlide());
//     next_sliders.each(function (index) {
//       var paddingTopPrevSlide = tempPaddingTopNextSlider;
//       var paddingTop = paddingTopPrevSlide + padding_val;
//       var id = $(this).attr('data-slide-id');
//       round_slider.slides[id].setOffsetTop(paddingTop);
//       // $(this).css('padding-top',paddingTop + 'px');
//       tempPaddingTopNextSlider = paddingTop;
//       round_slider.setSideSlide(id,true)
//     });
//     prev_sliders.each(function (index) {
//       var paddingTopPrevSlide = tempPaddingTopPrevSlider;
//       var paddingTop = paddingTopPrevSlide + padding_val;
//       var id = $(this).attr('data-slide-id');
//       round_slider.slides[id].setOffsetTop(paddingTop);
//       // $(this).css('padding-top',paddingTop + 'px');
//       tempPaddingTopPrevSlider = paddingTop;
//       round_slider.setSideSlide(id,false)
//     });
//   },
//   /**
//    * @method РІС‹РїРѕР»РЅСЏРµС‚СЃСЏ РїСЂРё РїРµСЂРµРјРµС‰РµРЅРёРё РІ РїСЂР°РІРѕ РїРѕ СЃРІР°Р№РїРµСЂСѓ
//    */
//   moveToRight: function () {
//     console.log('РјС‹ РІ moveToRight');
//     for (var i = 0; i < round_slider.slides.length; i++) {
//       if(round_slider.slides[i].getOffsetTop() == 0){
//         round_slider.setActiveSlide(i);
//         console.log('РћР±СЉРµРєС‚ СЃС‚Р°РЅРѕРІРёС‚СЃСЏ Р°РєС‚РёРІРЅС‹Рј: '+round_slider.slides[i]);
//       }
//       if(round_slider.slides[i].isActive == true){
//         round_slider.slides[i].isRightSide = false;
//         console.log('РђРєС‚РёРІРЅС‹Р№ Р±Р»РѕРє РёР·РјРµРЅРёР» СЃРІРѕСЋ СЃС‚РѕСЂРѕРЅСѓ РЅР° left');
//       }
//       if(round_slider.slides[i].isRightSide == false){
//         round_slider.slides[i].moveToDown(4);
//         console.log('РїСЂРѕРёСЃС…РѕРґРёС‚ РґРІРёР¶РµРЅРёРµ РІРЅРёР· РґР»СЏ СЌР»РµРјРµРЅС‚РѕРІ СЃР»РµРІР°');
//       } else {
//         round_slider.slides[i].moveToDown(-4);
//         console.log('РїСЂРѕРёСЃС…РѕРґРёС‚ РґРІРёР¶РµРЅРёРµ РІРІРµСЂС… РґР»СЏ СЌР»РµРјРµРЅС‚РѕРІ СЃР»РµРІР°');
//       }
//     }
//   },
//   moveToLeft: function () {
//
//   },
//   initEvent: function () {
//     this.swiper.on('onTouchMove', function () {
//       if (round_slider.swiper.getWrapperTranslate() < round_slider.swiper.params.wrapperTranslate){
//         round_slider.moveToLeft()
//       } else {
//         round_slider.moveToRight()
//       }
//       round_slider.swiper.params.wrapperTranslate = round_slider.swiper.getWrapperTranslate();
//     });
//   },
//   /**
//    * Р”РѕР±СЂС‹Р№ РґРµРЅСЊ, СЌС‚РѕС‚ РјРµС‚РѕРґ - РєРѕРЅСЃС‚СЂСѓРєС‚РѕСЂ Рё РѕРЅ Р±СѓРґРµС‚ РІС‹РїРѕР»РЅСЏС‚СЊ РјРµС‚РѕРґС‹, РєРѕС‚РѕСЂС‹Рµ РЅСѓР¶РЅС‹ РїСЂРё РёРЅРёС†РёР°Р»РёР·Р°С†РёРё
//    */
//   constructor: function () {
//     this.initSlides();
//     this.initSwiper();
//     this.initOffset();
//     this.initEvent();
//   }
// };
// round_slider.constructor();
function floating(num) {
    return parseInt(num * 10) / 10;
}
function floatingSum(x,y) {
    return (parseInt(x * 10) + parseInt(y * 10)) / 10;
}
function floatingSub(x,y) {
    return (parseInt(x * 10) - parseInt(y * 10)) / 10;
}
function isInt(x) {
    if(parseInt(x) == x){
        return true;
    } else {
        return false;
    }
}
function isHalf(x) {
    if(((x*10)%10) == 5){
        return true;
    } else {
        return false;
    }
}
function outInt(x) {
    if(parseInt(x) == x){
        return x;
    } else {
        return '';
    }
}
function outClassInt(x,num) {
    var returnClass;
    if(parseInt(x) == x){
        returnClass = 'int';
    } else if(isHalf(x)){
        returnClass = 'half';
    } else {
        returnClass = 'float';
    }
    if(num == 180){
        returnClass += ' active';
    }
    return returnClass;
}
var weigher = {
    circle: $('.weigher'),
    wrap_weight_val: $('.weigher ul'),
    before_weight: $('.weigher').attr('data-before-weight'),
    step_weight: $('.weigher').attr('data-step'),
    rotate: 180,
    swiper:{},
    addWeightVal: function () {
        for(var i = floatingSub(this.before_weight, 8),num = 360; i <= floatingSum(this.before_weight, 63.9); i = floatingSum(i,this.step_weight, num-=2)){
            this.wrap_weight_val.append('<li data-weight="' + i + '" data-rotate="' + num + '" class="'+ outClassInt(i,num) +'"><span>' + outInt(i) + '</span></li>');
        }
    },
    initSwiper: function () {
        this.swiper = new Swiper('.weigher-wrap', {
            virtualTranslate: true,
            grabCursor:true
        });
    },
    setActiveClass: function (active_el) {
        $('.weigher ul li').removeClass('active');
        active_el.addClass('active');
    },
    setActive: function () {
        var weight_el = this.rotate;
        if(weight_el > 360) {
            weight_el = weight_el - 360;
            this.rotate = weight_el;
        } else if(weight_el <= 0) {
            weight_el = weight_el + 360;
            this.rotate = weight_el;
        }
        var active_el = $('.weigher ul li[data-rotate="'+ weight_el +'"]');
        this.setActiveClass(active_el);
        var weight_now = active_el.attr('data-weight');
        if(isInt(weight_now)){
            weight_now += '.0';
        }
        $('.selected-weight span').html(weight_now);
    },
    setRotate: function (rotate) {
        var newRotate = parseInt((rotate)) + this.rotate;
        this.circle.css({
            '-webkit-transform':'rotate(' + newRotate + 'deg)',
            '-moz-transform': 'rotate(' + newRotate + 'deg)',
            '-o-transform': 'rotate(' + newRotate + 'deg)',
            '-ms-transform': 'rotate(' + newRotate + 'deg)'
        });
        // console.log("newRotate: " + newRotate);
        this.rotate = newRotate;
        this.setActive();
    },
    initEvent: function () {
        var tempRotate;
        var translate;
        this.swiper.on('onTouchMove', function () {
            translate = parseInt(weigher.swiper.getTranslate() / 3);//5 - best
            // console.log("translate: " + translate);
            if(tempRotate > translate){
                weigher.setRotate(-2);
            } else if(tempRotate < translate){
                weigher.setRotate(2);
            }
            tempRotate = translate;
        });
    },
    constructor: function () {
        this.addWeightVal();
        this.initSwiper();
        this.initEvent();
    }
};
weigher.constructor();