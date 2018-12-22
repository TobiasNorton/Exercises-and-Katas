# In this kata you will create a function that takes in a list and returns a list with the reverse order.

# Examples
# reverse_list([1,2,3,4]) == [4,3,2,1]
# reverse_list([3,1,5,4]) == [4,5,1,3]


def reverse_list list
  new_array = []
  i = list.length - 1
  while i >= 0 
  new_array.push(list[i])
  i -= 1
    # do a thing
  end 
  new_array
end


# def reverse_list list
#   list.reverse
# end
