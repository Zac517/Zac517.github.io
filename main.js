var root ={
    "docs":{"easterEgg.txt":"Glad you found it here."},
    "games":{"newgame.js":"Preparing."},
    "home":{"photo":{}}
}
let container = document.querySelector(".workbox");
let terminal = document.getElementById('terminal');
let context = document.getElementById('context');
let message = document.getElementById('message');
var position = '~'
var pos = root
var commend ={
    "cd":(route) =>{findf(route,
        () =>{position = '~';pos = root},
        (a,b) =>{print('Is a file:&nbsp;&nbsp;'+ a,'e')},
        (a,b) =>{position = a;pos = b})},
    "ls":() =>{print(PA(pos,'o'));},
    "echo":(route) =>{print('<span class="p">'+PA(route,'a')+'</span>');},
    "help":() =>{print(PA(commend,'o'));},
    "cat":(route) =>{findf(route,
        () =>{print('No parameters obtained','e')},
        (a,b) =>{print('<span class="p">'+b+'</span>')},
        (a,b) =>{print('Is a directory:&nbsp;&nbsp;'+ a,'e')})},
};
function find(obj,route){
    var j = route.split('/');
    var k = obj
    for(var i = 0; i< j.length;i++){
        if (j[i] in k){k = k[j[i]]}
        else{return false}}
    return k
}
function PA(obj,type){
    var text = '';
    if (type == 'o'){for (i in obj){text += i+'&nbsp;&nbsp;'}}
    else{for (i in obj){text += obj[i]+'&nbsp;&nbsp;'}}
    return text;
}
function print(text,type = 'a'){
    var p = document.createElement('p')
    p.innerHTML=text
    if (type == 'e'){p.className = 'e'}
    context.appendChild(p)
}
function findf(route,a,b,c){
    if (route.length == 0){a()}
    else if(route.length > 1){print('Unrecognized arguments:&nbsp;&nbsp;'+PA(route.slice(1),'a'),'e')}
    else{
        if(route[0].split('/')[0] in root){d=root,e=route[0]}
        else{d=pos,e=position +'/' + route[0]}
        var result = find(d,route[0])
        if (result == false){print('No such file or directory:&nbsp;&nbsp;' +route[0],'e')}
        else if(typeof(result) == 'string'){b(e,result)}
        else{c(e,result)}}
}
if (window.innerWidth >720) {
	container.addEventListener("wheel",(event) => {
	event.preventDefault();
	for (var i=0;i<100;i++){
		setTimeout(() => container.scrollLeft += event.deltaY/100,i);
}})};
var z = 'a'
function change(){
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
function keydown(event,obj){
    terminal.scrollTop = 10000
    var ev = window.event||event;
    if (ev.keyCode == 13) {
        execute(obj)
    }
};
function execute(obj){
    print("[<span class='g'>guest</span>@Browser&nbsp;&nbsp;"+position+"]<span class='d'>$</span>&nbsp;&nbsp;"+obj.value);
    var com = obj.value.split(' ');
    if (com[0] in commend){
        commend[com[0]](com.slice(1));
    }
    else{print('command not found:&nbsp;&nbsp;'+obj.value,'e')}
    obj.value=''
    message.innerHTML= "[<span class='g'>guest</span>@Browser&nbsp;&nbsp;"+position+"]<span class='d'>$</span>&nbsp;&nbsp;"
    terminal.scrollTop = 10000
};
console.log(" %c Zaqueo's Studio %c v1.0.1 ", "color: #FFFFFF !important; background: #FF6666; padding:5px;", "background: #1c2b36; padding:5px;color:white !important");
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
