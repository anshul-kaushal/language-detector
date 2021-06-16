function buttonSuccess(){
    if(document.getElementById(`typeLanguageText`).value===``){
        document.getElementById(`detectLanguage`).disabled = true;
    }
    else document.getElementById(`detectLanguage`).disabled = false;
}