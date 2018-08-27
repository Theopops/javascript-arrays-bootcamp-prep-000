var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var marsBar = "foo"
function addElementToBeginningOfArray(chocolateBars, marsBar) {
  return [marsBar, ...chocolateBars] 
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, marsBar) {
  return chocolateBars.shift("marsBar")
}