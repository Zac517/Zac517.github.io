/*imform*/
console.log(" %c Zac's personal homepage %c v2.0.0 ", "color: #FFFFFF !important; background: #FF6666; padding:5px;", "background: #1c2b36; padding:5px;color:white !important");
console.log(` %c
　　　　　　　　　　　　　＿＿＿　　 ~ヽ
　　　　　　，‘　 ...::::::::::::::::::::::::::::｀丶
 　 　 　 　 ／::::::::::::::::::::::::::::::::::::::::::::::＼　’
　　　　　 /:::::::::/|:::∧:::|Χ:::::::::::::::::::::::::::.　；
       ｛　 |:::::: /＼/　'V⌒Y＼ :::::::::::::::: |
        ；　N:::ｲ,'⌒}　　{　　|　 |::::::::::::::::: |　｝
　　　　　　| ::| ､_,ﾉ　　 ､__ﾉ　 |::::::::::::::::: |
　      :　　|::ﾘ　　　　　　 　 ｕ|::::::::::::::::: |　{
  　 　 ｝ 　|（ｕ　r　　 ￣＼ ｕ::::::::::::::::::: |　；
　　　　　　|:::＞ ゝ,　＿＿_）│::::::/:∧:::|
　　　　　　∨∨∨ﾚ:ｧャ　ア |人〃⌒∨　:
    　 　 ~''　　　 　 人_{／／／ﾍ（⌒) ）　．
　　　　　　　　　　/　〈__>ｰく　 　 ﾏ二二7
 　 ，'~　　　｀；　/│/　|　~｀∨　　Y⌒)ヽ
　　　　 (ヽ　　 〈ーl/　(⌒ヽ ├ー‐仁＿ﾉ ，
  ｛　（￣　　ｰ-/￣|　　,>､　　ｰ＜｀ＹV　 ノ
   ' 　 ｀ー- 、　｀　|＼/　 丶、　 　 |│　；
　 　 　 　 　 ＼ 　_!　　　　　 ＼　　|│　;
`,'font-family: "MS PGothic", "ＭＳ Ｐゴシック", "Trebuchet MS", Verdana, Futura, Arial, Helvetica, sans-serif;line-height: 1;font-size: 12pt;');


/*background*/
var scene = document.getElementById('header');
	var parallaxInstance = new Parallax(scene, {
    relativeInput: true,
	  calibrateX: true,
    scalarX: -10.0,
    scalarY: -10.0,
    clipRelativeInput: true,
    frictionX: 1,
    frictionY: 1
})

/*cursor*/
if(window.innerWidth > 1200){
$( function() {
  // init plugin
  NodeCursor({
    cursor : true, 
    node : true, 
    cursor_velocity : 1, 
    node_velocity : 0.15, 
    native_cursor : 'none', 
    element_to_hover : '.hover',
    cursor_class_hover : 'expand', 
    node_class_hover : 'expand', 
    hide_mode : true, 
    hide_timing : 2000, 
  });
});
}

document.addEventListener('nameofevent', { passive: false });
$("#main").onepage_scroll({
  sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
  easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                   // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
  animationTime: 750,             // AnimationTime let you define how long each section takes to animate
  pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
  updateURL: true,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
  beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
  afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
  loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
  keyboard: true,                  // You can activate the keyboard controls
  responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                   // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                   // the browser's width is less than 600, the fallback will kick in.
  direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});

function write(text){
  const clipboard = navigator.clipboard;
  navigator.clipboard.writeText(text);
}