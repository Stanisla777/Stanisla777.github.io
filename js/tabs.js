$(document).ready(function(){

    $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
    });

    $('.button-next').on('click',function(){
        var tab_id = $(this).attr('data-tab');
        $(this).parents('.tab-content').removeClass('current');
        $(this).parents('.tab-content').next('.tab-content').addClass('current');
        $('.acc-setting-tab li').removeClass('current');

        $(this).parents('form').siblings('.acc-setting-tab').find('li[data-tab='+tab_id+']').next('li').addClass('current');
    })

});
