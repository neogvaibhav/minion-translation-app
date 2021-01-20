var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
    return serverUrl + "?" + "text=" + input;

}

//Handle Error
function ErrorHandler(error) {
    console.log('Error with the server');
    alert('Check the server connection!');
}

function clickHandler() {
    //1. read the input text
    var inputText = txtInput.value;
    //2. Go and fetch the URL
    fetch(getTranslationURL(inputText)).
    //3. convert url into response.json
    then(response => response.json()).
    //4. output it 
    // then(json => console.log(json.contents.translated))
    then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        //5.Handle Error
        .catch(ErrorHandler);
}



btnTranslate.addEventListener("click", clickHandler);
txtInput.addEventListener("click", clickHandler);