import {sumar, dividir} from "./calculadora.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
});


describe("Dividir", () => {
  it("deberia dividir dos numeros", () => {
    expect(dividir(2,2)).toEqual(1); 
  });
}); 

