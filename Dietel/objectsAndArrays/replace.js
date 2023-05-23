let prompt = require(`prompt-sync`)();
let log = console.log

let malik = "Hi malik how are you doing today i know you are fit for this take how to know you are more than capable to do this"

function replaceWords(){
    let newList = malik.split(" ");
    for (let i = 0; i < newList.length; i++) {
        if (newList[i] === "know") {
            newList[i] = "how";
        }
        else if(newList[i] === "how") {
            newList[i] = "know";
        }    
    }    
    let result = `${newList.toString()}`;
    return result.split(',').join(' ')

}

function capitalizeLetter_H(newList){
    let newNed = ""
    for (let i = 0; i < newList.length; i++) {
        if (newList[i] === "h") {
            newNed += "H";
            continue;
        }
        newNed += newList[i];  
    }    
    log(newNed);
}

log(replaceWords());
capitalizeLetter_H(replaceWords());
