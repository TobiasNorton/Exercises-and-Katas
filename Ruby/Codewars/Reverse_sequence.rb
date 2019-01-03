# Get the number n (n>0) to return the reversed sequence from n to 1.

# Example : n=5 >> [5,4,3,2,1]

def reverse_seq(n)
  reverse_sequence = []
  while n > 0
    reverse_sequence.push(n)
    n -= 1
  end
  reverse_sequence
end
