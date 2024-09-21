
function insert(num){
    document.form.textview.value = document.form.textview.value + num;

}
function equal(){
    var exp = document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp);
    }
}
function clean(){
    document.form.textview.value = ""
    
}
function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}
function CodeRon(){
var num = insert(num);
if(insert(num) == 1,2,3,4,"=","/"){
    console.log("IF in Progress...")
    document.form.textview.value = "Welcome Ron"
    console.log("welcome ron")
    window.location="../indexR.html"
    return insert(num);
}
    
}