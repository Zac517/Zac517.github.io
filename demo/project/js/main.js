var sidebar = document.getElementById('sidebar');
function change() {
    if (sidebar.className == 'close') {
        sidebar.className = 'open';
    } else {
        sidebar.className = 'close';
    }
}