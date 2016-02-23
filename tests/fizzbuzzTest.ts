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

  it("should count fizz", function() {
    let fizzbuzz = new Fizzbuzz();
    expect(fizzbuzz.count(3)).toEqual("fizz");
  });

  it("should count buzz", function() {
    let fizzbuzz = new Fizzbuzz();
    expect(fizzbuzz.count(5)).toEqual("buzz");
  });

  it("should count fizz", function() {
    let fizzbuzz = new Fizzbuzz();
    expect(fizzbuzz.count(6)).toEqual("fizz");
  });

  it("should count buzz", function() {
    let fizzbuzz = new Fizzbuzz();
    expect(fizzbuzz.count(10)).toEqual("buzz");
  });

  it("", function() {
    let fizzbuzz = new Fizzbuzz();
    expect(fizzbuzz.count(15)).toEqual("fizzbuzz");
  });
});
