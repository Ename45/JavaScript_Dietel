function printName(){
    let a = 10;
    function printHello(){
        let b = 20;
        console.log(a, b)

        function pp (){
            let c = 30;
            console.log(a, b, c)
        }
    }
    console.log(b)
}

console.log(printName())
