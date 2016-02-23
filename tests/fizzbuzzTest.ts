/// <reference path="../typings/jasmine/jasmine.d.ts" />
describe("Fizzbuzz", function() {
  it("should count 1", function() {
    let fizzbuzz = new Fizzbuzz();
    expect(fizzbuzz.count(1)).toEqual("1");
  });

  it("should count 2", function() {
    let fizzbuzz = new Fizzbuzz();
    expect(fizzbuzz.count(2)).toEqual("2");
  });

  it("should be fizz", function() {
    let fizzbuzz = new Fizzbuzz();
    expect(fizzbuzz.count(3)).toEqual("fizz");
  });
});
