# Given a two-dimensional array of integers, return the flattened version of the array with 
# all the integers in the sorted (ascending) order.

# Example:
# Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].


# Old way.
# def flatten_and_sort(array)
#   new_array = []
#   array.each do |smaller_array| 
#     smaller_array.each do |num| 
#       new_array.push(num)
#       end
#     end
#   new_array.sort
# end


# Better way. I love Ruby:
def flatten_and_sort(array)
  array.flatten.sort
end
