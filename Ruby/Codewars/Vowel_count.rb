# Return the number (count) of vowels in the given string.

# We will consider a, e, i, o, and u as vowels for this Kata.

# The input string will only consist of lower case letters and/or spaces.



def getCount(inputStr)
  count = 0
  array = inputStr.split('')
  array.each do |letter|
    if letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' ||
       letter == 'u'
         count += 1
    end
  end
  count
end
