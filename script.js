let mediaa = window.matchMedia('(max-width: 960px)');

if (mediaa.matches) {
    $(".main-gradient").html('<div class="menu-article-tactical"><div class="article-inner-banner"><h1>Тактика</h1></div></div><header><h1 class="title">RazoTack - Карманное руководство к игре</h1></header>')
}

mediaa = window.matchMedia('(max-width: 723px)');

if (mediaa.matches) {
    $(".title").html('CS:GO.RazoTack');
}


$('.menu-article-tactical').on('mouseover', function () {
    anime({
        targets: '.menu-article-tactical',
        scale: 1.1,
    });
})

$('.menu-article-granades').on('mouseover', function () {
    anime({
        targets: '.menu-article-granades',
        scale: 1.1,
    });
})

$('.menu-article-weapons').on('mouseover', function () {
    anime({
        targets: '.menu-article-weapons',
        scale: 1.1,
    });
})

$('.menu-article-tactical').on('mouseout', function () {
    anime({
        targets: '.menu-article-tactical',
        scale: 1,
    });
})

$('.menu-article-granades').on('mouseout', function () {
    anime({
        targets: '.menu-article-granades',
        scale: 1,
    });
})

$('.menu-article-weapons').on('mouseout', function () {
    anime({
        targets: '.menu-article-weapons',
        scale: 1,
    });
})




$('.menu-article-tactical').on('mouseover', function () {

    $('.menu-article-tactical .article-inner-banner h1').css('margin-bottom', "60%");

})

$('.menu-article-tactical').on('mouseout', function () {

    $('.menu-article-tactical .article-inner-banner h1').css('margin-bottom', "1em");

})


$('.menu-article-granades').on('mouseover', function () {

    $('.menu-article-granades .article-inner-banner h1').css('margin-bottom', "60%");

})

$('.menu-article-granades').on('mouseout', function () {

    $('.menu-article-granades .article-inner-banner h1').css('margin-bottom', "1em");

})


$('.menu-article-weapons').on('mouseover', function () {

    $('.menu-article-weapons .article-inner-banner h1').css('margin-bottom', "60%");

})

$('.menu-article-weapons').on('mouseout', function () {

    $('.menu-article-weapons .article-inner-banner h1').css('margin-bottom', "1em");

})


$('.menu-article-weapons').on('click', function () {

    anime({
        targets: '.menu-article-weapons',
        translateY: '-1000px'
    })

})

$('.menu-article-tactical').on('click', function () {

    anime({
        targets: '.menu-article-tactical',
        translateY: '-1000px'
    })

})

$('.menu-article-granades').on('click', function () {

    anime({
        targets: '.menu-article-granades',
        translateY: '-1000px'
    })

    window.location.href = 'http://csgo.razotack.ru/grenades/';

})


anime({
    targets: '.menu-article',
    translateY: '10%',
    direction: 'alternate',
    loop: false,
    delay: function(el, i, l) {
      return i * 300;
    },
    endDelay: function(el, i, l) {
      return (l - i) * 300;
    }
  });







