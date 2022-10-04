/*teminal*/
var y ={
    "docs":{"easterEgg.txt":"Glad you found it here."},
    "games":{"newgame.js":"Preparing."},
    "home":{"photo":{}}
}
let x = document.getElementById('terminal');
let w = document.getElementById('context');
let v = document.getElementById('message');
var u = '~'
var t = y
var s ={
    "cd":(f) =>{r(f,
        () =>{u = '~';t = y},
        (a,b) =>{q('Is a file:&nbsp;&nbsp;'+ a,'e')},
        (a,b) =>{u = a;t = b})},
    "ls":() =>{q(p(t,'o'));},
    "echo":(f) =>{q('<span class="p">'+p(f)+'</span>');},
    "help":() =>{q(p(s,'o'));},
    "cat":(f) =>{r(f,
        () =>{q('No parameters obtained','e')},
        (a,b) =>{q('<span class="p">'+b+'</span>')},
        (a,b) =>{q('Is a directory:&nbsp;&nbsp;'+ a,'e')})},
};
function o(a,b){
    var c = b.split('/');
    var d = a
    for(var i = 0; i< c.length;i++){
        if (c[i] in d){d = d[c[i]]}
        else{return false}}
    return d
}
function p(a,b = 'a'){
    var c = '';
    if (b == 'o'){for (i in a){c += i+'&nbsp;&nbsp;'}}
    else{for (i in a){c += a[i]+'&nbsp;&nbsp;'}}
    return c;
}
function q(a,b = 'a'){
    var c = document.createElement('p')
    c.innerHTML=a
    if (b == 'e'){c.className = 'e'}
    w.appendChild(c)
}
function r(f,a,b,c){
    if (f.length == 0){a()}
    else if(f.length > 1){q('Unrecognized arguments:&nbsp;&nbsp;'+p(f.slice(1)),'e')}
    else{
        if(f[0].split('/')[0] in y){d=y,e=f[0]}
        else{d=t,e=u +'/' + f[0]}
        var d = o(d,f[0])
        if (d == false){q('No such file or directory:&nbsp;&nbsp;' +f[0],'e')}
        else if(typeof(d) == 'string'){b(e,d)}
        else{c(e,d)}}
}
var z = 'a'
function n(){
    if (z == 'a'){   
    document.getElementById('avatar').className = 'dap';
    document.getElementById('persontag').className = 'dap';
    setTimeout(() => {document.getElementById('avatar').style.display = 'none';
    document.getElementById('persontag').style.display = 'none';
    document.getElementById('terminal').style.display = 'block';
    document.getElementById('terminal').className = 'ap';
    z = 't'},300)
    }else{
    document.getElementById('terminal').className = 'dap'
    setTimeout(() => {document.getElementById('terminal').style.display = 'none';
    document.getElementById('avatar').style.display = 'block';
    document.getElementById('persontag').style.display = 'block';
    document.getElementById('avatar').className = 'ap';
    document.getElementById('persontag').className = 'ap';
    z = 'a'},300)}}
function m(a,b){
    x.scrollTop = 10000
    var c = window.event||a;
    if (c.keyCode == 13) {
        l(b)
    }
};
function l(a){
    q("[<span class='g'>guest</span>@Browser&nbsp;&nbsp;<span class='b'>"+u+"</span>]<span class='d'>$</span>&nbsp;&nbsp;"+a.value);
    var b = a.value.split(' ');
    if (b[0] in s){
        s[b[0]](b.slice(1));
    }
    else{q('command not found:&nbsp;&nbsp;'+a.value,'e')}
    a.value=''
    v.innerHTML= "[<span class='g'>guest</span>@Browser&nbsp;&nbsp;<span class='b'>"+u+"</span>]<span class='d'>$</span>&nbsp;&nbsp;"
    x.scrollTop = 10000
};
/*scroll*/
let container = document.querySelector(".workbox");
if (window.innerWidth >720) {
	container.addEventListener("wheel",(event) => {
	event.preventDefault();
	for (var i=0;i<100;i++){
		setTimeout(() => container.scrollLeft += event.deltaY/100,i);
}})};
/*imform*/
console.log(" %c Zaqueo's Studio %c v1.1.0 ", "color: #FFFFFF !important; background: #FF6666; padding:5px;", "background: #1c2b36; padding:5px;color:white !important");
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
