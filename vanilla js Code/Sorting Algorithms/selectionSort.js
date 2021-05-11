import { insertBeforeFunction, unsortedArray, inHere, checkTheOrder } from '../script.js'

let currentSortedIndex = 0

function selectionSort() {
  if (currentSortedIndex === unsortedArray.length - 1) {
    checkTheOrder(inHere.children)
    currentSortedIndex = 0
    return
  }
  let shortestStickLength = 1000
  let shortestStick
  for (let i = currentSortedIndex; i < unsortedArray.length; i++) {
    inHere.children[i].style.animation = 'orangeup'
    inHere.children[i].style.animationDuration = `${2024 / inHere.children.length}ms`
    if (inHere.children[i].clientHeight < shortestStickLength) {
      shortestStickLength = inHere.children[i].clientHeight
      shortestStick = inHere.children[i]
    }
  }
  insertBeforeFunction(shortestStick, inHere.children[currentSortedIndex])
  currentSortedIndex += 1
  setTimeout(() => { selectionSort() }, 2024 / inHere.children.length)
}

export { selectionSort }