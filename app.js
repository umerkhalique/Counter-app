window.onload = function() {
    element.style.display = 'none';
    document.getElementById('counter').classList.add("btn-hide");
  };
var counter = 0;
let element = document.getElementById("btn-danger");

function add() {
    counter++;
    document.getElementById('counter').innerHTML = counter;
    if(counter > 0){
        element.style.display = 'flex';
    }

};
function subtract() {

    counter--;
    document.getElementById('counter').innerHTML = counter;
    if(counter === 0){
        
        element.style.display = 'none';
        document.getElementById('counter').classList.add("btn-hide");
    }
    
}
function reset(){
    counter = 0;
    document.getElementById('counter').innerHTML = counter;
    if(counter == 0){
        
        element.style.display = 'none';
        document.getElementById('counter').classList.add("btn-hide");
    }
    

}