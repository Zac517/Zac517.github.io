/*检查输入事件 */
function enter(event){
    terminal.scrollTop = 10000;
    var event = window.event||event;
    if (event.keyCode == 13){execute()}
    else if (event.keyCode == 38&&line > 0){line -= 1;input.value = his[line]}
    else if (event.keyCode == 40&&line < his.length - 1){line += 1;input.value = his[line]}
};
/*解析命令 */
function execute(){
    print(head.innerHTML+input.value);
    var i = input.value.search(/ /i);
    if (i == -1){i = input.value.length}
    var com = input.value.slice(0,i);
    if (com in command){command[com]['fun'](input.value.slice(i+1))}
    else{print('command not found: '+input.value,'error')};
    update()
    };
/*打印内容 */
function print(text,type = 'normal'){
    var p = document.createElement('p')
    p.innerHTML=text
    p.className = type
    context.appendChild(p)
}
/*更新 */
function update(){
    his.splice(1,0,input.value)
    head.innerHTML= '[<span class="g">guest</span>@Browser&nbsp;<span class="b">'+route+'</span>]<span class="d">$</span>&nbsp;';
    line = his.length -1
    input.value=his[line];
    terminal.scrollTop = 10000;
}
/*解析参数 */
function analysis(array,com,customize = 1){
    if (array[0] == ''){return[-3]}
    var num = 0
    var obj = command[com]
    var con = ''
    var arr
    for(let i = 0; i< array.length;i++){
        if (array[i] in obj['parameter']&&num != -1){num += obj['parameter'][array[i]]}
        else if(array[i] == '-h'||array[i] == '--help'){num = -1}
        else if(0 < customize){customize -= 1;con +=' ' + array[i]}
        else if(num != -1){num = -2;if (arr == undefined){arr = array[i]}}
    }
    if(num == -1){print(obj['help'],'italic')}else if(num == -2){print('Unrecognized parameter: '+arr,'error')}
    return [num,con.slice(1)]
}
/*路径查找 */
function find(rou){
    if (rou.split('/')[0] in index){if (rou[0] != '~'){rou = '~/'+rou}}
    else{rou = route + '/' + rou}
    var ind = index
    var router = rou.split('/')
    for(var i = 1; i< router.length;i++){
        if (router[i] in ind){ind = ind[router[i]]}
        else{return [false,rou]}}
    return [ind,rou]
}
/*遍历打印 */
function printObj(obj){
    var text = '';
    for (i in obj){text += i+'&nbsp;'}
    return text;
}
/*执行函数 */
function test(text){
    var result = analysis(text.split(' '),'test',0)
    if (result == -3){print('Hello,world!','italic')}
    else if(result[0] >= 0){print(result[0])}
}
function cmecho(text){
    var result = analysis(text.split(' '),'echo',100)
    if (result == -3){print('No parameters provided','error')}
    else if (result[0] >= 0){print(text,'italic')}
}
function cmhelp(text){
    if (text ==''){print(printObj(command),'italic')}
    else{analysis(text.split(' '),'echo',0)}
}
function cmcd(text){
    var res1 = analysis(text.split(' '),'cd',1)
    if (res1[0] == -3){route = '~';folder = index}
    else if (res1[0] >= 0){
        var res2 = find(res1[1])
        if (res2[0] == false){print('No such file or directory: '+res2[1],'error')}
        else if(typeof(res2[0]) == 'string'){print('Is a file: '+ res2[1],'error')}
        else{route = res2[1];folder = res2[0]}
    }
}
function cmls(text){
    var res1 = analysis(text.split(' '),'ls',1)
    if (res1[0] == -3){print(printObj(folder),'italic')}
    else if (res1[0] >= 0){
        var res2 = find(res1[1])
        if (res2[0] == false){print('No such file or directory: '+res2[1],'error')}
        else if(typeof(res2[0]) == 'string'){print('Is a file: '+ res2[1],'error')}
        else{print(printObj(res2[0]),'italic')}  
    }
}
function cmcat(text){
    var res1 = analysis(text.split(' '),'cat',1)
    if (res1[0] == -3){print('No parameters provided','error')}
    else if (res1[0] >= 0){
        var res2 = find(res1[1])
        if (res2[0] == false){print('No such file or directory: '+res2[1],'error')}
        else if(typeof(res2[0]) == 'string'){print(res2[0],'italic')}
        else{print('Is a directory: '+ res2[1],'error')}
    }
}
var state = 'a'
function change(){
    if (state == 'a'){   
    document.getElementById('avatar').className = 'dap';
    document.getElementById('persontag').className = 'dap';
    setTimeout(() => {document.getElementById('avatar').style.display = 'none';
    document.getElementById('persontag').style.display = 'none';
    document.getElementById('terminal').style.display = 'block';
    document.getElementById('terminal').className = 'ap';
    state = 't'},300)
    }else{
    document.getElementById('terminal').className = 'dap'
    setTimeout(() => {document.getElementById('terminal').style.display = 'none';
    document.getElementById('avatar').style.display = 'block';
    document.getElementById('persontag').style.display = 'block';
    document.getElementById('avatar').className = 'ap';
    document.getElementById('persontag').className = 'ap';
    state = 'a'},300)}}

/*文件结构*/
var index ={
    'games':{'newGame.js':'Preparing.'},
    'home':{'docs':{'easterEgg.txt':'Glad you found it here.'}}
};
var line = 0
var terminal = document.getElementById('terminal');
var context = document.getElementById('context');
var head = document.getElementById('head');
var input = document.getElementById('input');
var route = '~';
var folder = index;
let headb = '[<span class="g">guest</span>@Browser&nbsp;<span class="b">'
let heada = '</span>]<span class="d">$</span> '
/*命令定义 */
var command ={
    'echo':{
        'fun':cmecho,
        'help':'usage: echo [str] [-h]<br>str: Output content<br>-h,--help: Show the help message.',
        'parameter':{}
    },
    'test':{
        'fun':test,
        'help':'usage: test [-a] [-b] [-c] [-h]<br>-a -b -c: test parameter<br>-h,--help: Show the help message.',
        'parameter':{
            '-a':1,
            '-b':2,
            '-c':4
        }
    },
    'cd':{
        'fun' :cmcd,
        'help' :'usage: cd [dir] [-h]<br>dir: Path to file or directory.<br>-h,--help: Show the help message.',
        'parameter':{}
    },
    'ls':{
        'fun' :cmls,
        'help' :'usage: ls [dir] [-h]<br>dir: Path to file or directory.<br>-h,--help: Show the help message.',
        'parameter':{}
    },
    'help':{
        'fun':cmhelp,
        'help':'usage: help [-h]<br>-h,--help: Show the help message.',
        'parameter':{}
    },
    'cat':{
    'fun' :cmcat,
        'help' :'usage: cat [dir] [-h]<br>dir: Path to file or directory.<br>-h,--help: Show the help message.',
        'parameter':{}
    }
};
var his = ['Haha,you found it.']
update()
print("Welcome to Zaqueo's Terminal!",'warning')
print('Type <span style="color: #35a5a1">help</span> to list the available commands.','warning')
/*scroll*/
let container = document.querySelector('.workbox');
if (window.innerWidth >720) {
	container.addEventListener('wheel',(event) => {
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
