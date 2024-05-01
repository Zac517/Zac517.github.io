/*imform*/
console.log(" %c jquery.min.js %c v3.3.1 ", "color: #FFFFFF !important; background: #107a8b; padding:5px;", "background: #1c2b36; padding:5px;color:white !important");
console.log(" %c NodeCursor.js %c v1.0.0 ", "color: #FFFFFF !important; background: #2cb978; padding:5px;", "background: #1c2b36; padding:5px;color:white !important");
console.log(" %c busuanzi.pure.mini.js %c v2.3.0 ", "color: #FFFFFF !important; background: #ff8a5c; padding:5px;", "background: #1c2b36; padding:5px;color:white !important");
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