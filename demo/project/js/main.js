var topbar = document.getElementById('topbar');
function change() {
    if (topbar.className == 'close') {
        topbar.className = 'open';
    } else {
        topbar.className = 'close';
    }
}