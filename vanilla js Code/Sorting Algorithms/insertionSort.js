import { unsortedArray, insertBeforeFunction, inHere, checkTheOrder } from '../script.js'

let weristDran = 1

function insertSort(weristDran) {
  if (weristDran === unsortedArray.length) {
    checkTheOrder(inHere.children)
    weristDran = 1
    return
  }
  let toBeChecked = document.getElementById(`${weristDran}`) || []
  let previousElement = toBeChecked.previousElementSibling || []
  let aHeight = toBeChecked.clientHeight || []
  let bHeight = previousElement.clientHeight || []
  if (!toBeChecked.classList.contains('orangeStick')) { toBeChecked.classList.add('orangeStick') }
  if (aHeight < bHeight) {
    insertBeforeFunction(toBeChecked, previousElement)
    setTimeout(() => insertSort(weristDran), 1024 / inHere.children.length)
    return
  }
  toBeChecked.classList.remove('orangeStick')
  weristDran += 1
  insertSort(weristDran)
}

export { weristDran, insertSort }