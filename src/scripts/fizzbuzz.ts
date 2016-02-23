class Fizzbuzz {

  count(value: number): string {
    if( this.isModuloByFive(value) && this.isModuloByThree(value) )
      return "fizzbuzz";
    if( this.isModuloByFive(value) )
      return "buzz";
    if( this.isModuloByThree(value) )
      return "fizz";
    return value.toString();
  }

  isModuloByFive(value: number) {
    return value % 5 == 0;
  }

  isModuloByThree(value: number) {
    return value % 3 == 0;
  }
}
