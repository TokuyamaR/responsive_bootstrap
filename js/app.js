$(function () {
    // フロートヘッダーメニュー
    var targetHeight = $('.js-float-menu-target').height();
    $(window).on('scroll', function () {
        $('.js-float-menu').toggleClass('float-active', $(this).scrollTop() > targetHeight);
    });

    // SPメニューを開く処理
    $('.js-toggle-sp-menu').on('click', function () {
        $(this).toggleClass('active');
        $('.js-toggle-sp-menu-target').toggleClass('active');
    });

    // SPメニューを閉じる処理
    $('.menu-item').on('click', function () {
        $('.menu-trigger').toggleClass('active');
        $('.js-toggle-sp-menu-target').toggleClass('active');
    });
});