var counter = 0;

function add() {
    counter++;
    document.getElementById('counter').innerHTML = counter;
};
function subtract() {
    counter--;
    document.getElementById('counter').innerHTML = counter;
}
function reset(){
    counter = 0;
    document.getElementById('counter').innerHTML = counter;
}