def nb_dig(n, d)
	count = 0
  squared_numbers = []
  i = 0
  while i <= n
  squared_numbers << (i ** 2)
  i += 1
  end
  array = squared_numbers.join('').split('')
  array.each do |digit|
    if digit.to_i == d 
      count += 1
    end
  end
  count
end
