function toggleNav() {
    var body = document.body;
    var hamburger = document.getElementById('menu-trigger');
    var blackBg = document.getElementById('js-black-bg');

    hamburger.addEventListener('click', function () {
        body.classList.toggle('open');
    });
    blackBg.addEventListener('click', function () {
        body.classList.remove('open');
    });
}

var ua = navigator.userAgent.toLowerCase();
var isMobile = /iphone/.test(ua) || /android(.+)?mobile/.test(ua);

if (!isMobile) {
    $('a[href^="tel:"]').on('click', function (e) {
        e.preventDefault();
    });
}

//クリックしたときのファンクションをまとめて指定

//  $(window).on('load resize', function(){
//    // 処理を記載
//  });

$(function () {
    //クリックしたときのファンクションをまとめて指定
    $('ul.tab_area li').click(function () {
        //.index()を使いクリックされたタブが何番目かを調べ、
        //		indexという変数に代入します。
        var index = $('ul.tab_area li').index(this);

        //コンテンツを一度すべて非表示にし、
        $('.content_area').css('display', 'none');

        //クリックされたタブと同じ順番のコンテンツを表示します。
        $('.content_area').eq(index).fadeIn();

        //タブについているクラスselectを消し、
        $('.tab_area li').removeClass('select');

        //クリックされたタブのみにクラスselectをつけます。
        $(this).addClass('select')
    });
});

$(function () {
  //クリックしたときのファンクションをまとめて指定
  $('ul.footer-tab-area li').click(function () {
    //.index()を使いクリックされたタブが何番目かを調べ、
    //		indexという変数に代入します。
    var index02 = $('ul.footer-tab-area li').index(this);

    //コンテンツを一度すべて非表示にし、
    $('.content_area').css('display', 'none');

    //クリックされたタブと同じ順番のコンテンツを表示します。
    $('.content_area').eq(index02).fadeIn();

    //タブについているクラスselectを消し、
    $('.tab_area li').removeClass('select');

    //クリックされたタブのみにクラスselectをつけます。
    $('.tab_area li').eq(index02).addClass('select')
  });
});




//ダイレクトリンク
$(function() {
    //location.hashで#以下を取得 変数hashに格納
    var hash = location.hash; 
    //hashの中に#tab～が存在するか調べる。
    hash = (hash.match(/^#tab\d+$/) || [])[0];

    //hashに要素が存在する場合、hashで取得した文字列（#tab2,#tab3等）から#より後を取得(tab2,tab3) 
    if($(hash).length){
        var tabname = hash.slice(1) ;
    } else{
        // 要素が存在しなければtabnameにtab1を代入する
        var tabname = "tab1";}
    //コンテンツを一度すべて非表示にし、
    $('.content_area').css('display','none');

    //一度タブについているクラスselectを消し、
    $('.tab_area li').removeClass('select');

    var tabno = $('ul.tab_area li#' + tabname).index();

    //クリックされたタブと同じ順番のコンテンツを表示します。
    $('.content_area').eq(tabno).fadeIn();

    //クリックされたタブのみにクラスselectをつけます。
    $('ul.tab_area li').eq(tabno).addClass('select')
});