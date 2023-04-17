// 1. gnb마우스 오버, 포커스시 밑줄

//this : 엔터되고 포커스되는 자기 자신, 이벤트를 받는 자기 자신

$(function(){
  $('.gnb li a').on('mouseenter focus', function(){
    var bar = $(this).position().left;  //각각 gnb li a의 positon left값을 변수 bar에 저장
    var width = $(this).width(); //각각 gnb li a의 width값을 변수 width에 저장

    $('span.bar').css({'left': bar + 'px', 'width': width + 'px', 'opacity': 1 });
    // span.bar의 css를 각각의 변수값으로 변경하고 opacity 변경
  });

  $('.gnb li a').on('mouseleave', function(){
    $('span.bar').css({'left':'0', 'width':'0', 'opacity': 0 })
  });
});


// 2. scrolla.js
$(function(){
  $('.animate').scrolla({
    mobile: true,
    once: false
  });
});




// 3. 배경색 변경
$(window).on('scroll resize', function(){
  var scrollTop = 0;
  scrollTop = $(document).scrollTop();
  bgColor();

  function bgColor(){
    if (scrollTop > 1400){
      $('body').addClass('on');      
    } else {
      $('body').removeClass('on');
    }
    if(scrollTop > 2700){
      $('body').removeClass('on');
    }
  }
});


// 4. 햄버거 메뉴
$(function(){
    $('.menuOpen button.open').on('click', function(){
        $('.menuOpen .menuWrap').addClass('on');
    })
    $('.menuOpen .menuWrap .close').on('click', function(){
        $('.menuOpen .menuWrap').removeClass('on');
    })
});


// // 5. svg 길이 구하기
// $(function(){
//     $('.svgAni').find('path').each(function(i, path){
//         var length = path.getTotalLength();
//         alert(Length);
//     })
// });