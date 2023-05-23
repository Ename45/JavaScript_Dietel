let log = console.log

function countBs(name){
    let count = 0;
    let newName = "";
    for (let i = 0; i < name.length; i++) {
        if(name[i] === "B"){
            newName+=name[i];
            count++;
        }
    }

    return count;
}


function countChar(name, givenChar) {
    let count = 0;
    let newName = "";
    for (let i = 0; i < name.length; i++) {
        if (name[i] === givenChar) {
        newName += name[i];
        count++;
        }
    }
    // log(count);
    return count;
}

log(countBs("BiliabiliBi Bygone"));
log(countChar("Biliabilibbi Bygone be but", "b"));