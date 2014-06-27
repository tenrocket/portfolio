(function() {
  $(function() {
    return $('#main_icon').on('click', function() {
      return $('.icon_group').slideDown("slow");
    });
  });

  $(function() {
    return $('#about_me_icon').on('click', function() {
      $('.about_me_modal').fadeIn("slow");
      return $('.page_wrap').fadeIn("slow");
    });
  });

  $(function() {
    return $('#modal_close').on('click', function() {
      $('.about_me_modal').fadeOut("slow");
      return $('.page_wrap').fadeOut("show");
    });
  });

}).call(this);
