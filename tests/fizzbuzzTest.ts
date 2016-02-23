/// <reference path="../typings/jasmine/jasmine.d.ts" />
describe("Fizzbuzz", function() {
  it("should count 1", function() {
    let fizzbuzz = new Fizzbuzz();
    expect(fizzbuzz.count(1)).toEqual("1");
  });
});
