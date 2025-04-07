var but = document.getElementsByTagName("button");
var numMemory = null;
var opMemory = null;
var change = 1;

for(let i = 0;i < but.length;i++){
    var button = but[i];
    button.addEventListener('click', function(event){
        var text = event.target.innerText;
        if(text === "CLEAR"){
            if(document.getElementsByTagName("p")[0].innerText === ""){
                numMemory = null;
                opMemory = null;
            }
            document.getElementsByTagName("p")[0].innerText = ""
        }else if(text === "DEL"){
            document.getElementsByTagName("p")[0].innerText = 
            document.getElementsByTagName("p")[0].innerText.substring(0,
                document.getElementsByTagName("p")[0].innerText.length-1);
        }else if(text === "√"){
            if(document.getElementsByTagName("p")[0].innerText != ""){
                document.getElementsByTagName("p")[0].innerText = 
                Math.sqrt(parseFloat(document.getElementsByTagName("p")[0].innerText));
            }
        }else if((text==="+" || "÷X-".search(text)!=-1) && text!="."){
            if(opMemory != null && change == 1){
                numMemory = operate(opMemory,parseFloat(document.getElementsByTagName("p")[0].innerText),numMemory);
                document.getElementsByTagName("p")[0].innerText = numMemory;
                opMemory = text;
                change = 0;
            }else{
                opMemory = text;
                change = 0;
            }
        }else if(text === "="){
            document.getElementsByTagName("p")[0].innerText =
            operate(opMemory,parseFloat(document.getElementsByTagName("p")[0].innerText),numMemory);
            opMemory = null;
        }else{
            if(change == 0){
                numMemory = parseFloat(document.getElementsByTagName("p")[0].innerText);
                document.getElementsByTagName("p")[0].innerText = "";
                change = 1;
            }
            document.getElementsByTagName("p")[0].innerText += text;
        }
    })
}



function operate(sign,n1,n2){
    switch(sign){
        case "÷":
            return n2/n1;
        case "X":
            return n2*n1;
        case "-":
            return n2-n1;
        case "+":
            return n2+n1;
    }
}