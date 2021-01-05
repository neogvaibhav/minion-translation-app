var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

function clickEventHandler(){
    console.log("clicked")
    
    txtOutput.innerHTML = (txtInput.value);

}


btnTranslate.addEventListener("click" ,clickEventHandler );
txtInput.addEventListener("click" ,clickEventHandler);


