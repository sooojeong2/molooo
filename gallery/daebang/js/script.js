// gnb.on
$(function(){
  $('.gnb > li > a').on('mouseenter focus', function(){
    var index = $('.gnb > li > a').index($(this)); //.gnb > li > a에서 마우스가 엔터되는 애(this)
    //alert(index);   //index번호 확인
    
    $('.gnb ul.inner').removeClass('on');
    $('.gnb .inner:eq('+ index +')').addClass('on')
  });

  $('header').on('mouseleave', function(){
    $('.gnb ul.inner').removeClass('on');
  });

});


// fixheader
var scrollTop = 0;
scrollTop = $(document).scrollTop();
fixHeader();

//window창 조절시
$(window).on('scroll resize', function(){
  scrollTop = $(document).scrollTop();
  fixHeader();
});

// 고정헤더함수
function fixHeader(){
  if(scrollTop > 150) {
    $('header').addClass('on');
  } else {
    $('header').removeClass('on');
  }
}



//splitting.js
$(function(){
    Splitting();
});



// slick
$(function(){
  $('.visual .slide').slick({
    arrows: true,  //화살표
    dots: true, //인디케이트 해제
    fade: true,//페이드효과
    autoplay:true, //자동재생
    autoplaySpeed: 7000, //재생시간
    pauseOnHover: false,
    pauseOnFocus: false   
  });
  $('.slick-prev').text("prev");  //텍스트변경 => 텍스트메소드 사용


  $('.slide2').slick({
    arrows: false,  //화살표
    dots: true, //인디케이트 해제
    autoplay:true, //자동재생
    infinity: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 6000, //재생시간
    pauseOnHover: true,
    pauseOnFocus: true   
  });
  $('.slide2 #slick-slide-control10').text("서울 마곡지구 업무용지"); 
  $('.slide2 #slick-slide-control11').text("서울 마곡지구 대방디엠시티2차"); 
  $('.slide2 #slick-slide-control12').text("화성 동탄 1차 대방디엠시티 더 센텀"); 
  $('.slide2 #slick-slide-control13').text("광주 수완 대방노블랜드6차"); 

});







// scrolla
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 
