window.onload = function(){
    var slider = document.querySelectorAll('main .servises li');
    for (var i = 0; i < slider.length; i++) {
        slider[i].style.display = 'block'; 
    }
}











/*var hrefPage = document.querySelectorAll('.pages>a');
var i = 0;
document.onkeydown = function(e){
    
    if (e.keyCode == 38){
        console.log(hrefPage[i].href);
        window.location.href = hrefPage[i].href;
        i--;
    }
    if (i < 0){
        i = hrefPage.length - 1;
    }    

}    
    
    
  if (e.keyCode == 40){  
        // console.log(e);    
        console.log(hrefPage[i].href);
        window.location.href = hrefPage[i].href;
    }
    i--;*/


    
