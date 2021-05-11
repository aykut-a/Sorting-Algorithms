import { inHere, quickSortedSuccessZero, checkTheOrder } from '../script.js'

function quickSort(givenArray) {
  if (Array.from(inHere.querySelectorAll('.orangeStick')).length === inHere.children.length) {
    quickSortedSuccessZero()
    checkTheOrder(inHere.children)
    return
  }
  if (givenArray.length <= 1) {
    givenArray.forEach(stick => stick.classList.add('orangeStick'))
    return
  }
  let pivot = givenArray[givenArray.length - 1]
  let longerItems = []
  let shorterItems = []
  for (let i = 0; i < givenArray.length - 1; i++) {
    if (givenArray[i].clientHeight <= pivot.clientHeight && longerItems.length > 0) {
      shorterItems.push(givenArray[i])
      continue
    }
    if (givenArray[i].clientHeight <= pivot.clientHeight && longerItems.length === 0) {
      shorterItems.push(givenArray[i])
      continue
    }
    if (givenArray[i].clientHeight > pivot.clientHeight) {
      longerItems.push(givenArray[i])
      continue
    }
  }
  longerItems.forEach(stick => {
    if (pivot.nextElementSibling === undefined) {
      inHere.append(stick)
      return
    }
    inHere.insertBefore(stick, pivot.nextElementSibling)
  })
  pivot.classList.add('orangeStick')
  quickSort(shorterItems)
}

export { quickSort }