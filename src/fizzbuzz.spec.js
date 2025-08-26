import {convertirFizzBuzz, generarCadenaFizzBuzz} from "./fizzbuzz.js";

describe("FizzBuzz", () => {
    it("deberia convertir un numero que no es multiplo de 3 ni 5", () => {
        expect(convertirFizzBuzz(1)).toEqual("1");
    });
});

describe("FizzBuzz", () => {
    it("deberia convertir un numero que no es multiplo de 3 ni 5", () => {
        expect(convertirFizzBuzz(4)).toEqual("4");
    });
});

describe("FizzBuzz", () => {
    it("deberia convertir un multplo de 3 ", () => {
        expect(convertirFizzBuzz(3)).toEqual("Fizz");
    });
});

describe("FizzBuzz", () => {
    it("deberia convertir un multplo de 3 ", () => {
        expect(convertirFizzBuzz(9)).toEqual("Fizz");
    });
});

describe("FizzBuzz", ()=>{
    it("deberia convertir un multiplo de 5 ",() =>{
        expect(convertirFizzBuzz(5)).toEqual("Buzz"); 
    });
});

describe("FizzBuzz", ()=>{
    it("deberia convertir un multiplo de 5 ",() =>{
        expect(convertirFizzBuzz(10)).toEqual("Buzz"); 
    });
});

describe("FizzBuzz",()=> {
    it("deberia convertir un multiplo de 3 y 5", () => {
        expect(convertirFizzBuzz(15)).toEqual("FizzBuzz"); 
    });
});
describe("FizzBuzz",()=> {
    it("deberia convertir un multiplo de 3 y 5", () => {
        expect(convertirFizzBuzz(30)).toEqual("FizzBuzz"); 
    });
});

let cadenaPrueba= ["1","2", "Fizz", "4"]; 
describe("FizzBuzz", () => {
    it("deberia generar una cadena con el numero 4", () => {
        expect(generarCadenaFizzBuzz(4)).toEqual(cadenaPrueba); 
    });

});

let cadenaPrueba2= ["1","2", "Fizz", "4", "Buzz"]; 
describe("FizzBuzz", () => {
    it("deberia generar una cadena con el numero 5", () => {
        expect(generarCadenaFizzBuzz(5)).toEqual(cadenaPrueba2); 
    });

});

let cadenaPrueba3= ["1","2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]; 
describe("FizzBuzz", () => {
    it("deberia generar una cadena con el numero 15", () => {
        expect(generarCadenaFizzBuzz(15)).toEqual(cadenaPrueba3); 
    });

});
