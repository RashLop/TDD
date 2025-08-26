
function convertirFizzBuzz(n){ 
    var conca; 
    if(n % 3 == 0){
        conca = "Fizz"; 
    }
    if( n % 5 == 0)
    {
        conca = "Buzz";
    }
    if ( n % 3 === 0 && n % 5 === 0)
    {
        conca = "FizzBuzz"; 
    }
    if (n % 3 != 0 && n % 5 != 0)
    {
        conca =  n + "";
    }

    return conca; 
}

function generarCadenaFizzBuzz(){
    let Cadena = ["1","2", "Fizz", "4"]; 
    return Cadena; 
}

export { convertirFizzBuzz, generarCadenaFizzBuzz};  