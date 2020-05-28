var isFizz = function (x) { return x % 3 === 0; };
var isBuzz = function (x) { return x % 5 === 0; };
var buzzTheFizz = function (length) {
    if (length === void 0) { length = 100; }
    var result = [];
    for (var index = 1; index <= length; index++) {
        result.push(isFizz(index) && isBuzz(index)
            ? 'FizzBuzz'
            : isFizz(index) ? 'Fizz' : isBuzz(index) ? 'Buzz' : index);
    }
    return result;
};
console.log(buzzTheFizz(1000));
//# sourceMappingURL=fizzbuzz.typescript.js.map