var color1=document.getElementById("color1");
var color2=document.getElementById("color2");
var body=document.querySelector("body");
color1.addEventListener("input",function(){
    document.body.style.backgroundImage='linear-gradient('
        + 'to right' + ', ' + color1.value + ', ' + color2.value + ')';
});
color2.addEventListener("input",function(){
    document.body.style.backgroundImage='linear-gradient('
        + 'to right' + ', ' + color1.value + ', ' + color2.value + ')';
});