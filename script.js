function display(item){
    inputBox.value+=item
}
function allClear() {
    inputBox.value=""
}
function equal(){
    inputBox.value=eval(inputBox.value)
}
function del(){
    inputBox.value=inputBox.value.slice(0,-1)
}