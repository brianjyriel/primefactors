/* globals Primefactors */

describe("primefactors", function() {


  it("Receives 600851475143 returns 6857", function() {
    expect(primeFactors()).toEqual(6857);
  });

  it("Receives 34534534 returns 7537", function() {
    expect(primeFactors(34534534)).toEqual(7537);
  });

  it("Receives 12323213 returns 521", function() {
    expect(primeFactors(12323213)).toEqual(7537);
  });

});
