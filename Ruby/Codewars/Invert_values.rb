# Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, 
# and the negatives become positives.

# invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
# invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
# invert([]) == []
# You can assume that all values are integers.

def invert(list)
  inverted_list = list.map { |n| n * -1 }
  inverted_list
end

# Or, without an iterator:

# def invert(list)
#   inverted_list = []
#   for x in list do
#     inverted_list.push(x * -1)
#   end
#   inverted_list
# end
