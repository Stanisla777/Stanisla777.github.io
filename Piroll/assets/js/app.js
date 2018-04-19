

$(document).ready(function ($) {

    //Меню

    $('.menu-icon').on('click', function () {
        $('.wrap').css('display', 'none');
        $('.media-menu').css('display', 'block');
    });
    $('.media-close').on('click', function () {
        $('.wrap').css('display', 'block');
        $('.media-menu').css('display', 'none');
    });


    var he = $(".wrapper-foto-interviewee").height();

    //$(window).scroll(function(){
    //    if ( $(window).scrollTop() >= $(".wrapper-foto-interviewee").offset().top)  {
    //        $(".wrapper-foto-interviewee").hide()
    //
    //    }
    //});



    var windowHeight = $(window).height();

function Animat (obj){
    this.elem = obj.elem;
    this.anim_class = obj.anim_class;
    var that = this;
    this.method = function(){

        $(document).on('scroll', function() {
            $(that.elem).each(function() {
                var self = $(this);
                height = self.offset().top + self.height();
                height_2 = self.height();
                if ($(document).scrollTop() + windowHeight >= height) {
                    $(self).addClass(that.anim_class);
                }

                if ( $(window).scrollTop() >=$(self).offset().top+height_2||$(document).scrollTop() + windowHeight+height_2<= height)  {
                    $(self).removeClass(that.anim_class)

                }

            });
        });

    };
    that.method();//вызываю функцию внутри класса, чтобы сразу её и выполнять
}



    new Animat({
        elem:".wrapper-about-us-advantage",
        anim_class:'box'
    });
    new Animat({
        elem:".wrapper-another-advantage",
        anim_class:'zoomIn'
    });

    new Animat({
        elem:".wrapper-interview",
        anim_class:'box'
    });
    new Animat({
            elem:".wrapper-foto-interviewee",
            anim_class:'zoomIn'
        });



});


