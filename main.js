

var main =document.getElementsByClassName('main')[0];
 main.addEventListener("onclick", function(){
 	
 		document.getElementById("myAnimation").style.top=;
 		function myMove() {
    var elem = document.getElementById("myAnimation"); 
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame(i) {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.top = pos*i + 'px'; 
             
        }
        if(pos == 450){
        	clearInterval(id);
        }else{
        	pos++;
        	elem.style.top = pos + 'px';
        }
        
        if(pos == 550){
        	clearInterval(id);
        }else{
        	pos++;
        	elem.style.top = pos + 'px';
        }
    }
}
 	
 });