$(function(){
    $('.hamburger').on('click', function() {
    $('body,.title,.logo,.hamburger, .hamburger span:nth-child(1), .hamburger span:nth-child(2),.hamburger span:nth-child(3),.logo,#navi,.btn,main,footer,body').toggleClass('active');
    });

    
    let targets = document.querySelectorAll('.slide-left , .slide-right , .balloon '); //アニメーションさせたい要素
    //スクロールイベント
    window.addEventListener('scroll', function () {
      var scroll = window.scrollY; //スクロール量を取得
      var windowHeight = window.innerHeight; //画面の高さを取得
      for (let target of targets) { //ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す
        var targetPos = target.getBoundingClientRect().top + scroll; //ターゲット要素の位置を取得
        if (scroll > targetPos - windowHeight) { //スクロール量 > ターゲット要素の位置
          target.classList.add('act'); //クラスを加える
        }
      }
    });


});
