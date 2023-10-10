/*imform*/
console.log(" %c jquery.min.js %c v3.3.1 ", "color: #FFFFFF !important; background: #107a8b; padding:5px;", "background: #1c2b36; padding:5px;color:white !important");
console.log(" %c NodeCursor.js %c v1.0.0 ", "color: #FFFFFF !important; background: #2cb978; padding:5px;", "background: #1c2b36; padding:5px;color:white !important");
console.log(" %c parallax.min.js %c v3.1.0 ", "color: #FFFFFF !important; background: #83e85a; padding:5px;", "background: #1c2b36; padding:5px;color:white !important");
console.log(" %c busuanzi.pure.mini.js %c v2.3.0 ", "color: #FFFFFF !important; background: #ff8a5c; padding:5px;", "background: #1c2b36; padding:5px;color:white !important");
console.log(" %c Zac's personal homepage %c v2.0.2 ", "color: #FFFFFF !important; background: #FF6666; padding:5px;", "background: #1c2b36; padding:5px;color:white !important");
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

const mainDiv = document.getElementById('main');
// 获取所有section元素
const sections = mainDiv.querySelectorAll('section');
// 设置滚动结束的延迟时间，单位毫秒
const delay = 50;
// 初始化滚动状态和定时器
let scrolling = false;
let scrollTimer = null;
// 监听鼠标滚动事件
mainDiv.addEventListener('scroll', function() {
  // 清除上一个滚动结束的定时器
  clearTimeout(scrollTimer);
  // 设置滚动状态为正在滚动
  scrolling = true;
  // 在延迟时间后，触发滚动结束的函数
  scrollTimer = setTimeout(function() {
    scrolling = false;
    scrollToNearestSection();
  }, delay);
});
// 滚动到最近的section
function scrollToNearestSection() {
  // 获取当前滚动位置
  const scrollTop = mainDiv.scrollTop;
  // 初始化最近的section和最小距离
  let nearestSection = sections[0];
  let minDistance = Math.abs(scrollTop - sections[0].offsetTop);
  // 遍历所有section，找到距离最近的一个
  sections.forEach(function(section) {
    const distance = Math.abs(scrollTop - section.offsetTop);
    if (distance < minDistance) {
      minDistance = distance;
      nearestSection = section;
    }
  });
  // 滚动到最近的section
  mainDiv.scrollTo({
    top: nearestSection.offsetTop,
    behavior: "smooth"
  });
}

const animateElement = document.querySelector('.child-box');
console.log(animateElement);
// 创建 Intersection Observer 实例
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 元素进入可视窗口
      animateElement.classList.add('active');
    } else {
      // 元素离开可视窗口
      animateElement.classList.remove('active');
    }
  });
});

// 监听目标元素
observer.observe(animateElement);