import { inHere, unsortedArray, insertBeforeFunction, checkTheOrder } from '../script.js'

let brokenToPieces = []

function mergeSort(arr) {
  if (arr.length === 1) {
    brokenToPieces.push([arr[0]])
    if (brokenToPieces.length === unsortedArray.length) { mergeBack(brokenToPieces) }
    return
  }
  let aArray = []
  let bArray = []
  let half = Math.floor(arr.length / 2)
  for (let i = 0; i < half; i++) {
    aArray.push(arr[i])
  }
  for (let i = half; i < arr.length; i++) {
    bArray.push(arr[i])
  }
  mergeSort(aArray)
  mergeSort(bArray)
}


function mergeBack(brokenToPieces) {
  let putTogether = []
  for (let i = 1; i < (brokenToPieces.length / 2) + 1; i++) {
    let number = i * 2 - 1
    let merged = brokenToPieces[number - 1].concat(brokenToPieces[number])
    let madeSorted = mergeMiniSort(merged)
    putTogether.push(madeSorted)
  }
  if (putTogether.length === 1) {
    checkTheOrder(inHere.children)
    brokenToPieces = []
    colorSwap = 0
    return
  }
  setTimeout(() => { mergeBack(putTogether) }, 500)
}


function mergeMiniSort(merged) {
  let sorted = []
  let firstHalf = 0
  let secondHalf = 0
  for (let i = 0; i < merged.length; i++) {
    if (secondHalf === merged.length / 2) {
      sorted.push(merged[firstHalf])
      firstHalf += 1
      continue
    }
    if (firstHalf === merged.length / 2) {
      sorted.push(merged[merged.length / 2 + secondHalf])
      secondHalf += 1
      continue
    }
    let firstContestant = merged[firstHalf]
    let secondContestant = merged[merged.length / 2 + secondHalf]
    if (firstContestant.clientHeight < secondContestant.clientHeight) {
      sorted.push(firstContestant)
      firstHalf += 1
      continue
    }
    if (secondContestant.clientHeight <= firstContestant.clientHeight) {
      sorted.push(secondContestant)
      secondHalf += 1
    }
  }
  mergeSortSwapper(sorted)
  return sorted
}

let colorSwap = 0

function mergeSortSwapper(array) {
  if (colorSwap % 2 === 0) { array.forEach(stick => stick.style.animation = 'orangeup 500ms') }
  if (colorSwap % 2 === 1) { array.forEach(stick => stick.style.animation = 'redup 500ms') }
  colorSwap += 1
  let idArray = []
  array.forEach(stick => { idArray.push(stick.getAttribute('id')) })
  let minId = Math.min(idArray.sort())
  for (let i = 0; i < array.length; i++) {
    insertBeforeFunction(array[i], document.getElementById(minId + 1))
  }
}

function brokenToPiecesZero() {
  brokenToPieces = []
}

export { mergeSort, brokenToPieces, brokenToPiecesZero }