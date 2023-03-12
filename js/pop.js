var popup7 = document.getElementById('popup-wrapper7');
var btn7 = document.getElementById("popup-btn7");
var span7 = document.getElementById("close7");
btn7.onclick = function() {
    popup7.classList.add('show');
}
span7.onclick = function() {
    popup7.classList.remove('show');
}

window.onclick = function(event) {
    if (event.target == popup7) {
        popup7.classList.remove('show');
    }
}