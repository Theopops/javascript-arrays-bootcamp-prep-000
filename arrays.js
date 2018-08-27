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
    chocolateBars.push(marsBar);
  return chocolateBars;
}
function accessElementInArray(chocolateBars, index) {
  return chocolateBars[index]
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars;
}
function removeElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.slice(1)
}