let myButton=document.getElementById("myBtn");
window.onscroll=function(){scrollFunction()};

function scrollFunction(){
    if(document.documentElement.scrollTop > 20){
        myButton.style.display="block";}
    else{myButton.style.display="none";}
    }
function topFunction(){
    document.documentElement.scrollTop=0;
}