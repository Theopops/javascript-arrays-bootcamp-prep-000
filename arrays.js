var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, marsBar) {
  return [marsBar, ...chocolateBars] 
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, marsBar) {
    chocolateBars.unshift(marsBar);
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, marsBar) {
  return [...chocolateBars, marsBar] 
}
function destructivelyAddElementToEndOfArray(chocolateBars, marsBar) {
  return [...chocolateBars, marsBar]
}
function accessElementInArray(chocolateBars, index) {
  return chocolateBars[index]
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.shift()
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice(1)
}
function removeElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice(-1)
}