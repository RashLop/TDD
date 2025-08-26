import convertirFizzBuzz from "./fizzbuzz.js";

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