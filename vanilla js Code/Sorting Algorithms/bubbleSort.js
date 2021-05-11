import { inHere, unsortedArray, insertBeforeFunction, checkTheOrder } from '../script.js'

let bubbleIndex = 0
let bubbleGross = 0

function bubbleSort() {
  if (bubbleGross + 1 === unsortedArray.length) {
    checkTheOrder(inHere.children)
    bubbleIndex = 0
    bubbleGross = 0
    return
  }
  let elementA = inHere.children[bubbleIndex]
  let elementB = inHere.children[bubbleIndex + 1] || ''
  if (elementB.clientHeight < elementA.clientHeight && elementB !== '') { insertBeforeFunction(elementB, elementA) }
  bubbleIndex += 1
  if (bubbleIndex + 1 === unsortedArray.length - bubbleGross) {
    inHere.children[unsortedArray.length - (bubbleGross + 1)].classList.add('orangeStick')
    bubbleIndex = 0
    bubbleGross += 1
  }
  setTimeout(bubbleSort, 512 / inHere.children.length)
}

export { bubbleIndex, bubbleGross, bubbleSort }