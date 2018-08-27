var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(chocolateBars, marsBar) {
  return [marsBar, ...chocolateBars] 
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, marsBar) {
  return chocolateBars.shift("marsBar")
}