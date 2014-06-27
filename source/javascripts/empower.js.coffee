$ ->
  $('#main_icon').on 'click', ->
    $('.icon_group').slideDown "slow"

$ ->
	$('#about_me_icon').on 'click', ->
		$('.about_me_modal').fadeIn "slow"
		$('.page_wrap').fadeIn "slow"

$ ->
	$('#modal_close').on 'click', ->
		$('.about_me_modal').fadeOut "slow"
		$('.page_wrap').fadeOut "show"