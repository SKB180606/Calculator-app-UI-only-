let screenEL= document.getElementById('screen-el');
function work(value){
    screenEL.value +=value
}

fucntion calculate(){
    let soln=eval(screenEl.value);
    screenEl.value=soln;
}
fucntion clearScreen(){
    screenEL.value="";
}