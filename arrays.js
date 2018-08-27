var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, marsBar) {
  return [marsBar, ...chocolateBars] 
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, marsBar) {
  chocolateBars.shift(marsBar);
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, marsBar) {
  return [...chocolateBars, marsBar] 
}