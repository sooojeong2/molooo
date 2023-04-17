
//  a href="#"를 클릭했을 때 스크립트 위로 튕기는것 방지
$(document).on('click', 'a[href="#"]', function(e){
  e.preventDefault();
});


// slick
$(function(){
  $('.visual .slide').slick({
     arrows: false,  //화살표
     dots: true, //인디케이트 해제
     fade: true,//페이드효과
     autoplay:true, //자동재생
     autoplaySpeed: 5000, //재생시간
     pauseOnHover: false,
     pauseOnFocus: false   
 });
});

// scrolla

$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 


// 헤더이벤트
var scrollValue = 0;
scrollValue = $(document).scrollTop();
fixHeader();

$(window).on('scroll resize', function(){
  scrollValue = $(document).scrollTop();
  fixHeader();
});

function fixHeader(){
  if(scrollValue > 200) {
    $('header').addClass('on');
  } else {$('header').removeClass('on');}
}


// menuOpen
$(function(){
  $('header .open').on('click', function(){
    $('body').css({'overflow':'hidden'});
    $('header .bg').css({'display':'block'});
    $('header nav').addClass('on');
  });

  $('header .close, header .bg').on('click', function(){
    $('body').css({'overflow':'auto'});
    $('header .bg').css({'display':'none'});
    $('header nav').removeClass('on');
  });
});