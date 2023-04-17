


// 01. text-slide
$(function(){
    $('.slide .text').simplyScroll();
});



// 02. TOP버튼
$(function(){
$(window).scroll(function(){
	if ($(this).scrollTop() > 600){
		$('.btn_gotop').fadeIn(300);
	} else{
		$('.btn_gotop').fadeOut(300);
	}
});
$('.btn_gotop').click(function(){
	$('html, body').animate({scrollTop:0},"slow");
	return false;
});
});


// 03. 메뉴오픈
$(function(){
	$('.menuOpen .open').on('click', function(){
		$('.menuOpen .menuWrap').addClass('on');
	});
	$('.menuOpen .menuWrap .close').on('click', function(){
		$('.menuOpen .menuWrap').removeClass('on');
	});
});







  // 04. SVG길이 구하기
  $(function(){
    $('.svgAni').find('path').each(function(i, path){
        var length = path.getTotalLength();
        //alert(length);  
    });
  });


  // 05. gsap

  $(function(){
  

	gsap.timeline({ //순서대로 이벤트가 진행될 수 있도록 만들어 줌.
	  scrollTrigger: {
		  trigger: '.design', // 트리거 대상
		  start: '0% 70%', // 0% -> 트리거 대상의 시작지점 (start) / 70% -> 시작 지점 scroller-start  이두개가 만났을때 시작
		  end: '70% 20%', // 앞에 70% -> 트리거 대상의 종료지점 (end) / 뒤에 20% -> 종료 지점 scroller-end 이두개가 만났을때 애니 종료
		  scrub: 1 // scrub은 GSAP ScrollTrigger의 이벤트가 스크롤이 사용될때만 재생되도록 만들어주는 속성		  
	  }
  })

  gsap.registerPlugin(ScrollTrigger); //스크롤트리거를 원활하게 하겠다.

  //x축 가로스크롤
let list = gsap.utils.toArray('.design .list li');
let listA = gsap.utils.toArray('.design .list .a');
let listB = gsap.utils.toArray('.design .list .b');
let listC = gsap.utils.toArray('.design .list .c');

let scrollTween = gsap.to(list, {
xPercent: -100 * (list.length - 1), 
ease : 'none',
scrollTrigger: {
  trigger : ".design", //트리거의 대상
  pin: true, // 고정하겠다
  scrub: 1,
  end: "200%",
  //markers: true
} 
});


gsap.to(listA, {
y:50, //px기준
rotation: 10,
scrollTrigger : {
  trigger: ".design",
  pin: true,
  scrub: 1,
  end: "200%"
}
});


gsap.to(listB, {
y:-80, //px기준
rotation: 20,
scrollTrigger : {
  trigger: ".design",
  pin: true,
  scrub: 1,
  end: "200%"
}
});


gsap.to(listC, {
rotation: -20,
scrollTrigger : {
  trigger: ".design",
  pin: true,
  scrub: 1,
  end: "200%"
}
});
});


// 06 vision
    
  //01. x축 fix
   $(window).on('scroll resize', function(){
     var scrollPos = 0;
     scrollPos = $(document).scrollTop();
    //alert( scrollPos ); //scroll 값 찾기위함

    fix();
  
    function fix(){
      if( scrollPos > 9800 ) 
      {$('.txt .fix').addClass('on')}
      else
      {$('.txt .fix').removeClass('on')}
      if( scrollPos > 12200 )
      {$('.txt .fix').removeClass('on')}
    };

  });
  

// 07. slick.js slide
$(function(){

 $('.skills .sliding').slick({
    infinite: true, // 무한여부
    slidesToShow: 10, // 보여질 슬라이드 갯수
    slidesToScroll: 1, // 스크롤할 슬라이드 갯수
    arrows : false,	// 화살표 여부
    dots : false,	// 페이지네이션 여부
    autoplay: true, //자동재생
    autoplaySpeed: 2000, //재생시간
    pauseOnHover: false,
    pauseOnFocus: false,
    vertical : false,	// 세로 방향 슬라이드 옵션
    draggable : true, 	// 드래그 가능 여부
    responsive: [ // 반응형 웹 구현 옵션
    {  
      breakpoint: 1600, // 화면 사이즈 1600px
      settings: { // 반응형시 위와 다르게 변경할 옵션 추가
      slidesToShow:8
      }
    },
    {  
      breakpoint: 1200, // 화면 사이즈 1200px
      settings: { // 반응형시 위와 다르게 변경할 옵션 추가
      slidesToShow:5
      }
    }, { 
    breakpoint: 768, // 화면 사이즈 768px
    settings: {	
      slidesToShow:3
      }
    }
    ] 
  });
});

  
  // 08. scrolla
  $(function() {
    $('.animate').scrolla({
       mobile: true, //모바일버전시 활성화
       once: false //스크롤시 딱 한번만 하고싶을땐 true
    });   
 }); 


 // 09. splitting event
$(function(){
  Splitting();
});



//10. a href="#"를 클릭했을 때 스크립트 위로 튕기는것 방지
$(document).on('click', 'a[href="#"]', function(e){
  e.preventDefault();
});


