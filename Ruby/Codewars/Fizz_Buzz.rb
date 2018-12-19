# Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1 (in C#, N might be less then 1).

# Replace certain values however if any of the following conditions are met:

# If the value is a multiple of 3: use the value 'Fizz' instead
# If the value is a multiple of 5: use the value 'Buzz' instead
# If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead
# C# method calling example:

# string[] result = FizzBuzz.GetFizzBuzzArray(3); // => [ "1", "2", "Fizz" ]


def fizzbuzz(n)
  array = []
  item = 1
  while item <= n
    array.push(item)
    item += 1
  end
  fizz_buzz_array = array.map do |item|
    if item % 3 == 0 && item % 5 != 0
      "Fizz"
    elsif item % 5 == 0 && item % 3 != 0
      "Buzz"
    elsif item % 5 == 0 && item % 3 == 0
      "FizzBuzz"
    else
      item
    end
  end
  fizz_buzz_array
end
