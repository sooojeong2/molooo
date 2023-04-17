// 00. a클릭시 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]',function(e){
  e.preventDefault();
});


// 01. scroll event
$(function(){
  $('.animate').scrolla({
    mobile: true,
    once: false
  })
});

// 02. splitting event
$(function(){
  Splitting();
});


// 03. gnb 메뉴
$(function(){
  $('header .gnbBtn').on('click', function(){
    $('header nav.gnb').toggleClass('on');
  });
  $('.contents').on('click', function(){
    $('header nav.gnb').removeClass('on');
  });
});


// 04. approach 영역
$(window).on('scroll resize', function(){
    var scrollPos = 0;
    scrollPos = $(document).scrollTop();
    // alert (scrollPos);
    fix();
    fixHeader();
    fixList();

    function fix(){
        if(scrollPos > 1250) {$('.fix .text').addClass('on')}
        else {$('.fix .text').removeClass('on')}
        if(scrollPos > 2700) {$('.fix .text').removeClass('on')}
    }
    function fixHeader(){
        if(scrollPos > 80) {$('header').addClass('on')}
        else {$('header').removeClass('on')}
    }
    function fixList(){
        $('section.approach .inner .list li a').removeClass('on')

        if(scrollPos > 1250) {
            $('section.approach .inner .list li a').removeClass('on')
            $('section.approach .inner .list li:eq(0) a').addClass('on')
        }
        if(scrollPos > 1650) {
            $('section.approach .inner .list li a').removeClass('on')
            $('section.approach .inner .list li:eq(1) a').addClass('on')
        }
        if(scrollPos > 2050) {
            $('section.approach .inner .list li a').removeClass('on')
            $('section.approach .inner .list li:eq(2) a').addClass('on')
        }
        if(scrollPos > 2550) {
            $('section.approach .inner .list li a').removeClass('on')
            $('section.approach .inner .list li:eq(3) a').addClass('on')  
        }
        if(scrollPos > 2900) {
            $('section.approach .inner .list li a').removeClass('on') 
        }
        
    }
});