var root ={
    "docs":{
        "easterEgg.txt":"Glad you found it here."
    },
    "games":{
        "newgame.js":"Preparing."
    },
    "home":{
        "photo":{}
    }
}
let container = document.querySelector(".workbox");
let terminal = document.getElementById('terminal');
let context = document.getElementById('context');
let message = document.getElementById('message');
var position = '~'
var pos = root
var commend ={
    "cd":(route) =>{findf(route,() =>{position = '~';pos = root},(a,b) =>{print('Is a file:&nbsp;&nbsp;'+ a)},(a,b) =>{position = a;pos = b})},
    "ls":() =>{print(PA(pos,'o'));},
    "echo":(route) =>{print(PA(route,'a'));},
    "help":() =>{print(PA(commend,'o'));},
    "cat":(route) =>{findf(route,() =>{print('Error:No parameters obtained')},(a,b) =>{print('<span style="font-style:italic">'+b+'</span>')},(a,b) =>{print('Is a directory:&nbsp;&nbsp;'+ a)})},
};
function find(obj,route){
    var j = route.split('/');
    var k = obj
    for(var i = 0; i< j.length;i++){
        if (j[i] in k){k = k[j[i]]}
        else{return false}
    }
    return k
}
function PA(obj,type){
    var text = '';
    if (type == 'o'){for (i in obj){text += i+'&nbsp;&nbsp;'}}
    else{for (i in obj){text += obj[i]+'&nbsp;&nbsp;'}}
    return text;
}
function print(text){
    var p = document.createElement('p')
    p.innerHTML=text
    context.appendChild(p)
}
function findf(route,a,b,c){
    if (route.length == 0){a()}
    else if(route.length > 1){print('Unrecognized arguments:&nbsp;&nbsp;'+PA(route.slice(1),'a'))}
    else if(route[0].split('/')[0] in root){var result = find(root,route[0])
    if (result == false){print('No such directory:&nbsp;&nbsp;' +route[0])}
    else if(typeof(result) == 'string'){b(route[0],result)}
    else{c(route[0],result)}}
    else{var result = find(pos,route[0])
    if (result == false){print('No such directory:&nbsp;&nbsp;' +route[0])}
    else if(typeof(result) == 'string'){b(position + route[0],result)}
    else{c(position +'/' + route[0],result)}}
}
if (window.innerWidth >720) {
	container.addEventListener("wheel",(event) => {
	event.preventDefault();
	for (var i=0;i<100;i++){
		setTimeout(() => container.scrollLeft += event.deltaY/100,i);
}})};
function openT(){
    document.getElementById('avatar').className = 'dap';
    document.getElementById('persontag').className = 'dap';
    setTimeout(() => document.getElementById('avatar').style.display = 'none',500)
    setTimeout(() => document.getElementById('persontag').style.display = 'none',500)
    setTimeout(() => document.getElementById('terminal').style.display = 'block',500)
    setTimeout(() => document.getElementById('terminal').className = 'ap',500)
};
function closeT(){
    document.getElementById('terminal').className = 'dap'
    setTimeout(() => document.getElementById('terminal').style.display = 'none',500)
    setTimeout(() => document.getElementById('avatar').style.display = 'block',500)
    setTimeout(() => document.getElementById('persontag').style.display = 'block',500)
    setTimeout(() => document.getElementById('avatar').className = 'ap',500)
    setTimeout(() => document.getElementById('persontag').className = 'ap',500)
};
function keydown(event,obj){
    terminal.scrollTop = 10000
    var ev = window.event||event;
    if (ev.keyCode == 13) {
        execute(obj)
    }
};
function execute(obj){
    print("<span style='color:rgba(255, 255, 255, 0.9)'> [<span style='color:#96d9e1'>guest</span>@Browser&nbsp;&nbsp;"+position+"]<span style='color:#81b181'>$</span>&nbsp;&nbsp;</span>"+obj.value);
    var com = obj.value.split(' ');
    if (com[0] in commend){
        commend[com[0]](com.slice(1));
    }
    else{print('command not found:&nbsp;&nbsp;'+obj.value)}
    obj.value=''
    message.innerHTML= "[<span style='color:#96d9e1'>guest</span>@Browser&nbsp;&nbsp;"+position+"]<span style='color:#81b181'>$</span>&nbsp;&nbsp;"
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
