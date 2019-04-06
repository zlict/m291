isFizz = (x) -> x % 3 == 0
isBuzz = (x) -> x % 5 == 0

buzzTheFizz = (length = 100) ->
  result = []

  for i in [1..100]
    if isFizz(i) && isBuzz(i)
      result.push("FizzBuzz")
    else if isFizz(i)
      result.push("Fizz")
    else if isBuzz(i)
      result.push("Buzz")
    else
      result.push(i)

  result

console.log(buzzTheFizz(1000))