# Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

# Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

# Examples
#  123 ->  321
#  -456 -> -654
#  1000 ->    1


def reverse_number(n)
  abs = n.abs.to_s.reverse
  if n < 0
    ('-' + abs).to_i
  else
    abs.to_i
  end
end
