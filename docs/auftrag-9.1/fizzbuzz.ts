isFizz = (x: number) => x % 3 === 0;
isBuzz = (x: number) => x % 5 === 0;

buzzTheFizz = (length = 100) => {
  let result = [];
  for (let index = 1; index <= length; index++) {
    result.push(
      isFizz(index) && isBuzz(index)
        ? 'FizzBuzz'
        : isFizz(index) ? 'Fizz' : isBuzz(index) ? 'Buzz' : index
    );
  }
  return result;
}

console.log(buzzTheFizz(1000));