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