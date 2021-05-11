import { unsortedArray, inHere, checkTheOrder } from '../script.js'

let heapOrder = 0

function heapSort() {
  let maxHeapAchieved
  maxHeapAchieved = true
  if (unsortedArray.length === heapOrder + 1) {
    checkTheOrder(inHere.children)
    heapOrder = 0
    return
  }
  for (let i = 0; i < unsortedArray.length; i++) {
    if (2 * i + 1 >= unsortedArray.length - heapOrder - 1) { break }
    let parent = inHere.children[i]
    let child1 = inHere.children[2 * i + 1]
    let child2 = inHere.children[2 * i + 2]
    if (parent.clientHeight < child1.clientHeight && child1.clientHeight >= child2.clientHeight) {
      heapSortSwap(parent, child1)
      maxHeapAchieved = false
      continue
    }
    if (parent.clientHeight < child2.clientHeight && child2.clientHeight > child1.clientHeight) {
      heapSortSwap(parent, child2)
      maxHeapAchieved = false
      continue
    }
  }
  if (maxHeapAchieved === false) { setTimeout(() => { heapSort() }, 1024 / inHere.children.length) }
  if (maxHeapAchieved === true) {
    heapSortSwap(inHere.children[unsortedArray.length - 1 - heapOrder], inHere.children[0])
    heapOrder += 1
    setTimeout(() => { heapSort() }, 2048 / inHere.children.length)
  }
}


function heapSortSwap(a, b) {
  let bNextSibling = b.nextElementSibling || ''
  if (bNextSibling === '') {
    inHere.insertBefore(b, a)
    inHere.append(a)
    return
  }
  if (heapOrder === inHere.children.length - 2) {
    if (a.clientHeight < b.clientHeight) { inHere.insertBefore(a, b) }
    if (b.clientHeight < a.clientHeight) { inHere.insertBefore(b, a) }
    return
  }
  a.style.animation = 'orangeup'
  a.style.animationDuration = `${2048 / inHere.children.length}ms`
  b.style.animation = 'orangeup'
  b.style.animationDuration = `${2048 / inHere.children.length}ms`
  inHere.insertBefore(b, a)
  inHere.insertBefore(a, bNextSibling)
}

export { heapOrder, heapSort, heapSortSwap }