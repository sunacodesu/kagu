$(function() {
  var count = $("#p-slide li").length;

  var current = 1;

  var next = 2;

  var interval = 5000;

  var duration = 2000;

  var timer;

  $("#p-slide li:not(:first-child)").hide();

  timer = setInterval(slideTimer, interval);

  function slideTimer(){
   // 現在の画像をフェードアウト
  $("#p-slide li:nth-child(" + current + ")").fadeOut(duration);

   // 次の画像をフェードイン
  $("#p-slide li:nth-child(" + next + ")").fadeIn(duration);

    current = next;

    next = ++next;

    if(next > count) {
      next = 1;
    }

    $("#p-button li a").removeClass("p-slide__target");

    $("#p-button li:nth-child("+ current +") a").addClass("p-slide__target");

  }

  $("#p-button li a").click(function(){
    next = $(this).html();

    clearInterval(timer);
    timer = setInterval(slideTimer, interval);

    slideTimer();

    return false;
  });

    // ｽﾑｰｽｽｸﾛｰﾙ
    $('a[href^="#"]').click(function(){
      var speed = 500;
  
      var href = $(this).attr("href");
  
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html,body").animate({scrollTop:position}, speed, "swing");
  
      return false;
    });

  // クリックイベント

  $(document).on('click','#hamburgerIcon',function(){
    if($('.p-navClone__wrapper').is(':hidden')){
      $('.p-navClone__wrapper:not(:animated)').slideDown('fast');  
    } else {
      $('.p-navClone__wrapper:not(:animated)').slideUp('fast');
    }
  });

  $(document).on('click','#cross',function(){
    if($('.p-navClone__wrapper').is(':visible')){
      $('.p-navClone__wrapper:not(:animated)').slideUp('fast');
    
    }
  });


function accordion() {
  $(this).nextAll().slideToggle();

  if($('#arrow').is(':visible')){
    $('#arrow').hide();
    $('#hyphen').show();
  } else {
    $('#arrow').show();
    $('#hyphen').hide();
  }
}


  $('#accordion').click(accordion);


});
